const ImageComponent = ({ image }) => {
	return (
		<>
			<div>
				<img
					src={image.download_url}
					alt={image.author}
					className="w-full h-96"
				/>
			</div>
		</>
	);
};

export default ImageComponent;
