const categoryData = {
	electronics: {
		title: "Electronics",
		description:
			"Discover smart technology, premium gadgets and everyday electronics.",
		tagline: "Upgrade your everyday",
		icon: "⚡",

		subcategories: [
			{ name: "Mobiles", slug: "mobiles", icon: "📱" },
			{ name: "Laptops", slug: "laptops", icon: "💻" },
			{ name: "Tablets", slug: "tablets", icon: "▣" },
			{ name: "Smart Watches", slug: "smart-watches", icon: "⌚" },
			{
				name: "Mobile Accessories",
				slug: "mobile-accessories",
				icon: "🔌",
			},
			{
				name: "Computer Accessories",
				slug: "computer-accessories",
				icon: "🖥️",
			},
		],
	},

	fashion: {
		title: "Fashion",
		description:
			"Discover the latest styles, trends and everyday fashion essentials.",
		tagline: "Style that defines you",
		icon: "👕",

		subcategories: [
			{ name: "Men's Clothing", slug: "mens-clothing", icon: "👔" },
			{ name: "Women's Clothing", slug: "womens-clothing", icon: "👗" },
			{ name: "Kids Clothing", slug: "kids-clothing", icon: "🧒" },
			{ name: "Shoes", slug: "shoes", icon: "👟" },
			{ name: "Watches", slug: "watches", icon: "⌚" },
			{ name: "Bags", slug: "bags", icon: "👜" },
		],
	},

	"home-kitchen": {
		title: "Home & Kitchen",
		description:
			"Everything you need to make your home comfortable and beautiful.",
		tagline: "Make your home better",
		icon: "🏠",

		subcategories: [
			{
				name: "Kitchen Appliances",
				slug: "kitchen-appliances",
				icon: "🍳",
			},
			{ name: "Home Decor", slug: "home-decor", icon: "🏠" },
			{ name: "Furniture", slug: "furniture", icon: "🛋️" },
			{ name: "Cookware", slug: "cookware", icon: "🍲" },
			{ name: "Storage", slug: "storage", icon: "📦" },
			{ name: "Lighting", slug: "lighting", icon: "💡" },
		],
	},

	beauty: {
		title: "Beauty",
		description:
			"Explore skincare, makeup, haircare and personal beauty essentials.",
		tagline: "Feel good. Look great.",
		icon: "💄",

		subcategories: [
			{ name: "Skincare", slug: "skincare", icon: "🧴" },
			{ name: "Makeup", slug: "makeup", icon: "💄" },
			{ name: "Haircare", slug: "haircare", icon: "💇" },
			{ name: "Fragrances", slug: "fragrances", icon: "🌸" },
			{ name: "Personal Care", slug: "personal-care", icon: "🧼" },
			{ name: "Beauty Tools", slug: "beauty-tools", icon: "✨" },
		],
	},

	"sports-toys": {
		title: "Sports & Toys",
		description:
			"Discover sports equipment, fitness essentials, games and toys.",
		tagline: "Play. Move. Enjoy.",
		icon: "⚽",

		subcategories: [
			{ name: "Fitness", slug: "fitness", icon: "🏋️" },
			{ name: "Sports Equipment", slug: "sports-equipment", icon: "🏏" },
			{ name: "Outdoor Sports", slug: "outdoor-sports", icon: "⚽" },
			{ name: "Toys", slug: "toys", icon: "🧸" },
			{ name: "Games", slug: "games", icon: "🎮" },
			{ name: "Cycling", slug: "cycling", icon: "🚲" },
		],
	},

	books: {
		title: "Books",
		description:
			"Explore fiction, non-fiction, academic and children's books.",
		tagline: "Read, learn, imagine",
		icon: "📚",

		subcategories: [
			{ name: "Fiction", slug: "fiction", icon: "📖" },
			{ name: "Non-Fiction", slug: "non-fiction", icon: "📘" },
			{ name: "Academic", slug: "academic", icon: "🎓" },
			{ name: "Children's Books", slug: "childrens-books", icon: "🧸" },
			{ name: "Comics & Manga", slug: "comics-manga", icon: "💥" },
			{ name: "Self-Help", slug: "self-help", icon: "🧠" },
		],
	},

	gaming: {
		title: "Gaming",
		description:
			"Consoles, accessories and everything for gamers on the go.",
		tagline: "Level up your play",
		icon: "🎮",

		subcategories: [
			{ name: "Consoles", slug: "consoles", icon: "🕹️" },
			{ name: "Video Games", slug: "video-games", icon: "💿" },
			{
				name: "Gaming Accessories",
				slug: "gaming-accessories",
				icon: "🎧",
			},
			{ name: "PC Gaming", slug: "pc-gaming", icon: "🖥️" },
			{ name: "Gaming Chairs", slug: "gaming-chairs", icon: "🪑" },
			{ name: "VR & AR", slug: "vr-ar", icon: "🥽" },
		],
	},

	audio: {
		title: "Audio",
		description:
			"Headphones, speakers and sound equipment for every listener.",
		tagline: "Sound that moves you",
		icon: "🎧",

		subcategories: [
			{ name: "Headphones", slug: "headphones", icon: "🎧" },
			{ name: "Earbuds", slug: "earbuds", icon: "🎵" },
			{ name: "Speakers", slug: "speakers", icon: "🔊" },
			{ name: "Home Theatre", slug: "home-theatre", icon: "🎬" },
			{ name: "Microphones", slug: "microphones", icon: "🎙️" },
			{
				name: "Audio Accessories",
				slug: "audio-accessories",
				icon: "🔌",
			},
		],
	},

	accessories: {
		title: "Accessories",
		description:
			"Everyday accessories to complete your look and your gear.",
		tagline: "Little extras, big difference",
		icon: "👜",

		subcategories: [
			{ name: "Wallets", slug: "wallets", icon: "👛" },
			{ name: "Belts", slug: "belts", icon: "🥋" },
			{ name: "Sunglasses", slug: "sunglasses", icon: "🕶️" },
			{ name: "Jewelry", slug: "jewelry", icon: "💍" },
			{ name: "Hats & Caps", slug: "hats-caps", icon: "🧢" },
			{
				name: "Travel Accessories",
				slug: "travel-accessories",
				icon: "🧳",
			},
		],
	},

	automotive: {
		title: "Automotive",
		description:
			"Car and bike accessories, tools and maintenance essentials.",
		tagline: "Gear up your ride",
		icon: "🚗",

		subcategories: [
			{ name: "Car Accessories", slug: "car-accessories", icon: "🚗" },
			{ name: "Bike Accessories", slug: "bike-accessories", icon: "🏍️" },
			{ name: "Car Electronics", slug: "car-electronics", icon: "📡" },
			{ name: "Tools & Equipment", slug: "tools-equipment", icon: "🔧" },
			{ name: "Tyres & Wheels", slug: "tyres-wheels", icon: "🛞" },
			{ name: "Car Care", slug: "car-care", icon: "🧽" },
		],
	},

	"baby-kids": {
		title: "Baby & Kids",
		description: "Everything for babies and kids, from essentials to toys.",
		tagline: "For your little ones",
		icon: "🍼",

		subcategories: [
			{ name: "Diapering", slug: "diapering", icon: "🍼" },
			{ name: "Feeding", slug: "feeding", icon: "🍼" },
			{ name: "Baby Gear", slug: "baby-gear", icon: "🚼" },
			{ name: "Kids Toys", slug: "kids-toys", icon: "🧸" },
			{ name: "Kids Clothing", slug: "kids-clothing-baby", icon: "👕" },
			{ name: "Nursery", slug: "nursery", icon: "🛏️" },
		],
	},

	"food-grocery": {
		title: "Food & Grocery",
		description:
			"Pantry staples, snacks, beverages and everyday grocery needs.",
		tagline: "Stock up and savour",
		icon: "🛒",

		subcategories: [
			{ name: "Snacks", slug: "snacks", icon: "🍪" },
			{ name: "Beverages", slug: "beverages", icon: "🥤" },
			{ name: "Staples", slug: "staples", icon: "🌾" },
			{ name: "Breakfast Foods", slug: "breakfast-foods", icon: "🥣" },
			{
				name: "Organic & Health Foods",
				slug: "organic-health-foods",
				icon: "🥗",
			},
			{ name: "Packaged Foods", slug: "packaged-foods", icon: "🥫" },
		],
	},

	health: {
		title: "Health",
		description:
			"Wellness, fitness and healthcare essentials for everyday living.",
		tagline: "Feel your best",
		icon: "💊",

		subcategories: [
			{ name: "Supplements", slug: "supplements", icon: "💊" },
			{ name: "Medical Devices", slug: "medical-devices", icon: "🩺" },
			{ name: "First Aid", slug: "first-aid", icon: "🩹" },
			{
				name: "Fitness & Nutrition",
				slug: "fitness-nutrition",
				icon: "🏋️",
			},
			{ name: "Personal Hygiene", slug: "personal-hygiene", icon: "🧼" },
			{ name: "Wellness", slug: "wellness", icon: "🧘" },
		],
	},

	"pet-supplies": {
		title: "Pet Supplies",
		description: "Food, toys and care essentials for your furry friends.",
		tagline: "For your best friend",
		icon: "🐾",

		subcategories: [
			{ name: "Dog Supplies", slug: "dog-supplies", icon: "🐶" },
			{ name: "Cat Supplies", slug: "cat-supplies", icon: "🐱" },
			{ name: "Pet Food", slug: "pet-food", icon: "🍖" },
			{ name: "Pet Toys", slug: "pet-toys", icon: "🎾" },
			{ name: "Pet Grooming", slug: "pet-grooming", icon: "🧴" },
			{ name: "Pet Accessories", slug: "pet-accessories", icon: "🦴" },
		],
	},

	watches: {
		title: "Watches",
		description: "Classic, smart and sports watches for every occasion.",
		tagline: "Timeless style",
		icon: "⌚",

		subcategories: [
			{
				name: "Smart Watches",
				slug: "watches-smart-watches",
				icon: "⌚",
			},
			{ name: "Analog Watches", slug: "analog-watches", icon: "🕰️" },
			{ name: "Digital Watches", slug: "digital-watches", icon: "⏱️" },
			{ name: "Luxury Watches", slug: "luxury-watches", icon: "💎" },
			{ name: "Kids Watches", slug: "kids-watches", icon: "🧒" },
			{
				name: "Watch Accessories",
				slug: "watch-accessories",
				icon: "🔗",
			},
		],
	},

	computers: {
		title: "Computers",
		description:
			"Laptops, desktops, components and accessories for work and play.",
		tagline: "Power your work",
		icon: "🖥️",

		subcategories: [
			{ name: "Laptops", slug: "computers-laptops", icon: "💻" },
			{ name: "Desktops", slug: "desktops", icon: "🖥️" },
			{ name: "Monitors", slug: "monitors", icon: "🖥️" },
			{ name: "Storage Devices", slug: "storage-devices", icon: "💾" },
			{ name: "Networking", slug: "networking", icon: "📶" },
			{
				name: "Computer Components",
				slug: "computer-components",
				icon: "🔧",
			},
		],
	},
};

export default categoryData;
