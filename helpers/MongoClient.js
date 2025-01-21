const { MongoClient } = require('mongodb');
require('dotenv').config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const client = new MongoClient(process.env.MONGO_URL);

// Database Name
const dbName = process.env.DB_NAME || 'test_db';

async function main() {
    // return new Promise(async (resolve, reject)=>{
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        // console.log(db)
        // the following code examples can be pasted here...
        // resolve(db);
    // })
    return db;
}

module.exports = main;