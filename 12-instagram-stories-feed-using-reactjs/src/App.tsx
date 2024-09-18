import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<main className="p-4 max-w-[1200px] gap-7 mx-auto grid grid-cols-custom">
				<Outlet />
			</main>
		</>
	);
}

export default App;
