// import our db connection 
const { mongoose } = require('../db/connection');


// import Schema
const Schema = mongoose.Schema


// create a tweet chema 
const tweetSchema = new Schema({
    title: String,
    body: String,
    author: String,
    likes: { type: String,default: 0},
    sponsered: { type: Boolean, default: false }
} ,{timestamps: true}) // timestamps go outside because its a "config" or "param" that wouldnt go inside

// create Tweet model
const Tweet = mongoose.model('Tweet', tweetSchema)


module.exports = Tweet;
