const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());

// let data = [
//   'Banh Mi King',
//   'Bamboo Asia',
//   'Les Croissants',
//   'Theoretical Perfect',
// ];

app.get('/', async function(req, res, next) {
  // Move logic to a model later
  try {
    const response = await db.query(
      `SELECT s.id,
              s.name,
              s.price,
              s.description,
              s.music
      FROM sandwiches s 
      ORDER BY s.id
      `
    );
    const data = response.rows;
    return res.status(200).json({ data });
  } catch (err) {
    return next(err);
  }
});

app.get('/:id', async function(req, res, next) {
  try {
    let data = [req.params.id]
    return res.status(200).json({ data });
  } catch (err) {
    return next(err);
  }
});

app.post('/', async function(req, res, next) {
  try {
    const { item } = { ...req.body };
    if (item.trim().length === 0) throw new Error('error');
    data = [item, ...data];
    return res.status(201).json({ item });
  } catch (err) {
    return next(err);
  }
});

module.exports = app;
