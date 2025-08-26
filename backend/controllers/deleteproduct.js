const productmodel = require("../models/productmodel")

let deleteproduct=async(req,res)=>{
    await productmodel.findOneAndDelete({id:req.body.id})
    console.log("Removed")
    res.json({
        success:1,
        name:req.body.name
    })

}
module.exports=deleteproduct