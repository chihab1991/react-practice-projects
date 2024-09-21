import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import { useState } from "react";
function App() {
	const [selectedJob, setSelectedJob] = useState();
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<MainPage setSelectedJob={setSelectedJob} />}
					/>
					<Route
						path="/jobs-listing"
						element={<MainPage setSelectedJob={setSelectedJob} />}
					/>
					<Route
						path="/jobs/:id"
						element={<JobDetailsPage selectedJob={selectedJob} />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
