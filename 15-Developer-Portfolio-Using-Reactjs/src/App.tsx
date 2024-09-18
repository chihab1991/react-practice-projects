import About from "./components/About";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			(
			<div>
				{/* Page Content*/}
				<div className="container-fluid p-0">
					{/* About*/}
					<About />
					{/* Experience*/}
					<Experience />
					{/* Education*/}
					<Education />
					{/* Skills*/}
					<Skills />
					{/* Interests*/}
					<Interests />
					{/* Awards*/}
					<Awards />
				</div>
			</div>
			);
		</>
	);
}

export default App;
