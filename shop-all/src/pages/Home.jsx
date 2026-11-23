import {
	ArrowRight,
	ArrowUpRight,
	BookOpen,
	BriefcaseBusiness,
	Car,
	Check,
	ChevronRight,
	Clock3,
	Footprints,
	Gamepad2,
	Headphones,
	Heart,
	Home as HomeIcon,
	Laptop,
	Lock,
	Package,
	Percent,
	RefreshCcw,
	Search,
	ShieldCheck,
	ShoppingBag,
	Smartphone,
	Sparkles,
	Star,
	Truck,
	Watch,
} from "lucide-react";

import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useContext } from "react";
import { ProductContex } from "../store/ProductStore";

/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = [
	{
		name: "Electronics",
		icon: Smartphone,
		description: "Smartphones, laptops, audio & gadgets",
		count: "2,450+",
		accent: "orange",
	},
	{
		name: "Fashion",
		icon: BriefcaseBusiness,
		description: "Clothing, shoes, watches & accessories",
		count: "5,200+",
		accent: "black",
	},
	{
		name: "Home & Kitchen",
		icon: HomeIcon,
		description: "Furniture, appliances & kitchen essentials",
		count: "3,180+",
		accent: "orange",
	},
	{
		name: "Beauty",
		icon: Sparkles,
		description: "Skincare, makeup & personal care",
		count: "1,890+",
		accent: "black",
	},
	{
		name: "Sports & Toys",
		icon: Footprints,
		description: "Fitness, sportswear & outdoor gear",
		count: "2,100+",
		accent: "orange",
	},
	{
		name: "Books",
		icon: BookOpen,
		description: "Books, novels, education & more",
		count: "8,500+",
		accent: "black",
	},
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
	{
		icon: Truck,
		title: "Free Delivery",
		description: "On orders above ₹1999",
	},
	{
		icon: ShieldCheck,
		title: "Secure Payment",
		description: "100% secure checkout",
	},
	{
		icon: RefreshCcw,
		title: "Easy Returns",
		description: "7-day easy returns",
	},
	{
		icon: Lock,
		title: "Safe Shopping",
		description: "Your data is protected",
	},
];

