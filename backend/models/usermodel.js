let mongoose=require('mongoose')

let schema=mongoose.Schema

let user= new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now
    }

})
let usermodel=mongoose.model("usercredentials",user)
module.exports=usermodel