const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:
    {type: String,
    required: [true, "Please eneter a product name"],
    },
    quantitiy:{
        type:Number,
        required:[true,"Please enter the quantity"],
        default :0
    },
    price:{
        type:Number,
        required:[true,"Please enter the price"],
        default:0
    },
    image:{
        type:String,
        required:false,
    },
},
{
    timestamps:true,
});

const Product = mongoose.model("Product",ProductSchema)
module.exports= Product;