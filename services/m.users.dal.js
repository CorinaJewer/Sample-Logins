const {objectId} = require('mongodb');
const dal = require('./m.auth_db.js');  //  MongoDB connection pool

async function getUsers() {
    if(DEBUG) console.log("Auth.mongo.dal.getUsers()");
    try {
      // connect to the mongo database
      await dal.connect();
      // fetch the data into a cursor
      const cursor = dal.db("Auth").collection("users").find();
      // I need ALL the data into an array. Cursors exist for dealing with 
      // a lot of data. And a few other things.
      const results = await cursor.toArray();
      return results;
    } catch(error) {
      // this is where you write to the event log
      console.log(error);
      // throw error;
    } finally {
      // release the database connection back into the pool
      dal.close();
    }
};

module.exports = {
    getUsers
};
  