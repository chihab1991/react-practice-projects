const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema(
	{
		quote: {
			type: String,
			required: [true, "Please add a quote"],
		},
		author: {
			type: String,
			required: [true, "Please add an author"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
