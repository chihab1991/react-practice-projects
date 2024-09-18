import Header from "./components/Header";
import Charts from "./components/Charts";
function App() {
	return (
		<>
			<Header />
			<main className="max-w-[1200px] mx-auto pt-4">
				<Charts />
			</main>
		</>
	);
}

export default App;
