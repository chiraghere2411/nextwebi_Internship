import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import MenuItem from './model/MenuItem.js';

dotenv.config();

const __dirname = path.resolve();
const rawData = fs.readFileSync(path.join(__dirname, 'menuData.json'));
const menuData = JSON.parse(rawData);

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log(' Connected to MongoDB');

    await MenuItem.deleteMany(); 
    await MenuItem.insertMany(menuData);

    console.log(' Menu data seeded successfully');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error(' Seeding failed:', err);
    mongoose.disconnect();
  });
