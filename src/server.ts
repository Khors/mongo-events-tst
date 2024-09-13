import express from 'express';
import { CustomerRouter } from './components/customer/customer.router';

const SERVER_PORT = 8080;

const app = express();

app.use('/customers', CustomerRouter);

export default app.listen(SERVER_PORT, () => {
    console.log(`server is working on  http://localhost:${SERVER_PORT}`)
});

