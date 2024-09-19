import React, { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
const Lazy = lazy(() => import("./pages/LazyPage.tsx"));
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<HomePage />} />
			<Route
				path="/lazy"
				element={
					<Suspense fallback={<h3>Loading...</h3>}>
						<Lazy />
					</Suspense>
				}
			/>
		</Route>
	)
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
