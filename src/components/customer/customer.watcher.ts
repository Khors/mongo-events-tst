import { Customer } from './customer.schema';
import crypto from 'crypto';
import { createAnonymisedCustomer } from './anonymised-customer.service';

export const customerWatcher = () => {

    const tracker = Customer.watch();

    tracker.on('change', async (change) => {

        const anonymisedCustomer = {
            ...change.fullDocument,
            firstName: getShortHash(change.fullDocument.firstName),
            lastName: getShortHash(change.fullDocument.lastName),
            email: getEmailLoginHash(change.fullDocument.email),
            address: {
                ...change.fullDocument.address,
                line1: getShortHash(change.fullDocument.address.line1),
                line2: getShortHash(change.fullDocument.address.line2),
                postcode: getShortHash(change.fullDocument.address.postcode)
            }
        }
        switch (change.operationType) {
            case 'insert':
                await createAnonymisedCustomer(anonymisedCustomer);
                break;
            case 'update':
                break;
            default:
                console.log('Wrong DB action')
        }
    });

    tracker.on('error', (err) => {
        console.log(err);
    });

    tracker.on('close', () => {
        console.log('FINISH');
    })
};


function getShortHash(str: string) {
    const hash = crypto.createHash('sha256').update(str).digest('base64');
    return hash.substring(0, 8);
}

function getEmailLoginHash(email: string) {
    const [login, domain] = email.split('@');
    const loginHash = getShortHash(login);
    return `${loginHash}@${domain}`;
}