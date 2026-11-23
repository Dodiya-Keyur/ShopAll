import React from "react";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { wishlistAction } from "../store/Whishlist";
import { cartAction } from "../store/cartSlice";

const ProductCard = ({ product }) => {

	const dispatch = useDispatch();

	// Get wishlist products from Redux
	const wishlists = useSelector((store) => store.wishlist.wishlists);

	if (!product) {
		return null;
	}

	// Check whether product is already in wishlist
	const isWishlisted = wishlists.some((item) => item.id === product.id);

	// Add / Remove Wishlist
	const handleWishlist = () => {
		if (isWishlisted) {
			dispatch(wishlistAction.removeFromWishlist(product.id));
		} else {
			dispatch(wishlistAction.addToWishlist(product));
		}
	};

	const handleAddToCart = () => {
		dispatch(cartAction.addToCart(product));
	};

	return (
		<div className="group relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
			{/* Product Image */}
			<div className="relative h-[260px] overflow-hidden bg-gray-100">
				<Link to={`/product/${product.id}`}>
					<img
						src={product.image}
						alt={product.name}
						className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</Link>

				{/* Wishlist */}
				<button
					onClick={handleWishlist}
					aria-label={
						isWishlisted
							? "Remove from wishlist"
							: "Add to wishlist"
					}
					className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110"
				>
					<Heart
						size={19}
						className={
							isWishlisted
								? "fill-red-500 text-red-500"
								: "text-gray-700"
						}
					/>
				</button>

				{/* Discount */}
				{product.discountPercentage > 0 && (
					<div className="absolute bottom-3 left-3 rounded-md bg-green-600 px-2.5 py-1 text-xs font-semibold text-white">
						{product.discountPercentage}% OFF
					</div>
				)}
			</div>

			{/* Product Details */}
			<div className="p-4">
				{/* Company */}
				<p className="mb-1 text-sm text-gray-500">{product.company}</p>

				{/* Product Name */}
				<Link to={`/product/${product.id}`}>
					<h3 className="mt-1 min-h-[48px] line-clamp-2 text-base font-semibold text-gray-900">
						{product.name}
					</h3>
				</Link>

				{/* Rating */}
				<div className="mt-2 flex items-center gap-2">
					<div className="flex items-center gap-1 rounded-md bg-green-600 px-2 py-1">
						<span className="text-xs font-semibold text-white">
							{product.rating}
						</span>

						<Star
							size={11}
							className="fill-yellow-400 text-yellow-400"
						/>
					</div>

					<span className="text-xs text-gray-500">
						({product.totalRatings?.toLocaleString() || 0} ratings)
					</span>
				</div>

				{/* Price */}
				<div className="mt-3 flex flex-wrap items-center gap-2">
					<span className="text-lg font-bold text-gray-900">
						₹{product.price?.toLocaleString() || 0}
					</span>

					<span className="text-sm text-gray-500 line-through">
						₹{product.originalPrice?.toLocaleString() || 0}
					</span>

					<span className="text-sm font-semibold text-green-600">
						{product.discountPercentage || 0}% off
					</span>
				</div>

				{/* Add To Bag */}
				<button
					onClick={handleAddToCart}
					className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-black px-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 active:scale-[0.98]"
				>
					<ShoppingBag size={17} />
					Add to Bag
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
