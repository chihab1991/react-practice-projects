import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const MainLayout = () => {
	return (
		<>
			<Header />
			<main className="max-w-[1200px] mx-auto">
				<Outlet />
			</main>
		</>
	);
};
export default MainLayout;
