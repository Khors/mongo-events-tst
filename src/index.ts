import runEmulator from './client.emu';
import { customerWatcher } from './components/customer/customer.watcher';
import { DBConnect } from './config/db.client';
import runServer from './server';
import dotenv from 'dotenv';

dotenv.config()

const run = async () => {
    await DBConnect();
    customerWatcher();
    runEmulator;
    runServer;
}

run();