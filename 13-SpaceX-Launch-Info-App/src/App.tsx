import { useState } from "react";
import Header from "./components/Header";
import LaunchInfo from "./components/LaunchInfo";

function App() {
	return (
		<>
			<Header />
			<main className="max-w-[1200px] mx-auto">
				<LaunchInfo />
			</main>
		</>
	);
}

export default App;
