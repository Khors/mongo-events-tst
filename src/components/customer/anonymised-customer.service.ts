import { ObjectId } from 'mongoose';
import { AnonymisedCustomer } from './anonymised-customer.schema';

export const findOneAnonymisedCustomer = async (id: ObjectId) => {
    return await AnonymisedCustomer.findById(id)
}

export const createAnonymisedCustomer = async (customerPayload: any) => {
    const customer = new AnonymisedCustomer(customerPayload);
    const newCustomer = await customer.save();
    return newCustomer;
}

export const updateAnonymisedCustomer = async (id: any, customerPayload: any) => {
    const result = AnonymisedCustomer.updateOne(id, customerPayload);
    return await findOneAnonymisedCustomer(id);
}