import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../slices/usersApiSlice.js";
import { setCredentials } from "../slices/authSlice.js";
import { Link } from "react-router-dom";

const RegisterPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [match, setMatch] = useState(false);
	const [error, setError] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [register, { isLoading, isError }] = useRegisterMutation();

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo) {
			navigate("/");
		}
	}, [navigate, userInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMatch(true);
			setError("Password don't match");
		} else {
			try {
				if (match) setMatch(!match);
				const res = await register({ name, email, password }).unwrap();
				dispatch(setCredentials({ ...res }));
			} catch (err) {
				setError(err?.data?.message || err.error);
			}
		}
	};
	return (
		<>
			<form onSubmit={submitHandler}>
				<h1>Register</h1>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="name"
						name="name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>

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

				<div>
					<label htmlFor="confirmPassword">Confirm Password:</label>
					<input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>

				<button type="submit">Register</button>

				<div>
					<p>
						Already have an account? <Link to="/Login">Login</Link>
					</p>
				</div>
			</form>
			{isLoading && <p>please wait to login.</p>}
			{isError || (match && <p>{error}</p>)}
		</>
	);
};

export default RegisterPage;
