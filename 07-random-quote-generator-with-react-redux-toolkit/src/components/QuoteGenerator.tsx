import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../slice/quoteSlice";

const QuoteGenerator = () => {
	const dispatch = useDispatch<any>();

	useEffect(() => {
		dispatch(fetchQuote());
	}, [dispatch]);

	const generateQuote = () => {
		dispatch(fetchQuote());
	};

	const quote = useSelector((state) => state.quote.quote);
	const isLoading = useSelector((state) => state.quote.isLoading);
	const isError = useSelector((state) => state.quote.isError);

	if (isLoading) {
		return (
			<div className="h-screen w-screen flex">
				<h1 className="loading">Loading please wait...</h1>
			</div>
		);
	}
	if (isError) {
		return (
			<div className="h-screen w-screen flex">
				<h1 className="error">Something went wrong, please try again.</h1>
			</div>
		);
	}
	return (
		<div className="h-screen w-screen flex">
			<div className="quote-container">
				<p className="quote">{quote.content}</p>
				<button className="generate-quote-btn" onClick={generateQuote}>
					Generate Quote
				</button>
			</div>
		</div>
	);
};

export default QuoteGenerator;
