const express = require("express");
const router = express.Router();

const {
	getAllQuotes,
	getRandomQuote,
	addQuote,
} = require("../controllers/quotesController");

router.get("/all-quotes", getAllQuotes);
router.get("/random-quote", getRandomQuote);
router.post("/add-quote", addQuote);

module.exports = router;
