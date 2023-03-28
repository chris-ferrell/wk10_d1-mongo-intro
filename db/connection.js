// import mogoose
const mongoose = require('mongoose');

// database configuration 
const DATABASE_URL = 'mongodb+srv://vanity:ferrellchris145@cluster0.vebfrjp.mongodb.net/?retryWrites=true&w=majority';

// mongoose connect to url
mongoose.connect(DATABASE_URL)


// export mongoose;
module.exports = { mongoose }