const TableRow = ({ coin }) => {
	return (
		<>
			<tr>
				<td className="border-collapse  border-2 border-slate-300 py-2">
					{coin.symbol}
				</td>
				<td className="border-collapse  border-2 border-slate-300 py-2">
					{coin.name}
				</td>
				<td className="border-collapse  border-2 border-slate-300 py-2">
					{coin.price_usd}
				</td>
				<td className="border-collapse  border-2 border-slate-300 py-2">
					{coin.price_btc}
				</td>
			</tr>
		</>
	);
};

export default TableRow;
