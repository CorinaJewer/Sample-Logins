const { MongoClient } = require('mongodb');

//const uri = "mongodb://localhost:27017/";
const uri = process.env.MDBLOCAL;

const atlas = process.env.MDBATLAS;

const pool = new MongoClient(uri);
// const pool = new MongoClient(atlas);

if (DEBUG) console.log("Connected to MongoDB")

module.exports = pool;