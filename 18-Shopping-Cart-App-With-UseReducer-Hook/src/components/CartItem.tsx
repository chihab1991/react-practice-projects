import React from "react";

const CartItem = ({ item, dispatch }) => {
	const removeFromCart = () => {
		dispatch({ type: "remove-from-cart", payload: item.id });
	};
	return (
		<div>
			<h3>{item.name}</h3>
			<p>Price: {item.price}$</p>
			<button onClick={removeFromCart}>Remove From Cart</button>
		</div>
	);
};

export default CartItem;
