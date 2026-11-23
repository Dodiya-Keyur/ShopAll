import React, { useEffect, useRef, useState } from "react";
import {
	Search,
	ShoppingCart,
	Heart,
	User,
	Menu,
	X,
	ChevronDown,
	MapPin,
	Package,
	LogIn,
	UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar.jsx";

const Header = () => {

	const wishlists = useSelector((store) => store.wishlist.wishlists);
	const cartItems = useSelector((state) => state.cart.items || []);

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [accountOpen, setAccountOpen] = useState(false);
	const [categoryOpen, setCategoryOpen] = useState(false);
	const [hoveredCategory, setHoveredCategory] = useState(null);

	const accountRef = useRef(null);
	const categoryRef = useRef(null);

	const categories = [
		"Electronics",
		"Fashion",
		"Beauty",
		"Home & Kitchen",
		"Sports & Toys",
		"Books",
	];

	const categoryMenus = {
		Electronics: [
			"Mobiles",
			"Laptops",
			"Tablets",
			"Headphones",
			"Televisions",
			"Cameras",
		],

		Fashion: [
			"Men's Clothing",
			"Women's Clothing",
			"Kids Clothing",
			"Shoes",
			"Watches",
			"Accessories",
		],

		Beauty: [
			"Makeup",
			"Skincare",
			"Hair Care",
			"Fragrances",
			"Bath & Body",
		],

		"Home & Kitchen": [
			"Furniture",
			"Kitchen Appliances",
			"Cookware",
			"Home Decor",
			"Storage",
		],

		"Sports & Toys": [
			"Cricket",
			"Football",
			"Gym & Fitness",
			"Running",
			"Outdoor Sports",
		],
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				accountRef.current &&
				!accountRef.current.contains(event.target)
			) {
				setAccountOpen(false);
			}

			if (
				categoryRef.current &&
				!categoryRef.current.contains(event.target)
			) {
				setCategoryOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="w-full bg-white border-b border-gray-400 shadow-sm fixed top-0 z-50">
			{/* =====================================================
          TOP ANNOUNCEMENT BAR
      ====================================================== */}
			<div className="bg-gray-900 text-white hidden sm:block">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="h-9 flex items-center justify-between text-xs sm:text-sm">
						<p className="hidden sm:block">
							Free shipping on orders over ₹999
						</p>

						<p className="mx-auto sm:mx-0">
							Summer Sale — Up to 50% OFF
						</p>

						<div className="hidden md:flex items-center gap-4">
							<Link to="/contact" className="hover:text-gray-300 transition">
								Help Center
							</Link>
							<Link to="/contact" className="hover:text-gray-300 transition">
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

			<div className="bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="h-20 flex items-center gap-4 lg:gap-8">
						{/* Mobile Menu Button */}
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
							aria-label="Toggle menu"
						>
							{mobileMenuOpen ? (
								<X size={24} />
							) : (
								<Menu size={24} />
							)}
						</button>

						{/* =================================================
                LOGO
            ================================================== */}
						<Link
							to="/"
							className="flex items-center gap-2 shrink-0"
						>
							<div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
								S
							</div>

							<div className="hidden sm:block">
								<h1 className="text-xl font-bold tracking-tight text-gray-900">
									ShopAll
								</h1>
								<p className="text-[10px] text-gray-500 -mt-1">
									Everything. One Place.
								</p>
							</div>
						</Link>

						{/* =================================================
                LOCATION
            ================================================== */}
						<button className="hidden xl:flex items-center gap-2 text-left hover:text-black text-gray-600 transition">
							<MapPin size={20} />

							<div>
								<p className="text-[11px] text-gray-500">
									Deliver to
								</p>
								<p className="text-sm font-semibold text-gray-900">
									Ahmedabad, Gujarat
								</p>
							</div>
						</button>

						{/* =================================================
                SEARCH BAR 
            ================================================== */}
						<div className="flex-1 max-w-2xl">
							<SearchBar />
						</div>

						{/* =================================================
                ACCOUNT
            ================================================== */}
						<div
							ref={accountRef}
							className="relative hidden lg:block"
						>
							<button
								onClick={() => setAccountOpen(!accountOpen)}
								className="flex items-center gap-2 hover:text-gray-600 transition"
							>
								<User size={23} />

								<div className="text-left">
									<p className="text-[11px] text-gray-500">
										Hello, Sign in
									</p>
									<p className="text-sm font-semibold">
										Account
									</p>
								</div>

								<ChevronDown
									size={15}
									className={`transition-transform ${
										accountOpen ? "rotate-180" : ""
									}`}
								/>
							</button>

							{/* Account Dropdown */}
							{accountOpen && (
								<div className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-gray-200 bg-white shadow-xl p-4">
									<div className="pb-3 border-b border-gray-100">
										<p className="font-semibold text-gray-900">
											Welcome to ShopAll
										</p>

										<p className="text-xs text-gray-500 mt-1">
											Login to access your account
										</p>
									</div>

									<Link to="/login">
										<button className="w-full mt-3 flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition text-sm">
											<LogIn size={18} />
											Sign In
										</button>
									</Link>

									<Link to="/register">
										<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition text-sm">
											<UserPlus size={18} />
											Create Account
										</button>
									</Link>

									<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition text-sm">
										<Package size={18} />
										My Orders
									</button>
								</div>
							)}
						</div>

						{/* =================================================
                WISHLIST
            ================================================== */}
						<Link to="/wishlist">
							<button
								className="relative hidden sm:flex items-center justify-center p-2.5 rounded-lg hover:bg-gray-100 transition"
								aria-label="Wishlist"
							>
								<Heart size={23} />

								<span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-semibold">
									{wishlists.length}
								</span>
							</button>
						</Link>

						{/* =================================================
                CART
            ================================================== */}
						<Link to="/cart">
							<button
								className="relative flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
								aria-label="Shopping cart"
							>
								<ShoppingCart size={25} />

								<span className="hidden sm:block text-sm font-semibold">
									Cart
								</span>

								<span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-semibold">
									{cartItems.length}
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* =====================================================
          CATEGORY NAVIGATION
      ====================================================== */}
			<nav className="hidden lg:block border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="h-12 flex items-center justify-between">
						{/* Categories */}
						<div className="flex items-center gap-2">
							<div ref={categoryRef} className="relative">
								<button
									onClick={() =>
										setCategoryOpen(!categoryOpen)
									}
									className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
								>
									<Menu size={18} />
									All Categories
									<ChevronDown
										size={15}
										className={`transition-transform ${
											categoryOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								{categoryOpen && (
									<div className="absolute left-0 top-11 z-50 w-56 rounded-xl border border-gray-200 bg-gray-200 shadow-xl p-2">
										{categories.map((category) => (
											<Link
												key={category}
												onClick={() =>
													setCategoryOpen(false)
												}
												to={`/categories/${category.toLowerCase()}`}
												className="block px-3 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition"
											>
												{category}
											</Link>
										))}
									</div>
								)}
							</div>

							{categories.slice(0, 5).map((category) => (
								<div
									key={category}
									className="relative"
									onMouseEnter={() =>
										setHoveredCategory(category)
									}
									onMouseLeave={() =>
										setHoveredCategory(null)
									}
								>
									<Link
										to={`/categories/${category.toLowerCase()}`}
										className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
									>
										{category}
									</Link>

									{hoveredCategory === category && (
										<div className="absolute left-0 top-full z-50 w-60 rounded-xl border border-gray-200 bg-white shadow-xl p-2">
											{categoryMenus[category]?.map(
												(item) => (
													<Link
														key={item}
														onClick={() =>
															setHoveredCategory(
																null,
															)
														}
														to={`/categories/${category.toLowerCase()}/${item.toLowerCase()}`}
														className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
													>
														{item}

														<span className="text-gray-400">
															→
														</span>
													</Link>
												),
											)}
										</div>
									)}
								</div>
							))}
						</div>

						{/* Right Navigation */}
						<div className="flex items-center gap-5 text-sm">
							<Link
								to="/best-deals"
								className="font-semibold text-red-600 hover:text-red-700"
							>
								Today's Deals
							</Link>

							<Link
								to="/newarrivals"
								className="text-gray-600 hover:text-gray-900"
							>
								New Arrivals
							</Link>

							<Link
								to="/bestsellers"
								className="text-gray-600 hover:text-gray-900"
							>
								Best Sellers
							</Link>
						</div>
					</div>
				</div>
			</nav>

			{/* =====================================================
          MOBILE MENU
      ====================================================== */}
			{mobileMenuOpen && (
				<div className="lg:hidden fixed left-0 right-0 top-19 bottom-0 z-50 bg-white border-t border-gray-200 overflow-y-auto">
					{/* Mobile Search Bar */}
					<div className="p-4 pb-2 border-b border-gray-100 bg-gray-50/50">
						<SearchBar
							isMobile={true}
							onCloseMobile={() => setMobileMenuOpen(false)}
						/>
					</div>

					{/* Mobile Account */}
					<div className="p-4 border-b border-gray-100">
						<button className="w-full flex items-center gap-3 text-left">
							<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
								<User size={20} />
							</div>

							<div>
								<p className="font-semibold text-sm">
									Hello, Sign in
								</p>

								<p className="text-xs text-gray-500">
									View your account
								</p>
							</div>
						</button>
					</div>

					{/* Mobile Location */}
					<div className="px-4 py-4 border-b border-gray-100">
						<button className="w-full flex items-center gap-3 text-left hover:bg-gray-50 rounded-lg p-2 -m-2 transition">
							<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
								<MapPin size={20} className="text-gray-700" />
							</div>

							<div className="flex-1">
								<p className="text-xs text-gray-500">
									Deliver to
								</p>

								<p className="text-sm font-semibold text-gray-900">
									Ahmedabad, Gujarat
								</p>
							</div>

							<ChevronDown
								size={18}
								className="text-gray-400 -rotate-90"
							/>
						</button>
					</div>

					{/* Mobile Navigation */}
					<nav className="p-4">
						<p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
							Categories
						</p>

						<div className="space-y-1">
							{categories.map((category) => (
								<Link
									key={category}
									onClick={() => setMobileMenuOpen(false)}
									to={`/categories/${category.toLowerCase()}`}
									className="flex items-center justify-between px-3 py-3 rounded-lg text-sm hover:bg-gray-100 transition"
								>
									{category}
									<ChevronDown
										size={15}
										className="-rotate-90"
									/>
								</Link>
							))}
						</div>

						<div className="border-t border-gray-100 mt-2 pt- space-y-1">
							<Link
								to="/best-deals"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50"
							>
								Today's Deals
							</Link>

							<a
								href="#new"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-3 rounded-lg text-sm hover:bg-gray-100"
							>
								New Arrivals
							</a>

							<a
								href="#orders"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-3 rounded-lg text-sm hover:bg-gray-100"
							>
								My Orders
							</a>

							<Link
								to="/wishlist"
								onClick={() => setMobileMenuOpen(false)}
								className="block px-3 py-3 rounded-lg text-sm hover:bg-gray-100"
							>
								Wishlist
							</Link>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
