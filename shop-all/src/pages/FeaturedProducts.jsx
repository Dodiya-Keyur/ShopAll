import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
	ArrowRight,
	ChevronDown,
	ChevronRight,
	Filter,
	Grid3X3,
	List,
	Search,
	SlidersHorizontal,
	Star,
	X,
} from "lucide-react";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

/* =========================================================
   SORT OPTIONS
========================================================= */

const sortOptions = [
	{
		value: "featured",
		label: "Featured",
	},
	{
		value: "popular",
		label: "Popular",
	},
	{
		value: "rating",
		label: "Top Rated",
	},
	{
		value: "price-low",
		label: "Price: Low to High",
	},
	{
		value: "price-high",
		label: "Price: High to Low",
	},
	{
		value: "discount",
		label: "Best Discount",
	},
];

/* =========================================================
   FEATURED PRODUCTS
========================================================= */

function FeaturedProducts() {
	/* =====================================================
	   STATES
	===================================================== */

	const [sortBy, setSortBy] = useState("featured");

	const [selectedRating, setSelectedRating] = useState(0);

	const [selectedBrand, setSelectedBrand] = useState([]);

	const [selectedDiscount, setSelectedDiscount] = useState(0);

	const [maxPrice, setMaxPrice] = useState(1000000);

	const [brandSearch, setBrandSearch] = useState("");

	const [mobileFilters, setMobileFilters] = useState(false);

	const [viewMode, setViewMode] = useState("grid");

	const [sortOpen, setSortOpen] = useState(false);

	/* =====================================================
	   GET DISCOUNT
	===================================================== */

	const getDiscount = (product) => {
		if (product.discount !== undefined && product.discount !== null) {
			return Number(product.discount);
		}

		if (
			product.discountPercentage !== undefined &&
			product.discountPercentage !== null
		) {
			return Number(product.discountPercentage);
		}

		if (
			product.discount_percentage !== undefined &&
			product.discount_percentage !== null
		) {
			return Number(product.discount_percentage);
		}

		if (
			product.originalPrice &&
			product.price &&
			Number(product.originalPrice) > Number(product.price)
		) {
			return Math.round(
				((Number(product.originalPrice) - Number(product.price)) /
					Number(product.originalPrice)) *
					100,
			);
		}

		return 0;
	};

	/* =====================================================
	   BRANDS
	===================================================== */

	const brands = useMemo(() => {
		const brandList = products
			.map((product) => product.company)
			.filter(Boolean);

		return [...new Set(brandList)];
	}, []);

	/* =====================================================
	   SEARCH BRANDS
	===================================================== */

	const filteredBrands = brands.filter((brand) =>
		brand.toLowerCase().includes(brandSearch.toLowerCase()),
	);

	/* =====================================================
	   FILTER + SORT PRODUCTS
	===================================================== */

	const featuredProducts = useMemo(() => {
		let result = [...products];

		/* -------------------------------------------------
		   RATING FILTER
		------------------------------------------------- */

		if (selectedRating > 0) {
			result = result.filter(
				(product) => Number(product.rating || 0) >= selectedRating,
			);
		}

		/* -------------------------------------------------
		   BRAND FILTER
		------------------------------------------------- */

		if (selectedBrand.length > 0) {
			result = result.filter((product) =>
				selectedBrand.includes(product.company),
			);
		}

		/* -------------------------------------------------
		   PRICE FILTER
		------------------------------------------------- */

		result = result.filter(
			(product) => Number(product.price || 0) <= maxPrice,
		);

		/* -------------------------------------------------
		   DISCOUNT FILTER
		------------------------------------------------- */

		if (selectedDiscount > 0) {
			result = result.filter(
				(product) => getDiscount(product) >= selectedDiscount,
			);
		}

		/* -------------------------------------------------
		   SORT
		------------------------------------------------- */

		switch (sortBy) {
			case "popular":
				result.sort(
					(a, b) =>
						Number(b.totalRatings || 0) -
						Number(a.totalRatings || 0),
				);
				break;

			case "rating":
				result.sort(
					(a, b) => Number(b.rating || 0) - Number(a.rating || 0),
				);
				break;

			case "price-low":
				result.sort(
					(a, b) => Number(a.price || 0) - Number(b.price || 0),
				);
				break;

			case "price-high":
				result.sort(
					(a, b) => Number(b.price || 0) - Number(a.price || 0),
				);
				break;

			case "discount":
				result.sort((a, b) => getDiscount(b) - getDiscount(a));
				break;

			case "featured":
			default:
				// Keep original product order
				break;
		}

		return result;
	}, [selectedRating, selectedBrand, selectedDiscount, maxPrice, sortBy]);

	/* =====================================================
	   TOGGLE BRAND
	===================================================== */

	const toggleBrand = (brand) => {
		setSelectedBrand((previous) => {
			if (previous.includes(brand)) {
				return previous.filter((item) => item !== brand);
			}

			return [...previous, brand];
		});
	};

	/* =====================================================
	   CLEAR FILTERS
	===================================================== */

	const clearFilters = () => {
		setSelectedRating(0);
		setSelectedBrand([]);
		setSelectedDiscount(0);
		setMaxPrice(1000000);
		setBrandSearch("");
	};

	/* =====================================================
	   ACTIVE FILTERS
	===================================================== */

	const hasFilters =
		selectedBrand.length > 0 ||
		selectedRating > 0 ||
		selectedDiscount > 0 ||
		maxPrice < 1000000;

	const activeFilterCount =
		selectedBrand.length +
		(selectedRating > 0 ? 1 : 0) +
		(selectedDiscount > 0 ? 1 : 0) +
		(maxPrice < 1000000 ? 1 : 0);

	/* =====================================================
	   SELECTED SORT LABEL
	===================================================== */

	const selectedSortLabel =
		sortOptions.find((option) => option.value === sortBy)?.label ||
		"Featured";

	/* =====================================================
	   RENDER
	===================================================== */

	return (
		<main className="min-h-screen bg-[#f5f6f8] -mt-20 lg:-mt-0">
			{/* =================================================
			    BREADCRUMB
			================================================= */}

			<div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="pt-6">
					<div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-2xl shadow-sm">
						<Link
							to="/"
							className="text-sm font-medium text-gray-500 hover:text-gray-950 transition"
						>
							Home
						</Link>

						<div className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-100">
							<ChevronRight size={13} className="text-gray-500" />
						</div>

						<span className="text-sm font-bold text-gray-950">
							Featured Products
						</span>
					</div>
				</div>
			</div>

			{/* =================================================
			    MOBILE FILTER BAR
			================================================= */}

			<div className="lg:hidden sticky top-0 z-30 mt-5 bg-white/95 backdrop-blur-md border-y border-gray-200">
				<div className="max-w-[1500px] mx-auto px-4 py-3 flex gap-2">
					<button
						onClick={() => setMobileFilters(!mobileFilters)}
						className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-950 text-white text-sm font-bold"
					>
						<SlidersHorizontal size={17} />

						{mobileFilters ? "Hide Filters" : "Filters"}

						{activeFilterCount > 0 && (
							<span className="w-5 h-5 rounded-full bg-white text-gray-950 flex items-center justify-center text-xs">
								{activeFilterCount}
							</span>
						)}
					</button>

					<div className="flex border border-gray-200 rounded-xl overflow-hidden bg-white">
						<button
							onClick={() => setViewMode("grid")}
							className={`px-4 flex items-center justify-center ${
								viewMode === "grid"
									? "bg-gray-950 text-white"
									: "text-gray-400"
							}`}
						>
							<Grid3X3 size={17} />
						</button>

						<button
							onClick={() => setViewMode("list")}
							className={`px-4 flex items-center justify-center ${
								viewMode === "list"
									? "bg-gray-950 text-white"
									: "text-gray-400"
							}`}
						>
							<List size={19} />
						</button>
					</div>
				</div>
			</div>

			{/* =================================================
			    MAIN SECTION
			================================================= */}

			<section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
				<div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)] gap-6">
					{/* =================================================
					    FILTER SIDEBAR
					================================================= */}

					<aside
						className={`
							${mobileFilters ? "block" : "hidden"}
							lg:block
							h-fit
							lg:sticky
							lg:top-24
						`}
					>
						<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
							{/* -------------------------------------------------
							    FILTER HEADER
							------------------------------------------------- */}

							<div className="p-5 border-b border-gray-100">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="w-9 h-9 rounded-xl bg-gray-950 text-white flex items-center justify-center">
											<Filter size={17} />
										</div>

										<div>
											<h2 className="font-black text-gray-950">
												Filters
											</h2>

											<p className="text-xs text-gray-400 mt-0.5">
												Refine your search
											</p>
										</div>
									</div>

									{hasFilters && (
										<button
											onClick={clearFilters}
											className="text-xs font-bold text-blue-600 hover:text-blue-700"
										>
											Clear
										</button>
									)}
								</div>
							</div>

							{/* =================================================
							    BRAND FILTER
							================================================= */}

							<div className="p-5 border-b border-gray-100">
								<div className="flex items-center justify-between">
									<h3 className="text-sm font-bold text-gray-950">
										Brand
									</h3>

									<span className="text-xs text-gray-400">
										{brands.length}
									</span>
								</div>

								<div className="relative mt-4">
									<Search
										size={16}
										className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
									/>

									<input
										type="text"
										value={brandSearch}
										onChange={(e) =>
											setBrandSearch(e.target.value)
										}
										placeholder="Search brands..."
										className="w-full h-10 bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-3 text-sm outline-none focus:bg-white focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition"
									/>
								</div>

								<div className="mt-4 space-y-2.5 max-h-48 overflow-y-auto pr-1">
									{filteredBrands.length > 0 ? (
										filteredBrands.map((brand) => (
											<label
												key={brand}
												className="flex items-center gap-3 cursor-pointer group"
											>
												<input
													type="checkbox"
													checked={selectedBrand.includes(
														brand,
													)}
													onChange={() =>
														toggleBrand(brand)
													}
													className="w-4 h-4 accent-gray-950"
												/>

												<span className="text-sm text-gray-600 group-hover:text-gray-950 transition">
													{brand}
												</span>
											</label>
										))
									) : (
										<p className="text-sm text-gray-400">
											No brands found
										</p>
									)}
								</div>
							</div>

							{/* =================================================
							    PRICE FILTER
							================================================= */}

							<div className="p-5 border-b border-gray-100">
								<div className="flex items-center justify-between">
									<h3 className="text-sm font-bold text-gray-950">
										Price
									</h3>

									<span className="text-sm font-black text-gray-950">
										₹{maxPrice.toLocaleString("en-IN")}
									</span>
								</div>

								<input
									type="range"
									min="0"
									max="1000000"
									step="1000"
									value={maxPrice}
									onChange={(e) =>
										setMaxPrice(Number(e.target.value))
									}
									className="w-full mt-5 accent-gray-950"
								/>

								<div className="flex justify-between mt-2 text-xs text-gray-400">
									<span>₹0</span>
									<span>₹10,00,000+</span>
								</div>
							</div>

							{/* =================================================
							    CUSTOMER RATING
							================================================= */}

							<div className="p-5 border-b border-gray-100">
								<h3 className="text-sm font-bold text-gray-950">
									Customer Rating
								</h3>

								<div className="mt-4 space-y-2.5">
									{[4, 3, 2, 1].map((rating) => (
										<label
											key={rating}
											className="flex items-center gap-3 cursor-pointer group"
										>
											<input
												type="radio"
												name="rating"
												checked={
													selectedRating === rating
												}
												onChange={() =>
													setSelectedRating(rating)
												}
												className="w-4 h-4 accent-gray-950"
											/>

											<div className="flex items-center gap-1">
												<span className="text-sm text-gray-600 group-hover:text-gray-950">
													{rating}
												</span>

												<Star
													size={13}
													fill="currentColor"
													className="text-amber-400"
												/>

												<span className="text-xs text-gray-400">
													& above
												</span>
											</div>
										</label>
									))}
								</div>
							</div>

							{/* =================================================
							    DISCOUNT FILTER
							================================================= */}

							<div className="p-5">
								<h3 className="text-sm font-bold text-gray-950">
									Discount
								</h3>

								<div className="mt-4 grid grid-cols-2 gap-2">
									{[10, 20, 30, 50].map((discount) => (
										<button
											key={discount}
											onClick={() =>
												setSelectedDiscount(
													selectedDiscount ===
														discount
														? 0
														: discount,
												)
											}
											className={`
													py-2.5
													rounded-xl
													border
													text-xs
													font-bold
													transition
													${
														selectedDiscount ===
														discount
															? "bg-gray-950 text-white border-gray-950"
															: "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
													}
												`}
										>
											{discount}%+
										</button>
									))}
								</div>
							</div>
						</div>
					</aside>

					{/* =================================================
					    RIGHT SIDE
					================================================= */}

					<div className="min-w-0">
						{/* =================================================
						    PRODUCTS TOOLBAR
						================================================= */}

						<div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5">
							<div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
								<div>
									<div className="flex items-center gap-2">
										<h1 className="text-xl font-black text-gray-950">
											Featured Products
										</h1>

										<span className="px-2 py-1 rounded-md bg-gray-100 text-xs font-bold text-gray-500">
											{featuredProducts.length}
										</span>
									</div>

									<p className="text-sm text-gray-500 mt-1">
										Showing{" "}
										<span className="font-bold text-gray-900">
											{featuredProducts.length}
										</span>{" "}
										products
									</p>
								</div>

								<div className="flex items-center gap-2">
									{/* -------------------------------------------------
									    GRID / LIST
									------------------------------------------------- */}

									{/* <div className="hidden lg:flex border border-gray-200 rounded-xl overflow-hidden">
										<button
											onClick={() => setViewMode("grid")}
											className={`p-2.5 ${
												viewMode === "grid"
													? "bg-gray-950 text-white"
													: "bg-white text-gray-400 hover:bg-gray-50"
											}`}
											aria-label="Grid view"
										>
											<Grid3X3 size={17} />
										</button>

										<button
											onClick={() => setViewMode("list")}
											className={`p-2.5 ${
												viewMode === "list"
													? "bg-gray-950 text-white"
													: "bg-white text-gray-400 hover:bg-gray-50"
											}`}
											aria-label="List view"
										>
											<List size={19} />
										</button>
									</div> */}

									{/* -------------------------------------------------
									    SORT DROPDOWN
									------------------------------------------------- */}

									<div className="relative">
										<button
											onClick={() =>
												setSortOpen(!sortOpen)
											}
											className="min-w-[190px] flex items-center justify-between gap-3 px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm font-semibold text-gray-700 hover:border-gray-400 transition"
										>
											<span>{selectedSortLabel}</span>

											<ChevronDown size={16} />
										</button>

										{sortOpen && (
											<>
												<div
													className="fixed inset-0 z-30"
													onClick={() =>
														setSortOpen(false)
													}
												/>

												<div className="absolute right-0 top-full mt-2 w-56 z-40 bg-white border border-gray-200 rounded-xl shadow-xl p-1.5">
													{sortOptions.map(
														(option) => (
															<button
																key={
																	option.value
																}
																onClick={() => {
																	setSortBy(
																		option.value,
																	);

																	setSortOpen(
																		false,
																	);
																}}
																className={`
																	w-full
																	text-left
																	px-3
																	py-2.5
																	rounded-lg
																	text-sm
																	font-medium
																	transition
																	${
																		sortBy ===
																		option.value
																			? "bg-gray-100 text-gray-950"
																			: "text-gray-600 hover:bg-gray-50"
																	}
																`}
															>
																{option.label}
															</button>
														),
													)}
												</div>
											</>
										)}
									</div>
								</div>
							</div>
						</div>

						{/* =================================================
						    ACTIVE FILTERS
						================================================= */}

						{hasFilters && (
							<div className="flex flex-wrap items-center gap-2 mt-4">
								<span className="text-xs font-bold text-gray-400">
									ACTIVE:
								</span>

								{/* Brands */}

								{selectedBrand.map((brand) => (
									<button
										key={brand}
										onClick={() => toggleBrand(brand)}
										className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:border-gray-400"
									>
										{brand}

										<X size={13} />
									</button>
								))}

								{/* Rating */}

								{selectedRating > 0 && (
									<button
										onClick={() => setSelectedRating(0)}
										className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700"
									>
										{selectedRating}{" "}
										<Star
											size={12}
											fill="currentColor"
											className="text-amber-400"
										/>
										& above
										<X size={13} />
									</button>
								)}

								{/* Discount */}

								{selectedDiscount > 0 && (
									<button
										onClick={() => setSelectedDiscount(0)}
										className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700"
									>
										{selectedDiscount}%+ OFF
										<X size={13} />
									</button>
								)}

								{/* Price */}

								{maxPrice < 1000000 && (
									<button
										onClick={() => setMaxPrice(1000000)}
										className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700"
									>
										Under ₹
										{maxPrice.toLocaleString("en-IN")}
										<X size={13} />
									</button>
								)}

								<button
									onClick={clearFilters}
									className="text-xs font-bold text-gray-500 hover:text-gray-950"
								>
									Clear all
								</button>
							</div>
						)}

						{/* =================================================
						    PRODUCTS
						================================================= */}

						<div className="mt-5">
							{featuredProducts.length > 0 ? (
								<div
									className={
										viewMode === "grid"
											? "grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
											: "flex flex-col gap-4"
									}
								>
									{featuredProducts.map((product) => (
										<div
											key={product.id}
											className={
												viewMode === "list"
													? "w-full"
													: ""
											}
										>
											<ProductCard product={product} />
										</div>
									))}
								</div>
							) : (
								/* =================================================
								   EMPTY STATE
								================================================= */

								<div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 sm:p-16 text-center">
									<div className="w-20 h-20 mx-auto rounded-3xl bg-gray-100 flex items-center justify-center">
										<Search
											size={30}
											className="text-gray-400"
										/>
									</div>

									<h2 className="mt-6 text-2xl font-black text-gray-950">
										No products found
									</h2>

									<p className="mt-2 max-w-md mx-auto text-gray-500 text-sm">
										We couldn't find any products matching
										your current filters.
									</p>

									<button
										onClick={clearFilters}
										className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gray-950 text-white text-sm font-bold hover:bg-black transition"
									>
										<ArrowRight size={17} />
										Clear Filters
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* =================================================
			    BOTTOM PROMO
			================================================= */}

			<section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
				<div className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 sm:px-10 py-10 sm:py-12">
					<div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

					<div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
						<div>
							<p className="text-xs uppercase tracking-[0.2em] font-bold text-white/40">
								Shop smarter
							</p>

							<h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
								Find your next favorite.
							</h2>

							<p className="mt-2 text-sm text-white/50">
								Explore more products and discover something
								new.
							</p>
						</div>

						<Link
							to="/"
							className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-gray-950 text-sm font-bold hover:bg-gray-100 transition"
						>
							Explore Store
							<ArrowRight size={17} />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}

export default FeaturedProducts;
