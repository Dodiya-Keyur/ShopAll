
import {
	Mail,
	Phone,
	MapPin,
	ArrowRight,
	CreditCard,
	ShieldCheck,
} from "lucide-react";

import {
	FaFacebookF,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
	FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-950 text-gray-300 mt-5">
			{/* Newsletter Section */}
			<div className="border-b border-gray-800">
				<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
					<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
						{/* Newsletter Content */}
						<div className="max-w-xl">
							<h2 className="text-2xl font-bold text-white sm:text-3xl">
								Subscribe to our newsletter
							</h2>

							<p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
								Get the latest products, exclusive offers,
								discounts, and updates delivered directly to
								your inbox.
							</p>
						</div>

						{/* Newsletter Form */}
						<form className="w-full max-w-md">
							<div className="flex overflow-hidden rounded-lg border border-gray-700 bg-gray-900 focus-within:border-indigo-500">
								<input
									type="email"
									placeholder="Enter your email"
									className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
								/>

								<button
									type="submit"
									className="flex items-center gap-2 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
								>
									Subscribe
									<ArrowRight size={17} />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			{/* Main Footer */}
			<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
					{/* Brand */}
					<div className="lg:col-span-2">
						<a href="/" className="inline-flex items-center gap-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-lg font-bold text-white">
								S
							</div>

							<span className="text-2xl font-bold text-white">
								ShopAll
							</span>
						</a>

						<p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
							Your one-stop destination for quality products at
							affordable prices. Discover the latest trends, shop
							with confidence, and enjoy a seamless shopping
							experience.
						</p>

						{/* Contact Information */}
						<div className="mt-6 space-y-3">
							<div className="flex items-center gap-3 text-sm">
								<MapPin
									size={18}
									className="shrink-0 text-indigo-500"
								/>
								<span>123 Market Street, Gujarat, India</span>
							</div>

							<div className="flex items-center gap-3 text-sm">
								<Phone
									size={18}
									className="shrink-0 text-indigo-500"
								/>
								<a
									href="tel:+919876543210"
									className="transition hover:text-white"
								>
									+91 98765 43210
								</a>
							</div>

							<div className="flex items-center gap-3 text-sm">
								<Mail
									size={18}
									className="shrink-0 text-indigo-500"
								/>
								<a
									href="mailto:support@shopall.com"
									className="transition hover:text-white"
								>
									support@shopall.com
								</a>
							</div>
						</div>

						{/* Social Media */}
						<div className="mt-7 flex items-center gap-3">
							<a
								href="#"
								aria-label="Facebook"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-indigo-600 hover:text-white"
							>
								<FaFacebookF size={18} />
							</a>

							<a
								href="#"
								aria-label="Instagram"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-indigo-600 hover:text-white"
							>
								<FaInstagram size={18} />
							</a>

							<a
								href="#"
								aria-label="Twitter"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-indigo-600 hover:text-white"
							>
								<FaTwitter size={18} />
							</a>

							<a
								href="#"
								aria-label="YouTube"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-indigo-600 hover:text-white"
							>
								<FaYoutube size={18} />
							</a>

							<a
								href="#"
								aria-label="LinkedIn"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-indigo-600 hover:text-white"
							>
								<FaLinkedin size={18} />
							</a>
						</div>
					</div>

					{/* Shop */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-white">
							Shop
						</h3>

						<ul className="mt-5 space-y-3 text-sm">
							<li>
								<a
									href="/"
									className="transition hover:text-indigo-400"
								>
									All Products
								</a>
							</li>

							<li>
								<a
									href="/categories"
									className="transition hover:text-indigo-400"
								>
									Categories
								</a>
							</li>

							<li>
								<a
									href="/newarrivals"
									className="transition hover:text-indigo-400"
								>
									New Arrivals
								</a>
							</li>

							<li>
								<a
									href="/bestsellers"
									className="transition hover:text-indigo-400"
								>
									Best Sellers
								</a>
							</li>

							<li>
								<a
									href="/best-deals"
									className="transition hover:text-indigo-400"
								>
									Deals & Offers
								</a>
							</li>

							<li>
								<a
									href="/wishlist"
									className="transition hover:text-indigo-400"
								>
									Wishlist
								</a>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-white">
							Customer Service
						</h3>

						<ul className="mt-5 space-y-3 text-sm">
							<li>
								<Link
									to="/contact"
									className="transition hover:text-indigo-400"
								>
									Contact Us
								</Link>
							</li>

							<li>
								<Link
									to="/contact"
									className="transition hover:text-indigo-400"
								>
									FAQs
								</Link>
							</li>

							<li>
								<Link
									to="/contact"
									className="transition hover:text-indigo-400"
								>
									Help Center
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-white">
							Company
						</h3>

						<ul className="mt-5 space-y-3 text-sm">
							<li>
								<Link
									to="/about"
									className="transition hover:text-indigo-400"
								>
									About Us
								</Link>
							</li>

							<li>
								<a
									href="/privacy"
									className="transition hover:text-indigo-400"
								>
									Privacy Policy
								</a>
							</li>

							<li>
								<a
									href="/terms"
									className="transition hover:text-indigo-400"
								>
									Terms & Conditions
								</a>
							</li>

							<li>
								<a
									href="/security"
									className="transition hover:text-indigo-400"
								>
									Security
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Trust Section */}
				<div className="mt-12 grid grid-cols-1 gap-4 border-y border-gray-800 py-7 sm:grid-cols-2">
					<div className="flex items-center gap-3">
						<ShieldCheck size={24} className="text-indigo-500" />

						<div>
							<p className="text-sm font-semibold text-white">
								Secure Shopping
							</p>

							<p className="text-xs text-gray-500">
								Your data is protected
							</p>
						</div>
					</div>

					<div className="flex items-center gap-3 sm:justify-end">
						<CreditCard size={24} className="text-indigo-500" />

						<div>
							<p className="text-sm font-semibold text-white">
								Secure Payments
							</p>

							<p className="text-xs text-gray-500">
								Multiple payment options
							</p>
						</div>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between">
					<p className="text-sm text-gray-500">
						© {currentYear} ShopAll. All rights reserved.
					</p>

					{/* Payment Methods */}
					<div className="flex flex-wrap items-center gap-2">
						<span className="rounded border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-semibold text-gray-400">
							VISA
						</span>

						<span className="rounded border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-semibold text-gray-400">
							Mastercard
						</span>

						<span className="rounded border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-semibold text-gray-400">
							UPI
						</span>

						<span className="rounded border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-semibold text-gray-400">
							PayPal
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
