const productmodel = require("../models/productmodel")

let getproduct=async(req,res)=>{
let products= await productmodel.find({})
console.log("All product feteched")
res.send(products)
}
let newCollection=async(req,res)=>{
    let products=await productmodel.find({})
    let newCollection=products.slice(1).slice(-8)
    console.log("newCollection fetched")
    res.send(newCollection)
}
let popularInWomen=async(req,res)=>{
    let products= await productmodel.find({category:"women"})
    let popular=products.slice(0,4)
    console.log("popular in women fetched")
    res.send(popular)
}

module.exports={getproduct,newCollection,popularInWomen}