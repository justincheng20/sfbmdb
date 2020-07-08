const express = require('express');
const app = express();
app.use(express.json());

// Use pojos for now; will make SQL database and models later
const sandwich1 = {
  name: `chicken bahn mi`,
  store: `Bahn Mi King`,
  price: 7.0,
  music: `80's synthpop`,
  description: `It's hard to hate synthpop, but it's rarely amazing. Warm, reliable, and a bit soft. Both 
  modern and outdated`,
};

let data = [sandwich1];

app.get('/', async function(req, res, next) {
  try {
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