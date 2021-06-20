import mongoose, { Schema } from 'mongoose'

export const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    visibleOnline: {
        type: Boolean,
        default: false
    },
    productsCount: {
        type: String
    },
    imgUrl: {
        type: String
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
        
    }]
    
}, {
    timestamps: true
});