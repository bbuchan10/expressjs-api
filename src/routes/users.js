import express from 'express';
import User from '../model/User.js';

const router = express.Router();

// GET all makes
router.get('/', async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/me', async (req, res) => {
  try {
    res.json("Hello you");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single make
router.get('/:id', async (req, res) => {
  try {
    const user = await User.getById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE make
router.post('/', async (req, res) => {
//   try {
//     const { make, region } = req.body;
//     const newMake = await Make.createMake(make, region);
//     res.status(201).json(newMake);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
});

// UPDATE make
router.put('/:id', async (req, res) => {
//   try {
//     const updatedMake = await Make.updateMake(req.params.id, req.body);
//     if (!updatedMake) return res.status(404).json({ error: 'Make not found' });
//     res.json(updatedMake);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
});

// DELETE make
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.deleteUser(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
