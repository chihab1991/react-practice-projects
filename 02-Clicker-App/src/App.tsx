import { useState } from "react";
import {
	FaPlus,
	FaMinus,
	FaArrowsRotate,
	FaHandPointer,
} from "react-icons/fa6";
function App() {
	const [click, setClick] = useState<number>(0);

	const incrementClick = (): void => {
		setClick(click + 1);
	};
	const decrementClick = (): void => {
		if (click === 0) return;
		setClick(click - 1);
	};
	const reset = (): void => {
		setClick(0);
	};
	return (
		<>
			<div className="h-screen w-96 mx-auto flex flex-col justify-center items-center text-center">
				<header className="flex justify-center items-center bg-slate-400 w-full text-red-500 text-4xl px-8 py-4">
					<FaHandPointer />
					<h1 className="">Clicker</h1>
				</header>
				<main className="border-black border w-full mt-4">
					<div className="text-9xl px-8 py-12">{click}</div>
					<div className="flex justify-evenly text-white h-28 text-4xl">
						<button onClick={incrementClick} className="w-32 bg-green-500 ">
							<FaPlus className="m-auto " />
						</button>
						<button onClick={reset} className="w-32 bg-yellow-500">
							<FaArrowsRotate className="m-auto text-slate-900" />
						</button>
						<button onClick={decrementClick} className="w-32 bg-red-500">
							<FaMinus className="m-auto" />
						</button>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
