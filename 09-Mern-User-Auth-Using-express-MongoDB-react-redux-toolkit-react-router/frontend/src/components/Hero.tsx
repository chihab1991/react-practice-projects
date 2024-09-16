import React from "react";
import { Link } from "react-router-dom";
import { useSelector, UseSelector } from "react-redux";

const Hero = () => {
	const { userInfo } = useSelector((state) => state.auth);
	return (
		<>
			<div>
				<h1>User Authentication</h1>
				<p>
					This is a MERN User Authentication App that store JWT in a HTTP-Only
					cookie. It also uses Redux-Toolkit & tailwindcss.
				</p>
				<div>
					{userInfo ? (
						<>
							<Link to="/profile">
								<button>Profile</button>
							</Link>
						</>
					) : (
						<>
							<Link to="/login">
								<button>Login</button>
							</Link>

							<Link to="/register">
								<button>Register</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Hero;
