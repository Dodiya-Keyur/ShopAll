import { Heart, ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { wishlistAction } from "../store/Whishlist";

function Wishlist() {
	const dispatch = useDispatch();

	// Get wishlist directly from Redux
	const wishlists = useSelector((store) => store.wishlist.wishlists);

	// Remove single product
	const removeFromWishlist = (id) => {
		dispatch(wishlistAction.removeFromWishlist(id));
	};

	// Clear entire wishlist
	const clearWishlist = () => {
		dispatch(wishlistAction.clearWishlist());
	};

	// Add product to bag
	const addToBag = (product) => {
		alert(`${product.name} added to your bag`);
	};

	return (
		<div className="min-h-screen bg-gray-50 -mt-20 lg:-mt-0">
			
			{/* Header */}
			<div className="bg-white border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
								My Wishlist
							</h1>

							<p className="mt-1 text-sm text-gray-500">
								{wishlists.length}{" "}
								{wishlists.length === 1 ? "item" : "items"}{" "}
								saved
							</p>
						</div>

						{/* Desktop Clear Wishlist */}
						{wishlists.length > 0 && (
							<button
								onClick={clearWishlist}
								className="hidden sm:flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 transition"
							>
								<Trash2 size={18} />
								Clear Wishlist
							</button>
						)}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{wishlists.length === 0 ? (
					/* Empty Wishlist */
					<div className="min-h-[500px] flex items-center justify-center">
						<div className="text-center max-w-md">
							<div className="w-24 h-24 mx-auto mb-6 rounded-full bg-pink-50 flex items-center justify-center">
								<Heart
									size={42}
									className="text-pink-500"
									strokeWidth={1.7}
								/>
							</div>

							<h2 className="text-2xl font-bold text-gray-900">
								Your Wishlist is Empty
							</h2>

							<p className="mt-3 text-gray-500 leading-6">
								Save your favorite products here and come back
								to them whenever you want.
							</p>

							<Link
								to="/"
								className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
							>
								<ArrowLeft size={18} />
								Continue Shopping
							</Link>
						</div>
					</div>
				) : (
					<>
						{/* Mobile Clear Wishlist */}
						<div className="flex justify-end mb-5 sm:hidden">
							<button
								onClick={clearWishlist}
								className="flex items-center gap-2 text-sm font-medium text-red-500"
							>
								<Trash2 size={17} />
								Clear Wishlist
							</button>
						</div>

						{/* Wishlist Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{wishlists.map((product) => (
								<div
									key={product.id}
									className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
								>
									{/* Product Image */}
									<div className="relative bg-gray-100">
										<img
											src={product.image}
											alt={product.name}
											className="w-full h-64 object-cover"
										/>

										{/* Discount Badge */}
										<span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded">
											{product.discount}% OFF
										</span>

										{/* Remove Heart Button */}
										<button
											onClick={() =>
												removeFromWishlist(product.id)
											}
											aria-label={`Remove ${product.name} from wishlist`}
											className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-100 transition"
										>
											<Heart
												size={20}
												className="fill-red-500 text-red-500"
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
											onClick={() => addToBag(product)}
											className="w-full mt-5 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 active:scale-[0.98] transition"
										>
											<ShoppingBag size={18} />
											Add to Bag
										</button>

										{/* Remove */}
										<button
											onClick={() =>
												removeFromWishlist(product.id)
											}
											className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-red-500 transition"
										>
											<Trash2 size={16} />
											Remove
										</button>
									</div>
								</div>
							))}
						</div>

						{/* Continue Shopping */}
						<div className="flex justify-center mt-10">
							<Link
								to="/"
								className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 bg-white rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
							>
								<ArrowLeft size={18} />
								Continue Shopping
							</Link>
						</div>
					</>
				)}
			</main>
		</div>
	);
}

export default Wishlist;
