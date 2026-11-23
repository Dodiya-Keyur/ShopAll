import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
	Search,
	SlidersHorizontal,
	Filter,
	Grid3X3,
	List,
	ChevronDown,
	ChevronRight,
	X,
	Star,
	Sparkles,
	Package,
	ArrowUpDown,
	Check,
	RotateCcw,
} from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

/* =========================================================
   SORT OPTIONS
========================================================= */
const sortOptions = [
	{ value: "relevance", label: "Relevance" },
	{ value: "popular", label: "Popularity" },
	{ value: "rating", label: "Customer Rating" },
	{ value: "price-low", label: "Price: Low to High" },
	{ value: "price-high", label: "Price: High to Low" },
	{ value: "discount", label: "Best Discount" },
	{ value: "newest", label: "Newest First" },
];

/* =========================================================
   PRICE TIERS
========================================================= */
const priceRanges = [
	{ label: "All Prices", min: 0, max: Infinity },
	{ label: "Under ₹1,000", min: 0, max: 1000 },
	{ label: "₹1,000 - ₹5,000", min: 1000, max: 5000 },
	{ label: "₹5,000 - ₹15,000", min: 5000, max: 15000 },
	{ label: "₹15,000 - ₹50,000", min: 15000, max: 50000 },
	{ label: "Above ₹50,000", min: 50000, max: Infinity },
];

/* =========================================================
   RATING TIERS
========================================================= */
const ratingFilters = [
	{ label: "4★ & above", rating: 4 },
	{ label: "3★ & above", rating: 3 },
	{ label: "2★ & above", rating: 2 },
];

