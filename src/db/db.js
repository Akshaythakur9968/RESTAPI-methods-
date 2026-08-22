const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://royalthakur2111_db_user:3pqSAd&AgH7vT2h@backend.e9hmvvf.mongodb.net/halley    ")

    console.log("connect to DB")
}

module.exports = connectDB;