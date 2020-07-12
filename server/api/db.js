const { Client } = require('pg');

const client = new Client(process.env.DATABASE_URL || 'postgresql:///sfbmdb');

client.connect();

module.exports = client;
