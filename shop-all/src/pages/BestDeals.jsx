import { useMemo, useState } from "react";
import {
	Heart,
	ShoppingBag,
	ArrowRight,
	SlidersHorizontal,
	ChevronDown,
	Tag,
	Sparkles,
	Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { products } from "../data/products";
import { cartAction } from "../store/cartSlice";
import { wishlistAction } from "../store/Whishlist";

const BestDeals = () => {
	const dispatch = useDispatch();

	const [sortBy, setSortBy] = useState("discount");

	// ==================================================
	// REDUX STATE
	// ==================================================

	const wishlists = useSelector((store) => store.wishlist?.wishlists || []);

	const carts = useSelector((store) => store.cart?.carts || []);

	// ==================================================
	// CHECK WISHLIST
	// ==================================================

	const isWishlisted = (productId) => {
		return wishlists.some((item) => item.id === productId);
	};

	// ==================================================
	// TOGGLE WISHLIST
	// ==================================================

	const toggleWishlist = (product) => {
		if (isWishlisted(product.id)) {
			dispatch(wishlistAction.removeFromWishlist(product.id));
		} else {
			dispatch(wishlistAction.addToWishlist(product));
		}
	};

	// ==================================================
	// ADD TO CART
	// ==================================================

	const handleAddToCart = (product) => {
		dispatch(
			cartAction.addToCart({
				...product,

				// Default quantity
				quantity: 1,

				// Variant information
				selectedColor: product.colors?.[0]?.name || null,

				selectedSize: product.size?.[0] || null,

				selectedVariant: product.variants?.[0]?.name || null,
			}),
		);
	};

	// ==================================================
	// CALCULATE DISCOUNT
	// ==================================================

	const calculateDiscount = (price, originalPrice) => {
		if (!originalPrice || originalPrice <= price) {
			return 0;
		}

		return Math.round(((originalPrice - price) / originalPrice) * 100);
	};

	// ==================================================
	// DEAL PRODUCTS
	// ==================================================

	const dealProducts = useMemo(() => {
		const deals = products.filter((product) => product.isDeal === true);

		const sortedDeals = [...deals];

		// Best Discount
		if (sortBy === "discount") {
			sortedDeals.sort((a, b) => {
				const discountA = calculateDiscount(a.price, a.originalPrice);

				const discountB = calculateDiscount(b.price, b.originalPrice);

				return discountB - discountA;
			});
		}

		// Price Low → High
		if (sortBy === "price-low") {
			sortedDeals.sort((a, b) => a.price - b.price);
		}

		// Price High → Low
		if (sortBy === "price-high") {
			sortedDeals.sort((a, b) => b.price - a.price);
		}

		// Rating
		if (sortBy === "rating") {
			sortedDeals.sort((a, b) => b.rating - a.rating);
		}

		return sortedDeals;
	}, [sortBy]);

	// ==================================================
	// FORMAT PRICE
	// ==================================================

	const formatPrice = (price) => {
		return Number(price || 0).toLocaleString("en-IN");
	};

	return (
		<div className="min-h-screen bg-[#f7f7f7] -mt-20 lg:-mt-0">
			{/* ================= HEADER / HERO ================= */}
			<section className="border-b border-gray-200 bg-white">
				<div className="mx-auto max-w-[1200px] px-5 py-10 md:px-8">
					<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
						<div>
							<div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
								<Sparkles size={14} strokeWidth={2.5} />

								<span>Best Value</span>
							</div>

							<h1 className="text-3xl font-extrabold tracking-tight text-[#071426] md:text-4xl">
								Best Deals For You
							</h1>

							<p className="mt-2 text-sm text-gray-500">
								Great products. Better prices.
							</p>
						</div>

						<div className="flex items-center gap-3">
							<div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-600 md:flex">
								<Tag size={15} />

								<span>Save more on every deal</span>
							</div>

							<Link
								to="/categories"
								className="flex items-center gap-2 text-sm font-bold text-gray-900 transition hover:text-orange-500"
							>
								View All
								<ArrowRight size={17} />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ================= DEAL BANNER ================= */}
			<section className="mx-auto max-w-[1200px] px-5 pt-6 md:px-8">
				<div className="relative overflow-hidden rounded-2xl bg-black px-6 py-7 text-white md:px-10">
					<div className="absolute -right-10 -top-20 h-48 w-48 rounded-full bg-white/10" />

					<div className="absolute -bottom-20 right-32 h-40 w-40 rounded-full bg-white/5" />

					<div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-center">
						<div>
							<p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
								Limited Time Offers
							</p>

							<h2 className="text-2xl font-extrabold md:text-3xl">
								Up to 70% OFF
							</h2>

							<p className="mt-1 text-sm text-gray-300">
								Grab your favourites before they&apos;re gone.
							</p>
						</div>

						<button
							onClick={() =>
								document
									.getElementById("top-deals")
									?.scrollIntoView({
										behavior: "smooth",
									})
							}
							className="w-fit rounded-lg bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-gray-100"
						>
							Shop Deals
						</button>
					</div>
				</div>
			</section>

			{/* ================= PRODUCTS SECTION ================= */}
			<section
				id="top-deals"
				className="mx-auto max-w-[1200px] px-5 py-8 md:px-8"
			>
				{/* Toolbar */}
				<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h2 className="text-xl font-bold text-[#071426]">
							Top Deals
						</h2>

						<p className="mt-1 text-sm text-gray-500">
							{dealProducts.length} products with amazing
							discounts
						</p>
					</div>

					<div className="flex items-center gap-3">
						<button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700">
							<SlidersHorizontal size={16} />
							Filter
						</button>

						<div className="relative">
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm font-semibold text-gray-700 outline-none focus:border-black"
							>
								<option value="discount">Best Discount</option>

								<option value="price-low">
									Price: Low to High
								</option>

								<option value="price-high">
									Price: High to Low
								</option>

								<option value="rating">Top Rated</option>
							</select>

							<ChevronDown
								size={16}
								className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
							/>
						</div>
					</div>
				</div>

				{/* ================= PRODUCT GRID ================= */}
				{dealProducts.length > 0 ? (
					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{dealProducts.map((product) => {
							const discount = calculateDiscount(
								product.price,
								product.originalPrice,
							);

							const wishlisted = isWishlisted(product.id);

							return (
								<div
									key={product.id}
									className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
								>
									{/* Image */}
									<div className="relative h-[260px] overflow-hidden bg-gray-100">
										<Link to={`/product/${product.id}`}>
											<img
												src={product.image}
												alt={product.name}
												className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
											/>
										</Link>

										{/* Discount */}
										<div className="absolute bottom-2 left-2 rounded bg-green-600 px-2 py-1 text-[11px] font-bold text-white">
											{discount}% OFF
										</div>

										{/* Wishlist */}
										<button
											type="button"
											onClick={() =>
												toggleWishlist(product)
											}
											className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105"
										>
											<Heart
												size={18}
												strokeWidth={1.8}
												className={
													wishlisted
														? "fill-red-500 text-red-500"
														: "text-gray-700"
												}
											/>
										</button>
									</div>

									{/* Product Details */}
									<div className="p-4">
										{/* Company */}
										<p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
											{product.company}
										</p>

										{/* Product Name */}
										<Link to={`/product/${product.id}`}>
											<h3 className="mt-1 min-h-[48px] line-clamp-2 text-base font-semibold text-gray-900">
												{product.name}
											</h3>
										</Link>

										{/* Rating */}
										<div className="mt-3 flex items-center gap-2">
											<span className="inline-flex items-center gap-1 rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
												{product.rating}
												<span>★</span>
											</span>

											<span className="text-xs text-gray-500">
												{product.totalRatings} Ratings
											</span>
										</div>

										{/* Price */}
										<div className="mt-4 flex flex-wrap items-center gap-2">
											<span className="text-lg font-bold text-gray-900">
												₹{formatPrice(product.price)}
											</span>

											<span className="text-sm text-gray-400 line-through">
												₹
												{formatPrice(
													product.originalPrice,
												)}
											</span>

											<span className="text-xs font-semibold text-green-600">
												({discount}% OFF)
											</span>
										</div>

										{/* Add to Bag */}
										<button
											type="button"
											onClick={() =>
												handleAddToCart(product)
											}
											className="w-full mt-5 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 active:scale-[0.98] transition"
										>
											<ShoppingBag size={18} />
											Add to Bag
										</button>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className="rounded-xl border border-gray-200 bg-white py-20 text-center">
						<Tag size={40} className="mx-auto mb-4 text-gray-300" />

						<h3 className="text-lg font-bold text-gray-900">
							No deals available
						</h3>

						<p className="mt-1 text-sm text-gray-500">
							Check back later for exciting offers.
						</p>
					</div>
				)}
			</section>
		</div>
	);
};

export default BestDeals;
