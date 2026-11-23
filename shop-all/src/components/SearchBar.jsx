import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
	Search,
	X,
	Mic,
	MicOff,
	Clock,
	TrendingUp,
	ArrowRight,
	Star,
} from "lucide-react";
import { products } from "../data/products";

const POPULAR_SEARCHES = [
	"iPhone 17 Pro Max",
	"Wireless Headphones",
	"Smart Watch",
	"Running Shoes",
	"Men's Jacket",
	"Gaming Laptop",
	"Skincare",
	"4K Smart TV",
];

export default function SearchBar({ isMobile = false, onCloseMobile }) {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [recentSearches, setRecentSearches] = useState([]);
	const [isListening, setIsListening] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const containerRef = useRef(null);
	const inputRef = useRef(null);
	const recognitionRef = useRef(null);

	// Load recent searches from localStorage
	useEffect(() => {
		try {
			const saved = localStorage.getItem("shopall_recent_searches");
			if (saved) {
				setRecentSearches(JSON.parse(saved).slice(0, 6));
			}
		} catch (e) {
			console.error("Failed to load recent searches", e);
		}
	}, []);

	// Save a search term to localStorage
	const saveRecentSearch = (term) => {
		const trimmed = term.trim();
		if (!trimmed) return;
		try {
			const existing = recentSearches.filter(
				(item) => item.toLowerCase() !== trimmed.toLowerCase(),
			);
			const updated = [trimmed, ...existing].slice(0, 6);
			setRecentSearches(updated);
			localStorage.setItem(
				"shopall_recent_searches",
				JSON.stringify(updated),
			);
		} catch (e) {
			console.error("Failed to save recent search", e);
		}
	};

	// Remove single recent search
	const removeRecentSearch = (e, termToRemove) => {
		e.stopPropagation();
		const updated = recentSearches.filter((item) => item !== termToRemove);
		setRecentSearches(updated);
		try {
			localStorage.setItem(
				"shopall_recent_searches",
				JSON.stringify(updated),
			);
		} catch (err) {
			console.error(err);
		}
	};

	// Clear all recent searches
	const clearAllRecentSearches = (e) => {
		e.stopPropagation();
		setRecentSearches([]);
		try {
			localStorage.removeItem("shopall_recent_searches");
		} catch (err) {
			console.error(err);
		}
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target)
			) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Voice Search Support (Web Speech API)
	useEffect(() => {
		const SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition;

		if (SpeechRecognition) {
			const recognition = new SpeechRecognition();
			recognition.continuous = false;
			recognition.interimResults = false;
			recognition.lang = "en-US";

			recognition.onstart = () => {
				setIsListening(true);
			};

			recognition.onresult = (event) => {
				const transcript = event.results[0][0].transcript;
				setQuery(transcript);
				setIsListening(false);
				executeSearch(transcript);
			};

			recognition.onerror = (event) => {
				console.warn("Speech recognition error:", event.error);
				setIsListening(false);
			};

			recognition.onend = () => {
				setIsListening(false);
			};

			recognitionRef.current = recognition;
		}
	}, []);

	const toggleVoiceSearch = () => {
		if (!recognitionRef.current) {
			alert(
				"Voice search is not supported on this browser. Please try on Chrome or Edge.",
			);
			return;
		}

		if (isListening) {
			recognitionRef.current.stop();
			setIsListening(false);
		} else {
			try {
				recognitionRef.current.start();
			} catch (err) {
				console.error(err);
			}
		}
	};

	// Calculate matching products & suggestions
	const cleanQuery = query.trim().toLowerCase();

	const matchingProducts = cleanQuery
		? products
				.filter((item) => {
					return (
						item.name?.toLowerCase().includes(cleanQuery) ||
						item.brand?.toLowerCase().includes(cleanQuery) ||
						item.company?.toLowerCase().includes(cleanQuery) ||
						item.subcategory?.toLowerCase().includes(cleanQuery) ||
						item.productType?.toLowerCase().includes(cleanQuery)
					);
				})
				.slice(0, 4)
		: [];

	const matchingKeywords = cleanQuery
		? Array.from(
				new Set([
					...products
						.map((p) => p.name)
						.filter((name) =>
							name.toLowerCase().includes(cleanQuery),
						),
					...products
						.map((p) => p.brand || p.company)
						.filter(
							(brand) =>
								brand &&
								brand.toLowerCase().includes(cleanQuery),
						),
					...products
						.map((p) => p.subcategory)
						.filter(
							(sub) =>
								sub && sub.toLowerCase().includes(cleanQuery),
						),
				]),
			).slice(0, 5)
		: [];

	// Execute search and navigate
	const executeSearch = (searchTerm) => {
		const term = searchTerm.trim();
		if (!term) return;

		saveRecentSearch(term);
		setIsDropdownOpen(false);

		const url = `/search?q=${encodeURIComponent(term)}`;

		if (onCloseMobile) {
			onCloseMobile();
		}

		navigate(url);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (query.trim()) {
			executeSearch(query);
		}
	};

	// Keyboard navigation support
	const handleKeyDown = (e) => {
		if (e.key === "Escape") {
			setIsDropdownOpen(false);
			inputRef.current?.blur();
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			const totalOptions = matchingKeywords.length + matchingProducts.length;
			if (totalOptions > 0) {
				setSelectedIndex((prev) =>
					prev < totalOptions - 1 ? prev + 1 : 0,
				);
			}
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			const totalOptions = matchingKeywords.length + matchingProducts.length;
			if (totalOptions > 0) {
				setSelectedIndex((prev) =>
					prev > 0 ? prev - 1 : totalOptions - 1,
				);
			}
		} else if (e.key === "Enter" && selectedIndex >= 0) {
			e.preventDefault();
			if (selectedIndex < matchingKeywords.length) {
				const selectedTerm = matchingKeywords[selectedIndex];
				setQuery(selectedTerm);
				executeSearch(selectedTerm);
			} else {
				const productIndex = selectedIndex - matchingKeywords.length;
				const product = matchingProducts[productIndex];
				if (product) {
					setIsDropdownOpen(false);
					navigate(`/product/${product.id}`);
				}
			}
		}
	};

	// Highlight matching letters in text
	const highlightMatch = (text, highlight) => {
		if (!highlight.trim()) return text;
		const regex = new RegExp(`(${highlight.trim()})`, "gi");
		const parts = text.split(regex);
		return parts.map((part, i) =>
			regex.test(part) ? (
				<strong key={i} className="text-orange-600 font-bold">
					{part}
				</strong>
			) : (
				part
			),
		);
	};

	return (
		<div
			ref={containerRef}
			className={`relative w-full ${isMobile ? "px-0" : ""}`}
		>
			{/* SEARCH BAR CONTAINER */}
			<form
				onSubmit={handleFormSubmit}
				className={`relative flex items-center w-full h-11 lg:h-12 bg-white rounded-xl border transition-all duration-200 shadow-sm ${
					isDropdownOpen
						? "border-orange-500 ring-2 ring-orange-500/20 bg-white"
						: "border-gray-300 hover:border-gray-400 bg-gray-50/70"
				}`}
			>
				{/* Search Input Field */}
				<div className="relative flex-1 flex items-center h-full">
					<input
						ref={inputRef}
						type="text"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
							setIsDropdownOpen(true);
							setSelectedIndex(-1);
						}}
						onFocus={() => setIsDropdownOpen(true)}
						onKeyDown={handleKeyDown}
						placeholder="Search for products, brands, and more..."
						className="w-full h-full pl-4 sm:pl-5 pr-20 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 bg-transparent outline-none rounded-l-xl"
						autoComplete="off"
					/>

					{/* Clear query button */}
					{query && (
						<button
							type="button"
							onClick={() => {
								setQuery("");
								inputRef.current?.focus();
							}}
							className="p-1 text-gray-400 hover:text-gray-600 rounded-full transition mr-1 cursor-pointer"
							aria-label="Clear search text"
						>
							<X size={16} />
						</button>
					)}

					{/* Voice Search Button */}
					<button
						type="button"
						onClick={toggleVoiceSearch}
						title={
							isListening
								? "Listening... Click to stop"
								: "Search with voice"
						}
						className={`p-2 mr-1 rounded-lg transition relative cursor-pointer ${
							isListening
								? "text-red-600 bg-red-50 ring-2 ring-red-400 animate-pulse"
								: "text-gray-400 hover:text-orange-600 hover:bg-orange-50"
						}`}
						aria-label="Voice Search"
					>
						{isListening ? <MicOff size={17} /> : <Mic size={17} />}
					</button>
				</div>

				{/* Search Submit Button */}
				<button
					type="submit"
					className="h-11 lg:h-12 px-4 sm:px-5 bg-gray-900 hover:bg-orange-500 text-white flex items-center justify-center rounded-r-xl transition-colors duration-200 cursor-pointer shrink-0"
					aria-label="Search"
				>
					<Search size={18} />
				</button>
			</form>

			{/* =========================================================
			    LIVE AUTOCOMPLETE & SUGGESTIONS DROPDOWN
			========================================================= */}
			{isDropdownOpen && (
				<div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden z-50 animate-in fade-in duration-150">
					{/* IF SEARCH IS EMPTY: SHOW RECENT & POPULAR SEARCHES */}
					{!cleanQuery ? (
						<div className="p-4 sm:p-5 divide-y divide-gray-100">
							{/* Recent Searches */}
							{recentSearches.length > 0 && (
								<div className="pb-4">
									<div className="flex items-center justify-between mb-2.5">
										<div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
											<Clock size={13} />
											<span>Recent Searches</span>
										</div>
										<button
											type="button"
											onClick={clearAllRecentSearches}
											className="text-[11px] text-gray-400 hover:text-red-500 transition font-medium cursor-pointer"
										>
											Clear all
										</button>
									</div>

									<div className="flex flex-wrap gap-2">
										{recentSearches.map((term, i) => (
											<div
												key={i}
												onClick={() => {
													setQuery(term);
													executeSearch(term);
												}}
												className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-orange-50 hover:text-orange-600 text-xs text-gray-700 font-medium transition cursor-pointer"
											>
												<Clock
													size={12}
													className="text-gray-400 group-hover:text-orange-500"
												/>
												<span>{term}</span>
												<button
													type="button"
													onClick={(e) =>
														removeRecentSearch(e, term)
													}
													className="p-0.5 text-gray-400 hover:text-red-500 rounded-full cursor-pointer"
													aria-label={`Remove ${term}`}
												>
													<X size={12} />
												</button>
											</div>
										))}
									</div>
								</div>
							)}

							{/* Popular / Trending Searches */}
							<div className={recentSearches.length > 0 ? "pt-4" : ""}>
								<div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
									<TrendingUp size={13} className="text-orange-500" />
									<span>Trending Searches on ShopAll</span>
								</div>

								<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
									{POPULAR_SEARCHES.map((item, i) => (
										<button
											key={i}
											type="button"
											onClick={() => {
												setQuery(item);
												executeSearch(item);
											}}
											className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-orange-50/70 border border-gray-100 hover:border-orange-200 text-left text-xs font-medium text-gray-700 hover:text-orange-600 transition group cursor-pointer"
										>
											<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 group-hover:bg-orange-100 text-[10px] font-bold text-gray-500 group-hover:text-orange-600">
												{i + 1}
											</span>
											<span className="truncate">{item}</span>
										</button>
									))}
								</div>
							</div>
						</div>
					) : (
						/* IF SEARCH HAS QUERY: SHOW KEYWORD MATCHES + LIVE PRODUCT PREVIEWS */
						<div>
							{/* Direct Search query action bar */}
							<div
								onClick={() => executeSearch(query)}
								className="flex items-center justify-between px-4 py-2.5 bg-orange-50/60 border-b border-orange-100 text-xs font-semibold text-orange-900 hover:bg-orange-100/70 transition cursor-pointer"
							>
								<div className="flex items-center gap-2 truncate">
									<Search size={14} className="text-orange-500" />
									<span>
										Search for "
										<strong className="text-orange-600">{query}</strong>"
									</span>
								</div>
								<ArrowRight size={14} className="text-orange-500 shrink-0" />
							</div>

							<div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-gray-100 max-h-[420px] overflow-y-auto">
								{/* Left: Keyword Suggestions (5 cols) */}
								<div className="md:col-span-5 p-3 space-y-1">
									<div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
										Search Suggestions
									</div>

									{matchingKeywords.length > 0 ? (
										matchingKeywords.map((term, i) => (
											<button
												key={i}
												type="button"
												onClick={() => {
													setQuery(term);
													executeSearch(term);
												}}
												className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs sm:text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition cursor-pointer ${
													selectedIndex === i
														? "bg-orange-50 text-orange-600 font-bold"
														: ""
												}`}
											>
												<span className="flex items-center gap-2.5 truncate">
													<Search
														size={14}
														className="text-gray-400 shrink-0"
													/>
													<span className="truncate">
														{highlightMatch(term, query)}
													</span>
												</span>
												<ArrowRight
													size={12}
													className="text-gray-300 group-hover:text-orange-500 shrink-0"
												/>
											</button>
										))
									) : (
										<div className="px-3 py-2 text-xs text-gray-400 italic">
											No keyword auto-suggestions
										</div>
									)}
								</div>

								{/* Right: Live Product Match Cards (7 cols) */}
								<div className="md:col-span-7 p-3 bg-gray-50/50">
									<div className="px-3 py-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
										<span>Product Matches</span>
										<span>{matchingProducts.length} Found</span>
									</div>

									{matchingProducts.length > 0 ? (
										<div className="space-y-1.5">
											{matchingProducts.map((prod, i) => {
												const itemIdx =
													matchingKeywords.length + i;
												return (
													<div
														key={prod.id}
														onClick={() => {
															saveRecentSearch(query);
															setIsDropdownOpen(false);
															navigate(`/product/${prod.id}`);
														}}
														className={`flex items-center gap-3 p-2 rounded-xl bg-white border border-gray-200/80 hover:border-orange-300 hover:shadow-sm transition cursor-pointer ${
															selectedIndex === itemIdx
																? "border-orange-500 bg-orange-50/30"
																: ""
														}`}
													>
														<img
															src={prod.image}
															alt={prod.name}
															className="h-12 w-12 rounded-lg object-cover bg-gray-100 shrink-0"
														/>
														<div className="flex-1 min-w-0">
															<p className="text-xs font-semibold text-gray-900 truncate">
																{highlightMatch(prod.name, query)}
															</p>
															<div className="flex items-center gap-2 mt-0.5">
																<span className="text-xs font-bold text-gray-900">
																	₹{prod.price?.toLocaleString()}
																</span>
																{prod.discountPercentage > 0 && (
																	<span className="text-[10px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.2 rounded">
																		{prod.discountPercentage}% OFF
																	</span>
																)}
																{prod.rating && (
																	<span className="flex items-center gap-0.5 text-[10px] text-gray-500 ml-auto">
																		<Star
																			size={10}
																			className="fill-yellow-400 text-yellow-400"
																		/>
																		{prod.rating}
																	</span>
																)}
															</div>
														</div>
													</div>
												);
											})}
										</div>
									) : (
										<div className="py-6 text-center text-xs text-gray-500">
											No direct product preview available.
										</div>
									)}
								</div>
							</div>

							{/* Bottom Action Footer */}
							<div className="p-3 bg-gray-100/80 border-t border-gray-200 flex items-center justify-between text-xs">
								<span className="text-gray-500">
									Press <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono text-[10px]">Enter ↵</kbd> to view all results
								</span>
								<button
									type="button"
									onClick={() => executeSearch(query)}
									className="font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
								>
									<span>See all results for "{query}"</span>
									<ArrowRight size={13} />
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
