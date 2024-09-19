import { createContext, useContext, useState } from "react";
import "./App.css";

const ThemeContext = createContext(null);

function App() {
	const [theme, setTheme] = useState("light");
	const themeChosen = useContext(ThemeContext);
	return (
		<ThemeContext.Provider value={theme}>
			<div className={theme}>
				<h1>Theme Switching App</h1>
				<div>
					<label>
						<input
							type="checkbox"
							name=""
							id=""
							checked={theme === "dark"}
							onChange={(e) => {
								setTheme(e.target.checked ? "dark" : "light");
							}}
						/>
						Use dark mode
					</label>
				</div>

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
					accusamus molestiae porro, voluptatibus beatae ad quaerat soluta nihil
					iusto vitae blanditiis corrupti reprehenderit a dolor est, nostrum
					minus quibusdam amet nesciunt vero. A, ex? Nesciunt odio illum
					doloremque ab nobis, sequi at, officiis a repudiandae sunt recusandae,
					corporis animi modi maxime placeat odit voluptatem blanditiis. Est,
					cum. Corporis consequatur recusandae dolorem et incidunt blanditiis
					rerum porro, possimus molestiae deserunt distinctio omnis dolore
					facilis ut, dignissimos vero cum fugit doloribus debitis consectetur
					expedita placeat. Similique dolorum ratione suscipit accusamus
					repellat aut ullam, dignissimos, sapiente pariatur, alias expedita
					voluptates delectus placeat necessitatibus officiis. Officiis
					consequatur porro, libero at quaerat dolores sapiente a, nulla eaque
					soluta quisquam quo, dolorum asperiores quas saepe pariatur sit
					dolorem laborum expedita reiciendis ipsam aperiam? Doloribus,
					perspiciatis et. Cumque cupiditate soluta ipsam sit quis voluptas
					consequatur totam magnam pariatur laborum, molestias ducimus quaerat,
					odit porro nostrum blanditiis! Aliquid.
				</p>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
