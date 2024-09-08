import { useState, useEffect } from "react";
function App() {
	const [hours, setHours] = useState<string>();
	const [minutes, setMinutes] = useState<string>();
	const [seconds, setSeconds] = useState<string>();
	useEffect(() => {
		setInterval(() => {
			const getDate = (): void => {
				const date: Date = new Date();
				setHours(date.getHours().toString().padStart(2, "0"));
				setMinutes(date.getMinutes().toString().padStart(2, "0"));
				setSeconds(date.getSeconds().toString().padStart(2, "0"));
			};
			getDate();
		}, 1000);
	}, []);

	return (
		<>
			<div className="h-screen mx-auto flex flex-col justify-center items-center">
				<div className="bg-black text-center p-8">
					<h1 className="text-4xl text-white mb-8">Digital Clock App</h1>

					<div className="border-4 border-green-700 rounded-md inline-block mx-auto">
						<p className=" text-3xl p-2 text-green-700 w-full">
							{hours} : {minutes} : {seconds}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
