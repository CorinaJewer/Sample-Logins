const { MongoClient } = require('mongodb');

//const uri = "mongodb://127.0.0.1:27017/";
const uri = "mongodb://localhost:27017/";

// const atlas = "mongodb+srv://corinajewer:CreateMore24!@cluster0.wq0m4c5.mongodb.net/";

const pool = new MongoClient(uri);
// const pool = new MongoClient(atlas);

module.exports = pool;