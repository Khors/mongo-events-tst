import { faker } from '@faker-js/faker';
import axios from 'axios';
import { ObjectId } from 'mongodb';

function createRandomUser() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: {
            line1: faker.location.streetAddress(),
            line2: faker.location.direction(),
            postcode: faker.location.zipCode(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.location.country()
        },
        createdAt: new Date().toISOString()
    };
}

function generateSomeUsers(count: number) {
    return faker.helpers.multiple(createRandomUser, {
        count: count,
    });
}

async function sendUserToServer(users: any[]) {
    for (let user of users) {
        try {
            const result = await axios.post('http://localhost:8080/customers', user);
        } catch (error) {
            console.log('err => ', error);
        }
    }
}

// export default function fakeGen() {
//     const users = generateSomeUsers(Math.floor(Math.random() * 10) + 1);
//     console.log('count users => ', users.length);
//     // console.log('users => ', users);
//     sendUserToServer(users);
// }


export default setInterval(() => {
    const users = generateSomeUsers(Math.floor(Math.random() * 10) + 1);
    console.log('count users => ', users.length);
    sendUserToServer(users);
}, 200);