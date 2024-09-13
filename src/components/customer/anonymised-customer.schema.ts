import mongoose from 'mongoose';
import { ICustomer, CustomerSchema } from './customer.schema';

export interface IAnonymisedCustomer extends ICustomer { }

export const AnonymisedCustomerSchema = CustomerSchema;

export const AnonymisedCustomer = mongoose.model<IAnonymisedCustomer>('AnonymisedCustomer', AnonymisedCustomerSchema);