const asyncHandler = require("express-async-handler");
const Quote = require("../models/quoteModel");
const quotes = require("../data/quotes.json");
//  @desc get quotes
// @route GET api/all-quotes
// @access public

const getAllQuotes = asyncHandler(async (req, res) => {
	const quotes = await Quote.find({});
	res.status(200).json(quotes);
});

//  @desc get quotes
// @route GET api/random-quote
// @access public

const getRandomQuote = asyncHandler(async (req, res) => {
	const quotes = await Quote.find({});
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	res.status(200).json(randomQuote);
});

//  @desc add quote
// @route POST api/add-quote
// @access public

const addQuote = asyncHandler(async (req, res) => {
	if (!req.body.quote || !req.body.author) {
		res.status(400);
		throw new Error("please add a quote and an author");
	}
	const newQuote = await Quote.create({
		quote: req.body.quote,
		author: req.body.author,
	});
	res.status(200).json(newQuote);
});

module.exports = { getAllQuotes, getRandomQuote, addQuote };
