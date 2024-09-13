import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
    firstName: string,
    lastName: string,
    email: string,
    address: {
        line1: string,
        line2: string,
        postcode: string,
        city: string,
        state: string,
        country: string
    },
    createdAt: string
}

export const CustomerSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: {
        line1: { type: String, required: true },
        line2: { type: String, required: true },
        postcode: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true }
    }
});

export const Customer = mongoose.model<ICustomer>('Customer', CustomerSchema);