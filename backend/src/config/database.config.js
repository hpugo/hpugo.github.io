import { connect, set } from 'mongoose';
import { UserModel, UserSchema } from '../models/user.model.js';
import { ShoeModel } from '../models/shoe.model.js';
import { sample_shoes } from '../Data.js';
import { sample_users } from '../Data.js';
import bcrypt from 'bcryptjs';

const PASSWORD_HASH_SALT_ROUNDS = 10;

set('strictQuery', true);

export const dbconnect = async () => {
    try {
        await connect(process.env.MONGO_URI, {
        });
        await seedUsers();
        await seedShoes();
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

async function seedUsers() {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0 ) {
        console.log('Users seed is already done!');
        return;
    }

    for (let user of sample_users) {
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    } console.log('Users seed is done!')
}

async function seedShoes(){
    const shoes = await ShoeModel.countDocuments();
    if (shoes > 0) {
        console.log('Shoes seed is already done!');
        return;
    }
    for ( const shoe of sample_shoes) {
        shoe.imageUrl = `/shoes/${shoe.imageUrl}`;
        await ShoeModel.create(shoe);
    }  
    console.log('shoe seed is done!');
}