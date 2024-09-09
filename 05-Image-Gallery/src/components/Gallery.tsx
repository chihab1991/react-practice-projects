import { useState, useEffect } from "react";
import axios from "axios";
import ImageComponent from "./ImageComponent";

const Gallery = () => {
	const [images, setImages] = useState<[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await axios.get("https://picsum.photos/v2/list");
				setImages(res.data);
			} catch (err) {
				console.log(err);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		getUser();
	}, []);
	return (
		<div>
			{isLoading && !isError && !images && (
				<h1 className="text-3xl text-yellow-600">
					Please wait, we are getting the data for you.
				</h1>
			)}

			{!isLoading && isError && (
				<div className="text-red-500 text-2xl">
					<h2 className="mb-4">Error while getting your data !!!!</h2>
					<h2>please try again.</h2>
				</div>
			)}
			{images && !isLoading && !isError && (
				<div className="grid grid-cols-custom gap-4 mx-4 mb-4">
					{images.map((image) => (
						<ImageComponent key={image.id} image={image} />
					))}
				</div>
			)}
		</div>
	);
};

export default Gallery;
