import { FC, useEffect, useState } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";

const UserList: FC = () => {
	const [users, setUsers] = useState<[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	useEffect(() => {
		const getUser = async () => {
			try {
				const user = await axios.get("https://randomuser.me/api/?results=50");
				setUsers(user.data.results);
			} catch (err) {
				console.log(err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getUser();
	}, []);
	return (
		<div>
			<h1 className="bg-slate-700 p-2 text-4xl text-white text-center">
				UserList
			</h1>

			{loading && !error && !users && (
				<h1 className="text-3xl text-yellow-600">
					Please wait, we are getting the data for you.
				</h1>
			)}

			{!loading && error && (
				<div className="text-red-500 text-2xl">
					<h2 className="mb-4">Error while getting your data !!!!</h2>
					<h2>please try again.</h2>
				</div>
			)}
			{users && !loading && !error && (
				<div className="grid grid-cols-custom">
					{users.map((user, index) => (
						<SingleUser key={index} user={user} />
					))}
				</div>
			)}
		</div>
	);
};

export default UserList;
