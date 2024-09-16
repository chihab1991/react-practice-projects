import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice.js";
import { logout } from "../slices/authSlice.js";

const Header = () => {
	const { userInfo } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [logoutApiCall] = useLogoutMutation();
	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate("/login");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<header>
			<nav>
				<div>
					<h1>User Auth App</h1>
				</div>

				<div>
					{userInfo ? (
						<>
							<Link to="/profile">Profile</Link>
							<Link onClick={logoutHandler}>logout</Link>
						</>
					) : (
						<>
							<Link to="/login">Login</Link>
							<Link to="/register">Register</Link>
						</>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
