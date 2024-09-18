import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	AreaChart,
	Area,
} from "recharts";

const Charts = () => {
	const [data, setData] = useState();
	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get(
					"https://api.worldbank.org/v2/countries/IN/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json"
				);
				setData(res.data[1]);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);
	return (
		<>
			{data ? (
				<>
					<div className="mb-12">
						<BarChart width={1000} height={500} data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="date" reversed={true} />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="value" name="GDP of India" fill="#8884d8" />
						</BarChart>
					</div>
					<div>
						<AreaChart width={1000} height={500} data={data}>
							<XAxis dataKey="date" reversed={true} />
							<YAxis />
							<CartesianGrid strokeDasharray="4 3" />
							<Tooltip />
							<Area
								type="monotone"
								dataKey="value"
								name="GDP of India"
								stroke="#8884d8"
								fill="#8884d8"
							/>
						</AreaChart>
					</div>
				</>
			) : (
				<p>Please wait a few moments...</p>
			)}
		</>
	);
};

export default Charts;
