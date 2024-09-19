import "./App.css";
import ShopItem from "./components/ShopItem";
import CartItem from "./components/CartItem";
import { shopItems } from "./ShopItems";
import { reducer } from "./reducer";
import { useReducer } from "react";

const initialState = [];

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	console.log(state);
	return (
		<>
			<h1>Shopping Cart App</h1>
			<div className="card">
				<h2>Products</h2>
				{shopItems?.map((item) => (
					<ShopItem key={item.id} item={item} dispatch={dispatch} />
				))}
			</div>
			<div className="card">
				<h2>Shopping Cart</h2>
				{state.length === 0 && (
					<p>Your shopping cart is empty, Please add new Items.</p>
				)}
				{state &&
					state.map((item) => (
						<CartItem key={item.id} item={item} dispatch={dispatch} />
					))}
			</div>
		</>
	);
}

export default App;
