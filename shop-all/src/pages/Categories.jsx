import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
	ArrowRight,
	Search,
	Smartphone,
	Shirt,
	Home,
	Sparkles,
	Dumbbell,
	BookOpen,
	Gamepad2,
	Headphones,
	ShoppingBag,
	Car,
	Baby,
	Utensils,
	HeartPulse,
	PawPrint,
	Watch,
	Laptop,
	ChevronRight,
} from "lucide-react";

const categories = [
	{
		id: 1,
		name: "Electronics",
		slug: "electronics",
		description: "Smartphones, laptops, audio & gadgets",
		count: "2,450+",
		icon: Smartphone,
	},
	{
		id: 2,
		name: "Fashion",
		slug: "fashion",
		description: "Clothing, shoes, watches & accessories",
		count: "5,200+",
		icon: Shirt,
	},
	{
		id: 3,
		name: "Home & Kitchen",
		slug: "home & kitchen",
		description: "Furniture, appliances & kitchen essentials",
		count: "3,100+",
		icon: Home,
	},
	{
		id: 4,
		name: "Beauty",
		slug: "beauty",
		description: "Skincare, makeup & personal care",
		count: "1,890+",
		icon: Sparkles,
	},
	{
		id: 5,
		name: "Sports & Toys",
		slug: "Sports & Toys",
		description: "Fitness, sportswear & outdoor gear",
		count: "2,100+",
		icon: Dumbbell,
	},
	{
		id: 6,
		name: "Books",
		slug: "books",
		description: "Books, novels, education & more",
		count: "6,500+",
		icon: BookOpen,
	},
	{
		id: 7,
		name: "Gaming",
		slug: "gaming",
		description: "Games, consoles & gaming accessories",
		count: "1,250+",
		icon: Gamepad2,
	},
	{
		id: 8,
		name: "Audio",
		slug: "audio",
		description: "Headphones, speakers & audio devices",
		count: "980+",
		icon: Headphones,
	},
	{
		id: 9,
		name: "Accessories",
		slug: "accessories",
		description: "Bags, wallets & everyday accessories",
		count: "1,760+",
		icon: ShoppingBag,
	},
	{
		id: 10,
		name: "Automotive",
		slug: "automotive",
		description: "Car accessories, tools & essentials",
		count: "1,420+",
		icon: Car,
	},
	{
		id: 11,
		name: "Baby & Kids",
		slug: "baby-kids",
		description: "Baby care, toys & kids essentials",
		count: "1,320+",
		icon: Baby,
	},
	{
		id: 12,
		name: "Food & Grocery",
		slug: "food-grocery",
		description: "Groceries, snacks & everyday foods",
		count: "4,200+",
		icon: Utensils,
	},
	{
		id: 13,
		name: "Health",
		slug: "health",
		description: "Healthcare, wellness & personal care",
		count: "1,150+",
		icon: HeartPulse,
	},
	{
		id: 14,
		name: "Pet Supplies",
		slug: "pet-supplies",
		description: "Food, toys & essentials for pets",
		count: "850+",
		icon: PawPrint,
	},
	{
		id: 15,
		name: "Watches",
		slug: "watches",
		description: "Smartwatches, analog & digital watches",
		count: "720+",
		icon: Watch,
	},
	{
		id: 16,
		name: "Computers",
		slug: "computers",
		description: "Laptops, monitors & computer accessories",
		count: "1,640+",
		icon: Laptop,
	},
];

