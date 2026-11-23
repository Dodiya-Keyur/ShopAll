import React from "react";
import { Link } from "react-router-dom";
import {
	ShoppingBag,
	Truck,
	ShieldCheck,
	Award,
	Users,
	Globe,
	Heart,
	Sparkles,
	Clock,
	CheckCircle2,
	ArrowRight,
	Headphones,
	Zap,
	Star,
	TrendingUp,
	Package,
} from "lucide-react";

export default function About() {
	const stats = [
		{ label: "Happy Customers", value: "2M+", icon: Users },
		{ label: "Products Available", value: "50,000+", icon: Package },
		{ label: "Cities Covered", value: "500+", icon: Globe },
		{ label: "Customer Rating", value: "4.8 / 5", icon: Star },
	];

	const values = [
		{
			icon: Award,
			title: "100% Authentic Products",
			description:
				"Every single product on ShopAll is sourced directly from certified brands and authorized distributors for guaranteed genuineness.",
			color: "text-amber-500 bg-amber-50",
		},
		{
			icon: ShieldCheck,
			title: "Secure & Trusted",
			description:
				"Your safety is our top priority. We use industry-standard encryption and verified payment gateways to protect your transactions.",
			color: "text-blue-500 bg-blue-50",
		},
		{
			icon: Truck,
			title: "Lightning Fast Delivery",
			description:
				"Our distributed logistics network ensures that your favorite items are packaged with care and delivered swiftly to your doorstep.",
			color: "text-green-500 bg-green-50",
		},
		{
			icon: Headphones,
			title: "24/7 Dedicated Support",
			description:
				"Have questions or need assistance? Our round-the-clock customer support team is always ready to assist you at every step.",
			color: "text-purple-500 bg-purple-50",
		},
	];

	const milestones = [
		{
			year: "2021",
			title: "The Genesis",
			description:
				"ShopAll was founded with a simple mission: make quality lifestyle and tech products accessible and affordable for everyone.",
		},
		{
			year: "2022",
			title: "Rapid Expansion",
			description:
				"Expanded catalog across 6 major categories, serving over 100,000 happy customers across 150+ cities.",
		},
		{
			year: "2024",
			title: "Logistics & Tech Innovation",
			description:
				"Introduced smart order tracking, next-day express delivery in metro areas, and personalized shopping experiences.",
		},
		{
			year: "Today & Beyond",
			title: "India's Preferred Shopping Destination",
			description:
				"Serving over 2 million satisfied buyers with a growing catalog of 50K+ curated products across fashion, electronics, and home.",
		},
	];

	return (
		<div className="min-h-screen bg-[#f8f9fa] text-gray-900 -mt-30 lg:-mt-20">
			{/* =====================================================
			    HERO SECTION
			===================================================== */}
			<section className="relative overflow-hidden bg-white border-b border-gray-200">
				{/* Background decorative circles */}
				<div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 rounded-full bg-orange-100/50 blur-3xl pointer-events-none" />
				<div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 rounded-full bg-indigo-100/50 blur-3xl pointer-events-none" />

				<div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
					<div className="text-center max-w-3xl mx-auto">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs sm:text-sm font-semibold mb-6">
							<Sparkles size={16} />
							<span>About ShopAll</span>
						</div>

						<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gray-950">
							Everything you love,{" "}
							<span className="text-orange-500 underline decoration-orange-300 decoration-wavy decoration-2">
								all in one place.
							</span>
						</h1>

						<p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
							At ShopAll, we believe that shopping should be seamless, enjoyable, and affordable.
							From the latest tech gadgets to runway fashion and daily home essentials, we bring top quality
							curations right to your doorstep.
						</p>

						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<Link
								to="/categories"
								className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
							>
								<ShoppingBag size={18} />
								Explore Categories
							</Link>

							<Link
								to="/best-deals"
								className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:border-gray-400 active:scale-95"
							>
								<span>Today's Deals</span>
								<ArrowRight size={18} />
							</Link>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
						{stats.map((item, idx) => {
							const IconComponent = item.icon;
							return (
								<div
									key={idx}
									className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md hover:border-orange-200 transition"
								>
									<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
										<IconComponent size={24} />
									</div>
									<div className="text-2xl sm:text-3xl font-black text-gray-950">
										{item.value}
									</div>
									<div className="mt-1 text-xs sm:text-sm font-medium text-gray-500">
										{item.label}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* =====================================================
			    OUR MISSION & VALUES
			===================================================== */}
			<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-xs font-bold uppercase tracking-widest text-orange-600">
						Why We Exist
					</h2>
					<p className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
						Core values that guide everything we do
					</p>
					<p className="mt-4 text-gray-600">
						We are passionate about building the most customer-obsessed shopping experience in the country.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{values.map((val, idx) => {
						const IconComponent = val.icon;
						return (
							<div
								key={idx}
								className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
							>
								<div
									className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${val.color} transition-transform group-hover:scale-110`}
								>
									<IconComponent size={28} />
								</div>
								<h3 className="text-lg font-bold text-gray-950">
									{val.title}
								</h3>
								<p className="mt-3 text-sm leading-6 text-gray-600">
									{val.description}
								</p>
							</div>
						);
					})}
				</div>
			</section>

			{/* =====================================================
			    THE SHOPALL JOURNEY / TIMELINE
			===================================================== */}
			<section className="bg-white border-y border-gray-200 py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-xs font-bold uppercase tracking-widest text-orange-600">
							Our Growth
						</h2>
						<p className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
							The Journey of ShopAll
						</p>
						<p className="mt-4 text-gray-600">
							From an ambitious vision to one of the fastest growing e-commerce platforms.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						{milestones.map((step, idx) => (
							<div
								key={idx}
								className="relative rounded-2xl border border-gray-100 bg-[#fafafa] p-6 transition-all hover:bg-white hover:border-orange-300 hover:shadow-lg"
							>
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl font-black text-orange-500">
										{step.year}
									</span>
									<span className="h-2 w-2 rounded-full bg-orange-400" />
								</div>
								<h3 className="text-lg font-bold text-gray-900">
									{step.title}
								</h3>
								<p className="mt-2 text-sm text-gray-600 leading-relaxed">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* =====================================================
			    CALL TO ACTION (CTA)
			===================================================== */}
			<section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
				<div className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-16 text-center text-white shadow-2xl sm:px-16 sm:py-20">
					{/* Glowing decorative blur */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

					<div className="relative mx-auto max-w-2xl">
						<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-orange-400 mb-6 backdrop-blur-sm">
							<Zap size={14} />
							<span>Start Your Shopping Journey</span>
						</div>

						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
							Ready to find what you're looking for?
						</h2>

						<p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
							Join over 2 million satisfied customers. Explore thousands of deals, trending arrivals, and premium products today.
						</p>

						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<Link
								to="/"
								className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 active:scale-95"
							>
								<ShoppingBag size={18} />
								Shop Now
							</Link>

							<Link
								to="/categories"
								className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-900/80 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-gray-800 active:scale-95"
							>
								Browse All Categories
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
