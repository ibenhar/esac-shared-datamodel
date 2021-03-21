import mongoose, { Schema } from 'mongoose'

const schema = mongoose.Schema;

export const CustomerSchema = new Schema({

    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
    
}, {
    timestamps: true
});