import storiesData from "./../data/stories.js";
import Stories from "react-insta-stories";
import { useParams, useNavigate } from "react-router-dom";

const StoryPage = () => {
	const { category } = useParams();
	const navigate = useNavigate();
	const stories = storiesData[category];
	console.log(stories);

	const storiesEndHandler = () => {
		navigate("/");
	};
	return (
		<>
			<Stories
				stories={stories}
				defaultInterval={5000}
				onAllStoriesEnd={storiesEndHandler}
			/>
		</>
	);
};

export default StoryPage;
