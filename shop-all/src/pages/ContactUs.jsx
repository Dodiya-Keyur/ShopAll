import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Mail,
	Phone,
	MapPin,
	Clock,
	MessageSquare,
	Send,
	CheckCircle2,
	HelpCircle,
	ChevronDown,
	Sparkles,
	Headphones,
	ShieldAlert,
	PackageCheck,
	ArrowRight,
	ExternalLink,
	Copy,
	Check,
	AlertCircle,
	Building2,
	Globe,
	FileText,
	MessageCircle,
} from "lucide-react";
import {
	FaWhatsapp,
	FaTwitter,
	FaInstagram,
	FaFacebookF,
	FaLinkedinIn,
} from "react-icons/fa";

export default function ContactUs() {
	// Form State
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		orderId: "",
		inquiryType: "General Inquiry",
		priority: "Normal",
		message: "",
		agreeToTerms: false,
	});

	const [formStatus, setFormStatus] = useState("idle"); // 'idle' | 'submitting' | 'submitted' | 'error'
	const [generatedTicketId, setGeneratedTicketId] = useState("");
	const [copiedField, setCopiedField] = useState(null);

	// FAQ Accordion State
	const [openFaq, setOpenFaq] = useState(0);
	const [faqSearch, setFaqSearch] = useState("");

	// Location Tab State
	const [selectedLocation, setSelectedLocation] = useState(0);

	// Contact Channels Data
	const contactChannels = [
		{
			icon: Headphones,
			title: "Customer Support",
			badge: "24/7 Available",
			badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
			description:
				"Need immediate help with your orders, returns, or account?",
			actionLabel: "+91 98765 43210",
			actionHref: "tel:+919876543210",
			copyValue: "+919876543210",
			type: "phone",
			subtext: "Toll-free • Avg. response under 2 mins",
			color: "text-blue-600 bg-blue-50 border-blue-100",
		},
		{
			icon: Mail,
			title: "Email Support",
			badge: "Fast Response",
			badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
			description:
				"Write to our specialized desk for detailed inquiries or document sharing.",
			actionLabel: "support@shopall.com",
			actionHref: "mailto:support@shopall.com",
			copyValue: "support@shopall.com",
			type: "email",
			subtext: "Response within 4 - 6 hours",
			color: "text-orange-600 bg-orange-50 border-orange-100",
		},
		{
			icon: FaWhatsapp,
			title: "WhatsApp Assistant",
			badge: "Instant Chat",
			badgeColor: "bg-green-100 text-green-700 border-green-200",
			description:
				"Chat directly with our verified business assistant on WhatsApp.",
			actionLabel: "Start WhatsApp Chat",
			actionHref: "https://wa.me/919876543210?text=Hello%20ShopAll%20Support",
			type: "link",
			subtext: "Available 8:00 AM - 10:00 PM IST",
			color: "text-emerald-600 bg-emerald-50 border-emerald-100",
		},
		{
			icon: Building2,
			title: "Corporate & Wholesale",
			badge: "B2B Partners",
			badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
			description:
				"Interested in bulk purchasing, vendor partnerships, or press inquiries?",
			actionLabel: "partners@shopall.com",
			actionHref: "mailto:partners@shopall.com",
			copyValue: "partners@shopall.com",
			type: "email",
			subtext: "Dedicated business relationship managers",
			color: "text-purple-600 bg-purple-50 border-purple-100",
		},
	];

	// FAQ Data
	const faqs = [
		{
			question: "How can I track my recent order status?",
			answer:
				"You can track your order at any moment by navigating to 'My Orders' in your account or entering your Order ID and phone number on our dedicated tracking page. You will also receive real-time SMS and email updates with tracking links once dispatched.",
			category: "Orders & Shipping",
		},
		{
			question: "What is the return & replacement policy?",
			answer:
				"We offer a hassle-free 7-day return and replacement policy on eligible items. If you receive a damaged, defective, or incorrect product, you can initiate a return directly from the order details section.",
			category: "Returns & Refunds",
		},
		{
			question: "How long does it take to process a refund?",
			answer:
				"Once your returned product is picked up and passes our quick quality check at our fulfillment center, refunds are initiated within 24 to 48 hours. Depending on your bank or payment method (UPI, Debit/Credit Card, Net Banking), funds reflect in 3-5 business days.",
			category: "Returns & Refunds",
		},
		{
			question: "Can I change my delivery address or phone number?",
			answer:
				"Address modifications can be performed before the order is dispatched. Go to 'My Orders', click 'Edit Address', or contact our support team immediately with your Order ID for swift assistance.",
			category: "Account & Settings",
		},
		{
			question: "Are payment transactions on ShopAll safe?",
			answer:
				"Yes, absolutely. All transactions are protected with 256-bit SSL encryption and processed through RBI-approved PCI-DSS compliant payment gateways. We do not store your CVV or sensitive card numbers.",
			category: "Payments & Security",
		},
		{
			question: "How do I become a registered seller on ShopAll?",
			answer:
				"We welcome brand owners and authorized distributors. Visit our Partner portal or email partners@shopall.com with your business details, GSTIN, and product catalog to get onboarded.",
			category: "Partnerships",
		},
	];

	const filteredFaqs = faqs.filter(
		(faq) =>
			faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
			faq.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
			faq.category.toLowerCase().includes(faqSearch.toLowerCase()),
	);

	// Office Locations Data
	const locations = [
		{
			city: "Ahmedabad (Headquarters)",
			state: "Gujarat, India",
			address: "Tower 4, Infocity Commercial Hub, S.G. Highway, Ahmedabad - 380054",
			hours: "Monday - Saturday: 9:00 AM - 7:00 PM IST",
			phone: "+91 (079) 4567-8900",
			email: "corporate@shopall.com",
			tag: "Head Office & R&D",
		},
		{
			city: "Mumbai (Fulfillment Hub)",
			state: "Maharashtra, India",
			address: "Warehouse Complex 12, Bhiwandi Logistics Park, Mumbai - 421302",
			hours: "24/7 Operations & Dispatch",
			phone: "+91 (022) 8901-2345",
			email: "logistics.west@shopall.com",
			tag: "Primary Fulfillment Center",
		},
		{
			city: "Bengaluru (Tech & Innovation)",
			state: "Karnataka, India",
			address: "Level 6, TechPark Delta, Outer Ring Road, Bengaluru - 560103",
			hours: "Monday - Friday: 9:30 AM - 6:30 PM IST",
			phone: "+91 (080) 6789-0123",
			email: "tech@shopall.com",
			tag: "Technology & AI Lab",
		},
		{
			city: "New Delhi (Northern Regional Hub)",
			state: "Delhi NCR, India",
			address: "Plot 88, Sector 18, Udyog Vihar, Gurugram, Delhi NCR - 122008",
			hours: "Monday - Saturday: 9:00 AM - 6:30 PM IST",
			phone: "+91 (0124) 432-1098",
			email: "north.desk@shopall.com",
			tag: "Regional Support Desk",
		},
	];

	// Handle input change
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	// Handle copy to clipboard
	const handleCopy = (text, fieldKey) => {
		navigator.clipboard.writeText(text);
		setCopiedField(fieldKey);
		setTimeout(() => setCopiedField(null), 2500);
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormStatus("submitting");

		// Simulate realistic network delay
		setTimeout(() => {
			const ticket = "SA-" + Math.floor(100000 + Math.random() * 900000);
			setGeneratedTicketId(ticket);
			setFormStatus("submitted");
		}, 1200);
	};

	const resetForm = () => {
		setFormData({
			fullName: "",
			email: "",
			phone: "",
			orderId: "",
			inquiryType: "General Inquiry",
			priority: "Normal",
			message: "",
			agreeToTerms: false,
		});
		setFormStatus("idle");
		setGeneratedTicketId("");
	};

	return (
		<div className="min-h-screen bg-[#f8f9fa] text-gray-900 -mt-30 lg:-mt-20">
			{/* =====================================================
			    HERO SECTION
			===================================================== */}
			<section className="relative overflow-hidden bg-white border-b border-gray-200">
				{/* Background decorative gradients */}
				<div className="absolute top-0 right-0 -mt-20 -mr-20 w-[450px] h-[450px] rounded-full bg-orange-100/60 blur-3xl pointer-events-none" />
				<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[450px] h-[450px] rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

				<div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
					<div className="text-center max-w-3xl mx-auto">
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
							<Sparkles size={16} className="animate-pulse" />
							<span>We are here for you 24/7</span>
						</div>

						<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gray-950">
							How can we help{" "}
							<span className="text-orange-500 underline decoration-orange-300 decoration-wavy decoration-2">
								you today?
							</span>
						</h1>

						<p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
							Have questions regarding an ongoing order, delivery timelines, product specs, or partnerships?
							Our dedicated support team is eager to assist you.
						</p>

						{/* Quick action bar */}
						<div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-gray-600">
							<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
								<span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
								All systems operational
							</span>
							<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
								<Clock size={14} className="text-gray-500" />
								Avg. Response &lt; 5 mins
							</span>
							<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
								<Globe size={14} className="text-gray-500" />
								English, Hindi & Regional support
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    CONTACT CHANNELS CARDS
			===================================================== */}
			<section className="mx-auto max-w-7xl px-4 -mt-8 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{contactChannels.map((channel, idx) => {
						const Icon = channel.icon;
						const isCopied = copiedField === `channel-${idx}`;

						return (
							<div
								key={idx}
								className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
							>
								<div>
									<div className="flex items-center justify-between mb-4">
										<div
											className={`flex h-12 w-12 items-center justify-center rounded-xl border ${channel.color} transition-transform group-hover:scale-105`}
										>
											<Icon size={22} />
										</div>

										<span
											className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${channel.badgeColor}`}
										>
											{channel.badge}
										</span>
									</div>

									<h2 className="text-lg font-bold text-gray-900">
										{channel.title}
									</h2>

									<p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
										{channel.description}
									</p>
								</div>

								<div className="mt-6 pt-4 border-t border-gray-100">
									<div className="flex items-center justify-between gap-2">
										<a
											href={channel.actionHref}
											target={channel.type === "link" ? "_blank" : "_self"}
											rel="noopener noreferrer"
											className="font-semibold text-xs sm:text-sm text-gray-900 hover:text-orange-600 transition flex items-center gap-1.5 truncate"
										>
											<span className="truncate">{channel.actionLabel}</span>
											{channel.type === "link" && <ExternalLink size={13} className="shrink-0" />}
										</a>

										{channel.copyValue && (
											<button
												type="button"
												onClick={() => handleCopy(channel.copyValue, `channel-${idx}`)}
												className="p-1.5 text-gray-400 hover:text-gray-800 rounded-lg hover:bg-gray-100 transition shrink-0"
												title="Copy to clipboard"
												aria-label={`Copy ${channel.title}`}
											>
												{isCopied ? (
													<Check size={16} className="text-emerald-600" />
												) : (
													<Copy size={16} />
												)}
											</button>
										)}
									</div>

									<p className="mt-1 text-[11px] text-gray-400">
										{channel.subtext}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* =====================================================
			    MAIN CONTENT: FORM & SIDEBAR INFO
			===================================================== */}
			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
					{/* LEFT COLUMN: INTERACTIVE CONTACT FORM (7 cols) */}
					<div className="lg:col-span-7 xl:col-span-8">
						<div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
							{formStatus === "submitted" ? (
								/* SUCCESS MESSAGE VIEW */
								<div className="py-8 text-center sm:py-12">
									<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6 ring-8 ring-emerald-50">
										<CheckCircle2 size={44} />
									</div>

									<h2 className="text-2xl sm:text-3xl font-bold text-gray-950">
										Message Received!
									</h2>

									<p className="mt-3 text-sm sm:text-base text-gray-600 max-w-md mx-auto">
										Thank you, <strong className="text-gray-900">{formData.fullName}</strong>. Your ticket has been logged with our priority support queue.
									</p>

									{/* Ticket Badge */}
									<div className="my-6 inline-flex items-center gap-3 rounded-2xl border border-orange-200 bg-orange-50/80 px-6 py-3.5 text-center">
										<div>
											<p className="text-xs uppercase font-bold tracking-wider text-orange-600">
												Support Reference ID
											</p>
											<p className="text-xl font-black text-gray-950 font-mono">
												{generatedTicketId}
											</p>
										</div>
										<button
											type="button"
											onClick={() => handleCopy(generatedTicketId, "ticket")}
											className="p-2 rounded-lg bg-white border border-orange-200 text-orange-600 hover:bg-orange-100 transition ml-2"
											title="Copy Ticket ID"
										>
											{copiedField === "ticket" ? <Check size={16} /> : <Copy size={16} />}
										</button>
									</div>

									<p className="text-xs text-gray-500 max-w-md mx-auto">
										A confirmation email with tracking instructions has been dispatched to{" "}
										<span className="font-semibold text-gray-700">{formData.email}</span>. Our representative will contact you within a few hours.
									</p>

									<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
										<button
											type="button"
											onClick={resetForm}
											className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95 shadow"
										>
											Send Another Message
										</button>

										<Link
											to="/"
											className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:border-gray-400 active:scale-95"
										>
											Return to Home
										</Link>
									</div>
								</div>
							) : (
								/* CONTACT FORM VIEW */
								<div>
									<div className="mb-8">
										<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
											<MessageSquare size={16} />
											<span>Direct Support Ticket</span>
										</div>

										<h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
											Send us a detailed message
										</h2>

										<p className="mt-2 text-sm text-gray-600">
											Fill out the form below and our team will get back to you with the right solution.
										</p>
									</div>

									<form onSubmit={handleSubmit} className="space-y-6">
										{/* Name & Email Row */}
										<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
											<div>
												<label
													htmlFor="fullName"
													className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
												>
													Full Name <span className="text-red-500">*</span>
												</label>
												<input
													type="text"
													id="fullName"
													name="fullName"
													required
													value={formData.fullName}
													onChange={handleChange}
													placeholder="e.g. Rahul Sharma"
													className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 placeholder:text-gray-400"
												/>
											</div>

											<div>
												<label
													htmlFor="email"
													className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
												>
													Email Address <span className="text-red-500">*</span>
												</label>
												<input
													type="email"
													id="email"
													name="email"
													required
													value={formData.email}
													onChange={handleChange}
													placeholder="rahul@example.com"
													className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 placeholder:text-gray-400"
												/>
											</div>
										</div>

										{/* Phone & Order ID Row */}
										<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
											<div>
												<label
													htmlFor="phone"
													className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
												>
													Phone Number <span className="text-gray-400 text-[11px] font-normal">(Optional)</span>
												</label>
												<input
													type="tel"
													id="phone"
													name="phone"
													value={formData.phone}
													onChange={handleChange}
													placeholder="+91 98765 43210"
													className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 placeholder:text-gray-400"
												/>
											</div>

											<div>
												<label
													htmlFor="orderId"
													className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
												>
													Order ID <span className="text-gray-400 text-[11px] font-normal">(If related to an order)</span>
												</label>
												<input
													type="text"
													id="orderId"
													name="orderId"
													value={formData.orderId}
													onChange={handleChange}
													placeholder="e.g. ORD-982314"
													className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 placeholder:text-gray-400 font-mono text-xs sm:text-sm"
												/>
											</div>
										</div>

										{/* Inquiry Type & Priority */}
										<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
											<div>
												<label
													htmlFor="inquiryType"
													className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
												>
													Inquiry Category <span className="text-red-500">*</span>
												</label>
												<select
													id="inquiryType"
													name="inquiryType"
													value={formData.inquiryType}
													onChange={handleChange}
													className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 cursor-pointer"
												>
													<option value="General Inquiry">General Inquiry</option>
													<option value="Order Tracking & Delivery">Order Tracking & Delivery</option>
													<option value="Returns, Exchanges & Refunds">Returns, Exchanges & Refunds</option>
													<option value="Payment & Billing Issue">Payment & Billing Issue</option>
													<option value="Product Details & Stock">Product Details & Stock</option>
													<option value="Vendor / Seller Partnership">Vendor / Seller Partnership</option>
													<option value="Technical or Website Issue">Technical or Website Issue</option>
													<option value="Other">Other</option>
												</select>
											</div>

											<div>
												<label
													htmlFor="priority"
													className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
												>
													Urgency Level
												</label>
												<select
													id="priority"
													name="priority"
													value={formData.priority}
													onChange={handleChange}
													className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 cursor-pointer"
												>
													<option value="Normal">Normal (Standard inquiry)</option>
													<option value="High">High (Active order issue)</option>
													<option value="Urgent">Urgent (Delivery / Payment failure)</option>
												</select>
											</div>
										</div>

										{/* Message Textarea */}
										<div>
											<label
												htmlFor="message"
												className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
											>
												Your Message <span className="text-red-500">*</span>
											</label>
											<textarea
												id="message"
												name="message"
												required
												rows={5}
												value={formData.message}
												onChange={handleChange}
												placeholder="Please describe your query or issue in detail. Include any relevant details like delivery date or product name..."
												className="w-full rounded-xl border border-gray-300 bg-gray-50/50 p-4 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 placeholder:text-gray-400 resize-y"
											/>
										</div>

										{/* Terms checkbox */}
										<div className="flex items-start gap-3">
											<input
												type="checkbox"
												id="agreeToTerms"
												name="agreeToTerms"
												required
												checked={formData.agreeToTerms}
												onChange={handleChange}
												className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
											/>
											<label
												htmlFor="agreeToTerms"
												className="text-xs text-gray-600 leading-normal cursor-pointer select-none"
											>
												I agree to allow ShopAll Support to process my contact details to resolve this inquiry in accordance with the{" "}
												<span className="text-orange-600 underline font-medium">Privacy Policy</span>.
											</label>
										</div>

										{/* Submit Button */}
										<div>
											<button
												type="submit"
												disabled={formStatus === "submitting"}
												className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 text-sm sm:text-base shadow-lg hover:shadow-orange-500/25 active:scale-98 transition disabled:opacity-70 cursor-pointer"
											>
												{formStatus === "submitting" ? (
													<>
														<div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
														<span>Submitting Ticket...</span>
													</>
												) : (
													<>
														<Send size={18} />
														<span>Submit Support Request</span>
													</>
												)}
											</button>
										</div>
									</form>
								</div>
							)}
						</div>
					</div>

					{/* RIGHT COLUMN: QUICK INFO, HELP CARDS, OPERATING HOURS (5 cols) */}
					<div className="lg:col-span-5 xl:col-span-4 space-y-6">
						{/* Card 1: Operating Hours & Direct Connect */}
						<div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
							<div className="flex items-center gap-3 mb-5">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
									<Clock size={20} />
								</div>
								<div>
									<h3 className="font-bold text-gray-950">Operating Timings</h3>
									<p className="text-xs text-gray-500">Live agents on standby</p>
								</div>
							</div>

							<div className="space-y-3 text-xs sm:text-sm">
								<div className="flex justify-between items-center py-2 border-b border-gray-100">
									<span className="text-gray-600">Online Chat & AI</span>
									<span className="font-semibold text-emerald-600 flex items-center gap-1.5">
										<span className="h-2 w-2 rounded-full bg-emerald-500" />
										24 hours / 7 days
									</span>
								</div>

								<div className="flex justify-between items-center py-2 border-b border-gray-100">
									<span className="text-gray-600">Voice Phone Support</span>
									<span className="font-semibold text-gray-900">8:00 AM - 11:00 PM</span>
								</div>

								<div className="flex justify-between items-center py-2 border-b border-gray-100">
									<span className="text-gray-600">Returns & Warehouse</span>
									<span className="font-semibold text-gray-900">9:00 AM - 8:00 PM</span>
								</div>

								<div className="flex justify-between items-center py-2">
									<span className="text-gray-600">B2B & Vendor Desk</span>
									<span className="font-semibold text-gray-900">Mon - Fri, 9:30 - 6:30</span>
								</div>
							</div>
						</div>

						{/* Card 2: Quick Self-Service Links */}
						<div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
									<PackageCheck size={20} />
								</div>
								<div>
									<h3 className="font-bold text-gray-950">Quick Self-Service</h3>
									<p className="text-xs text-gray-500">Instant answers without waiting</p>
								</div>
							</div>

							<div className="space-y-2 mt-4">
								<Link
									to="/cart"
									className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition text-xs sm:text-sm text-gray-700 font-medium"
								>
									<span className="flex items-center gap-2">
										<span className="text-orange-500">•</span>
										Review Active Cart & Items
									</span>
									<ArrowRight size={14} className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition" />
								</Link>

								<Link
									to="/categories"
									className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition text-xs sm:text-sm text-gray-700 font-medium"
								>
									<span className="flex items-center gap-2">
										<span className="text-blue-500">•</span>
										Browse Product Catalog
									</span>
									<ArrowRight size={14} className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition" />
								</Link>

								<Link
									to="/best-deals"
									className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition text-xs sm:text-sm text-gray-700 font-medium"
								>
									<span className="flex items-center gap-2">
										<span className="text-red-500">•</span>
										Check Special Offers & Deals
									</span>
									<ArrowRight size={14} className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition" />
								</Link>

								<Link
									to="/about"
									className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition text-xs sm:text-sm text-gray-700 font-medium"
								>
									<span className="flex items-center gap-2">
										<span className="text-purple-500">•</span>
										About ShopAll Story & Values
									</span>
									<ArrowRight size={14} className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition" />
								</Link>
							</div>
						</div>

						{/* Card 3: Social & Community Connect */}
						<div className="rounded-3xl border border-gray-200 bg-gray-950 p-6 sm:p-7 text-white shadow-xl">
							<h3 className="font-bold text-base text-white">Join Our Community</h3>
							<p className="text-xs text-gray-400 mt-1 leading-relaxed">
								Follow for flash deals, community giveaways, product drops, and direct social messaging.
							</p>

							<div className="mt-5 flex items-center gap-2.5">
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noreferrer"
									aria-label="Instagram"
									className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-orange-500 text-white transition duration-200"
								>
									<FaInstagram size={17} />
								</a>
								<a
									href="https://twitter.com"
									target="_blank"
									rel="noreferrer"
									aria-label="Twitter"
									className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-blue-400 text-white transition duration-200"
								>
									<FaTwitter size={17} />
								</a>
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noreferrer"
									aria-label="Facebook"
									className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-blue-600 text-white transition duration-200"
								>
									<FaFacebookF size={17} />
								</a>
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noreferrer"
									aria-label="LinkedIn"
									className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-blue-700 text-white transition duration-200"
								>
									<FaLinkedinIn size={17} />
								</a>
								<a
									href="https://wa.me/919876543210"
									target="_blank"
									rel="noreferrer"
									aria-label="WhatsApp"
									className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-emerald-500 text-white transition duration-200"
								>
									<FaWhatsapp size={17} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    OFFICE & FULFILLMENT HUBS (INTERACTIVE)
			===================================================== */}
			<section className="bg-white border-y border-gray-200 py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-2xl mx-auto mb-14">
						<h2 className="text-xs font-bold uppercase tracking-widest text-orange-600">
							Presence & Hubs
						</h2>
						<p className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
							Our Regional Hubs & Offices
						</p>
						<p className="mt-3 text-sm sm:text-base text-gray-600">
							With centers across India, we ensure rapid logistics and responsive localized service.
						</p>
					</div>

					{/* Hub selector tabs */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
						{locations.map((loc, idx) => (
							<button
								key={idx}
								type="button"
								onClick={() => setSelectedLocation(idx)}
								className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
									selectedLocation === idx
										? "border-orange-500 bg-orange-50/50 shadow-md ring-2 ring-orange-500/20"
										: "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
								}`}
							>
								<div className="flex items-center justify-between mb-1">
									<span className="text-xs font-bold text-orange-600 uppercase">
										{loc.tag}
									</span>
									<MapPin
										size={16}
										className={selectedLocation === idx ? "text-orange-500" : "text-gray-400"}
									/>
								</div>
								<h3 className="font-bold text-sm sm:text-base text-gray-900">
									{loc.city.split(" ")[0]}
								</h3>
								<p className="text-xs text-gray-500">{loc.state}</p>
							</button>
						))}
					</div>

					{/* Selected Hub Detail Card */}
					<div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-6 sm:p-10">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
							<div className="lg:col-span-7 space-y-4">
								<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
									<Building2 size={14} />
									<span>{locations[selectedLocation].tag}</span>
								</div>

								<h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
									{locations[selectedLocation].city}
								</h3>

								<div className="space-y-3 pt-2">
									<div className="flex items-start gap-3 text-sm text-gray-700">
										<MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
										<span>{locations[selectedLocation].address}</span>
									</div>

									<div className="flex items-center gap-3 text-sm text-gray-700">
										<Clock size={18} className="text-orange-500 shrink-0" />
										<span>{locations[selectedLocation].hours}</span>
									</div>

									<div className="flex items-center gap-3 text-sm text-gray-700">
										<Phone size={18} className="text-orange-500 shrink-0" />
										<a
											href={`tel:${locations[selectedLocation].phone}`}
											className="hover:text-orange-600 transition font-medium"
										>
											{locations[selectedLocation].phone}
										</a>
									</div>

									<div className="flex items-center gap-3 text-sm text-gray-700">
										<Mail size={18} className="text-orange-500 shrink-0" />
										<a
											href={`mailto:${locations[selectedLocation].email}`}
											className="hover:text-orange-600 transition font-medium"
										>
											{locations[selectedLocation].email}
										</a>
									</div>
								</div>
							</div>

							{/* Stylized Map View Simulation */}
							<div className="lg:col-span-5">
								<div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 p-6 text-white min-h-[220px] flex flex-col justify-between shadow-md">
									{/* Background grid pattern */}
									<div
										className="absolute inset-0 opacity-20 pointer-events-none"
										style={{
											backgroundImage:
												"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
											backgroundSize: "20px 20px",
										}}
									/>

									<div className="relative z-10 flex items-center justify-between">
										<div className="flex items-center gap-2">
											<span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
											<span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
												GPS Location Verified
											</span>
										</div>
										<span className="text-xs font-mono text-gray-400">IN • 23.0225° N, 72.5714° E</span>
									</div>

									<div className="relative z-10 my-4 text-center">
										<div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/50">
											<MapPin size={24} />
										</div>
										<p className="text-sm font-bold text-white">
											{locations[selectedLocation].city}
										</p>
										<p className="text-xs text-gray-300 max-w-xs mx-auto mt-1 truncate">
											{locations[selectedLocation].address}
										</p>
									</div>

									<div className="relative z-10">
										<a
											href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
												locations[selectedLocation].address,
											)}`}
											target="_blank"
											rel="noopener noreferrer"
											className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 hover:bg-white/25 py-2.5 text-xs font-semibold text-white transition backdrop-blur-sm"
										>
											<ExternalLink size={14} />
											Get Directions on Google Maps
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION
			===================================================== */}
			<section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-10">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-3">
						<HelpCircle size={15} />
						<span>Got Questions?</span>
					</div>

					<h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
						Frequently Asked Questions
					</h2>

					<p className="mt-3 text-sm sm:text-base text-gray-600">
						Check out answers to our most common customer inquiries before reaching out.
					</p>

					{/* FAQ Search Filter */}
					<div className="mt-6 max-w-md mx-auto">
						<input
							type="text"
							value={faqSearch}
							onChange={(e) => setFaqSearch(e.target.value)}
							placeholder="Search questions (e.g. refund, track order, cancel)..."
							className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 placeholder:text-gray-400 shadow-sm"
						/>
					</div>
				</div>

				<div className="space-y-4">
					{filteredFaqs.length > 0 ? (
						filteredFaqs.map((faq, idx) => {
							const isOpen = openFaq === idx;
							return (
								<div
									key={idx}
									className={`rounded-2xl border transition-all overflow-hidden ${
										isOpen
											? "border-orange-200 bg-white shadow-md ring-1 ring-orange-500/10"
											: "border-gray-200 bg-white hover:border-gray-300"
									}`}
								>
									<button
										type="button"
										onClick={() => setOpenFaq(isOpen ? -1 : idx)}
										className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-gray-900 transition cursor-pointer"
										aria-expanded={isOpen}
									>
										<span className="flex items-center gap-3 pr-4">
											<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-xs font-black text-orange-600">
												Q
											</span>
											<span>{faq.question}</span>
										</span>

										<ChevronDown
											size={20}
											className={`shrink-0 text-gray-400 transition-transform duration-200 ${
												isOpen ? "rotate-180 text-orange-500" : ""
											}`}
										/>
									</button>

									{isOpen && (
										<div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/80">
											<div className="pl-10">
												<p>{faq.answer}</p>
												<span className="inline-block mt-3 px-2.5 py-0.5 rounded-full bg-gray-100 text-[11px] font-medium text-gray-600">
													Category: {faq.category}
												</span>
											</div>
										</div>
									)}
								</div>
							);
						})
					) : (
						<div className="text-center py-10 bg-white rounded-2xl border border-gray-200 p-8">
							<AlertCircle size={36} className="mx-auto text-gray-400 mb-2" />
							<p className="text-gray-700 font-semibold">No questions matched your search query.</p>
							<button
								type="button"
								onClick={() => setFaqSearch("")}
								className="mt-3 text-xs text-orange-600 font-bold hover:underline"
							>
								Clear Search
							</button>
						</div>
					)}
				</div>
			</section>

			{/* =====================================================
			    BOTTOM BANNER / CTA
			===================================================== */}
			<section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
				<div className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-16 text-center text-white shadow-2xl sm:px-16 sm:py-20">
					{/* Glowing decorative blur */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

					<div className="relative mx-auto max-w-2xl">
						<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-orange-400 mb-6 backdrop-blur-sm">
							<Headphones size={14} />
							<span>Instant Resolution Guarantee</span>
						</div>

						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
							Need instant assistance right now?
						</h2>

						<p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
							Our conversational agents and dedicated support specialists are online 24/7. Call us directly or start shopping our trending collections.
						</p>

						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<a
								href="tel:+919876543210"
								className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 active:scale-95"
							>
								<Phone size={18} />
								Call +91 98765 43210
							</a>

							<Link
								to="/"
								className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-900/80 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-gray-800 active:scale-95"
							>
								Continue Shopping
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
