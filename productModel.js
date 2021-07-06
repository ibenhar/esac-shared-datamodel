import mongoose, { Schema } from 'mongoose'


export const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    price: {
        type: Number,
        required: true,
        
    },
    description: {
        type: String,
        trim: true  
    },
    mainImgUrl: {
        type: String,
        trim: true  
    },
    promo: {
        type: Boolean
    },
    discountValue: {
        type: Number
    },
    discountPercentage: {
        type: Boolean
    },
    priceAfterDiscount: {
        type: Number
    },
    brandNew: {
        type: Boolean
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
        
    },
    visibleOnline: {
        type: Boolean,
        default: false
    } 
    
}, {
    timestamps: true
});
