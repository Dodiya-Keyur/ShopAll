import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
	ArrowLeft,
	Heart,
	ShoppingBag,
	BadgeCheck,
	ThumbsUp,
	Star,
	Minus,
	Plus,
	X,
	Check,
	ChevronRight,
	Tag,
	PackageCheck,
	Truck,
	ShieldCheck,
	Store,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartSlice";

import { products } from "../data/products";
import { wishlistAction } from "../store/Whishlist";

export default function Product() {

	const { productId } = useParams(); //product id
	const dispatch = useDispatch();


	/* =========================================================
	   FIND PRODUCT
	========================================================= */

	const product = useMemo(() => {
		return products.find((item) => String(item.id) === String(productId));
	}, [productId]);



	// Get wishlist products from Redux
	const wishlists = useSelector((store) => store.wishlist.wishlists);

	// Check whether product is already in wishlist
	const isWishlisted = wishlists.some((item) => String(item.id) === String(productId));


	// Add / Remove Wishlist
	const handleWishlist = () => {
		if (!product) return;

		if (isWishlisted) {
			dispatch(wishlistAction.removeFromWishlist(product.id));
		} else {
			dispatch(wishlistAction.addToWishlist(product));
		}
	};





	/* =========================================================
	   PRODUCT OPTIONS
	========================================================= */

	const colors = product?.colors ?? [];
	const sizes = product?.sizes ?? [];
	const variants = product?.variants ?? [];

	/* =========================================================
	   STATES
	========================================================= */

	const [selectedColor, setSelectedColor] = useState(
		colors.length > 0 ? colors[0].name : "",
	);

	const [selectedSize, setSelectedSize] = useState(
		sizes.length > 0 ? sizes[0] : "",
	);

	const [selectedVariant, setSelectedVariant] = useState(
		variants.length > 0 ? variants[0].name : "",
	);

	const [selectedImage, setSelectedImage] = useState(
		product?.images?.[0] || product?.image || "",
	);

	const [quantity, setQuantity] = useState(1);

	const initialReviews = [
		{
			id: 1,
			userId: 1,
			name: "Rahul Patel",
			rating: 5,
			title: "Excellent product",
			text: "Really happy with this purchase. The build quality is excellent and it feels very premium. Would buy again without hesitation.",
			date: "2 weeks ago",
			helpful: 12,
			verifiedPurchase: true,
		},
		{
			id: 2,
			userId: 2,
			name: "Priya Shah",
			rating: 4,
			title: "Good quality, fast delivery",
			text: "Good product for the price. Delivery was also fast and the product arrived safely packaged.",
			date: "1 month ago",
			helpful: 5,
			verifiedPurchase: true,
		},
		{
			id: 3,
			userId: 3,
			name: "Aman Verma",
			rating: 5,
			title: "Exceeded expectations",
			text: "Wasn't expecting much at this price point but it is genuinely impressive. Great finish and performance.",
			date: "1 month ago",
			helpful: 3,
			verifiedPurchase: true,
		},
	];

	const currentUser = { name: "Admin" };

	const [reviews, setReviews] = useState(initialReviews);
	const [likedReviews, setLikedReviews] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [form, setForm] = useState({
		rating: 5,
		title: "",
		text: "",
	});
	const [error, setError] = useState("");

	/* =========================================================
	   PRODUCT NOT FOUND
	========================================================= */

	if (!product) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
				<div className="text-center">
					<div className="text-7xl font-black text-gray-900">404</div>

					<h1 className="text-2xl font-bold mt-5">
						Product Not Found
					</h1>

					<p className="text-gray-500 mt-2">
						The product you're looking for doesn't exist.
					</p>

					<Link
						to="/"
						className="inline-flex items-center gap-2 mt-7 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800"
					>
						<ArrowLeft size={18} />
						Back to Home
					</Link>
				</div>
			</div>
		);
	}

	/* =========================================================
	   CURRENT COLOR
	========================================================= */

	const currentColor =
		colors.find((color) => color.name === selectedColor) ||
		colors[0] ||
		null;

	/* =========================================================
	   CURRENT VARIANT
	========================================================= */

	const currentVariant =
		variants.find((variant) => variant.name === selectedVariant) ||
		variants[0] ||
		null;

	/* =========================================================
	   CURRENT PRICE
	========================================================= */

	const currentPrice =
		currentVariant?.price ?? currentColor?.price ?? product?.price ?? 0;

	const currentOriginalPrice =
		currentVariant?.originalPrice ??
		currentColor?.originalPrice ??
		product?.originalPrice ??
		currentPrice;

	/* =========================================================
	   DISCOUNT
	========================================================= */

	const discount =
		currentOriginalPrice > currentPrice
			? Math.round(
				((currentOriginalPrice - currentPrice) /
					currentOriginalPrice) *
				100,
			)
			: 0;

	/* =========================================================
	   IMAGES
	========================================================= */

	const productImages =
		product.images?.length > 0
			? product.images
			: colors
				.map((color) => color.image)
				.filter(Boolean)
				.slice(0, 6);

	const images = productImages.length > 0 ? productImages : [product.image];

	/* =========================================================
	   REVIEW FUNCTIONS
	========================================================= */

	const toggleHelpful = (reviewId) => {
		setLikedReviews((prev) =>
			prev.includes(reviewId)
				? prev.filter((id) => id !== reviewId)
				: [...prev, reviewId],
		);
	};

	const handleSubmitReview = () => {
		if (!form.title.trim() || !form.text.trim()) {
			setError("Add a title and a few words about your experience.");
			return;
		}

		const newReview = {
			id: Date.now(),
			userId: currentUser.id,
			name: currentUser.name,
			rating: form.rating,
			title: form.title.trim(),
			text: form.text.trim(),
			date: "Just now",
			helpful: 0,
			verifiedPurchase: true,
		};

		setReviews((prev) => [newReview, ...prev]);

		setForm({
			rating: 5,
			title: "",
			text: "",
		});

		setError("");
		setShowForm(false);
	};

	const deleteReview = (reviewId) => {
		setReviews((prev) => prev.filter((review) => review.id !== reviewId));

		setLikedReviews((prev) => prev.filter((id) => id !== reviewId));
	};

	/* =========================================================
	   RATING BREAKDOWN
	========================================================= */

	const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => {
		const count = reviews.filter((review) => review.rating === star).length;

		const percentage = reviews.length
			? Math.round((count / reviews.length) * 100)
			: 0;

		return {
			star,
			count,
			percentage,
		};
	});

	/* =========================================================
	   RENDER
	========================================================= */

	return (
		<div className="min-h-screen bg-white text-gray-900 -mt-20 lg:mt-0">
			{/* =====================================================
			BREADCRUMB
		===================================================== */}

			<div className="border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
						<Link
							to="/"
							className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
						>
							Home
						</Link>

						<ChevronRight size={14} className="text-gray-400" />

						<Link
							to={`/categories/${product.Category}`}
							className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
						>
							<span>{product.Category || "Products"}</span>
						</Link>

						<ChevronRight size={14} className="text-gray-400" />

						<Link
							to={`/categories/${product.Category}/${product.subcategory}`}
							className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
						>
							<span>{product.subcategory || "Products"}</span>
						</Link>

						<ChevronRight size={14} className="text-gray-400" />

						<span className="text-sm font-bold text-gray-950">
							{product.name}
						</span>
					</div>
				</div>
			</div>

			{/* =====================================================
			    PRODUCT AREA
			===================================================== */}

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				{/* Continue Shopping */}

				<Link
					to="/"
					className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:text-gray-500"
				>
					<ArrowLeft size={17} />
					Continue Shopping
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-[90px_minmax(0,1fr)_minmax(420px,0.9fr)] gap-5">
					{/* =================================================
					    IMAGE THUMBNAILS
					================================================= */}

					<div className="order-2 lg:order-1 flex lg:flex-col gap-3 overflow-x-auto">
						{images.map((image, index) => (
							<button
								key={`${image}-${index}`}
								onClick={() => setSelectedImage(image)}
								className={`w-20 h-20 lg:w-[82px] lg:h-[82px] shrink-0 rounded-xl border-2 p-2 bg-gray-50 transition ${selectedImage === image
										? "border-black"
										: "border-gray-200 hover:border-gray-400"
									}`}
							>
								<img
									src={image}
									alt={`${product.name} ${index + 1}`}
									className="w-full h-full object-contain"
								/>
							</button>
						))}
					</div>

					{/* =================================================
					    MAIN IMAGE
					================================================= */}

					<div className="order-1 lg:order-2">
						<div className="relative bg-gray-50 rounded-2xl h-[430px] sm:h-[560px] flex items-center justify-center overflow-hidden">
							{/* Discount */}

							{discount > 0 && (
								<div className="absolute top-5 left-5 z-10 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
									{discount}% OFF
								</div>
							)}

							{/* Wishlist */}

							<button
								onClick={handleWishlist}
								className="absolute top-5 right-5 z-10 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition"
								aria-label={
									isWishlisted ? "Remove from wishlist" : "Add to wishlist"
								}
							>
								<Heart
									size={21}
									fill={isWishlisted ? "currentColor" : "none"}
									className={
										isWishlisted
											? "text-red-500"
											: "text-gray-700"
									}
								/>
							</button>

							<img
								src={selectedImage || product.image}
								alt={product.name}
								className="w-full h-full object-contain p-8"
							/>
						</div>
					</div>

					{/* =================================================
					    PRODUCT INFORMATION
					================================================= */}

					<div className="order-3">
						{/* Brand */}

						<p className="text-sm text-gray-500 font-semibold">
							{product.company || product.brand}
						</p>

						{/* Product Name */}

						<h1 className="text-2xl sm:text-3xl font-semibold leading-tight mt-2">
							{product.name}
						</h1>

						{/* Product Type */}

						{product.productType && (
							<p className="text-sm text-gray-500 mt-2">
								{product.productType}
							</p>
						)}

						{/* Rating */}

						<div className="flex items-center gap-3 mt-4">
							<div className="flex items-center gap-1 bg-green-600 text-white px-2.5 py-1 rounded-md">
								<span className="font-bold text-sm">
									{product.rating}
								</span>

								<Star
									size={14}
									className="fill-yellow-400 text-yellow-400"
								/>
							</div>

							<span className="text-sm text-gray-500">
								{product.totalRatings?.toLocaleString()} Ratings
							</span>

							{product.totalReviews && (
								<>
									<span className="text-gray-300">•</span>

									<span className="text-sm text-gray-500">
										{product.totalReviews.toLocaleString()}{" "}
										Reviews
									</span>
								</>
							)}
						</div>

						{/* =================================================
						    BADGES
						================================================= */}

						<div className="flex flex-wrap gap-2 mt-4">
							{product.isBestSeller && (
								<span className="px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
									Best Seller
								</span>
							)}

							{product.isDeal && (
								<span className="px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold">
									Deal
								</span>
							)}

							{product.isNew && (
								<span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
									New
								</span>
							)}

							{product.isFeatured && (
								<span className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
									Featured
								</span>
							)}
						</div>

						{/* =================================================
						    SHORT DESCRIPTION
						================================================= */}

						{product.shortDescription && (
							<p className="text-gray-600 leading-6 mt-5">
								{product.shortDescription}
							</p>
						)}

						<div className="border-t border-gray-200 my-5" />

						{/* =================================================
						    PRICE
						================================================= */}

						<div>
							<div className="flex items-center gap-3 flex-wrap">
								<span className="text-3xl font-bold">
									₹{currentPrice.toLocaleString()}
								</span>

								{currentOriginalPrice && (
									<span className="text-lg text-gray-400 line-through">
										₹{currentOriginalPrice.toLocaleString()}
									</span>
								)}

								{discount > 0 && (
									<span className="font-bold text-green-600">
										{discount}% off
									</span>
								)}
							</div>

							<p className="text-sm text-gray-500 mt-1">
								Inclusive of all taxes
							</p>
						</div>

						{/* =================================================
						    COLORS
						================================================= */}

						{colors.length > 0 && (
							<div className="mt-6">
								<p className="font-bold mb-3">
									Color:{" "}
									<span className="font-normal">
										{selectedColor}
									</span>
								</p>

								<div className="flex flex-wrap gap-3">
									{colors.map((color) => (
										<button
											key={color.id}
											onClick={() => {
												setSelectedColor(color.name);

												if (color.image) {
													setSelectedImage(
														color.image,
													);
												}
											}}
											className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition ${selectedColor === color.name
													? "border-black bg-gray-100"
													: "border-gray-300 hover:border-gray-500"
												}`}
										>
											{color.image && (
												<img
													src={color.image}
													alt={color.name}
													className="w-8 h-8 rounded-lg object-cover"
												/>
											)}

											<span>{color.name}</span>
										</button>
									))}
								</div>
							</div>
						)}

						{/* =================================================
						    SIZE
						================================================= */}

						{sizes.length > 0 && (
							<div className="mt-6">
								<p className="font-bold mb-3">
									Size:{" "}
									<span className="font-normal">
										{selectedSize}
									</span>
								</p>

								<div className="flex flex-wrap gap-3">
									{sizes.map((size) => (
										<button
											key={size}
											onClick={() =>
												setSelectedSize(size)
											}
											className={`px-5 py-3 rounded-xl border-2 font-semibold transition ${selectedSize === size
													? "border-black bg-black text-white"
													: "border-gray-300 hover:border-black"
												}`}
										>
											{size}
										</button>
									))}
								</div>
							</div>
						)}

						{/* =================================================
						    STOCK
						================================================= */}

						<div className="mt-5">
							{currentVariant?.inStock === false ||
								product.inStock === false ? (
								<div className="text-red-600 font-semibold">
									Out of Stock
								</div>
							) : (
								<div className="flex items-center gap-2 text-green-600 font-semibold">
									<PackageCheck size={18} />
									In Stock
									{currentVariant?.stock && (
										<span className="text-gray-500 font-normal text-sm">
											•{currentVariant.stock} left
										</span>
									)}
								</div>
							)}
						</div>

						{/* =================================================
						    VARIANTS
						================================================= */}

						{variants.length > 0 && (
							<div className="mt-6">
								<p className="font-bold mb-3">
									Storage / Size:{" "}
									<span className="font-normal">
										{selectedVariant}
									</span>
								</p>

								<div className="flex flex-wrap gap-3">
									{variants.map((variant) => (
										<button
											key={variant.id}
											disabled={variant.inStock === false}
											onClick={() =>
												setSelectedVariant(variant.name)
											}
											className={`px-5 py-3 rounded-xl border-2 font-semibold transition ${selectedVariant === variant.name
													? "border-black bg-black text-white"
													: "border-gray-300 hover:border-black"
												} ${variant.inStock === false
													? "opacity-40 cursor-not-allowed"
													: ""
												}`}
										>
											{variant.name}
										</button>
									))}
								</div>
							</div>
						)}

						{/* =================================================
						    OFFERS
						================================================= */}

						{product.offers?.length > 0 && (
							<div className="mt-6">
								<div className="flex items-center gap-2 mb-3">
									<Tag size={18} />
									<h3 className="font-bold text-lg">
										Available Offers
									</h3>
								</div>

								<div className="space-y-2">
									{product.offers.map((offer, index) => (
										<div
											key={index}
											className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 bg-gray-50"
										>
											<div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
												<Tag size={15} />
											</div>

											<div>
												<p className="font-semibold text-sm">
													{offer.title}
												</p>

												<p className="text-sm text-gray-500 mt-1">
													{offer.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						)}

						{/* =================================================
						    QUANTITY
						================================================= */}

						<div className="mt-3">
							<p className="font-bold mb-3">Quantity</p>

							<div className="inline-flex items-center border border-gray-300 rounded-xl overflow-hidden">
								<button
									onClick={() =>
										setQuantity(Math.max(1, quantity - 1))
									}
									disabled={quantity === 1}
									className="w-11 h-11 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
								>
									<Minus size={17} />
								</button>

								<div className="w-12 text-center font-bold">
									{quantity}
								</div>

								<button
									onClick={() =>
										setQuantity(Math.min(10, quantity + 1))
									}
									className="w-11 h-11 flex items-center justify-center hover:bg-gray-100"
								>
									<Plus size={17} />
								</button>
							</div>
						</div>

						{/* =================================================
						    BUY BUTTONS
						================================================= */}

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">

							<button
								disabled={
									product?.inStock === false ||
									currentVariant?.inStock === false
								}
								onClick={() => {
									dispatch(
										cartAction.addToCart({
											...product,

											// Selected options
											selectedColor,
											selectedSize,
											selectedVariant,

											// Selected product values
											price: currentPrice,
											originalPrice: currentOriginalPrice,

											// Quantity selected by user
											quantity,
										}),
									);
								}}
								className="h-12 flex items-center justify-center gap-2 border-2 border-black rounded-xl font-bold hover:bg-gray-100 transition disabled:opacity-50"
							>
								<ShoppingBag size={20} />
								Add to Cart
							</button>

							<button
								disabled={product.inStock === false}
								className="h-12 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 rounded-xl font-bold transition disabled:opacity-50"
							>
								Buy Now
							</button>
						</div>

						{/* =================================================
						    WISHLIST
						================================================= */}

						<button
							onClick={() => handleWishlist()}
							className="w-full h-12 mt-3 border border-gray-300 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-gray-100"
						>
							<Heart
								size={18}
								fill={isWishlisted ? "currentColor" : "none"}
								className={
									isWishlisted
										? "text-red-500"
										: "text-gray-700"
								}
							/>

							{isWishlisted
								? "Added to Wishlist"
								: "Add to Wishlist"}
						</button>

						{/* =================================================
						    WARRANTY
						================================================= */}

						{product.warranty?.available && (
							<div className="mt-4 flex items-start gap-3 border border-gray-200 rounded-2xl p-5">
								<ShieldCheck
									size={23}
									className="text-green-600 shrink-0"
								/>

								<div>
									<p className="font-semibold">
										{product.warranty.duration} Warranty
									</p>

									<p className="text-sm text-gray-500 mt-1">
										{product.warranty.type}
									</p>
								</div>
							</div>
						)}

						{/* =================================================
						    SELLER
						================================================= */}

						{product.seller && (
							<div className="mt-4 border border-gray-200 rounded-2xl p-5">
								<div className="flex items-center gap-2 mb-4">
									<Store size={20} />
									<h3 className="font-bold text-lg">
										Seller Information
									</h3>
								</div>

								<div className="flex items-center justify-between gap-4">
									<div>
										<p className="font-semibold text-lg">
											{product.seller.name}
										</p>

										{product.seller.verified && (
											<div className="flex items-center gap-1 text-green-600 text-sm mt-1">
												<BadgeCheck size={15} />
												Verified Seller
											</div>
										)}
									</div>

									<div className="text-right">
										<div className="flex items-center justify-end gap-1">
											<span className="font-bold">
												{product.seller.rating}
											</span>

											<Star
												size={15}
												className="fill-yellow-500 text-yellow-500"
											/>
										</div>

										<p className="text-xs text-gray-500 mt-1">
											{product.seller.totalRatings?.toLocaleString()}{" "}
											Ratings
										</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* =====================================================
				    PRODUCT DETAILS
				===================================================== */}

				<div className="mt-12 border-t border-gray-200 pt-10">
					<h2 className="text-2xl font-bold">Product Details</h2>

					{product.shortDescription && (
						<p className="text-gray-600 leading-7 mt-4">
							{product.shortDescription}
						</p>
					)}

					<div className="mt-5 text-gray-700 leading-7 whitespace-pre-line">
						{product.description ||
							`Discover the ${product.name} from ${product.company}.`}
					</div>
				</div>

				{/* =====================================================
				    SPECIFICATIONS
				===================================================== */}

				{product.specifications && (
					<div className="mt-12 border-t border-gray-200 pt-10">
						<h2 className="text-2xl font-bold mb-6">
							Specifications
						</h2>

						<div className="border border-gray-200 rounded-2xl overflow-hidden">
							{Object.entries(product.specifications).map(
								([section, values]) => (
									<div
										key={section}
										className="border-b border-gray-200 last:border-b-0"
									>
										<div className="bg-gray-50 px-5 py-4">
											<h3 className="font-bold capitalize">
												{section.replace(
													/([A-Z])/g,
													" $1",
												)}
											</h3>
										</div>

										<div className="divide-y divide-gray-100">
											{typeof values === "object" &&
												!Array.isArray(values) ? (
												Object.entries(values).map(
													([key, value]) => (
														<div
															key={key}
															className="grid grid-cols-1 sm:grid-cols-2 px-5 py-4 gap-2"
														>
															<span className="text-gray-500 capitalize">
																{key.replace(
																	/([A-Z])/g,
																	" $1",
																)}
															</span>

															<span className="font-medium">
																{Array.isArray(
																	value,
																)
																	? value.join(
																		", ",
																	)
																	: value}
															</span>
														</div>
													),
												)
											) : (
												<div className="px-5 py-4">
													{Array.isArray(values)
														? values.join(", ")
														: values}
												</div>
											)}
										</div>
									</div>
								),
							)}
						</div>
					</div>
				)}

				{/* =====================================================
				    TAGS
				===================================================== */}

				{product.tags?.length > 0 && (
					<div className="mt-8">
						<h3 className="font-bold mb-3">Product Tags</h3>

						<div className="flex flex-wrap gap-2">
							{product.tags.map((tag) => (
								<span
									key={tag}
									className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-sm"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				)}

				{/* =====================================================
				    CUSTOMER REVIEWS
				===================================================== */}

				<div className="mt-12 border-t border-gray-200 pt-10 pb-16">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
						<div>
							<h2 className="text-2xl font-bold">
								Customer Reviews
							</h2>

							<p className="text-sm text-gray-500 mt-1">
								What customers say about this product
							</p>
						</div>

						<button
							onClick={() => {
								setShowForm(true);
								setError("");
							}}
							className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800"
						>
							Write a Review
						</button>
					</div>

					{/* =================================================
					    REVIEW SUMMARY
					================================================= */}

					<div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
						<div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
							{/* Overall Rating */}

							<div className="flex flex-col items-center justify-center">
								<div className="text-6xl font-bold">
									{product.rating}
								</div>

								<div className="flex gap-1 mt-3">
									{[1, 2, 3, 4, 5].map((star) => (
										<Star
											key={star}
											size={19}
											className={
												star <=
													Math.round(product.rating)
													? "text-yellow-500"
													: "text-gray-300"
											}
											fill={
												star <=
													Math.round(product.rating)
													? "currentColor"
													: "none"
											}
										/>
									))}
								</div>

								<p className="text-sm text-gray-500 mt-2">
									{product.totalRatings?.toLocaleString()}{" "}
									Ratings
								</p>

								<p className="text-sm text-gray-500">
									{product.totalReviews?.toLocaleString()}{" "}
									Reviews
								</p>
							</div>

							{/* Rating Breakdown */}

							<div className="flex flex-col justify-center gap-3">
								{ratingBreakdown.map((item) => (
									<div
										key={item.star}
										className="flex items-center gap-3"
									>
										<span className="w-5 text-sm text-gray-500">
											{item.star}★
										</span>

										<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-gray-900 rounded-full transition-all"
												style={{
													width: `${item.percentage}%`,
												}}
											/>
										</div>

										<span className="w-10 text-right text-xs text-gray-400">
											{item.percentage}%
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* =================================================
					    REVIEW LIST
					================================================= */}

					<div className="mt-3">
						{reviews.length === 0 ? (
							<div className="text-center py-12 text-gray-500">
								No reviews yet.
							</div>
						) : (
							reviews.map((review) => (
								<div
									key={review.id}
									className="py-7 border-b border-gray-100"
								>
									<div className="flex items-start justify-between gap-4">
										<div className="flex items-center gap-3">
											<div className="w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
												{review.name.charAt(0)}
											</div>

											<div>
												<div className="flex items-center gap-1.5">
													<p className="font-semibold">
														{review.name}
													</p>

													{review.verifiedPurchase && (
														<BadgeCheck
															size={15}
															className="text-green-600"
														/>
													)}
												</div>

												<p className="text-xs text-gray-400 mt-1">
													{review.verifiedPurchase
														? "Verified Purchase"
														: "Customer"}{" "}
													• {review.date}
												</p>
											</div>
										</div>

										<div className="flex gap-0.5">
											{[1, 2, 3, 4, 5].map((star) => (
												<Star
													key={star}
													size={15}
													className={
														star <= review.rating
															? "text-yellow-500"
															: "text-gray-300"
													}
													fill={
														star <= review.rating
															? "currentColor"
															: "none"
													}
												/>
											))}
										</div>
									</div>

									<h3 className="font-semibold mt-4">
										{review.title}
									</h3>

									<p className="text-gray-500 mt-2 leading-6 text-sm">
										{review.text}
									</p>

									<div className="flex items-center gap-3 mt-4">
										<button
											onClick={() =>
												toggleHelpful(review.id)
											}
											className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition ${likedReviews.includes(review.id)
													? "border-gray-900 bg-gray-900 text-white"
													: "border-gray-200 text-gray-500 hover:border-gray-400"
												}`}
										>
											<ThumbsUp size={13} />
											Helpful (
											{review.helpful +
												(likedReviews.includes(
													review.id,
												)
													? 1
													: 0)}
											)
										</button>

										{/* Delete only own review */}

										{review.userId === currentUser.id && (
											<button
												onClick={() =>
													deleteReview(review.id)
												}
												className="text-xs text-red-500 hover:text-red-700 font-medium"
											>
												Delete
											</button>
										)}
									</div>
								</div>
							))
						)}
					</div>

					{/* =================================================
					    WRITE REVIEW MODAL
					================================================= */}

					{showForm && (
						<div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
							<div className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md p-6 sm:p-7 relative max-h-[90vh] overflow-y-auto">
								<div className="flex items-center justify-between mb-3">
									<h3 className="text-lg font-bold tracking-tight">
										Write a Review
									</h3>
									<button
										onClick={() => setShowForm(false)}
										className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
									>
										<X size={18} />
									</button>
								</div>

								{/* Posting as */}
								<div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100">
									<div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm shrink-0">
										{(currentUser?.name || "Guest").charAt(
											0,
										)}
									</div>
									<div>
										<p className="text-xs text-gray-400">
											Posting as
										</p>
										<p className="text-sm font-semibold">
											{currentUser?.name || "Guest"}
										</p>
									</div>
								</div>

								{/* Rating */}
								<div className="mb-4">
									<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
										Your rating
									</p>
									<div className="flex items-center gap-2">
										{[1, 2, 3, 4, 5].map((star) => (
											<Star
												key={star}
												size={30}
												className={
													star <= form.rating
														? "text-yellow-500 cursor-pointer transition-transform hover:scale-110"
														: "text-gray-200 cursor-pointer transition-transform hover:scale-110"
												}
												fill={
													star <= form.rating
														? "currentColor"
														: "none"
												}
												strokeWidth={1.5}
												onClick={() =>
													setForm((f) => ({
														...f,
														rating: star,
													}))
												}
											/>
										))}
									</div>
								</div>

								{/* Title */}
								<div className="mb-3">
									<label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
										Review title
									</label>
									<input
										type="text"
										placeholder="Sum it up in a few words"
										value={form.title}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												title: e.target.value,
											}))
										}
										className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
									/>
								</div>

								{/* Review text */}
								<div className="mb-2">
									<div className="flex items-center justify-between mb-2">
										<label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
											Your review
										</label>
										<span className="text-xs text-gray-300 tabular-nums">
											{form.text.length}/500
										</span>
									</div>
									<textarea
										placeholder="What did you like or dislike? What did you use it for?"
										value={form.text}
										maxLength={500}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												text: e.target.value,
											}))
										}
										rows={4}
										className="w-full h-20 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors resize-none"
									/>
								</div>

								{error && (
									<p className="text-xs text-red-500 mt-2">
										{error}
									</p>
								)}

								<div className="flex gap-3 mt-6">
									<button
										onClick={() => setShowForm(false)}
										className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
									>
										Cancel
									</button>
									<button
										onClick={handleSubmitReview}
										className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
									>
										Submit Review
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
