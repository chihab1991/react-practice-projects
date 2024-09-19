import "./App.css";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const data = await res.json();
	console.log(data);
	return data;
};

function App() {
	const { isPending, error, data, isFetching } = useQuery({
		queryKey: ["todos"],
		queryFn: fetchData,
	});

	if (isPending) {
		return (
			<>
				<h1>Loading...</h1>
			</>
		);
	}

	if (error) {
		return <p>An error has occurred: {error.message} </p>;
	}

	return (
		<>
			<h1>React Query Web App</h1>

			<div>
				<h3>Data from JSONPlaceholder API</h3>
				<p>{JSON.stringify(data)}</p>
			</div>
		</>
	);
}

export default App;
