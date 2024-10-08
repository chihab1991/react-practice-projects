import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element=<HomePage /> />
				<Route path="/features" element={<FeaturesPage />} />
				<Route path="/pricing" element={<PricingPage />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
