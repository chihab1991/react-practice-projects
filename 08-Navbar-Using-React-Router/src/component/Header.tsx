import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-blue-700 p-4">
			<div className="max-w-[1200px] text-white mx-auto">
				<h1 className="text-4xl inline-block mr-10">Navbar</h1>
				<nav className="inline-block text-slate-300">
					<Link to="/" className="text-xl mr-8">
						Home
					</Link>
					<Link to="/features" className="text-xl mr-8">
						Features
					</Link>
					<Link to="/pricing" className="text-xl mr-8">
						Pricing
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
