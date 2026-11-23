import React, { useState } from "react";
import {
	ShoppingBag,
	Trash2,
	Heart,
	Minus,
	Plus,
	Tag,
	Truck,
	ShieldCheck,
	ArrowLeft,
	Star,
	ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cartAction } from "../store/cartSlice";
import { wishlistAction } from "../store/Whishlist";

const Cart = () => {
	// ==================================================
	// REDUX
	// ==================================================

	const dispatch = useDispatch();

	const cartItems = useSelector((state) => state.cart.items || []);

	const wishlists = useSelector((store) => store.wishlist.wishlists);

	const wishlistsitem = wishlists.map((item) => {return item.id});

	const handelWhishlist = (item ,id) => {
		if (wishlistsitem.includes(id)) {
			dispatch(wishlistAction.removeFromWishlist(id))
		}
		else {
			dispatch(wishlistAction.addToWishlist(item));
		}
	}


	// ==================================================
	// COUPON STATE
	// ==================================================

	const [coupon, setCoupon] = useState("");
	const [couponApplied, setCouponApplied] = useState(false);

	// ==================================================
	// APPLY COUPON
	// ==================================================

	const applyCoupon = () => {
		if (coupon.trim() !== "") {
			setCouponApplied(true);
		}
	};

	// ==================================================
	// CALCULATIONS
	// ==================================================

	const totalItems = cartItems.reduce(
		(total, item) => {
			return total + (Number(item.quantity) || 1);
		},
		0,
	);

	const totalMRP = cartItems.reduce(
		(total, item) => {
			const quantity = Number(item.quantity) || 1;

			const originalPrice =
				Number(item.originalPrice) ||
				Number(item.price) ||
				0;

			return total + originalPrice * quantity;
		},
		0,
	);

	const totalDiscount = cartItems.reduce(
		(total, item) => {
			const quantity = Number(item.quantity) || 1;

			const originalPrice =
				Number(item.originalPrice) ||
				Number(item.price) ||
				0;

			const price =
				Number(item.price) || 0;

			return (
				total +
				Math.max(0, originalPrice - price) * quantity
			);
		},
		0,
	);

	const couponDiscount = couponApplied ? 1000 : 0;

	const subtotal = totalMRP - totalDiscount;

	const deliveryCharge =
		subtotal - couponDiscount >= 1999 ? 0 : 99;

	const finalTotal =
		Math.max(0, subtotal - couponDiscount) +
		deliveryCharge;

	// ==================================================
	// EMPTY CART
	// ==================================================

	if (cartItems.length === 0) {
		return (
			<div className="min-h-screen bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 py-16">
					<div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center py-20 px-6 text-center">
						<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
							<ShoppingCart
								size={42}
								className="text-gray-400"
							/>
						</div>

						<h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
							Your cart is empty
						</h1>

						<p className="text-gray-500 max-w-md mb-8">
							Looks like you haven't added anything to your cart
							yet. Start shopping and discover something you love.
						</p>

						<Link
							to="/"
							className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
						>
							<ShoppingBag size={19} />
							Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		);
	}

	// ==================================================
	// MAIN CART
	// ==================================================

	return (
		<div className="min-h-screen bg-gray-50 -mt-20 lg:-mt-0 ">

			{/* ============================================
				PAGE HEADER
			============================================ */}

			<div className="bg-white border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
								<ShoppingBag size={28} className="text-gray-900" />
								Shopping Cart
							</h1>

							<p className="mt-1 text-sm text-gray-500">
								{totalItems}{" "}
								{totalItems === 1 ? "item" : "items"} in your
								cart
							</p>
						</div>

						{/* Desktop Clear Wishlist */}
						{(
							<button
								onClick={() => dispatch(cartAction.clearCart())}
								className="hidden sm:flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 transition"
							>
								<Trash2 size={18} />
								Clear Cart
							</button>
						)}
					</div>
				</div>
			</div>

			{/* ============================================
				MAIN CONTENT
			============================================ */}

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

					{/* Mobile Clear Cart */}
					<div className="flex justify-end mb-5 sm:hidden">
						<button
							onClick={() => dispatch(cartAction.clearCart())}
							className="flex items-center gap-2 text-sm font-medium text-red-500"
						>
							<Trash2 size={17} />
							Clear Cart
						</button>
					</div>


					{/* ========================================
						LEFT SIDE
					======================================== */}

					<div className="lg:col-span-2 space-y-5">
						{/* ========================================
							DELIVERY BANNER
						======================================== */}

						<div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4">
							<div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
								<Truck size={21} className="text-green-600" />
							</div>

							<div>
								<p className="font-semibold text-gray-900">
									Free delivery on orders above ₹1,999
								</p>

								<p className="text-sm text-gray-500 mt-1">
									Your order is eligible for secure and fast
									delivery.
								</p>
							</div>
						</div>

						{/* ========================================
							CART ITEMS
						======================================== */}

						{cartItems.map((item) => {
							const quantity = Number(item.quantity) || 1;

							const itemPrice = Number(item.price) || 0;

							const itemOriginalPrice =
								Number(item.originalPrice) || itemPrice;

							const itemDiscount =
								item.discountPercentage ??
								(itemOriginalPrice > itemPrice
									? Math.round(
											((itemOriginalPrice - itemPrice) /
												itemOriginalPrice) *
												100,
										)
									: 0);

							/*
								Use the image selected on the product page.
								Fallbacks are included for older cart items.
							*/

							const displayImage =
								item.selectedImage ||
								item.image ||
								item.images?.[0] ||
								"";


							return (
								<div
									key={
										item.cartKey ||
										`${item.id}-${item.selectedColor || ""}-${item.selectedSize || ""}-${item.selectedVariant || ""}`
									}
									className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5"
								>
									<div className="flex flex-col sm:flex-row gap-5">
										{/* =================================
											IMAGE
										================================= */}

										<div className="w-full sm:w-36 h-44 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
											{displayImage ? (
												<img
													src={displayImage}
													alt={item.name}
													className="w-full h-full object-cover"
												/>
											) : (
												<div className="w-full h-full flex items-center justify-center">
													<ShoppingBag
														size={35}
														className="text-gray-400"
													/>
												</div>
											)}
										</div>

										{/* =================================
											PRODUCT INFORMATION
										================================= */}

										<div className="flex-1 min-w-0">
											{/* COMPANY */}

											<p className="text-sm text-gray-500 mb-1">
												{item.company ||
													item.brand ||
													""}
											</p>

											{/* NAME */}

											<h2 className="text-lg font-semibold text-gray-900">
												{item.name}
											</h2>

											{/* RATING */}

											{item.rating != null && (
												<div className="flex items-center gap-2 mt-2">
													<div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
														{item.rating}

														<Star
															size={11}
															fill="currentColor"
														/>
													</div>

													<span className="text-sm text-gray-500">
														{(
															item.totalRatings ||
															item.ratingsCount ||
															0
														).toLocaleString()}{" "}
														ratings
													</span>
												</div>
											)}

											{/* =================================
												SELECTED PRODUCT OPTIONS
											================================= */}

											<div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm text-gray-600">
												{/* SELECTED SIZE */}

												{item.selectedSize && (
													<div>
														<span className="font-medium text-gray-900">
															Size:
														</span>{" "}
														{item.selectedSize}
													</div>
												)}

												{/* SELECTED COLOR */}

												{item.selectedColor && (
													<div>
														<span className="font-medium text-gray-900">
															Color:
														</span>{" "}
														{item.selectedColor}
													</div>
												)}

												{/* SELECTED VARIANT */}

												{item.selectedVariant && (
													<div>
														<span className="font-medium text-gray-900">
															Variant:
														</span>{" "}
														{item.selectedVariant}
													</div>
												)}
											</div>

											{/* =================================
												PRICE
											================================= */}

											<div className="flex items-center flex-wrap gap-3 mt-4">
												<span className="text-xl font-bold text-gray-900">
													₹
													{itemPrice.toLocaleString(
														"en-IN",
													)}
												</span>

												{itemOriginalPrice >
													itemPrice && (
													<span className="text-sm text-gray-400 line-through">
														₹
														{itemOriginalPrice.toLocaleString(
															"en-IN",
														)}
													</span>
												)}

												{itemDiscount > 0 && (
													<span className="text-sm font-semibold text-green-600">
														{itemDiscount}% OFF
													</span>
												)}
											</div>

											{/* =================================
												QUANTITY + ACTIONS
											================================= */}

											<div className="flex flex-wrap items-center gap-4 mt-5">
												{/* QUANTITY */}

												<div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
													<button
														onClick={() =>
															dispatch(
																cartAction.decreaseQuantity(
																	item.cartKey ||
																		item.id,
																),
															)
														}
														disabled={
															quantity === 1
														}
														className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
													>
														<Minus size={15} />
													</button>

													<span className="w-10 text-center text-sm font-semibold">
														{quantity}
													</span>

													<button
														onClick={() =>
															dispatch(
																cartAction.increaseQuantity(
																	item.cartKey ||
																		item.id,
																),
															)
														}
														className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition"
													>
														<Plus size={15} />
													</button>
												</div>

												{/* REMOVE */}

												<button
													onClick={() =>
														dispatch(
															cartAction.removeFromCart(
																item.cartKey ||
																	item.id,
															),
														)
													}
													className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition"
												>
													<Trash2 size={16} />
													Remove
												</button>

												{/* WISHLIST */}

												<button
													type="button"
													onClick={() => {
														handelWhishlist(item , item.id);
													}}
													className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500 transition"
												>
													{wishlistsitem.includes(
														item.id,
													) ? (
														<Heart
															size={20}
															className="fill-red-500 text-red-500"
														/>
													) : (
														<Heart size={20} />
													)}
													{wishlistsitem.includes(
														item.id,
													) ? (
														<span>Added to Wishlist</span>
													) : (
														<span>
															Add to Wishlist
														</span>
													)}
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}

						{/* ========================================
							CONTINUE SHOPPING
						======================================== */}

						<div className="flex flex-wrap items-center gap-5">
							<Link
								to="/"
								className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black transition"
							>
								<ArrowLeft size={17} />
								Continue Shopping
							</Link>
						</div>
					</div>

					{/* ========================================
						RIGHT SIDE
					======================================== */}

					<div className="lg:col-span-1">
						<div className="bg-white rounded-xl border border-gray-200 sticky top-24 overflow-hidden">
							{/* SUMMARY HEADER */}

							<div className="p-5 border-b border-gray-200">
								<h2 className="text-lg font-bold text-gray-900">
									Price Details
								</h2>
							</div>

							{/* SUMMARY */}

							<div className="p-5 space-y-5">
								{/* PRICE */}

								<div className="space-y-4">
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">
											Price ({totalItems} items)
										</span>

										<span className="font-medium text-gray-900">
											₹{totalMRP.toLocaleString("en-IN")}
										</span>
									</div>

									{/* DISCOUNT */}

									<div className="flex justify-between text-sm">
										<span className="text-gray-600">
											Discount
										</span>

										<span className="font-medium text-green-600">
											- ₹
											{totalDiscount.toLocaleString(
												"en-IN",
											)}
										</span>
									</div>

									{/* DELIVERY */}

									<div className="flex justify-between text-sm">
										<span className="text-gray-600">
											Delivery Charges
										</span>

										{deliveryCharge === 0 ? (
											<span className="font-medium text-green-600">
												FREE
											</span>
										) : (
											<span className="font-medium text-gray-900">
												₹99
											</span>
										)}
									</div>

									{/* COUPON DISCOUNT */}

									{couponApplied && (
										<div className="flex justify-between text-sm">
											<span className="text-gray-600">
												Coupon Discount
											</span>

											<span className="font-medium text-green-600">
												- {couponDiscount}
											</span>
										</div>
									)}
								</div>

								{/* DIVIDER */}

								<div className="border-t border-dashed border-gray-300" />

								{/* TOTAL */}

								<div className="flex justify-between items-center">
									<span className="text-base font-bold text-gray-900">
										Total Amount
									</span>

									<span className="text-xl font-bold text-gray-900">
										₹{finalTotal.toLocaleString("en-IN")}
									</span>
								</div>

								{/* SAVINGS */}

								<div className="bg-green-50 border border-green-100 rounded-lg p-3">
									<p className="text-sm font-semibold text-green-700">
										You are saving ₹
										{(
											totalDiscount + couponDiscount
										).toLocaleString("en-IN")}{" "}
										on this order
									</p>
								</div>

								{/* =================================
									COUPON
								================================= */}

								<div>
									<div className="flex items-center gap-2 mb-3">
										<Tag
											size={17}
											className="text-gray-700"
										/>

										<h3 className="text-sm font-semibold text-gray-900">
											Apply Coupon
										</h3>
									</div>

									<div className="flex gap-2">
										<input
											type="text"
											value={coupon}
											onChange={(e) =>
												setCoupon(e.target.value)
											}
											placeholder="Enter coupon code"
											disabled={couponApplied}
											className="flex-1 min-w-0 border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black disabled:bg-gray-100"
										/>

										<button
											onClick={applyCoupon}
											disabled={
												couponApplied ||
												coupon.trim() === ""
											}
											className="px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-black disabled:bg-gray-300 disabled:cursor-not-allowed transition"
										>
											{couponApplied
												? "Applied"
												: "Apply"}
										</button>
									</div>

									{!couponApplied && (
										<p className="text-xs text-gray-500 mt-2">
											Try coupon:{" "}
											<button
												onClick={() =>
													setCoupon("SAVE1000")
												}
												className="font-semibold text-gray-900 hover:underline"
											>
												SAVE1000
											</button>
										</p>
									)}
								</div>

								{/* CHECKOUT */}

								<button className="w-full bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
									Proceed to Checkout
									<ArrowLeft
										size={17}
										className="rotate-180"
									/>
								</button>

								{/* SECURITY */}

								<div className="flex items-start gap-3 pt-2">
									<ShieldCheck
										size={20}
										className="text-green-600 flex-shrink-0"
									/>

									<p className="text-xs text-gray-500 leading-relaxed">
										Safe and secure payments. Your payment
										information is encrypted and protected.
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</main>
		</div>
	);
};

export default Cart;
