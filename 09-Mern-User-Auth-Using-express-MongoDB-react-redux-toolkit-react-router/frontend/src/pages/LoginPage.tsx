import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice.js";
import { setCredentials } from "../slices/authSlice.js";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [login, { isLoading, isError }] = useLoginMutation();

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo) {
			navigate("/");
		}
	}, [navigate, userInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			navigate("/");
		} catch (err) {
			setError(err?.data?.message || err.error);
		}
	};
	return (
		<>
			<form onSubmit={submitHandler}>
				<h1>Login</h1>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<button type="submit">Login</button>

				<div>
					<p>
						New Customer? <Link to="/register">Register</Link>
					</p>
				</div>
			</form>
			{isLoading && <p>please wait to login.</p>}
			{isError && <p>{error}</p>}
		</>
	);
};

export default LoginPage;
