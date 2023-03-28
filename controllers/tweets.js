const express = require('express');
const router = express.Router();
// import the Tweet model
const Tweet = require('../models/tweet.js');
const tweetSeed = require('../db/tweetSeed.js');



// async / await 

// Create       `async` is need for to use `await`
router.post('/', async (req, res) => {

	// console.log('req.body', req.body)
	// res.send(req.body);
	const tweet = await Tweet.create(req.body)
	res.send(tweet);

});

// Index
router.get('/', async (req, res) => {
	// giving it empty curly braces tells it to find everything
	const tweets = await Tweet.find({})
	res.send(tweets);
});

// Seed
router.get('/seed', async (req, res) => {
	// deletes everything in database
	await Tweet.deleteMany({});
	// creating all tweetSeed data in database
	await Tweet.create(tweetSeed);
	res.redirect('/tweets');
});

// Show
router.get('/:id', async (req, res) => {
	const tweet = await Tweet.findById(req.params.id)
	res.send(tweet);
});

// Delete
router.delete('/:id', async (req, res) => {
	const tweet = await Tweet.findByIdAndDelete(req.params.id);
	res.send({success: true, tweet});
});

// Update
router.put('/:id', async (req, res) => {
	const tweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	})
	res.send(tweet);
});

module.exports = router;
