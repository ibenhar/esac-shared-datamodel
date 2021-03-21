import mongoose, { Schema } from 'mongoose'

const schema = mongoose.Schema;

export const EmployeeSchema = new Schema({

    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
    
}, {
    timestamps: true
});