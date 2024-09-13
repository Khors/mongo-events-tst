import { createCustomer, updateCustomer } from './customer.service';
import { Request, Response, Router, NextFunction } from 'express';

export async function findAll(req: Request, res: Response) {
    console.log('findAll ');
    res.status(200).json({
        msg: "OK!"
    })
}

export async function findOne() { }

export async function create(req: Request, res: Response) {
    const customer = await createCustomer(req.body);
    res.status(201).json(customer);
}

export async function update(req: Request, res: Response) {
    const customer = await updateCustomer(
        req.params.id,
        req.body
    )
}

