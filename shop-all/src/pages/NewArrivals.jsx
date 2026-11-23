import React, { useMemo, useState } from "react";
import {
	ArrowRight,
	Heart,
	ShoppingCart,
	Star,
	Tag,
	Sparkles,
	ChevronDown,
	SlidersHorizontal,
	ShoppingBag,
} from "lucide-react";
import { products } from "../data/products";

import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartSlice";
import { wishlistAction } from "../store/Whishlist";


const NewArrivals = () => {

	const newArrivalProducts = products.filter(
		(product) =>
			product.isNew === true
	);

	const dispatch = useDispatch();

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




	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("Newest");

	const categories = [
		"All",
		"Electronics",
		"Fashion",
		"Beauty",
		"Home & Kitchen",
		"Sports & Toys",
	];

	// ========================================================
	// FORMAT PRICE
	// ========================================================

	const formatPrice = (price) => {
		return new Intl.NumberFormat("en-IN").format(price);
	};

	// ========================================================
	// FILTER + SORT
	// ========================================================

	const filteredProducts = useMemo(() => {
		let result = [...newArrivalProducts];

		if (selectedCategory !== "All") {
			result = result.filter(
				(product) => product.category === selectedCategory,
			);
		}

		if (sortBy === "Price: Low to High") {
			result.sort((a, b) => a.price - b.price);
		}

		if (sortBy === "Price: High to Low") {
			result.sort((a, b) => b.price - a.price);
		}

		if (sortBy === "Rating") {
			result.sort((a, b) => b.rating - a.rating);
		}

		return result;
	}, [selectedCategory, sortBy]);

	// ========================================================
	// COMPONENT
	// ========================================================

	return (
		<div className="min-h-screen bg-white text-slate-900 -mt-20 lg:-mt-0">
			{/* ==================================================
			    PAGE INTRO
			================================================== */}

			<section className="border-b border-gray-200 bg-white">
				<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
					<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
						{/* LEFT */}

						<div>
							<div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
								<Sparkles size={18} />

								<span>Freshly Added</span>
							</div>

							<h1 className="text-4xl font-extrabold tracking-tight text-[#07152b] sm:text-5xl">
								New Arrivals
							</h1>

							<p className="mt-3 text-base text-slate-500 sm:text-lg">
								Discover the latest products and fresh picks
								added to ShopAll.
							</p>
						</div>

						{/* RIGHT */}

						<div className="flex flex-wrap items-center gap-4">
							<div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-slate-600 shadow-sm">
								<Tag size={19} className="text-slate-500" />

								<span>Fresh products every day</span>
							</div>

							<button className="group flex items-center gap-2 font-bold text-[#07152b]">
								View All
								<ArrowRight
									size={20}
									className="transition-transform group-hover:translate-x-1"
								/>
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ==================================================
			    DARK PROMO BANNER
			================================================== */}

			<section className="bg-[#f7f7f7] px-6 py-9 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="relative min-h-[205px] overflow-hidden rounded-[24px] bg-[#050505]">
						{/* Decorative circles */}

						<div className="absolute -right-8 -top-24 h-64 w-64 rounded-full bg-white/[0.06]" />

						<div className="absolute -bottom-36 right-48 h-72 w-72 rounded-full bg-white/[0.035]" />

						<div className="absolute -bottom-20 left-1/2 h-44 w-44 rounded-full bg-white/[0.025]" />

						{/* Content */}

						<div className="relative z-10 flex h-full min-h-[205px] items-center justify-between px-8 py-8 sm:px-12">
							<div>
								<p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
									JUST LANDED
								</p>

								<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
									Fresh Picks Are Here
								</h2>

								<p className="mt-2 text-sm text-slate-300 sm:text-base">
									Explore the newest products before everyone
									else.
								</p>
							</div>

							<button className="hidden rounded-xl bg-white px-7 py-4 font-bold text-black transition hover:bg-gray-100 sm:block">
								Explore New Arrivals
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ==================================================
			    PRODUCTS AREA
			================================================== */}

			<main className="bg-white">
				<div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
					{/* ==================================================
					    TOP DEAL / PRODUCT HEADING
					================================================== */}

					<div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
						<div>
							<p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
								LATEST COLLECTION
							</p>

							<h2 className="text-3xl font-extrabold text-[#07152b]">
								Latest Products
							</h2>

							<p className="mt-1 text-sm text-slate-500">
								{filteredProducts.length} new products available
							</p>
						</div>

						{/* SORT */}

						<div className="relative">
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-11 text-sm font-semibold text-slate-700 outline-none transition hover:border-slate-400"
							>
								<option>Newest</option>
								<option>Price: Low to High</option>
								<option>Price: High to Low</option>
								<option>Rating</option>
							</select>

							<ChevronDown
								size={17}
								className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
							/>
						</div>
					</div>

					{/* ==================================================
					    CATEGORY FILTER
					================================================== */}

					<div className="mb-8 flex gap-2 overflow-x-auto pb-2">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
									selectedCategory === category
										? "bg-[#07152b] text-white"
										: "border border-gray-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900"
								}`}
							>
								{category}
							</button>
						))}
					</div>

					{/* ==================================================
					    PRODUCT GRID
					================================================== */}

					<div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
						{filteredProducts.map((product) => {
							const wishlisted = isWishlisted(product.id);

							return <div
								key={product.id}
								className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
							>
								{/* IMAGE */}

								<div className="relative aspect-square overflow-hidden bg-[#f6f7f8]">
									<img
										src={product.image}
										alt={product.name}
										className="w-full h-64 object-cover"
									/>

									{/* NEW BADGE */}

									<div className="absolute left-3 top-3">
										<span className="rounded-md bg-[#07152b] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
											New
										</span>
									</div>

									{/* WISHLIST */}

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

								{/* DETAILS */}

								<div className="p-4">
									{/* Company */}
									<p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
										{product.company}
									</p>

									{/* Product Name */}
									<h3 className="mt-1 text-base font-semibold text-gray-900 line-clamp-2 min-h-[48px]">
										{product.name}
									</h3>

									{/* Rating */}
									<div className="flex items-center gap-2 mt-3">
										<span className="inline-flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-xs font-semibold rounded">
											{product.rating}
											<span>★</span>
										</span>

										<span className="text-xs text-gray-500">
											{product.totalRatings} Ratings
										</span>
									</div>

									{/* Price */}
									<div className="flex items-center gap-2 mt-4 flex-wrap">
										<span className="text-lg font-bold text-gray-900">
											₹{product.price}
										</span>

										<span className="text-sm text-gray-400 line-through">
											₹{product.originalPrice}
										</span>

										<span className="text-xs font-semibold text-green-600">
											({product.discountPercentage}% OFF)
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
})}
					</div>

					{/* ==================================================
					    VIEW MORE
					================================================== */}

					<div className="mt-12 flex justify-center">
						<button className="group flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-[#07152b] transition hover:border-[#07152b] hover:bg-gray-50">
							View More New Arrivals
							<ArrowRight
								size={18}
								className="transition-transform group-hover:translate-x-1"
							/>
						</button>
					</div>
				</div>
			</main>

			{/* ==================================================
			    BOTTOM FEATURES
			================================================== */}

			<section className="border-t border-gray-200 bg-[#fafafa]">
				<div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-200 lg:grid-cols-4">
					<div className="px-6 py-7 text-center">
						<p className="font-bold text-[#07152b]">
							Fresh Products
						</p>

						<p className="mt-1 text-xs text-slate-500">
							New products added regularly
						</p>
					</div>

					<div className="px-6 py-7 text-center">
						<p className="font-bold text-[#07152b]">
							Free Shipping
						</p>

						<p className="mt-1 text-xs text-slate-500">
							On orders over ₹999
						</p>
					</div>

					<div className="px-6 py-7 text-center">
						<p className="font-bold text-[#07152b]">
							Secure Payment
						</p>

						<p className="mt-1 text-xs text-slate-500">
							100% secure transactions
						</p>
					</div>

					<div className="px-6 py-7 text-center">
						<p className="font-bold text-[#07152b]">Easy Returns</p>

						<p className="mt-1 text-xs text-slate-500">
							Simple return policy
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NewArrivals;
