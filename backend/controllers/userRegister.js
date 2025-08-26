const usermodel = require("../models/usermodel")
const jwt = require('jsonwebtoken');


let signup=async(req,res)=>{
    let existinguser=await usermodel.findOne({email:req.body.email})
    if(existinguser){
        return res.status(400).json({success:false,errors:"existing user found with same email id"})
    }
    let cart={}
    for(let i=0;i<300;i++){
        cart[i]=0

    }
    let user=new usermodel({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })
    await user.save()
    let data={
        user:{
            id:user.id
        }
    }
    let token =jwt.sign(data,'secret_ecom')
    res.json({success:true,token})


}
let login=async(req,res)=>{
    let user=await usermodel.findOne({email:req.body.email})
    if(user){
        let passcompare=req.body.password===user.password
        if(passcompare){
            let data={
                user:{
                    id:user.id
                }
            }
            let token=jwt.sign(data,'secret_ecom')
            res.json({success:true,token})
        }
        else{
            res.json({success:false,errors:"wrong password"})
        }
    }
    else{
        res.json({success:false,errors:"wromg email Id"})
    }
}
module.exports={signup,login}