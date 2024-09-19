import React from "react";

const ShopItem = ({ item, dispatch }) => {
	const addToCart = () => {
		dispatch({ type: "add-to-cart", payload: item });
	};
	return (
		<div>
			<h3>{item.name}</h3>
			<p>Price: {item.price}$</p>
			<button onClick={addToCart}>Add To Cart</button>
		</div>
	);
};

export default ShopItem;
