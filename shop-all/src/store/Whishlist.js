import { createSlice } from "@reduxjs/toolkit";

// Get wishlist from localStorage
const getWishlistFromStorage = () => {
	try {
		const savedWishlist = localStorage.getItem("shopall-wishlist");

		return savedWishlist ? JSON.parse(savedWishlist) : [];
	} catch (error) {
		console.error("Error loading wishlist:", error);
		return [];
	}
};

const wishlistSlice = createSlice({
	name: "wishlist",

	initialState: {
		wishlists: getWishlistFromStorage(),
	},

	reducers: {
		// =========================
		// ADD TO WISHLIST
		// =========================
		addToWishlist: (state, action) => {
			const exists = state.wishlists.some(
				(item) => item.id === action.payload.id,
			);

			// Don't add duplicate product
			if (!exists) {
				state.wishlists.push(action.payload);

				// Save to localStorage
				localStorage.setItem(
					"shopall-wishlist",
					JSON.stringify(state.wishlists),
				);
			}
		},

		// =========================
		// REMOVE FROM WISHLIST
		// =========================
		removeFromWishlist: (state, action) => {
			state.wishlists = state.wishlists.filter(
				(item) => item.id !== action.payload,
			);

			// Update localStorage
			localStorage.setItem(
				"shopall-wishlist",
				JSON.stringify(state.wishlists),
			);
		},

		// =========================
		// CLEAR WISHLIST
		// =========================
		clearWishlist: (state) => {
			state.wishlists = [];

			// Clear localStorage
			localStorage.removeItem("shopall-wishlist");
		},
	},
});

export const wishlistAction = wishlistSlice.actions;

export default wishlistSlice.reducer;
