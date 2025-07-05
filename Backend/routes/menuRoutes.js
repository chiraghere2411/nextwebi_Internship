import express from 'express';
import MenuItem from '../model/MenuItem.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
});

export default router;
