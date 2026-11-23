import { createSlice } from "@reduxjs/toolkit";

// ==================================================
// LOCAL STORAGE KEY
// ==================================================

const CART_STORAGE_KEY = "shopall_cart";

// ==================================================
// LOAD CART FROM LOCAL STORAGE
// ==================================================

const loadCartFromStorage = () => {
	try {
		const savedCart = localStorage.getItem(CART_STORAGE_KEY);

		if (!savedCart) {
			return [];
		}

		const parsedCart = JSON.parse(savedCart);

		return Array.isArray(parsedCart) ? parsedCart : [];
	} catch (error) {
		console.error("Failed to load cart from localStorage:", error);

		return [];
	}
};

// ==================================================
// SAVE CART TO LOCAL STORAGE
// ==================================================

const saveCartToStorage = (items) => {
	try {
		localStorage.setItem(
			CART_STORAGE_KEY,
			JSON.stringify(items),
		);
	} catch (error) {
		console.error("Failed to save cart to localStorage:", error);
	}
};

// ==================================================
// INITIAL STATE
// ==================================================

const initialState = {
	items: loadCartFromStorage(),
};

// ==================================================
// CART ITEM KEY
// ==================================================

const getCartItemKey = (item) => {
	return [
		item.id,
		item.selectedColor || item.colors?.[0]?.name || "",
		item.selectedSize || item.sizes?.[0] || "",
		item.selectedVariant || item.variants?.[0]?.name || "",
	].join("-");
};


// ==================================================
// CART SLICE
// ==================================================

const cartSlice = createSlice({
	name: "cart",

	initialState,

	reducers: {
		// ==============================================
		// ADD TO CART
		// ==============================================

	
        addToCart: (state, action) => {
            const product = action.payload;

            const cartProduct = {
				...product,
				selectedColor:
					product.selectedColor || product.colors?.[0]?.name || "",
				selectedSize: product.selectedSize || product.sizes?.[0] || "",
				selectedVariant:
					product.selectedVariant ||
					product.variants?.[0]?.name ||
					"",
			};

            const cartKey = getCartItemKey(cartProduct);

            const existingItem = state.items.find(
                (item) => getCartItemKey(item) === cartKey,
            );

            const incomingQuantity =
                Number(cartProduct.quantity) || 1;

            if (existingItem) {
                existingItem.quantity =
                    (Number(existingItem.quantity) || 1) +
                    incomingQuantity;
            } else {
                state.items.push({
                    ...cartProduct,
                    quantity: incomingQuantity,
                    cartKey,
                });
            }

            saveCartToStorage(state.items);
        },



		// ==============================================
		// REMOVE FROM CART
		// ==============================================

		removeFromCart: (state, action) => {
			state.items = state.items.filter(
				(item) => item.cartKey !== action.payload,
			);

			// Save updated cart
			saveCartToStorage(state.items);
		},

		// ==============================================
		// INCREASE QUANTITY
		// ==============================================

		increaseQuantity: (state, action) => {
			const item = state.items.find(
				(item) => item.cartKey === action.payload,
			);

			if (item) {
				item.quantity =
					(Number(item.quantity) || 1) + 1;
			}

			// Save updated cart
			saveCartToStorage(state.items);
		},

		// ==============================================
		// DECREASE QUANTITY
		// ==============================================

		decreaseQuantity: (state, action) => {
			const item = state.items.find(
				(item) => item.cartKey === action.payload,
			);

			if (item) {
				item.quantity =
					(Number(item.quantity) || 1) - 1;

				if (item.quantity <= 0) {
					state.items = state.items.filter(
						(cartItem) =>
							cartItem.cartKey !== action.payload,
					);
				}
			}

			// Save updated cart
			saveCartToStorage(state.items);
		},

		// ==============================================
		// SET QUANTITY
		// ==============================================

		setQuantity: (state, action) => {
			const { cartKey, quantity } = action.payload;

			const item = state.items.find(
				(item) => item.cartKey === cartKey,
			);

			if (!item) return;

			const newQuantity = Number(quantity);

			if (
				Number.isNaN(newQuantity) ||
				newQuantity <= 0
			) {
				state.items = state.items.filter(
					(cartItem) =>
						cartItem.cartKey !== cartKey,
				);
			} else {
				item.quantity = newQuantity;
			}

			// Save updated cart
			saveCartToStorage(state.items);
		},

		// ==============================================
		// CLEAR CART
		// ==============================================

		clearCart: (state) => {
			state.items = [];

			// Remove cart from localStorage
			localStorage.removeItem(CART_STORAGE_KEY);
		},
	},
});

// ==================================================
// EXPORT ACTIONS
// ==================================================

export const cartAction = cartSlice.actions;

// ==================================================
// EXPORT REDUCER
// ==================================================

export default cartSlice.reducer;
