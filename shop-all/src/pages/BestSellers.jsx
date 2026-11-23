import React from "react";
import {
	ArrowRight,
	BarChart3,
	Heart,
	ShoppingBag,
	ShoppingCart,
	Star,
	TrendingUp,
	Trophy,
} from "lucide-react";

import { products } from "../data/products";

import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartSlice";
import { wishlistAction } from "../store/Whishlist";

const BestSellers = () => {

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



	const bestSellerProducts = products
		.filter(
			(product) => product.rating >= 4.4 || product.totalRatings >= 1000,
		)
		.slice(0, 12);

	const formatPrice = (price) => {
		return new Intl.NumberFormat("en-IN").format(price);
	};

	return (
		<div className="min-h-screen bg-[#f7f7f7] text-[#0b1428] -mt-20 lg:-mt-0">
			{/* =====================================================
			    PAGE HEADER / HERO
			===================================================== */}
			<section className="bg-white border-b border-gray-200">
				<div className="max-w-[1800px] mx-auto px-6 md:px-10 lg:px-12">
					<div className="min-h-[330px] flex items-center justify-between gap-10 py-14">
						{/* LEFT */}
						<div>
							<div className="flex items-center gap-3 mb-7">
								<div className="text-orange-500">
									<Trophy size={27} strokeWidth={2.2} />
								</div>

								<span className="text-orange-500 font-bold tracking-[5px] text-[18px]">
									TOP SELLERS
								</span>
							</div>

							<h1 className="text-[50px] md:text-[50px] leading-[0.95] font-black ">
								Best Sellers
							</h1>

							<p className="mt-6 text-[22px] text-[#58708f] max-w-[700px]">
								Shop the products everyone is loving right now.
								Discover our most popular picks.
							</p>
						</div>

						{/* RIGHT */}
						<div className="hidden lg:flex items-center gap-5">
							<div className="flex items-center gap-4 bg-white border border-gray-200 shadow-sm rounded-full px-7 py-5">
								<div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center">
									<TrendingUp
										size={23}
										className="text-orange-500"
									/>
								</div>

								<div>
									<p className="font-semibold text-[17px]">
										Trending right now
									</p>

									<p className="text-gray-500 text-sm">
										Loved by thousands of shoppers
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    DARK FEATURE BANNER
			===================================================== */}
			<section className="bg-[#f7f7f7] px-6 md:px-10 lg:px-12 py-14">
				<div className="max-w-[1800px] mx-auto">
					<div className="relative overflow-hidden rounded-[36px] bg-[#050505] min-h-[310px] flex items-center">
						{/* Decorative circles */}
						<div className="absolute -right-20 -top-36 w-[430px] h-[430px] rounded-full bg-[#151515]" />

						<div className="absolute right-[260px] -bottom-48 w-[400px] h-[400px] rounded-full bg-[#101010]" />

						<div className="absolute right-[520px] bottom-[-180px] w-[300px] h-[300px] rounded-full bg-[#111111]" />

						{/* Content */}
						<div className="relative z-10 px-10 md:px-16 py-12">
							<p className="text-orange-500 font-bold tracking-[5px] text-[17px] mb-5">
								SHOPPER FAVORITES
							</p>

							<h2 className="text-white text-[42px] md:text-[54px] font-black tracking-[-2px] leading-tight">
								The Products
								<br />
								Everyone Wants
							</h2>

							<p className="text-gray-400 text-lg mt-4 max-w-[570px]">
								From everyday essentials to must-have gadgets,
								these are the products flying off the shelves.
							</p>
						</div>

						{/* Right stats */}
						<div className="relative z-10 ml-auto mr-10 md:mr-16 hidden md:flex items-center gap-5">
							<div className="bg-white rounded-[25px] px-7 py-6 min-w-[190px] max-h-35 ">
								<BarChart3
									size={28}
									className="text-orange-500 mb-4"
								/>

								<p className="text-3xl font-black">4.7+</p>

								<p className="text-gray-500 mt-1">
									Average rating
								</p>
							</div>

							<div className="bg-orange-500 rounded-[25px] px-7 py-6 min-w-[190px] max-h-35 text-white">
								<TrendingUp size={28} className="mb-4" />

								<p className="text-3xl font-black">10K+</p>

								<p className="text-orange-100 mt-1">
									Happy shoppers
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    PRODUCT SECTION
			===================================================== */}
			<section className="px-6 md:px-10 lg:px-12 pb-20">
				<div className="max-w-[1800px] mx-auto">
					{/* Section heading */}
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
						<div>
							<div className="flex items-center gap-2 text-orange-500 font-semibold mb-2">
								<TrendingUp size={19} />
								<span>POPULAR PICKS</span>
							</div>

							<h2 className="text-[34px] md:text-[42px] font-black tracking-[-1.5px]">
								Our Best Sellers
							</h2>

							<p className="text-gray-500 text-lg mt-2">
								Products shoppers keep coming back for.
							</p>
						</div>

						<button className="flex items-center gap-2 font-bold text-[17px] hover:text-orange-500 transition">
							View all products
							<ArrowRight size={20} />
						</button>
					</div>

					{/* =================================================
					    PRODUCT GRID
					================================================= */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
						{bestSellerProducts.map((product, index) => {
							const discount =
								product.originalPrice &&
									product.originalPrice > product.price
									? Math.round(
										((product.originalPrice -
											product.price) /
											product.originalPrice) *
										100,
									)
									: null;
							const wishlisted = isWishlisted(product.id);

							return (
								<div
									key={product.id}
									className="group bg-white border border-gray-200 rounded-[25px] overflow-hidden hover:shadow-xl transition-all duration-300"
								>
									{/* IMAGE */}
									<div className="relative bg-[#f5f6f7] h-[300px] overflow-hidden">
										<img
											src={product.image}
											alt={product.name}
											className="w-full h-64 object-cover"
										/>

										{/* Rank */}
										<div className="absolute top-4 left-4 flex items-center gap-2 bg-[#101111] text-white px-3 py-2 rounded-full text-sm font-bold">
											<Trophy size={15} />#{index + 1}{" "}
											Best Seller
										</div>

										{/* Discount */}
										{discount && (
											<span className="absolute top-65 left-3 bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded">
												{discount}% OFF
											</span>
										)}

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

									{/* PRODUCT INFO */}

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
												({product.discountPercentage}%
												OFF)
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
				</div>
			</section>
		</div>
	);
};

export default BestSellers;
