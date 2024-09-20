import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

function App() {
	return (
		<>
			<Header />
			<Carousel />
			<Hero />
		</>
	);
}

export default App;
