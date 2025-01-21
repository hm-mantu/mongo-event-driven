const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  
const axios = require('axios');
require('dotenv').config();

const app = express();
const api = require('./routes/api');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(cors());

app.use(express.json())

// app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/test_db?replicaSet=rs1');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', () => {
	app.listen(process.env.APP_PORT, async ()=>{
		console.log(`Application syated on http://localhost:${process.env.APP_PORT}`)
		// const db = await require('./helpers/MongoClient')();
		// console.log(db)
	})

	const taskCollection = db.collection('tasks');
  	const changeStream = taskCollection.watch();

  	// triggering the event due to any operation on db
  	changeStream.on('change', async (change) => {
  		console.log(change)
  		if (change.operationType == 'insert') {
  			try{
	  			// TODO ::start the scan process 
	  			
	  		}catch(error) {
	  			console.log(error)
	  		}
  		}
  	});
});

app.use('/api', api);