function Categories() {
	const [search, setSearch] = useState("");

	const filteredCategories = useMemo(() => {
		return categories.filter((category) => {
			const value = search.toLowerCase();

			return (
				category.name.toLowerCase().includes(value) ||
				category.description.toLowerCase().includes(value)
			);
		});
	}, [search]);

	return (
		<div className="min-h-screen bg-[#f7f7f7] text-[#111]">
			{/* Main Container */}
			<main className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 lg:px-10">
				{/* Breadcrumb */}
				<div className="mb-7 flex items-center gap-2 text-[11px] font-medium text-gray-400">
					<Link to="/" className="transition-colors hover:text-black">
						Home
					</Link>

					<ChevronRight size={12} />

					<span className="text-gray-700">Categories</span>
				</div>

				{/* Header */}
				<section className="mb-8">
					<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<div>
							{/* Small Label */}
							<div className="mb-2 flex items-center gap-2">
								<span className="h-[3px] w-[3px] rounded-full bg-orange-500" />

								<p className="text-[9px] font-bold uppercase tracking-[0.22em] text-orange-500">
									Shop by Category
								</p>
							</div>

							{/* Title */}
							<h1 className="text-[30px] font-black leading-none tracking-[-0.04em] sm:text-[36px]">
								Explore Categories
							</h1>

							{/* Description */}
							<p className="mt-2 max-w-[500px] text-[12px] leading-5 text-gray-500">
								Everything you're looking for, organized in one
								simple place.
							</p>
						</div>

						{/* Search */}
						<div className="relative w-full md:w-[230px]">
							<Search
								size={15}
								className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
							/>

							<input
								type="text"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								placeholder="Search categories..."
								className="h-9 w-full rounded-lg border border-gray-200 bg-white pl-9 pr-3 text-[11px] outline-none transition focus:border-gray-400"
							/>
						</div>
					</div>
				</section>

				{/* Category Count */}
				<div className="mb-4 flex items-center justify-between">
					<p className="text-[11px] font-medium text-gray-400">
						{filteredCategories.length} categories
					</p>

					<p className="hidden text-[10px] text-gray-400 sm:block">
						Find everything you need
					</p>
				</div>

				{/* Categories Grid */}
				{filteredCategories.length > 0 ? (
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{filteredCategories.map((category) => {
							const Icon = category.icon;

							return (
								<Link
									key={category.id}
									to={`/categories/${category.slug}`}
									className="group relative min-h-[170px] overflow-hidden rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
								>
									{/* Background Number */}
									<span className="pointer-events-none absolute -right-1 -top-5 select-none text-[90px] font-black leading-none text-gray-50 transition-colors duration-300 group-hover:text-gray-100">
										{String(category.id).padStart(2, "0")}
									</span>

									{/* Icon */}
									<div className="relative z-10 mb-5 flex items-center justify-between">
										<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-700 transition-all duration-300 group-hover:bg-black group-hover:text-white">
											<Icon size={17} strokeWidth={1.8} />
										</div>

										<div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
											<ArrowRight
												size={11}
												className="transition-transform duration-300 group-hover:translate-x-[1px]"
											/>
										</div>
									</div>

									{/* Category Content */}
									<div className="relative z-10">
										<div className="mb-1 flex items-center gap-2">
											<h2 className="text-[15px] font-extrabold tracking-[-0.02em]">
												{category.name}
											</h2>

											<span className="rounded-full bg-gray-100 px-2 py-[3px] text-[7px] font-semibold text-gray-500">
												{category.count}
											</span>
										</div>

										<p className="max-w-[220px] text-[9px] leading-4 text-gray-400">
											{category.description}
										</p>
									</div>

									{/* Shop Now */}
									<div className="absolute bottom-5 left-5 z-10 flex items-center gap-1 text-[9px] font-bold text-gray-700 transition-all duration-300 group-hover:gap-2 group-hover:text-black">
										Shop now
										<ArrowRight size={10} />
									</div>
								</Link>
							);
						})}
					</div>
				) : (
					/* Empty State */
					<div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
							<Search size={19} className="text-gray-400" />
						</div>

						<h3 className="text-sm font-bold">
							No categories found
						</h3>

						<p className="mt-1 text-[11px] text-gray-400">
							Try searching for another category.
						</p>

						<button
							onClick={() => setSearch("")}
							className="mt-4 rounded-lg bg-black px-4 py-2 text-[10px] font-semibold text-white transition hover:bg-gray-800"
						>
							Clear Search
						</button>
					</div>
				)}

				{/* Bottom CTA */}
				<section className="mt-10 overflow-hidden rounded-2xl bg-black px-6 py-8 text-white sm:px-10">
					<div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
						<div>
							<p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
								Find what you need
							</p>

							<h2 className="text-xl font-black tracking-[-0.03em] sm:text-2xl">
								Explore thousands of products
							</h2>

							<p className="mt-2 max-w-[450px] text-[11px] leading-5 text-gray-400">
								Browse our categories and discover products
								selected especially for you.
							</p>
						</div>

						<Link
							to="/"
							className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-[10px] font-bold text-black transition hover:bg-gray-100"
						>
							Start Shopping
							<ArrowRight size={13} />
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}

export default Categories;
