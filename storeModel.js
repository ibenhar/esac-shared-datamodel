import { Schema } from 'mongoose'


export const StoreSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    }
    
}, {
    timestamps: true
});
