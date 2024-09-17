import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import TableRow from "./components/TableRow";

function App() {
	const [coins, setCoins] = useState<[]>([]);

	useEffect(() => {
		const getCoins = async () => {
			try {
				const res = await axios.get(
					"https://api.coinlore.net/api/tickers/?limit=25"
				);
				setCoins([...res.data.data]);
			} catch (error) {
				console.log(error);
			}
		};
		getCoins();
	}, []);
	return (
		<>
			<Header />
			<table className="table-auto border-collapse border-2 border-slate-300 mt-4 text-center mx-auto mb-4">
				<thead>
					<tr>
						<th className="min-w-44 border-collapse  border-2 border-slate-300 py-2">
							Symbol
						</th>
						<th className="min-w-44 border-collapse  border-2 border-slate-300 py-2">
							Name
						</th>
						<th className="min-w-44 border-collapse  border-2 border-slate-300 py-2">
							Price USD
						</th>
						<th className="min-w-44 border-collapse  border-2 border-slate-300 py-2">
							Price BTC
						</th>
					</tr>
				</thead>
				<tbody>
					{coins.map((coin) => (
						<TableRow key={coin.id} coin={coin} />
					))}
				</tbody>
			</table>
		</>
	);
}

export default App;
