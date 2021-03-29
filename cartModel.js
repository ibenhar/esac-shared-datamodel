import mongoose, { Schema } from 'mongoose'


const CartEntrySchema = new Schema({ 
    code: {
        type: String,
        required: true,
    }, 
    totalPrice: {
        type: Number,
        required: true
    }, 
    qty: {
        type: Number,
        required: true
    },    
    productMainImgUrl: {
        type: String,
        required: false
    }, 
    productCode: {
        type: String,
        required: true
    }, 
    productName: {
        type: String,
        required: true
    }, 
    basePrice: {
        type: Number,
        required: true
    }, 
    promo: {
        type: Boolean,
        required: false
    },
    discountValue: {
        type: Number,
        required: false
    }, 
    discountPercentage: {
        type: Boolean,
        required: false
    }, 
    productReferencePrice: {
        type: Number,
        required: false
    }
});

export const CartSchema = new Schema({

    code: {
        type: String,
        required: true,
        unique: true,
    }, 
    totalPrice: {
        type: Number,
        required: true
    },
    

    entries: {
        type: [CartEntrySchema],
        default: []
    }
    
}, {
    timestamps: true
});

