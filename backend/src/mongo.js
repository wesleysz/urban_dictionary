import mongoose from 'mongoose';
import dotenv from 'dotenv-defaults';

// i use mongodb://localhost:27017/cardmongo for MONGO_URL

function connectMongo() {
  // const dotenv  = require("dotenv-defaults");
  const result = dotenv.config()
  if (result.error) {
    throw result.error
  }
  
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Mongo database connected!');
  });
}

const mongo = {
  connect: connectMongo,
};

export default mongo;
