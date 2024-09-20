import { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import NewPost from "./components/NewPost";
import Post from "./components/Post";

function App() {
	const [posts, setPosts] = useState([]);

	const filteredPosts = useMemo(
		() => posts.sort((a, b) => a.id - b.id),
		[posts]
	);
	return (
		<>
			<Header />
			<NewPost posts={posts} setPosts={setPosts} />
			{filteredPosts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</>
	);
}

export default App;
