import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<h2>HomePage</h2>
			<Link to="/lazy">Go To Lazy Page</Link>
		</>
	);
};

export default HomePage;
