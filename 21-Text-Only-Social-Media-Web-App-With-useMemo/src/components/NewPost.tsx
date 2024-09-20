import { useState } from "react";

const NewPost = ({ posts, setPosts }) => {
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setPosts([
			...posts,
			{
				id: posts.length,
				content,
				username: "Current User",
			},
		]);
		setContent("");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						name="text"
						id="text"
						placeholder="What's on you mind?"
						value={content}
						onChange={(e) => {
							setContent(e.target.value);
						}}
					/>
				</div>
				<button type="submit">Post</button>
			</form>
		</>
	);
};

export default NewPost;
