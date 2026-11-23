import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
	ArrowLeft,
	ArrowRight,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Filter,
	Grid3X3,
	Heart,
	List,
	Search,
	SlidersHorizontal,
	Star,
	Tag,
	X,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { products } from "../data/products";
import categoryData from "../data/categoryData";

// ============================================================
// NORMALIZE URL / CATEGORY VALUES
// ============================================================

const normalizeSlug = (value = "") => {
	return decodeURIComponent(String(value))
		.trim()
		.toLowerCase()
		.replace(/&/g, "")
		.replace(/[_\s]+/g, "-")
		.replace(/[^a-z0-9-]/g, "")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
};

// ============================================================
// CATEGORY PAGE
// ============================================================

export default function Category() {
	const { category, subcategory } = useParams();

	// ----------------------------------------------------------
	// URL VALUES
	// ----------------------------------------------------------

	const currentCategory = normalizeSlug(category);
	const currentSubcategory = normalizeSlug(subcategory);

	// ----------------------------------------------------------
	// CATEGORY DATA
	// ----------------------------------------------------------

	const data = useMemo(() => {
		return categoryData[currentCategory] || null;
	}, [currentCategory]);

	// ----------------------------------------------------------
	// SUBCATEGORY DATA
	// IMPORTANT: subcategories is an ARRAY
	// ----------------------------------------------------------

	const subcategoryData = useMemo(() => {
		if (!data || !currentSubcategory) {
			return null;
		}

		return (
			data.subcategories?.find(
				(item) => normalizeSlug(item.slug) === currentSubcategory,
			) || null
		);
	}, [data, currentSubcategory]);

	// ----------------------------------------------------------
	// FILTER STATES
	// ----------------------------------------------------------

	const [selectedRating, setSelectedRating] = useState(0);

	const [selectedBrand, setSelectedBrand] = useState([]);

	const [selectedDiscount, setSelectedDiscount] = useState(0);

	const [maxPrice, setMaxPrice] = useState(1000000);

	const [sortBy, setSortBy] = useState("popular");

	const [viewMode, setViewMode] = useState("grid");

	const [brandSearch, setBrandSearch] = useState("");

	const [showMobileFilters, setShowMobileFilters] = useState(false);

	// ==========================================================
	// PRODUCTS FOR CURRENT CATEGORY / SUBCATEGORY
	// ==========================================================

	const baseProducts = useMemo(() => {
		if (!data) {
			return [];
		}

		return products.filter((product) => {
			const productCategory = normalizeSlug(product.Category);

			const productSubcategory = normalizeSlug(product.subcategory);

			// CATEGORY MUST MATCH
			if (productCategory !== currentCategory) {
				return false;
			}

			// CATEGORY PAGE
			if (!currentSubcategory) {
				return true;
			}

			// SUBCATEGORY PAGE
			return productSubcategory === currentSubcategory;
		});
	}, [data, currentCategory, currentSubcategory]);

	// ==========================================================
	// AVAILABLE BRANDS
	// ==========================================================

	const availableBrands = useMemo(() => {
		const brands = [
			...new Set(
				baseProducts.map((product) => product.company).filter(Boolean),
			),
		];

		return brands.sort();
	}, [baseProducts]);

	// ==========================================================
	// SEARCH BRANDS
	// ==========================================================

	const filteredBrands = useMemo(() => {
		return availableBrands.filter((brand) =>
			brand.toLowerCase().includes(brandSearch.toLowerCase()),
		);
	}, [availableBrands, brandSearch]);

	// ==========================================================
	// FINAL FILTERED PRODUCTS
	// ==========================================================

	const categoryProducts = useMemo(() => {
		let filteredProducts = [...baseProducts];

		// ------------------------------------------------------
		// RATING
		// ------------------------------------------------------

		if (selectedRating > 0) {
			filteredProducts = filteredProducts.filter(
				(product) => Number(product.rating || 0) >= selectedRating,
			);
		}

		// ------------------------------------------------------
		// BRAND
		// ------------------------------------------------------

		if (selectedBrand.length > 0) {
			filteredProducts = filteredProducts.filter((product) =>
				selectedBrand.includes(product.company),
			);
		}

		// ------------------------------------------------------
		// PRICE
		// ------------------------------------------------------

		filteredProducts = filteredProducts.filter(
			(product) => Number(product.price || 0) <= Number(maxPrice),
		);

		// ------------------------------------------------------
		// DISCOUNT
		// ------------------------------------------------------

		if (selectedDiscount > 0) {
			filteredProducts = filteredProducts.filter(
				(product) =>
					Number(
						product.discount ?? product.discount_percentage ?? 0,
					) >= selectedDiscount,
			);
		}

		// ------------------------------------------------------
		// SORT
		// ------------------------------------------------------

		if (sortBy === "price-low") {
			filteredProducts.sort(
				(a, b) => Number(a.price || 0) - Number(b.price || 0),
			);
		}

		if (sortBy === "price-high") {
			filteredProducts.sort(
				(a, b) => Number(b.price || 0) - Number(a.price || 0),
			);
		}

		if (sortBy === "rating") {
			filteredProducts.sort(
				(a, b) => Number(b.rating || 0) - Number(a.rating || 0),
			);
		}

		if (sortBy === "discount") {
			filteredProducts.sort(
				(a, b) =>
					Number(b.discount ?? b.discount_percentage ?? 0) -
					Number(a.discount ?? a.discount_percentage ?? 0),
			);
		}

		return filteredProducts;
	}, [
		baseProducts,
		selectedRating,
		selectedBrand,
		selectedDiscount,
		maxPrice,
		sortBy,
	]);

	// ==========================================================
	// BRAND SELECT
	// ==========================================================

	const toggleBrand = (brand) => {
		setSelectedBrand((previous) => {
			if (previous.includes(brand)) {
				return previous.filter((item) => item !== brand);
			}

			return [...previous, brand];
		});
	};

	// ==========================================================
	// CLEAR FILTERS
	// ==========================================================

	const clearFilters = () => {
		setSelectedRating(0);
		setSelectedBrand([]);
		setSelectedDiscount(0);
		setMaxPrice(1000000);
		setBrandSearch("");
	};

	// ==========================================================
	// CATEGORY NOT FOUND
	// ==========================================================

	if (!data) {
		return (
			<div className="min-h-screen bg-gray-50">
				<Header />

				<div className="flex min-h-[650px] items-center justify-center px-6">
					<div className="w-full max-w-2xl rounded-[28px] border border-gray-200 bg-white px-8 py-14 text-center shadow-sm">
						<div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[30px] bg-gray-100">
							<Tag
								size={52}
								strokeWidth={1.7}
								className="text-gray-500"
							/>
						</div>

						<h1 className="text-4xl font-extrabold text-black">
							Category Not Found
						</h1>

						<p className="mt-5 text-lg text-gray-500">
							The category "{decodeURIComponent(category || "")}"
							doesn't exist.
						</p>

						<Link
							to="/"
							className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-gray-800"
						>
							<ArrowLeft size={20} />
							Back to Home
						</Link>
					</div>
				</div>

				<Footer />
			</div>
		);
	}

	// ==========================================================
	// SUBCATEGORY NOT FOUND
	// ==========================================================

	if (currentSubcategory && !subcategoryData) {
		return (
			<div className="min-h-screen bg-gray-50 ">
				<Header />

				<div className="flex min-h-[650px] items-center justify-center px-6">
					<div className="w-full max-w-2xl rounded-[28px] border border-gray-200 bg-white px-8 py-14 text-center shadow-sm">
						<div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[30px] bg-gray-100">
							<Tag
								size={52}
								strokeWidth={1.7}
								className="text-gray-500"
							/>
						</div>

						<h1 className="text-4xl font-extrabold text-black">
							Subcategory Not Found
						</h1>

						<p className="mt-5 text-lg text-gray-500">
							The subcategory "
							{decodeURIComponent(subcategory || "")}" doesn't
							exist in {data.title}.
						</p>

						<Link
							to={`/categories/${currentCategory}`}
							className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-gray-800"
						>
							<ArrowLeft size={20} />
							Back to {data.title}
						</Link>
					</div>
				</div>

				<Footer />
			</div>
		);
	}

	// ==========================================================
	// PAGE TITLE
	// ==========================================================

	const pageTitle = subcategoryData ? subcategoryData.name : data.title;

	const pageDescription = subcategoryData
		? `Explore the best ${subcategoryData.name.toLowerCase()} products.`
		: data.description;

	// ==========================================================
	// RENDER
	// ==========================================================

	return (
		<div className="min-h-screen bg-gray-50 -mt-20 lg:-mt-0">
			<Header />

			<main className="mx-auto max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-8">
				{/* =================================================
				    BREADCRUMB
				================================================= */}

				<div className="mb-8 pt-6">
					<div className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
						<Link
							to="/"
							className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
						>
							Home
						</Link>

						<ChevronRight size={14} className="text-gray-400" />

						<Link
							to={`/categories/${currentCategory}`}
							className={`text-sm font-medium ${
								currentSubcategory
									? "text-gray-500 hover:text-gray-950"
									: "font-bold text-gray-950"
							}`}
						>
							{data.title}
						</Link>

						{currentSubcategory && (
							<>
								<ChevronRight
									size={14}
									className="text-gray-400"
								/>

								<span className="text-sm font-bold text-gray-950">
									{subcategoryData.name}
								</span>
							</>
						)}
					</div>
				</div>

				{/* =================================================
				    SUBCATEGORY SECTION
				================================================= */}

				{data.subcategories?.length > 0 && (
					<section className="mb-9">
						<div className="mb-4">
							<h2 className="text-xl font-extrabold text-gray-950">
								Shop by Category
							</h2>

							<p className="mt-1 text-sm text-gray-500">
								Explore {data.title.toLowerCase()} categories
							</p>
						</div>

						<div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
							{data.subcategories.map((item) => {
								const isActive =
									currentSubcategory ===
									normalizeSlug(item.slug);

								return (
									<Link
										key={item.slug}
										to={`/categories/${currentCategory}/${item.slug}`}
										className={`group flex h-[58px] min-w-[170px] max-w-[190px] flex-shrink-0 items-center gap-3 rounded-2xl border px-3 transition ${
											isActive
												? "border-black bg-gray-950 text-white shadow-md"
												: "border-gray-200 bg-white text-gray-950 shadow-sm hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
										}`}
									>
										<div
											className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg ${
												isActive
													? "bg-white/10"
													: "bg-gray-100"
											}`}
										>
											{item.icon}
										</div>

										<div className="min-w-0 flex-1">
											<p
												className={`truncate text-sm font-bold ${
													isActive
														? "text-white"
														: "text-gray-950"
												}`}
											>
												{item.name}
											</p>

											<p
												className={`mt-0.5 text-xs ${
													isActive
														? "text-gray-300"
														: "text-gray-400"
												}`}
											>
												Shop now
											</p>
										</div>

										<ChevronRight
											size={16}
											className={`flex-shrink-0 ${
												isActive
													? "text-white"
													: "text-gray-400 transition group-hover:translate-x-0.5"
											}`}
										/>
									</Link>
								);
							})}
						</div>
					</section>
				)}

				{/* =================================================
				    MOBILE FILTER BUTTON
				================================================= */}

				<div className="mb-4 flex lg:hidden">
					<button
						onClick={() => setShowMobileFilters(true)}
						className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold shadow-sm"
					>
						<SlidersHorizontal size={18} />
						Filters
					</button>
				</div>

				{/* =================================================
				    MAIN CONTENT
				================================================= */}

				<div className="grid grid-cols-1 gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
					{/* =================================================
					    FILTER SIDEBAR
					================================================= */}

					<aside
						className={`${
							showMobileFilters
								? "fixed inset-0 z-50 flex"
								: "hidden"
						} lg:relative lg:block`}
					>
						<div
							className="absolute inset-0 bg-black/40 lg:hidden"
							onClick={() => setShowMobileFilters(false)}
						/>

						<div className="relative ml-auto h-full w-[310px] overflow-y-auto bg-white lg:h-auto lg:w-full lg:rounded-2xl lg:border lg:border-gray-200 lg:shadow-sm">
							{/* FILTER HEADER */}

							<div className="flex items-center justify-between border-b border-gray-100 p-5">
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-white">
										<Filter size={19} />
									</div>

									<div>
										<h3 className="font-bold text-gray-950">
											Filters
										</h3>

										<p className="text-xs text-gray-400">
											Refine your search
										</p>
									</div>
								</div>

								<button
									onClick={() => setShowMobileFilters(false)}
									className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
								>
									<X size={20} />
								</button>
							</div>

							{/* BRAND */}

							<div className="border-b border-gray-100 p-5">
								<div className="mb-4 flex items-center justify-between">
									<h4 className="text-sm font-bold text-gray-950">
										Brand
									</h4>

									<span className="text-xs text-gray-400">
										{selectedBrand.length}
									</span>
								</div>

								<div className="mb-4 flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5">
									<Search
										size={17}
										className="text-gray-400"
									/>

									<input
										type="text"
										value={brandSearch}
										onChange={(e) =>
											setBrandSearch(e.target.value)
										}
										placeholder="Search brands..."
										className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
									/>
								</div>

								<div className="space-y-3">
									{filteredBrands.length > 0 ? (
										filteredBrands.map((brand) => (
											<label
												key={brand}
												className="flex cursor-pointer items-center justify-between text-sm"
											>
												<div className="flex items-center gap-3">
													<input
														type="checkbox"
														checked={selectedBrand.includes(
															brand,
														)}
														onChange={() =>
															toggleBrand(brand)
														}
														className="h-4 w-4 accent-black"
													/>

													<span className="text-gray-600">
														{brand}
													</span>
												</div>

												<span className="text-xs text-gray-400">
													{
														baseProducts.filter(
															(product) =>
																product.company ===
																brand,
														).length
													}
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

							{/* PRICE */}

							<div className="border-b border-gray-100 p-5">
								<div className="mb-5 flex items-center justify-between">
									<h4 className="text-sm font-bold">Price</h4>

									<span className="text-sm font-bold">
										₹
										{Number(maxPrice).toLocaleString(
											"en-IN",
										)}
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
									className="w-full accent-black"
								/>

								<div className="mt-3 flex justify-between text-xs text-gray-400">
									<span>₹0</span>
									<span>₹10,00,000+</span>
								</div>
							</div>

							{/* RATING */}

							<div className="border-b border-gray-100 p-5">
								<h4 className="mb-4 text-sm font-bold">
									Customer Rating
								</h4>

								<div className="space-y-3">
									{[4, 3, 2, 1].map((rating) => (
										<label
											key={rating}
											className="flex cursor-pointer items-center gap-2 text-sm"
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
												className="accent-black"
											/>

											<div className="flex items-center gap-1">
												{[1, 2, 3, 4, 5].map((star) => (
													<Star
														key={star}
														size={13}
														fill={
															star <= rating
																? "currentColor"
																: "none"
														}
														className={
															star <= rating
																? "text-yellow-400"
																: "text-gray-300"
														}
													/>
												))}
											</div>

											<span className="text-gray-500">
												& above
											</span>
										</label>
									))}
								</div>
							</div>

							{/* DISCOUNT */}

							<div className="border-b border-gray-100 p-5">
								<h4 className="mb-4 text-sm font-bold">
									Discount
								</h4>

								<div className="space-y-3">
									{[10, 20, 30, 40, 50].map((discount) => (
										<label
											key={discount}
											className="flex cursor-pointer items-center gap-3 text-sm"
										>
											<input
												type="radio"
												name="discount"
												checked={
													selectedDiscount ===
													discount
												}
												onChange={() =>
													setSelectedDiscount(
														discount,
													)
												}
												className="accent-black"
											/>

											<span className="text-gray-600">
												{discount}% or more
											</span>
										</label>
									))}
								</div>
							</div>

							{/* CLEAR */}

							<div className="p-5">
								<button
									onClick={clearFilters}
									className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-50"
								>
									Clear Filters
								</button>
							</div>
						</div>
					</aside>

					{/* =================================================
					    PRODUCTS AREA
					================================================= */}

					<section className="min-w-0">
						{/* PRODUCT HEADER */}

						<div className="mb-5 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
							<div>
								<div className="flex items-center gap-2">
									<h1 className="text-2xl font-extrabold text-gray-950">
										{pageTitle}
									</h1>

									<span className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-500">
										{categoryProducts.length}
									</span>
								</div>

								<p className="mt-1 text-sm text-gray-500">
									Showing{" "}
									<span className="font-semibold text-gray-950">
										{categoryProducts.length}
									</span>{" "}
									products
								</p>
							</div>

							<div className="flex items-center gap-3">
								{/* VIEW MODE */}

								<div className="flex overflow-hidden rounded-xl border border-gray-200">
									<button
										onClick={() => setViewMode("grid")}
										className={`flex h-11 w-11 items-center justify-center ${
											viewMode === "grid"
												? "bg-gray-950 text-white"
												: "bg-white text-gray-400 hover:text-gray-950"
										}`}
									>
										<Grid3X3 size={18} />
									</button>

									<button
										onClick={() => setViewMode("list")}
										className={`flex h-11 w-11 items-center justify-center ${
											viewMode === "list"
												? "bg-gray-950 text-white"
												: "bg-white text-gray-400 hover:text-gray-950"
										}`}
									>
										<List size={19} />
									</button>
								</div>

								{/* SORT */}

								<div className="relative">
									<select
										value={sortBy}
										onChange={(e) =>
											setSortBy(e.target.value)
										}
										className="h-11 min-w-[170px] appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-sm font-medium text-gray-700 outline-none focus:border-gray-400"
									>
										<option value="popular">Popular</option>

										<option value="price-low">
											Price: Low to High
										</option>

										<option value="price-high">
											Price: High to Low
										</option>

										<option value="rating">
											Customer Rating
										</option>

										<option value="discount">
											Discount
										</option>
									</select>

									<ChevronDown
										size={17}
										className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
									/>
								</div>
							</div>
						</div>

						{/* =================================================
						    PRODUCTS
						================================================= */}

						{categoryProducts.length > 0 ? (
							<div
								className={
									viewMode === "grid"
										? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
										: "flex flex-col gap-4"
								}
							>
								{categoryProducts.map((product) => (
									<div
										key={product.id}
										className={
											viewMode === "list" ? "w-full" : ""
										}
									>
										<ProductCard
											product={product}
											viewMode={viewMode}
										/>
									</div>
								))}
							</div>
						) : (
							/* =================================================
							    NO PRODUCTS
							================================================= */

							<div className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 text-center shadow-sm">
								<div className="mb-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100">
									<Search
										size={34}
										strokeWidth={1.7}
										className="text-gray-400"
									/>
								</div>

								<h2 className="text-2xl font-extrabold text-gray-950">
									No products found
								</h2>

								<p className="mt-3 max-w-md text-sm text-gray-500">
									We couldn't find any products matching your
									current filters.
								</p>

								<button
									onClick={clearFilters}
									className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
								>
									<ArrowRight size={18} />
									Clear Filters
								</button>
							</div>
						)}
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
