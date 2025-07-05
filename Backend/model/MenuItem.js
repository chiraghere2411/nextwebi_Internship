import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  image: String,
  badge: String,
  type: String,
  price: Number,
  category: [String],
  rating: Number
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
