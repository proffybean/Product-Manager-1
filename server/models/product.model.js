const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Product title is required'],
        maxlength:[30, 'Title must be <= 30 chars']
    },

    price:{
        type:Number,
        min:[0, 'Price must be > 0'],
        max:[999999, 'Price must be < 999,999']
    },

    description:{
        type:String,
        required:[true, 'Description is required'],
        maxlength:[50, 'Description must be <= 50 chars']
    }

})

const collection = 'Product'
const ProductModel = mongoose.model(collection, ProductSchema);
module.exports = ProductModel;
