const Post = ({ post }) => {
	return (
		<div className="post">
			<p>{post.content}</p>
			<p>By: {post.username}</p>
		</div>
	);
};

export default Post;