export default function SearchResults() {
	const [searchParams, setSearchParams] = useSearchParams();

	const queryParam = searchParams.get("q") || "";
	const categoryParam = searchParams.get("category") || "All";

	// Filter states
	const [selectedCategory, setSelectedCategory] = useState(categoryParam);
	const [selectedBrands, setSelectedBrands] = useState([]);
	const [selectedPriceRange, setSelectedPriceRange] = useState(0);
	const [selectedMinRating, setSelectedMinRating] = useState(0);
	const [selectedMinDiscount, setSelectedMinDiscount] = useState(0);
	const [sortBy, setSortBy] = useState("relevance");
	const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	// Sync states when URL params change
	useEffect(() => {
		setSelectedCategory(categoryParam);
	}, [categoryParam]);

	// Extract unique categories & brands from all products
	const availableCategories = useMemo(() => {
		const cats = new Set();
		products.forEach((p) => {
			if (p.Category) cats.add(p.Category);
		});
		return Array.from(cats);
	}, []);

	const availableBrands = useMemo(() => {
		const brands = new Set();
		products.forEach((p) => {
			const b = p.brand || p.company;
			if (b) brands.add(b);
		});
		return Array.from(brands).sort();
	}, []);

	// Filter & Sort Products
	const filteredProducts = useMemo(() => {
		const cleanQ = queryParam.trim().toLowerCase();

		return products
			.filter((product) => {
				// 1. Query matching
				if (cleanQ) {
					const matchName = product.name?.toLowerCase().includes(cleanQ);
					const matchBrand = (product.brand || product.company)
						?.toLowerCase()
						.includes(cleanQ);
					const matchCategory = product.Category?.toLowerCase().includes(cleanQ);
					const matchSubcategory = product.subcategory
						?.toLowerCase()
						.includes(cleanQ);
					const matchType = product.productType?.toLowerCase().includes(cleanQ);

					if (
						!matchName &&
						!matchBrand &&
						!matchCategory &&
						!matchSubcategory &&
						!matchType
					) {
						return false;
					}
				}

				// 2. Category matching
				if (
					selectedCategory &&
					selectedCategory !== "All" &&
					product.Category?.toLowerCase() !== selectedCategory.toLowerCase()
				) {
					return false;
				}

				// 3. Brand matching
				if (selectedBrands.length > 0) {
					const prodBrand = product.brand || product.company;
					if (!prodBrand || !selectedBrands.includes(prodBrand)) {
						return false;
					}
				}

				// 4. Price range matching
				const activePrice = priceRanges[selectedPriceRange];
				if (activePrice) {
					const price = product.price || 0;
					if (price < activePrice.min || price > activePrice.max) {
						return false;
					}
				}

				// 5. Rating matching
				if (
					selectedMinRating > 0 &&
					(product.rating || 0) < selectedMinRating
				) {
					return false;
				}

				// 6. Discount matching
				if (
					selectedMinDiscount > 0 &&
					(product.discountPercentage || 0) < selectedMinDiscount
				) {
					return false;
				}

				return true;
			})
			.sort((a, b) => {
				switch (sortBy) {
					case "price-low":
						return (a.price || 0) - (b.price || 0);
					case "price-high":
						return (b.price || 0) - (a.price || 0);
					case "rating":
						return (b.rating || 0) - (a.rating || 0);
					case "discount":
						return (
							(b.discountPercentage || 0) -
							(a.discountPercentage || 0)
						);
					case "newest":
						return (b.id || 0) - (a.id || 0);
					case "popular":
						return (b.totalRatings || 0) - (a.totalRatings || 0);
					case "relevance":
					default:
						return 0;
				}
			});
	}, [
		queryParam,
		selectedCategory,
		selectedBrands,
		selectedPriceRange,
		selectedMinRating,
		selectedMinDiscount,
		sortBy,
	]);

	const toggleBrand = (brand) => {
		setSelectedBrands((prev) =>
			prev.includes(brand)
				? prev.filter((b) => b !== brand)
				: [...prev, brand],
		);
	};

	const resetAllFilters = () => {
		setSelectedCategory("All");
		setSelectedBrands([]);
		setSelectedPriceRange(0);
		setSelectedMinRating(0);
		setSelectedMinDiscount(0);
		setSortBy("relevance");
	};

	const activeFiltersCount =
		(selectedCategory !== "All" && selectedCategory !== categoryParam ? 1 : 0) +
		selectedBrands.length +
		(selectedPriceRange > 0 ? 1 : 0) +
		(selectedMinRating > 0 ? 1 : 0) +
		(selectedMinDiscount > 0 ? 1 : 0);

	return (
		<div className="min-h-screen bg-[#f8f9fa] text-gray-900 pb-20 -mt-30 lg:-mt-0">
			{/* BREADCRUMB & SEARCH HEADER */}
			<div className="bg-white border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
					<div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
						<Link to="/" className="hover:text-gray-900">
							Home
						</Link>
						<ChevronRight size={12} />
						<span>Search Results</span>
						{queryParam && (
							<>
								<ChevronRight size={12} />
								<span className="font-semibold text-gray-900 truncate">
									"{queryParam}"
								</span>
							</>
						)}
					</div>

					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<div>
							<h1 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
								{queryParam ? (
									<>
										Results for{" "}
										<span className="text-orange-600">
											"{queryParam}"
										</span>
									</>
								) : (
									"All Products"
								)}
							</h1>
							<p className="mt-1 text-xs sm:text-sm text-gray-500">
								Showing{" "}
								<span className="font-semibold text-gray-900">
									{filteredProducts.length}
								</span>{" "}
								items found
								{selectedCategory !== "All" && (
									<span> in {selectedCategory}</span>
								)}
							</p>
						</div>

						{/* Top Controls: Mobile Filter Button, Sort Dropdown & Grid/List View */}
						<div className="flex items-center gap-3">
							{/* Mobile Filter Trigger */}
							<button
								type="button"
								onClick={() => setMobileFiltersOpen(true)}
								className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-xs font-semibold text-gray-700 shadow-sm"
							>
								<Filter size={15} />
								<span>Filters</span>
								{activeFiltersCount > 0 && (
									<span className="h-5 w-5 rounded-full bg-orange-500 text-white text-[10px] flex items-center justify-center font-bold">
										{activeFiltersCount}
									</span>
								)}
							</button>

							{/* Sort By Dropdown */}
							<div className="flex items-center gap-2">
								<span className="hidden sm:inline text-xs font-medium text-gray-500">
									Sort by:
								</span>
								<select
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
									className="rounded-xl border border-gray-300 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 cursor-pointer shadow-sm"
								>
									{sortOptions.map((opt) => (
										<option key={opt.value} value={opt.value}>
											{opt.label}
										</option>
									))}
								</select>
							</div>

							{/* Grid / List View Toggle */}
							<div className="hidden sm:flex items-center rounded-xl border border-gray-300 bg-white p-1 shadow-sm">
								<button
									type="button"
									onClick={() => setViewMode("grid")}
									className={`p-1.5 rounded-lg transition cursor-pointer ${
										viewMode === "grid"
											? "bg-gray-900 text-white"
											: "text-gray-500 hover:text-gray-900"
									}`}
									aria-label="Grid View"
								>
									<Grid3X3 size={16} />
								</button>
								<button
									type="button"
									onClick={() => setViewMode("list")}
									className={`p-1.5 rounded-lg transition cursor-pointer ${
										viewMode === "list"
											? "bg-gray-900 text-white"
											: "text-gray-500 hover:text-gray-900"
									}`}
									aria-label="List View"
								>
									<List size={16} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* MAIN BODY: SIDEBAR FILTERS + PRODUCT GRID */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					{/* =========================================================
					    DESKTOP LEFT SIDEBAR FILTERS (3 cols)
					========================================================= */}
					<aside className="hidden lg:block lg:col-span-3 space-y-6">
						<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-6">
							{/* Header */}
							<div className="flex items-center justify-between pb-4 border-b border-gray-100">
								<div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
									<SlidersHorizontal size={16} />
									<span>Filter Products</span>
								</div>
								{activeFiltersCount > 0 && (
									<button
										type="button"
										onClick={resetAllFilters}
										className="text-xs text-orange-600 hover:text-orange-700 font-bold cursor-pointer"
									>
										Clear All
									</button>
								)}
							</div>

							{/* Category Filter */}
							<div>
								<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
									Category
								</h3>
								<div className="space-y-1">
									<button
										type="button"
										onClick={() => setSelectedCategory("All")}
										className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center justify-between cursor-pointer ${
											selectedCategory === "All"
												? "bg-orange-50 text-orange-600"
												: "text-gray-700 hover:bg-gray-100"
										}`}
									>
										<span>All Categories</span>
										{selectedCategory === "All" && (
											<Check size={14} />
										)}
									</button>

									{availableCategories.map((cat) => (
										<button
											key={cat}
											type="button"
											onClick={() => setSelectedCategory(cat)}
											className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center justify-between cursor-pointer ${
												selectedCategory === cat
													? "bg-orange-50 text-orange-600 font-bold"
													: "text-gray-700 hover:bg-gray-100"
											}`}
										>
											<span>{cat}</span>
											{selectedCategory === cat && (
												<Check size={14} />
											)}
										</button>
									))}
								</div>
							</div>

							{/* Price Range Filter */}
							<div className="pt-4 border-t border-gray-100">
								<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
									Price
								</h3>
								<div className="space-y-1.5">
									{priceRanges.map((tier, idx) => (
										<label
											key={idx}
											className="flex items-center gap-2.5 text-xs text-gray-700 hover:text-gray-900 cursor-pointer"
										>
											<input
												type="radio"
												name="priceTier"
												checked={selectedPriceRange === idx}
												onChange={() => setSelectedPriceRange(idx)}
												className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500"
											/>
											<span>{tier.label}</span>
										</label>
									))}
								</div>
							</div>

							{/* Rating Filter */}
							<div className="pt-4 border-t border-gray-100">
								<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
									Customer Rating
								</h3>
								<div className="space-y-1.5">
									{ratingFilters.map((rate) => (
										<label
											key={rate.rating}
											className="flex items-center gap-2 text-xs text-gray-700 hover:text-gray-900 cursor-pointer"
										>
											<input
												type="radio"
												name="ratingFilter"
												checked={selectedMinRating === rate.rating}
												onChange={() =>
													setSelectedMinRating(
														selectedMinRating === rate.rating
															? 0
															: rate.rating,
													)
												}
												className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500"
											/>
											<div className="flex items-center gap-1">
												<span className="font-semibold">{rate.rating}★ & above</span>
												<div className="flex text-yellow-400">
													{[...Array(rate.rating)].map((_, i) => (
														<Star key={i} size={11} className="fill-yellow-400" />
													))}
												</div>
											</div>
										</label>
									))}
								</div>
							</div>

							{/* Brand Filter */}
							{availableBrands.length > 0 && (
								<div className="pt-4 border-t border-gray-100">
									<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
										Brands
									</h3>
									<div className="space-y-2 max-h-48 overflow-y-auto pr-1">
										{availableBrands.map((brand) => (
											<label
												key={brand}
												className="flex items-center gap-2.5 text-xs text-gray-700 hover:text-gray-900 cursor-pointer"
											>
												<input
													type="checkbox"
													checked={selectedBrands.includes(brand)}
													onChange={() => toggleBrand(brand)}
													className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
												/>
												<span className="truncate">{brand}</span>
											</label>
										))}
									</div>
								</div>
							)}

							{/* Discount Filter */}
							<div className="pt-4 border-t border-gray-100">
								<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
									Min Discount
								</h3>
								<div className="space-y-1.5">
									{[10, 20, 30, 40, 50].map((disc) => (
										<label
											key={disc}
											className="flex items-center gap-2.5 text-xs text-gray-700 hover:text-gray-900 cursor-pointer"
										>
											<input
												type="radio"
												name="discountFilter"
												checked={selectedMinDiscount === disc}
												onChange={() =>
													setSelectedMinDiscount(
														selectedMinDiscount === disc ? 0 : disc,
													)
												}
												className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500"
											/>
											<span>{disc}% or more</span>
										</label>
									))}
								</div>
							</div>
						</div>
					</aside>

					{/* =========================================================
					    PRODUCTS GRID (9 cols)
					========================================================= */}
					<main className="lg:col-span-9">
						{/* Active filters pill bar */}
						{activeFiltersCount > 0 && (
							<div className="flex flex-wrap items-center gap-2 mb-6 p-3 rounded-xl bg-white border border-gray-200">
								<span className="text-xs font-bold text-gray-500">
									Active Filters:
								</span>

								{selectedCategory !== "All" && (
									<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold">
										Category: {selectedCategory}
										<button
											type="button"
											onClick={() => setSelectedCategory("All")}
										>
											<X size={12} />
										</button>
									</span>
								)}

								{selectedPriceRange > 0 && (
									<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold">
										Price: {priceRanges[selectedPriceRange].label}
										<button
											type="button"
											onClick={() => setSelectedPriceRange(0)}
										>
											<X size={12} />
										</button>
									</span>
								)}

								{selectedMinRating > 0 && (
									<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold">
										Rating: {selectedMinRating}★+
										<button
											type="button"
											onClick={() => setSelectedMinRating(0)}
										>
											<X size={12} />
										</button>
									</span>
								)}

								{selectedBrands.map((b) => (
									<span
										key={b}
										className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold"
									>
										Brand: {b}
										<button type="button" onClick={() => toggleBrand(b)}>
											<X size={12} />
										</button>
									</span>
								))}

								<button
									type="button"
									onClick={resetAllFilters}
									className="text-xs text-red-500 hover:text-red-700 font-bold ml-auto cursor-pointer"
								>
									Reset All
								</button>
							</div>
						)}

						{/* PRODUCT CARDS OR EMPTY STATE */}
						{filteredProducts.length > 0 ? (
							<div
								className={
									viewMode === "grid"
										? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
										: "space-y-4"
								}
							>
								{filteredProducts.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						) : (
							/* EMPTY STATE VIEW */
							<div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 mb-4">
									<Search size={32} />
								</div>

								<h2 className="text-xl font-bold text-gray-950">
									No products matched your search
								</h2>

								<p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
									We couldn't find any products for "{queryParam}". Try checking spelling, clearing filters, or exploring popular categories.
								</p>

								<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
									<button
										type="button"
										onClick={resetAllFilters}
										className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-gray-800"
									>
										<RotateCcw size={14} />
										Clear All Filters
									</button>

									<Link
										to="/categories"
										className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
									>
										Browse Categories
									</Link>
								</div>
							</div>
						)}
					</main>
				</div>
			</div>

			{/* =========================================================
			    MOBILE FILTERS MODAL DRAWER
			========================================================= */}
			{mobileFiltersOpen && (
				<div className="fixed inset-0 z-50 lg:hidden flex">
					<div
						className="fixed inset-0 bg-black/50 backdrop-blur-xs"
						onClick={() => setMobileFiltersOpen(false)}
					/>
					<div className="relative ml-auto w-full max-w-xs h-full bg-white shadow-2xl flex flex-col z-10">
						<div className="p-4 border-b border-gray-100 flex items-center justify-between">
							<span className="font-bold text-gray-900">Filters</span>
							<button
								type="button"
								onClick={() => setMobileFiltersOpen(false)}
								className="p-1 text-gray-500"
							>
								<X size={20} />
							</button>
						</div>

						<div className="flex-1 overflow-y-auto p-4 space-y-6">
							{/* Category */}
							<div>
								<h3 className="text-xs font-bold uppercase text-gray-400 mb-2">
									Category
								</h3>
								<div className="space-y-1">
									<button
										type="button"
										onClick={() => setSelectedCategory("All")}
										className="w-full text-left px-2 py-1.5 text-xs font-semibold"
									>
										All Categories
									</button>
									{availableCategories.map((c) => (
										<button
											key={c}
											type="button"
											onClick={() => setSelectedCategory(c)}
											className="w-full text-left px-2 py-1.5 text-xs"
										>
											{c}
										</button>
									))}
								</div>
							</div>
						</div>

						<div className="p-4 border-t border-gray-100">
							<button
								type="button"
								onClick={() => setMobileFiltersOpen(false)}
								className="w-full py-3 bg-orange-500 text-white rounded-xl font-bold text-sm"
							>
								Apply Filters ({filteredProducts.length} Results)
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
