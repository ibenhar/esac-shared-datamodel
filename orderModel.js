import mongoose, { Schema } from 'mongoose'


const OrderEntrySchema = new Schema({ 
    code: {
        type: String,
        required: true
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
});

export const OrderSchema = new Schema({

    totalPrice: {
        type: Number,
        required: true
    },
    deliveryCost: {
        type: String,
        required: true
    },
    deliveryMode: {
        type: String,
        required: true
    },

    customerEmail: {
        type: String
    },

    customerPhone: {
        type: String,
        required: true
    },

    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },

    status: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },

    deliveryApartment: {
        type: String
    },

    deliveryEnterprise: {
        type: String
    },

    deliveryNote: {
        type: String
    },

    pickupStore: {
        type: String
    },
    // entries: {
    //     type: Schema.Types.Array,
    //     default: []
        
    // }
    entries: {
        type: [OrderEntrySchema],
        default: []
    }
    
}, {
    timestamps: true
});

