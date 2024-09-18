import categoryItems from "../data/categories.js";
import { Link } from "react-router-dom";

const HomePages = () => {
	console.log(categoryItems);
	return (
		<>
			{categoryItems.map((item, index) => {
				return (
					<Link key={index} to={item.name.toLowerCase()}>
						<div className="border-8 border-rose-300 flex justify-center items-center text-center h-[360px] rounded-full text-rose-500">
							<p className="text-2xl flex justify-center items-center">
								{item.name} {item.iconName}
							</p>
						</div>
					</Link>
				);
			})}
		</>
	);
};

export default HomePages;
