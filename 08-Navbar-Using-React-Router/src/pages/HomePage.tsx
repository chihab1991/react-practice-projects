import { Link } from "react-router-dom";
const HomePage = () => {
	return (
		<div className="text-xl p-4">
			<h2 className="text-2xl text-slate-500 mb-8">New Launch</h2>
			<h1 className="text-3xl mb-6">Latest Phone</h1>
			<p className="mb-32">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro
				dolore cumque vel molestiae eum officiis doloribus vero ratione? Hic
				ipsam nam quasi? Voluptatibus voluptas reiciendis nihil consequatur,
				delectus ipsa.
			</p>

			<Link
				to="/pricing"
				className="bg-blue-700 p-2 rounded text-white hover:bg-blue-600 duration-500"
			>
				Buy Now
			</Link>
		</div>
	);
};

export default HomePage;
