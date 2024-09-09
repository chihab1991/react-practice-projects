const SingleUser = ({ user }) => {
	return (
		<div className="px-2 pb-2 w-[550px] border-2 border-slate-400 m-1 p-2 ">
			<h3 className="text-xl font-semibold py-4">
				User: {user.login.username}
			</h3>
			<hr className="border-slate-400" />
			<div>
				<div className="flex justify-between items-center py-2">
					<div>
						<h2 className="text-xl font-semibold mb-2">
							{user.name.title} {user.name.last} {user.name.first}
						</h2>
						<p>email: {user.email}</p>
					</div>
					<div>
						<img
							src={user.picture.large}
							alt={`${user.name.title} ${user.name.last} ${user.name.first}`}
							className="w-20"
						/>
					</div>
				</div>
				<div className="flex justify-between leading-7">
					<div>
						<h3 className="text-xl font-semibold">
							Used for {user.registered.age} year
						</h3>
						<p>Age: {user.dob.age}</p>
						<p>Nationality: {user.nat}</p>
						<p>Phone: {user.phone}</p>
					</div>
					<div className="text-right">
						<h3 className="text-xl font-semibold">Adress:</h3>
						<p>
							{user.location.street.number} ,{user.location.street.name}
						</p>
						<p>
							{user.location.city}, {user.location.country} -
							{user.location.postcode}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleUser;
