import axios from "axios";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const LaunchInfo = () => {
	const [launchInfo, setLaunchInfo] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				let res = await axios.get(
					"https://api.spacexdata.com/v4/launches/latest"
				);
				console.log(res.data);
				let data = res.data;
				data = {
					...data,
					details:
						"SpaceX's 20th and final Crew Resupply Mission under the original NASA CRS contract, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up under the new Commercial Resupply Services 2 contract will use Dragon 2.) The external payload for this mission is the Bartolomeo ISS external payload hosting platform. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral Air Force Station and the booster will land at LZ-1. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
				};
				console.log(data);
				setLaunchInfo(data);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);
	return (
		<>
			{launchInfo ? (
				<div className="flex justify-center items-center p-8">
					<div className="mr-8">
						<h2>SpaceX Launch Info</h2>
						<h3 className="text-3xl py-4 font-semibold">{launchInfo.name}</h3>
						<p className="mb-6">{launchInfo.details}</p>
						<a
							href={launchInfo.links.wikipedia}
							target="_blank"
							className="bg-green-900 rounded px-4 py-2 font-semibold text-white leading-6"
						>
							More Info...
						</a>
					</div>
					<div>
						<ReactPlayer url={launchInfo.links.webcast} />
					</div>
				</div>
			) : (
				<p>Please wait we're getting the info for you.</p>
			)}
		</>
	);
};

export default LaunchInfo;
