const usermodel = require("../models/usermodel")
const jwt = require("jsonwebtoken"); // ✅ Add this line


//middleware to fetch user
let fetchuser=async(req,res,next)=>{
    let token=req.header('auth-token')
   if (!token) {
    return res.status(401).send({ errors: "Please authenticate using valid token" });
}

    else{
        try{
            const data=jwt.verify(token,'secret_ecom')
            req.user=data.user
            next()

       } catch (error) {
    return res.status(401).send({ errors: "Please authenticate using a valid token" });
}

    }

}

let addtocart=async(req,res)=>{
    let userData=await usermodel.findOne({_id:req.user.id})
    userData.cartData[req.body.itemid] +=1
    await usermodel.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Added")

}
let removeproduct=async(req,res)=>{
    let userData=await usermodel.findOne({_id:req.user.id})
    if(userData.cartData[req.body.itemid]>0)
    userData.cartData[req.body.itemid] -=1
    await usermodel.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Removed")


}
let getcart=async(req,res)=>{
    let userdata=await usermodel.findOne({_id:req.user.id})
    res.json(userdata.cartData)

}
module.exports={fetchuser,addtocart,removeproduct,getcart}