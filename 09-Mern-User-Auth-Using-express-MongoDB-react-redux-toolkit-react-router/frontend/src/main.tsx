import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import store from "./store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="" element={<PrivateRoute />}>
				<Route path="/profile" element={<ProfilePage />} />
			</Route>
		</Route>
	)
);

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	</Provider>
);