/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
	const featuredProducts = products.slice(0, 8);

	const bestDeals = [...products]
		.sort((a, b) => {
			const discountA = parseInt(a.discount) || 0;
			const discountB = parseInt(b.discount) || 0;

			return discountB - discountA;
		})
		.slice(0, 8);

	return (
		<div className="min-h-screen bg-[#f7f7f7] text-gray-950 -mt-25 lg:-mt-5">
			{/* =====================================================
			    HERO SECTION
			===================================================== */}

			<section className="border-b border-gray-200 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid min-h-[600px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
						{/* Hero Content */}

						<div className="max-w-2xl">
							<div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold">
								<span className="h-2 w-2 rounded-full bg-orange-500"></span>
								Shop smarter. Live better.
							</div>

							<h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
								Everything you need.
								<span className="block text-orange-500">
									All in one place.
								</span>
							</h1>

							<p className="mt-7 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl">
								Discover thousands of products across
								electronics, fashion, beauty, home, sports and
								more — all at prices you'll love.
							</p>

							{/* Buttons */}

							<div className="mt-9 flex flex-col gap-3 sm:flex-row">
								<button className="group inline-flex items-center justify-center gap-3 rounded-xl bg-black px-7 py-4 font-bold text-white transition ">
									Shop Now
									<ArrowRight
										size={19}
										className="transition-transform group-hover:translate-x-1"
									/>
								</button>

								<Link
									to="/categories"
									className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-gray-900 bg-white px-7 py-4 font-bold text-gray-900 transition hover:bg-gray-100"
								>
									Explore Categories
									<ArrowUpRight size={19} />
								</Link>
							</div>

							{/* Stats */}

							<div className="mt-12 grid max-w-xl grid-cols-3 border-y border-gray-200 py-6">
								<div>
									<p className="text-2xl font-black sm:text-3xl">
										10K+
									</p>

									<p className="mt-1 text-sm text-gray-500">
										Products
									</p>
								</div>

								<div className="border-l border-gray-200 pl-5">
									<p className="text-2xl font-black sm:text-3xl">
										50K+
									</p>

									<p className="mt-1 text-sm text-gray-500">
										Customers
									</p>
								</div>

								<div className="border-l border-gray-200 pl-5">
									<p className="text-2xl font-black sm:text-3xl">
										4.8
										<span className="text-orange-500">
											★
										</span>
									</p>

									<p className="mt-1 text-sm text-gray-500">
										Average Rating
									</p>
								</div>
							</div>
						</div>

						{/* Hero Visual */}

						<div className="relative mx-auto hidden h-full min-h-[560px] w-full max-w-xl lg:block">
							<div className="relative flex h-full items-center justify-center py-6">
								{/* the ticket — now sized to fill the column, not float inside a square */}
								<div
									className="relative w-[108%] rotate-[-3deg] rounded-sm border border-[#1F1B16]/10 shadow-2xl"
									style={{
										background: "#F2ECDD",
										backgroundImage:
											"repeating-linear-gradient(115deg, rgba(31,27,22,0.025) 0px, rgba(31,27,22,0.025) 1px, transparent 1px, transparent 10px)",
									}}
								>
									{/* grommet + string */}
									<div className="absolute -top-9 left-1/2 -translate-x-1/2">
										<svg
											width="64"
											height="46"
											viewBox="0 0 56 40"
											className="text-[#A9843F]"
										>
											<path
												d="M4 36 C4 14, 52 14, 52 36"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeDasharray="1 5"
												strokeLinecap="round"
											/>
										</svg>
										<div className="mx-auto -mt-1 h-5 w-5 rounded-full border-2 border-[#A9843F] bg-[#F2ECDD]" />
									</div>

									{/* ink stamp */}
									<div className="absolute -right-6 -top-6 flex h-28 w-28 rotate-[-10deg] items-center justify-center rounded-full border-[3px] border-dashed border-[#B23A2E]/70 mix-blend-multiply">
										<p className="text-center text-xs font-bold uppercase leading-tight tracking-widest text-[#B23A2E]/80">
											Today's
											<br />
											Deal
										</p>
									</div>

									<div className="px-10 pb-9 pt-16">
										{/* headline number, scaled up to anchor the whole panel */}
										<p
											className="text-[8rem] font-black leading-[0.78] text-[#1F1B16]"
											style={{
												fontFamily:
													"Georgia, 'Times New Roman', serif",
											}}
										>
											70%
										</p>
										<p className="mt-2 font-mono text-base font-bold uppercase tracking-[0.35em] text-[#1F1B16]/70">
											Off Everything
										</p>

										{/* perforated tear line */}
										<div className="relative my-8">
											<div className="border-t-2 border-dashed border-[#1F1B16]/25" />
											<div className="absolute -left-10 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white" />
											<div className="absolute -right-10 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white" />
										</div>

										{/* stub details */}
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-3">
												<Truck
													size={22}
													className="text-[#1F1B16]/60"
												/>
												<div>
													<p className="font-mono text-sm font-bold uppercase tracking-wider text-[#1F1B16]">
														Free Delivery
													</p>
													<p className="font-mono text-xs text-[#1F1B16]/50">
														On orders ₹1999+
													</p>
												</div>
											</div>

											<div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1F1B16]/20 text-[#1F1B16]/70">
												<Percent
													size={22}
													strokeWidth={1.5}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    FEATURES
			===================================================== */}

			<section className="border-b border-gray-200 bg-[#f7f7f7] hidden lg:block lg:-mt-10">
				<div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
					{features.map((feature) => {
						const Icon = feature.icon;

						return (
							<div
								key={feature.title}
								className="flex items-center gap-4 px-6 py-7"
							>
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100">
									<Icon size={22} />
								</div>

								<div>
									<h3 className="font-bold">
										{feature.title}
									</h3>

									<p className="mt-1 text-sm text-gray-500">
										{feature.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* =====================================================
			    EXPLORE CATEGORIES
			===================================================== */}

			<section className="border-b border-gray-200 bg-[#f7f7f7] py-20 -mt-25 lg:-mt-10">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* Header */}

					<div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<div>
							<div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
								<span className="h-2 w-2 rounded-full bg-orange-500"></span>
								Shop by category
							</div>

							<h2 className="text-4xl font-black tracking-tight sm:text-5xl">
								Explore Categories
							</h2>

							<p className="mt-3 max-w-xl text-lg text-gray-500">
								Everything you're looking for, organized in one
								simple place.
							</p>
						</div>

						<Link
							to="/categories"
							className="group inline-flex items-center gap-2 font-bold text-gray-900 hover:text-orange-500"
						>
							View All Categories
							<ArrowRight
								size={19}
								className="transition-transform group-hover:translate-x-1"
							/>
						</Link>
					</div>

					{/* Main Category Grid */}

					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{categories.map((category, index) => {
							const Icon = category.icon;

							return (
								<Link
									key={category.slug}
									to={`/categories//${category.name.toLowerCase()}`}
									className="group relative min-h-[250px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:shadow-xl"
								>
									{/* Background Number */}

									<span className="absolute -right-3 -top-7 select-none text-[130px] font-black leading-none text-gray-50 transition-colors group-hover:text-orange-50">
										0{index + 1}
									</span>

									{/* Icon */}

									<div className="relative flex items-start justify-between">
										<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 transition-colors duration-300 group-hover:bg-orange-500">
											<Icon
												size={30}
												strokeWidth={1.8}
												className="transition-colors group-hover:text-white"
											/>
										</div>

										<div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-all group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
											<ArrowUpRight size={18} />
										</div>
									</div>

									{/* Content */}

									<div className="relative mt-9">
										<div className="flex items-center justify-between gap-3">
											<h3 className="text-2xl font-black">
												{category.name}
											</h3>

											<span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
												{category.count}
											</span>
										</div>

										<p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
											{category.description}
										</p>

										<div className="mt-5 flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors group-hover:text-orange-500">
											Shop now
											<ArrowRight
												size={16}
												className="transition-transform group-hover:translate-x-1"
											/>
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			{/* =====================================================
			    FEATURED PRODUCTS
			===================================================== */}

			<section className="bg-[#f7f7f7] py-20 -mt-25 lg:-mt-10">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div
						className="mb-12 flex flex-col justify-between gap-5 md:flex-row
					md:items-end"
					>
						<div>
							<p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
								Handpicked for you
							</p>

							<h2 className="mt-2 text-4xl font-black">
								Featured Products
							</h2>

							<p className="mt-3 text-gray-500">
								Popular products customers are loving right now.
							</p>
						</div>

						<Link
							to="/featured-products"
							className="group items-center gap-2 font-bold flex"
						>
							View All
							<ArrowRight
								size={18}
								className="transition-transform group-hover:translate-x-1"
							/>
						</Link>
					</div>
					{featuredProducts.length > 0 ? (
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{featuredProducts.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}

							{/* {product.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))} */}
						</div>
					) : (
						<div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
							<Package
								size={40}
								className="mx-auto text-gray-400"
							/>

							<p className="mt-4 text-gray-500">
								No products available.
							</p>
						</div>
					)}
				</div>
			</section>

			{/* =====================================================
			    DEAL BANNER
			===================================================== */}

			<section className="border-y border-gray-200 bg-white py-16 -mt-25 lg:-mt-10">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="relative overflow-hidden rounded-3xl bg-black px-7 py-12 text-white sm:px-12 lg:px-16">
						{/* Decorative circle */}

						<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-orange-500/20"></div>

						<div className="absolute -bottom-28 right-40 h-64 w-64 rounded-full border-[40px] border-white/5"></div>

						<div className="relative grid items-center gap-10 lg:grid-cols-2">
							<div>
								<div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-400">
									<Clock3 size={15} />
									Limited Time Offer
								</div>

								<h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
									Deals worth
									<span className="block text-orange-500">
										grabbing.
									</span>
								</h2>

								<p className="mt-5 max-w-lg text-gray-400">
									Save big on selected products across
									electronics, fashion, home and more.
								</p>

								<Link
									to="/best-deals"
									className="mt-8 inline-flex items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
								>
									Shop Deals
									<ArrowRight size={19} />
								</Link>
							</div>

							<div className="flex items-center justify-center">
								<div className="text-center">
									<div className="text-8xl font-black tracking-tighter sm:text-9xl">
										70
										<span className="text-orange-500">
											%
										</span>
									</div>

									<p className="mt-2 text-sm font-bold uppercase tracking-[0.3em] text-gray-400">
										Maximum Discount
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    BEST DEALS
			===================================================== */}

			<section className="bg-[#f7f7f7] py-20 -mt-25 lg:-mt-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div
						className="mb-12 flex flex-col justify-between gap-5 md:flex-row
					md:items-end"
					>
						<div>
							<div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
								<Sparkles size={16} />
								Best value
							</div>

							<h2 className="mt-2 text-4xl font-black">
								Best Deals For You
							</h2>

							<p className="mt-3 text-gray-500">
								Great products. Better prices.
							</p>
						</div>

						<Link
							to="/best-deals"
							className="group  items-center gap-2 font-bold flex"
						>
							View All
							<ArrowRight
								size={18}
								className="transition-transform group-hover:translate-x-1"
							/>
						</Link>
					</div>

					{bestDeals.length > 0 && (
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{bestDeals.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
}

export default Home;
