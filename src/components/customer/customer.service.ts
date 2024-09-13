import { ObjectId } from 'mongoose';
import { Customer } from './customer.schema';

export const findOneCustomer = async (id: ObjectId) => {
    return await Customer.findById(id)
}

export const createCustomer = async (customerPayload: any) => {
    const customer = new Customer(customerPayload);
    const newCustomer = await customer.save();
    return newCustomer;
}

export const updateCustomer = async (id: any, customerPayload: any) => {
    const result = Customer.updateOne(id, customerPayload);
    return await findOneCustomer(id);
}