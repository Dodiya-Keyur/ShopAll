import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./Whishlist";
import cartReducer from "./cartSlice"
const ShopAllStore = configureStore({
	reducer: {
		wishlist: wishlistReducer,
		cart: cartReducer,
	},
});

export default ShopAllStore;
