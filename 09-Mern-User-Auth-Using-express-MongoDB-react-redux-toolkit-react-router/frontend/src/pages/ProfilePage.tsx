import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		setName(userInfo.name);
		setEmail(userInfo.email);
	}, [userInfo.name, userInfo.email]);

	return (
		<>
			<div>
				Hey {name} Thank you for using our website. This is your email address{" "}
				{email}
			</div>
		</>
	);
};

export default ProfilePage;
