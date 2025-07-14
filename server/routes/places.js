const express = require('express');
const db = require('../models/db');

const router = express.Router();

// Получить все места
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM places');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching places:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Получить конкретное место по ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM places WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Place not found' });
    }
  } catch (error) {
    console.error('Error fetching place:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Добавить новое место
router.post('/', async (req, res) => {
  const { name, description, region, image_url } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO places (name, description, region, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, region, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding place:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Обновить информацию о месте
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, region, image_url } = req.body;
  try {
    const result = await db.query(
      'UPDATE places SET name = $1, description = $2, region = $3, image_url = $4 WHERE id = $5 RETURNING *',
      [name, description, region, image_url, id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Place not found' });
    }
  } catch (error) {
    console.error('Error updating place:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Удалить место
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM places WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length > 0) {
      res.json({ message: 'Place deleted successfully' });
    } else {
      res.status(404).json({ message: 'Place not found' });
    }
  } catch (error) {
    console.error('Error deleting place:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;