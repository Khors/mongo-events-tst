import mongoose from 'mongoose';

export const DBConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI as string);
    } catch (err) {
        console.log(err);
    }
}
