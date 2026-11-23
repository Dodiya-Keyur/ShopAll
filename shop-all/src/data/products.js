export const products = [
	{
		id: 1,
		name: "iPhone 17 Pro Max",
		brand: "Apple",
		company: "Apple",
		Category: "Electronics",
		subcategory: "Mobiles",
		productType: "Smartphone",

		images: [
			"https://m.media-amazon.com/images/I/71rwU33iPuL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81pFrOzKE-L._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61JmJ3L90ML._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81vgjjh37wL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61aFftFHlZL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71JGCn1z1TL._SL1500_.jpg",

		rating: 4.7,
		totalRatings: 2227, //ratingsCount
		totalReviews: 486,

		price: 144900,
		originalPrice: 149900,
		discountPercentage: 3, //discount

		offers: [
			{
				title: "Bank Offer",
				description: "10% instant discount on selected bank cards",
			},
			{
				title: "No Cost EMI",
				description: "No Cost EMI available on eligible cards",
			},
			{
				title: "Exchange Offer",
				description: "Get extra discount on exchange",
			},
		],

		colors: [
			{
				id: "orange",
				name: "Cosmic Orange",
				image: "https://m.media-amazon.com/images/I/71JGCn1z1TL._SL1500_.jpg",
				price: 144900,
			},
			{
				id: "blue",
				name: "Deep Blue",
				image: "https://m.media-amazon.com/images/I/618vU2qKXQL._SL1500_.jpg",
				price: 144900,
			},
			{
				id: "silver",
				name: "Silver Titanium",
				image: "https://m.media-amazon.com/images/I/61EoCnDyoQL._SL1500_.jpg",
				price: 144900,
			},
		], // color

		variants: [
			{
				id: "256gb",
				name: "256 GB",
				price: 144900,
				originalPrice: 149900,
				stock: 25,
				inStock: true,
			},
			{
				id: "512gb",
				name: "512 GB",
				price: 164900,
				originalPrice: 169900,
				stock: 18,
				inStock: true,
			},
			{
				id: "1tb",
				name: "1 TB",
				price: 184900,
				originalPrice: 189900,
				stock: 10,
				inStock: true,
			},
		],

		shortDescription:
			"Premium iPhone with Pro performance, advanced cameras and all-day battery life.",

		description: `
		- Advanced Pro camera system
		- Powerful Apple silicon
		- Premium titanium-inspired design
		- Super Retina XDR display
		- Fast charging
		- 5G connectivity
	`,

		specifications: {
			display: {
				size: "6.9 inches",
				type: "Super Retina XDR",
				refreshRate: "120Hz",
			},
			processor: {
				name: "Apple A19 Pro",
			},
			camera: {
				rear: "48MP + 48MP + 48MP",
				front: "18MP",
			},
			battery: {
				type: "Lithium-ion",
				charging: "Fast Charging",
			},
			operatingSystem: "iOS",
			connectivity: ["5G", "Wi-Fi 7", "Bluetooth 6", "USB-C"],
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Premium Smartphone", "5G", "Apple", "Flagship"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: false,
		isNew: true,
	},

	{
		id: 2,
		name: "Samsung Galaxy S26 Ultra",
		brand: "Samsung",
		company: "Samsung",
		Category: "Electronics",
		subcategory: "Mobiles",
		productType: "Smartphone",

		images: [
			"https://m.media-amazon.com/images/I/71lzDDoMx8L._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81xlgnoP6OL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71BCkHJIVSL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61D4DLKRTyL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71RLLn9RZxL._SL1500_.jpg",

		rating: 4.6,
		totalRatings: 3891,
		totalReviews: 721,

		price: 129999,
		originalPrice: 139999,
		discountPercentage: 7,

		offers: [
			{
				title: "Bank Offer",
				description: "Up to 10% instant discount on selected cards",
			},
			{
				title: "No Cost EMI",
				description: "Available on eligible credit cards",
			},
			{
				title: "Exchange Offer",
				description: "Additional exchange bonus available",
			},
		],

		colors: [
			{
				id: "black",
				name: "Phantom Black",
				image: "https://m.media-amazon.com/images/I/71RLLn9RZxL._SL1500_.jpg",
				price: 129999,
			},
			{
				id: "blue",
				name: "Sky Blue",
				image: "https://m.media-amazon.com/images/I/71HXOEh+U1L._SL1500_.jpg",
				price: 129999,
			},
			{
				id: "Violet",
				name: "Cobalt Violet",
				image: "https://m.media-amazon.com/images/I/71xHws+eI5L._SL1500_.jpg",
				price: 129999,
			},
			{
				id: "white",
				name: "White",
				image: "https://m.media-amazon.com/images/I/71nTOQu67ML._SL1500_.jpg",
				price: 129999,
			},
		],

		variants: [
			{
				id: "256gb",
				name: "12Gb + 256 GB",
				price: 129999,
				originalPrice: 139999,
				stock: 20,
				inStock: true,
			},
			{
				id: "512gb",
				name: "12GB + 512 GB",
				price: 149999,
				originalPrice: 159999,
				stock: 12,
				inStock: true,
			},
			{
				id: "1tb",
				name: "12GB + 1TB",
				price: 169999,
				originalPrice: 179999,
				stock: 5,
				inStock: true,
			},
		],

		shortDescription:
			"Samsung flagship smartphone with an ultra-bright display, advanced cameras and powerful performance.",

		description: `
		- Premium flagship design
		- High-resolution AMOLED display
		- Advanced multi-camera system
		- Powerful flagship processor
		- Large all-day battery
		- 5G connectivity
	`,

		specifications: {
			display: {
				size: "6.8 inches",
				type: "Dynamic AMOLED 2X",
				refreshRate: "120Hz",
			},
			processor: {
				name: "Snapdragon Elite",
			},
			camera: {
				rear: "200MP + 50MP + 12MP + 10MP",
				front: "12MP",
			},
			battery: {
				type: "Lithium-ion",
				charging: "Fast Charging",
			},
			operatingSystem: "Android",
			connectivity: ["5G", "Wi-Fi 7", "Bluetooth", "USB-C"],
		},

		inStock: true,
		stock: 20,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Android", "5G", "Flagship", "AMOLED"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: false,
		isNew: false,
	},

	{
		id: 3,
		name: "MacBook Pro 16",
		brand: "Apple",
		company: "Apple",
		Category: "Electronics",
		subcategory: "Laptops",
		productType: "Laptop",

		images: [
			"https://m.media-amazon.com/images/I/61p7JDtcNgL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81REVAVG6WL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81mSAzeLuyL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61XkCtE8o4L._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61h78UMEXjL._SL1500_.jpg",

		rating: 4.8,
		totalRatings: 1876,
		totalReviews: 412,

		price: 249900,
		originalPrice: 269900,
		discountPercentage: 7,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount on selected bank cards",
			},
			{
				title: "No Cost EMI",
				description: "Easy monthly installments available",
			},
		],

		colors: [
			{
				id: "black",
				name: "Space Black",
				image: "https://m.media-amazon.com/images/I/61h78UMEXjL._SL1500_.jpg",
				price: 249900,
			},
			{
				id: "silver",
				name: "Silver",
				image: "https://m.media-amazon.com/images/I/61NJjTxLyiL._SL1500_.jpg",
				price: 249900,
			},
		],

		variants: [
			{
				id: "512gb",
				name: "512 GB / 18 GB RAM",
				price: 249900,
				originalPrice: 269900,
				stock: 15,
				inStock: true,
			},
			{
				id: "1tb",
				name: "1 TB / 36 GB RAM",
				price: 299900,
				originalPrice: 319900,
				stock: 8,
				inStock: true,
			},
		],

		shortDescription:
			"Professional laptop with powerful Apple silicon, Liquid Retina XDR display and exceptional battery life.",

		description: `
		- Professional-grade performance
		- Liquid Retina XDR display
		- High-performance Apple silicon
		- Long battery life
		- Premium aluminum construction
	`,

		specifications: {
			display: {
				size: "16.2 inches",
				type: "Liquid Retina XDR",
				refreshRate: "120Hz",
			},
			processor: {
				name: "Apple M5 Pro",
			},
			camera: {
				rear: "N/A",
				front: "12MP",
			},
			battery: {
				type: "Lithium-polymer",
				charging: "USB-C Fast Charging",
			},
			operatingSystem: "macOS",
			connectivity: ["Wi-Fi 7", "Bluetooth", "Thunderbolt", "USB-C"],
		},

		inStock: true,
		stock: 15,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Laptop", "MacBook", "Professional", "Apple Silicon"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: false,
		isNew: true,
	},

	{
		id: 4,
		name: "iPad Pro 13-inch",
		brand: "Apple",
		company: "Apple",
		Category: "Electronics",
		subcategory: "Tablets",
		productType: "Tablet",

		images: [
			"https://m.media-amazon.com/images/I/71oGm8YfCtL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71zl-qhFibL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61Ewi2oezTL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61kV643xjIL._SL1500_.jpg",

		rating: 4.7,
		totalRatings: 1542,
		totalReviews: 329,

		price: 119900,
		originalPrice: 129900,
		discountPercentage: 8,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount with selected bank cards",
			},
			{
				title: "No Cost EMI",
				description: "Available on eligible purchases",
			},
		],

		colors: [
			{
				id: "space",
				name: "Space Black",
				image: "https://m.media-amazon.com/images/I/61kV643xjIL._SL1500_.jpg",
				price: 119900,
			},
			{
				id: "silver",
				name: "Silver",
				image: "https://m.media-amazon.com/images/I/71iqic7sLGL._SL1500_.jpg",
				price: 119900,
			},
		],

		variants: [
			{
				id: "256gb",
				name: "256 GB",
				price: 119900,
				originalPrice: 129900,
				stock: 18,
				inStock: true,
			},
			{
				id: "512gb",
				name: "512 GB",
				price: 139900,
				originalPrice: 149900,
				stock: 10,
				inStock: true,
			},
			{
				id: "1tb",
				name: "1 TB",
				price: 169900,
				originalPrice: 179900,
				stock: 4,
				inStock: true,
			},
		],

		shortDescription:
			"Large professional tablet with an ultra-thin design, stunning display and desktop-class performance.",

		description: `
		- Ultra-thin premium design
		- Professional display
		- Powerful Apple silicon
		- Supports Apple Pencil
		- USB-C connectivity
	`,

		specifications: {
			display: {
				size: "13 inches",
				type: "Ultra Retina XDR",
				refreshRate: "120Hz",
			},
			processor: {
				name: "Apple M5",
			},
			camera: {
				rear: "12MP",
				front: "12MP",
			},
			battery: {
				type: "Lithium-polymer",
				charging: "USB-C Fast Charging",
			},
			operatingSystem: "iPadOS",
			connectivity: ["Wi-Fi 7", "Bluetooth", "USB-C"],
		},

		inStock: true,
		stock: 18,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Tablet", "Apple", "iPad", "Premium"],

		isFeatured: true,
		isBestSeller: false,
		isDeal: true,
		isNew: false,
	},

	{
		id: 5,
		name: "Galaxy Watch Ultra",
		brand: "Samsung",
		company: "Samsung",
		Category: "Electronics",
		subcategory: "Smart Watches",
		productType: "Smartwatch",

		images: [
			"https://m.media-amazon.com/images/I/713DzobtC4L._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71u0xKbJirL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71Be3FkmH9L._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81zhKjISzXL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/8172o78WwhL._SL1500_.jpg",

		rating: 4.5,
		totalRatings: 923,
		totalReviews: 184,

		price: 44999,
		originalPrice: 49999,
		discountPercentage: 10,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount on selected bank cards",
			},
			{
				title: "Exchange Offer",
				description: "Extra discount available on selected exchanges",
			},
		],

		colors: [
			{
				id: "Silver",
				name: "Titanium Silver",
				image: "https://m.media-amazon.com/images/I/8172o78WwhL._SL1500_.jpg",
				price: 44999,
			},
			{
				id: "Grey",
				name: "Titanium Grey",
				image: "https://m.media-amazon.com/images/I/71o5vSWGE9L._SL1500_.jpg",
				price: 44999,
			},
		],

		variants: [
			{
				id: "standard",
				name: "47mm",
				price: 44999,
				originalPrice: 49999,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"Premium rugged smartwatch with fitness tracking, GPS and advanced health features.",

		description: `
		- Rugged outdoor design
		- Advanced health tracking
		- GPS navigation
		- Water resistance
		- Long battery life
	`,

		specifications: {
			display: {
				size: "1.5 inches",
				type: "Super AMOLED",
				refreshRate: "60Hz",
			},
			processor: {
				name: "Exynos Wear",
			},
			battery: {
				type: "Lithium-ion",
				charging: "Wireless Charging",
			},
			operatingSystem: "Wear OS",
			connectivity: ["Bluetooth", "Wi-Fi", "GPS", "NFC"],
		},

		inStock: true,
		stock: 20,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Smartwatch", "Fitness", "GPS", "Wear OS"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	{
		id: 6,
		name: "Sony WH-1000XM6",
		brand: "Sony",
		company: "Sony",
		Category: "Audio",
		subcategory: "Headphones",
		productType: "Wireless Headphones",

		images: [
			"https://m.media-amazon.com/images/I/41YGpnx9KWL._SL1200_.jpg",
			"https://m.media-amazon.com/images/I/81ZbWmi2JmL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71CkoMSBGhL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/711p2e42ViL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61ddahpESML._SL1500_.jpg",

		rating: 4.7,
		totalRatings: 3120,
		totalReviews: 614,

		price: 34990,
		originalPrice: 39990,
		discountPercentage: 13,

		offers: [
			{
				title: "Bank Offer",
				description: "Additional discount on selected bank cards",
			},
			{
				title: "No Cost EMI",
				description: "EMI available on eligible cards",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/61ddahpESML._SL1500_.jpg",
				price: 39990,
			},
			{
				id: "silver",
				name: "Silver",
				image: "https://m.media-amazon.com/images/I/61JI1UpiU4L._SL1500_.jpg",
				price: 39590,
			},
			{
				id: "Blue",
				name: "Blue",
				image: "https://m.media-amazon.com/images/I/61drDn6HJRL._SL1500_.jpg",
				price: 38990,
			},
			{
				id: "Olive Gray",
				name: "Olive Gray",
				image: "https://m.media-amazon.com/images/I/61IJL6nDNxL._SL1500_.jpg",
				price: 38590,
			},
		],

		variants: [
			{
				id: "standard",
				name: "Wireless",
				price: 34990,
				originalPrice: 39990,
				stock: 30,
				inStock: true,
			},
		],

		shortDescription:
			"Premium wireless headphones with industry-leading noise cancellation and immersive sound.",

		description: `
		- Advanced noise cancellation
		- High-resolution audio
		- Comfortable over-ear design
		- Long battery life
		- Multipoint Bluetooth
	`,

		specifications: {
			processor: {
				name: "Integrated Audio Processor",
			},
			battery: {
				type: "Lithium-ion",
				charging: "USB-C",
			},
			connectivity: ["Bluetooth", "USB-C", "3.5mm"],
		},

		inStock: true,
		stock: 30,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Headphones", "Wireless", "Noise Cancellation", "Sony"],

		isFeatured: false,
		isBestSeller: false,
		isDeal: false,
		isNew: false,
	},

	// =========================================================
	// FASHION
	// =========================================================

	{
		id: 7,
		name: "Nike Men's Air Max Excee Shoes",
		brand: "Nike",
		company: "Nike",
		Category: "Fashion",
		subcategory: "Shoes",
		productType: "Running Shoes",

		images: [
			"https://m.media-amazon.com/images/I/61R+mVOCCzL._AC_SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81khxmCIoVL._AC_SL1500_.jpg",
			"https://m.media-amazon.com/images/I/617Vpw2FDuL._AC_SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61g3MHBirnL._AC_SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61R+mVOCCzL._AC_SL1500_.jpg",

		rating: 4.6,
		totalRatings: 1842,
		totalReviews: 397,

		price: 7499,
		originalPrice: 9999,
		discountPercentage: 25,

		offers: [
			{
				title: "Bank Offer",
				description: "10% instant discount on selected cards",
			},
			{
				title: "Extra Discount",
				description: "Save more on selected Nike products",
			},
		],
		variants: [
			{
				id: "7",
				name: "UK 7",
				price: 7499,
				originalPrice: 9999,
				stock: 15,
				inStock: true,
			},
			{
				id: "8",
				name: "UK 8",
				price: 7499,
				originalPrice: 9999,
				stock: 22,
				inStock: true,
			},
			{
				id: "9",
				name: "UK 9",
				price: 7499,
				originalPrice: 9999,
				stock: 18,
				inStock: true,
			},
			{
				id: "10",
				name: "UK 10",
				price: 7499,
				originalPrice: 9999,
				stock: 8,
				inStock: true,
			},
			{
				id: "11",
				name: "UK 11",
				price: 7499,
				originalPrice: 9999,
				stock: 11,
				inStock: true,
			},
		],

		shortDescription:
			"Lightweight running shoes designed for responsive cushioning and everyday comfort.",

		description: `
		- Lightweight construction
		- Responsive cushioning
		- Breathable upper
		- Durable rubber outsole
		- Designed for everyday running
	`,

		specifications: {
			material: "Mesh and synthetic",
			sole: "Rubber",
			closure: "Lace-up",
			gender: "Unisex",
			usage: "Running and training",
		},

		inStock: true,
		stock: 22,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-5 days",
		},

		warranty: {
			available: true,
			duration: "6 Months",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Nike", "Running", "Sports Shoes", "Footwear"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	{
		id: 8,
		name: "Levi's Classic Denim Jacket",
		brand: "Levi's",
		company: "Levi Strauss & Co.",
		Category: "Fashion",
		subcategory: "Men's Clothing",
		productType: "Denim Jacket",

		images: [
			"https://m.media-amazon.com/images/I/51vsU5xqmuS._SX679_.jpg",
			"https://m.media-amazon.com/images/I/61bAryysGMS._SX679_.jpg",
			"https://m.media-amazon.com/images/I/71X6rOeu9KL._SX679_.jpg",
			"https://m.media-amazon.com/images/I/71qePoM-wwL._SX679_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/51vsU5xqmuS._SX679_.jpg",

		rating: 4.5,
		totalRatings: 986,
		totalReviews: 215,

		price: 3299,
		originalPrice: 4999,
		discountPercentage: 34,

		offers: [
			{
				title: "Bank Offer",
				description: "Extra discount with selected cards",
			},
			{
				title: "Combo Offer",
				description:
					"Buy selected fashion items together and save more",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/61bAryysGMS._SX679_.jpg",
				price: 3299,
			},
			{
				id: "blue",
				name: "Classic Blue",
				image: "https://m.media-amazon.com/images/I/71X6rOeu9KL._SX679_.jpg",
				price: 3299,
			},
		],

		variants: [
			{
				id: "m",
				name: "M",
				price: 3299,
				originalPrice: 4999,
				stock: 15,
				inStock: true,
			},
			{
				id: "l",
				name: "L",
				price: 3299,
				originalPrice: 4999,
				stock: 20,
				inStock: true,
			},
			{
				id: "xl",
				name: "XL",
				price: 3299,
				originalPrice: 4999,
				stock: 12,
				inStock: true,
			},
		],

		shortDescription:
			"Classic denim jacket with a timeless design for everyday casual styling.",

		description: `
		- Classic denim construction
		- Regular fit
		- Button closure
		- Multiple utility pockets
		- Everyday casual styling
	`,

		specifications: {
			material: "100% Cotton Denim",
			fit: "Regular",
			pattern: "Solid",
			closure: "Button",
			gender: "Men",
		},

		inStock: true,
		stock: 20,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: false,
			duration: "",
			type: "",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Denim", "Jacket", "Men", "Casual"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	{
		id: 9,
		name: "Fossil Gen 7 Smartwatch",
		brand: "Fossil",
		company: "Fossil",
		Category: "Watches",
		subcategory: "Smart Watches",
		productType: "Smartwatch",

		images: [
			"https://m.media-amazon.com/images/I/71SzGwrjMkL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71v2a53e9pL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71ZtG7+BdvL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71ipGQaNOqL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71Vqggkd8hL._SL1500_.jpg",

		rating: 4.4,
		totalRatings: 734,
		totalReviews: 126,

		price: 18999,
		originalPrice: 24999,
		discountPercentage: 24,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount on selected bank cards",
			},
			{
				title: "Limited Deal",
				description: "Special limited-time pricing",
			},
		],

		colors: [
			{
				id: "silver",
				name: "Silver",
				image: "https://m.media-amazon.com/images/I/7168FPOetGL._SL1500_.jpg",
				price: 18999,
			},
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/71Vqggkd8hL._SL1500_.jpg",
				price: 18999,
			},
		],

		variants: [
			{
				id: "44mm",
				name: "44mm",
				price: 18999,
				originalPrice: 24999,
				stock: 16,
				inStock: true,
			},
		],

		shortDescription:
			"Stylish smartwatch combining classic watch design with modern fitness and smart features.",

		description: `
		- Premium stainless steel case
		- Health and fitness tracking
		- Notifications and apps
		- Heart-rate monitoring
		- Wireless charging
	`,

		specifications: {
			display: {
				size: "1.5 inches",
				type: "AMOLED",
				refreshRate: "60Hz",
			},
			processor: {
				name: "Wearable Processor",
			},
			battery: {
				type: "Lithium-ion",
				charging: "Wireless Charging",
			},
			operatingSystem: "Wear OS",
			connectivity: ["Bluetooth", "Wi-Fi", "NFC", "GPS"],
		},

		inStock: true,
		stock: 16,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Smartwatch", "Fossil", "Wear OS", "Fitness"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: false,
		isNew: true,
	},

	// =========================================================
	// HOME & KITCHEN
	// =========================================================

	{
		id: 10,
		name: "Philips Air Fryer XXL",
		brand: "Philips",
		company: "Philips",
		Category: "Home & Kitchen",
		subcategory: "Kitchen Appliances",
		productType: "Air Fryer",

		images: [
			"https://m.media-amazon.com/images/I/51Lij1eUaYL._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/61hexZsq0rL._SL1080_.jpg",
			"https://m.media-amazon.com/images/I/61BwdU2PP7L._SL1080_.jpg",
			"https://m.media-amazon.com/images/I/61dUMolnRNL._SL1103_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/51Lij1eUaYL._SL1000_.jpg",

		rating: 4.5,
		totalRatings: 2134,
		totalReviews: 431,

		price: 8999,
		originalPrice: 11999,
		discountPercentage: 25,

		offers: [
			{
				title: "Bank Offer",
				description: "Extra discount with selected cards",
			},
			{
				title: "Deal",
				description: "Limited-time promotional pricing",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/51Lij1eUaYL._SL1000_.jpg",
				price: 8999,
			},
		],

		variants: [
			{
				id: "5.6l",
				name: "5.6 L",
				price: 8999,
				originalPrice: 11999,
				stock: 25,
				inStock: true,
			},
			{
				id: "7.3l",
				name: "7.3 L",
				price: 10999,
				originalPrice: 13999,
				stock: 14,
				inStock: true,
			},
		],

		shortDescription:
			"Large-capacity air fryer for healthier frying, roasting and baking with less oil.",

		description: `
		- Large family capacity
		- Rapid air technology
		- Multiple cooking modes
		- Easy digital controls
		- Dishwasher-safe parts
	`,

		specifications: {
			capacity: "5.6 Litres",
			power: "1700W",
			control: "Digital",
			temperatureRange: "80°C - 200°C",
			cookingModes: ["Air Fry", "Roast", "Bake", "Reheat"],
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Air Fryer", "Kitchen", "Appliance", "Healthy Cooking"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	{
		id: 11,
		name: "IKEA Modern Fabric Sofa",
		brand: "IKEA",
		company: "IKEA",
		Category: "Home & Kitchen",
		subcategory: "Furniture",
		productType: "Sofa",

		images: [
			"https://m.media-amazon.com/images/I/41mB28xzBWL._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/51aQgKKW24L._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/41odKzqRxfL._SL1000_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61hzQvbqigL._SL1000_.jpg",

		rating: 4.5,
		totalRatings: 845,
		totalReviews: 168,

		price: 24999,
		originalPrice: 29999,
		discountPercentage: 17,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount with selected cards",
			},
			{
				title: "Home Deal",
				description: "Special pricing on selected furniture",
			},
		],

		colors: [
			{
				id: "gray",
				name: "Light Gray",
				image: "https://m.media-amazon.com/images/I/61hzQvbqigL._SL1000_.jpg",
				price: 24999,
			},
			{
				id: "beige",
				name: "Beige",
				image: "https://m.media-amazon.com/images/I/71FsK1GXYuL._SL1500_.jpg",
				price: 24999,
			},
		],

		variants: [
			{
				id: "3-seater",
				name: "3 Seater",
				price: 24999,
				originalPrice: 29999,
				stock: 8,
				inStock: true,
			},
			{
				id: "5-seater",
				name: "5 Seater",
				price: 34999,
				originalPrice: 41999,
				stock: 5,
				inStock: true,
			},
		],

		shortDescription:
			"Modern fabric sofa designed for comfortable everyday seating and contemporary interiors.",

		description: `
		- Modern minimalist design
		- Soft fabric upholstery
		- Comfortable foam cushioning
		- Strong wooden frame
		- Easy-to-maintain fabric
	`,

		specifications: {
			material: "Fabric and wood",
			seatingCapacity: "3 Seater",
			frame: "Solid Wood",
			cushion: "High Density Foam",
			color: "Light Gray",
		},

		inStock: true,
		stock: 8,

		delivery: {
			freeDelivery: true,
			deliveryDays: "7-12 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Sofa", "Furniture", "Home Decor", "Living Room"],

		isFeatured: true,
		isBestSeller: false,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// BEAUTY
	// =========================================================

	{
		id: 12,
		name: "CeraVe Hydrating Facial Cleanser",
		brand: "CeraVe",
		company: "CeraVe",
		Category: "Beauty",
		subcategory: "Skincare",
		productType: "Face Cleanser",

		images: [
			"https://m.media-amazon.com/images/I/513QsZcrkdL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61vA51yE8LL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/714bRAYa4PL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61bXCvAF67L._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/513QsZcrkdL._SL1500_.jpg",

		rating: 4.6,
		totalRatings: 3421,
		totalReviews: 728,

		price: 899,
		originalPrice: 1099,
		discountPercentage: 18,

		offers: [
			{
				title: "Beauty Deal",
				description: "Special price on selected skincare products",
			},
			{
				title: "Combo Offer",
				description: "Save more when buying selected skincare products",
			},
		],

		variants: [
			{
				id: "236ml",
				name: "236 ml",
				price: 899,
				originalPrice: 1099,
				stock: 35,
				inStock: true,
			},
			{
				id: "473ml",
				name: "473 ml",
				price: 1399,
				originalPrice: 1699,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"Gentle hydrating facial cleanser designed to cleanse skin while maintaining its natural moisture barrier.",

		description: `
		- Gentle daily cleanser
		- Helps maintain skin barrier
		- Hydrating formula
		- Suitable for normal to dry skin
		- Fragrance-free formula
	`,

		specifications: {
			skinType: "Normal to Dry",
			form: "Gel",
			volume: "236 ml",
			fragrance: "Fragrance Free",
			usage: "Daily",
		},

		inStock: true,
		stock: 35,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: false,
			duration: "",
			type: "",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Skincare", "Cleanser", "Face Wash", "CeraVe"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// SPORTS & TOYS
	// =========================================================

	{
		id: 13,
		name: "Yonex Carbon Pro Badminton Racket",
		brand: "Yonex",
		company: "Yonex",
		Category: "Sports & Toys",
		subcategory: "Sports Equipment",
		productType: "Badminton Racket",

		images: [
			"https://m.media-amazon.com/images/I/61tP-llOKJL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/51T1QUBNSCL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61s3NzGTwuL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/41yLrdKAQPL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61tP-llOKJL._SL1500_.jpg",

		rating: 4.5,
		totalRatings: 1256,
		totalReviews: 263,

		price: 3499,
		originalPrice: 4999,
		discountPercentage: 30,

		offers: [
			{
				title: "Sports Deal",
				description: "Special discount on selected sports equipment",
			},
			{
				title: "Bank Offer",
				description: "Instant discount with selected cards",
			},
		],

		variants: [
			{
				id: "4u",
				name: "4U",
				price: 3499,
				originalPrice: 4999,
				stock: 25,
				inStock: true,
			},
			{
				id: "3u",
				name: "3U",
				price: 3699,
				originalPrice: 5199,
				stock: 15,
				inStock: true,
			},
		],

		shortDescription:
			"Lightweight carbon-fiber badminton racket designed for speed, control and powerful shots.",

		description: `
		- Lightweight carbon frame
		- High tension support
		- Balanced head design
		- Comfortable grip
		- Suitable for intermediate players
	`,

		specifications: {
			material: "Carbon Fiber",
			weight: "83g",
			balance: "Head Light",
			grip: "G4",
			maxTension: "30 lbs",
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-5 days",
		},

		warranty: {
			available: true,
			duration: "6 Months",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Badminton", "Racket", "Sports", "Yonex"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	{
		id: 14,
		name: "LEGO City Fire Station",
		brand: "LEGO",
		company: "LEGO",
		Category: "Sports & Toys",
		subcategory: "Toys",
		productType: "Building Toy",

		images: [
			"https://m.media-amazon.com/images/I/61bryoAqsVL._SL1024_.jpg",
			"https://m.media-amazon.com/images/I/71csYLrCPPL._SL1024_.jpg",
			"https://m.media-amazon.com/images/I/614VBRgzOsL._SL1024_.jpg",
			"https://m.media-amazon.com/images/I/61hgOusx61L._SL1024_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61N02r7IOML.jpg",

		rating: 4.8,
		totalRatings: 2765,
		totalReviews: 583,

		price: 4999,
		originalPrice: 5999,
		discountPercentage: 17,

		offers: [
			{
				title: "Toy Deal",
				description: "Special discount on selected toys",
			},
			{
				title: "Bank Offer",
				description: "Instant discount on selected cards",
			},
		],

		shortDescription:
			"Creative building set that lets children build and play with their own fire station adventure.",

		description: `
		- Creative building experience
		- Multiple mini figures
		- Fire truck included
		- Encourages imagination
		- STEM-friendly play
	`,

		specifications: {
			ageGroup: "6+ Years",
			pieces: "500+",
			material: "Plastic",
			theme: "City",
			batteryRequired: false,
		},

		inStock: true,
		stock: 30,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-5 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["LEGO", "Toy", "Building", "Kids"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// BOOKS
	// =========================================================

	{
		id: 15,
		name: "Atomic Habits",
		brand: "Penguin",
		company: "Penguin Random House",
		Category: "Books",
		subcategory: "Self-Help",
		productType: "Self-Help Book",

		images: [
			"https://m.media-amazon.com/images/I/817HaeblezL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81DCnP7ntKL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/817HaeblezL._SL1500_.jpg",

		rating: 4.8,
		totalRatings: 15432,
		totalReviews: 3876,

		price: 399,
		originalPrice: 599,
		discountPercentage: 33,

		offers: [
			{
				title: "Book Deal",
				description: "Special discount on bestselling books",
			},
			{
				title: "Combo Offer",
				description: "Buy selected books together and save more",
			},
		],

		variants: [
			{
				id: "paperback",
				name: "Paperback",
				price: 399,
				originalPrice: 599,
				stock: 50,
				inStock: true,
			},
			{
				id: "hardcover",
				name: "Hardcover",
				price: 799,
				originalPrice: 999,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"A practical guide to building better habits and making small changes that create remarkable results.",

		description: `
		- Practical habit-building strategies
		- Easy-to-follow framework
		- Personal development
		- Productivity techniques
	`,

		specifications: {
			author: "James Clear",
			publisher: "Penguin",
			language: "English",
			pages: "320",
			format: "Paperback",
		},

		inStock: true,
		stock: 50,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: false,
			duration: "",
			type: "",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Book", "Self Help", "Productivity", "Bestseller"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// GAMING
	// =========================================================

	{
		id: 16,
		name: "PlayStation 5 Pro",
		brand: "Sony",
		company: "Sony Interactive Entertainment",
		Category: "Gaming",
		subcategory: "Consoles",
		productType: "Gaming Console",

		images: [
			"https://m.media-amazon.com/images/I/51w0RubSG7L.jpg",
			"https://m.media-amazon.com/images/I/51bUOSEMDeL._SL1171_.jpg",
			"https://m.media-amazon.com/images/I/51hSCqzg7qL._SL1145_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/51w0RubSG7L.jpg",

		rating: 4.8,
		totalRatings: 4632,
		totalReviews: 1054,

		price: 69999,
		originalPrice: 74999,
		discountPercentage: 7,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount on selected credit cards",
			},
			{
				title: "No Cost EMI",
				description: "EMI available on eligible cards",
			},
		],

		variants: [
			{
				id: "2tb",
				name: "2 TB",
				price: 69999,
				originalPrice: 74999,
				stock: 12,
				inStock: true,
			},
		],

		shortDescription:
			"High-performance gaming console with advanced graphics, fast loading and immersive gameplay.",

		description: `
		- High-performance gaming
		- Advanced ray tracing
		- Ultra-fast SSD
		- 4K gaming support
		- Immersive controller
	`,

		specifications: {
			storage: "2 TB SSD",
			resolution: "Up to 8K",
			frameRate: "Up to 120 FPS",
			controller: "DualSense",
			connectivity: ["Wi-Fi", "Bluetooth", "HDMI", "USB"],
		},

		inStock: true,
		stock: 12,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["PlayStation", "PS5", "Gaming", "Console"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: false,
		isNew: true,
	},

	// =========================================================
	// ACCESSORIES
	// =========================================================

	{
		id: 17,
		name: "Ray-Ban Aviator Classic",
		brand: "Ray-Ban",
		company: "Ray-Ban",
		Category: "Accessories",
		subcategory: "Sunglasses",
		productType: "Sunglasses",

		images: [
			"https://m.media-amazon.com/images/I/51RwocK-q0L._SX679_.jpg",
			"https://m.media-amazon.com/images/I/51YPwRg8UQL._SX679_.jpg",
			"https://m.media-amazon.com/images/I/51YPwRg8UQL._SX679_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/51RwocK-q0L._SX679_.jpg",

		rating: 4.6,
		totalRatings: 1834,
		totalReviews: 392,

		price: 7999,
		originalPrice: 9999,
		discountPercentage: 20,

		offers: [
			{
				title: "Bank Offer",
				description: "Extra discount on selected cards",
			},
			{
				title: "Fashion Deal",
				description: "Special deal on selected accessories",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/51RwocK-q0L._SX679_.jpg",
				price: 7999,
			},
			{
				id: "golden",
				name: "Golden",
				image: "https://m.media-amazon.com/images/I/616VwyPu1TL._SX679_.jpg",
				price: 7999,
			},
		],

		variants: [
			{
				id: "58",
				name: "58mm",
				price: 7999,
				originalPrice: 9999,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"Classic aviator sunglasses with timeless styling and UV protection.",

		description: `
		- Classic aviator design
		- UV protection
		- Premium metal frame
		- Lightweight construction
		- Includes protective case
	`,

		specifications: {
			frameMaterial: "Metal",
			lensMaterial: "Glass",
			lensType: "Polarized",
			uvProtection: "100% UV Protection",
			gender: "Unisex",
		},

		inStock: true,
		stock: 20,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Sunglasses", "Ray-Ban", "Aviator", "Fashion"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// AUTOMOTIVE
	// =========================================================

	{
		id: 18,
		name: "70mai 4K Dash Cam",
		brand: "70mai",
		company: "70mai",
		Category: "Automotive",
		subcategory: "Car Electronics",
		productType: "Dash Camera",

		images: [
			"https://m.media-amazon.com/images/I/61cKj9bCX3L._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71itETGLQCL._SL1253_.jpg",
			"https://m.media-amazon.com/images/I/61pnfKGC1cL._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/61tVjHC+OfL._SL1000_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61cKj9bCX3L._SL1500_.jpg",

		rating: 4.4,
		totalRatings: 967,
		totalReviews: 189,

		price: 8999,
		originalPrice: 10999,
		discountPercentage: 18,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount with selected bank cards",
			},
			{
				title: "Car Deal",
				description: "Special pricing on automotive electronics",
			},
		],

		shortDescription:
			"High-resolution car dash camera with night vision, wide-angle recording and smart driving features.",

		description: `
		- 4K video recording
		- Wide-angle lens
		- Night vision
		- Parking monitoring
		- Mobile app support
	`,

		specifications: {
			resolution: "4K UHD",
			fieldOfView: "140°",
			storage: "Up to 256GB",
			nightVision: true,
			connectivity: ["Wi-Fi", "USB-C"],
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Dash Cam", "Car", "4K", "Automotive"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// BABY & KIDS
	// =========================================================

	{
		id: 19,
		name: "Pampers Premium Care Diapers",
		brand: "Pampers",
		company: "Procter & Gamble",
		Category: "Baby & Kids",
		subcategory: "Diapering",
		productType: "Baby Diapers",

		images: [
			"https://m.media-amazon.com/images/I/71ePuafgbmL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71D5bdS2DuL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61tVLLYX8FL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71ePuafgbmL._SL1500_.jpg",

		rating: 4.6,
		totalRatings: 5214,
		totalReviews: 1102,

		price: 799,
		originalPrice: 999,
		discountPercentage: 20,

		offers: [
			{
				title: "Combo Offer",
				description: "Save more when buying multiple packs",
			},
			{
				title: "Bank Offer",
				description: "Extra discount on selected cards",
			},
		],

		variants: [
			{
				id: "m",
				name: "Medium - 72 Count",
				price: 799,
				originalPrice: 999,
				stock: 40,
				inStock: true,
			},
			{
				id: "l",
				name: "Large - 64 Count",
				price: 799,
				originalPrice: 999,
				stock: 35,
				inStock: true,
			},
			{
				id: "xl",
				name: "XL - 56 Count",
				price: 849,
				originalPrice: 1099,
				stock: 30,
				inStock: true,
			},
		],

		shortDescription:
			"Soft and comfortable baby diapers designed for reliable leakage protection.",

		description: `
		- Soft breathable material
		- Reliable leakage protection
		- Flexible fit
		- Wetness indicator
		- Designed for overnight comfort
	`,

		specifications: {
			type: "Baby Diaper",
			size: "Medium",
			count: "72",
			fit: "Flexible",
			usage: "Day and Night",
		},

		inStock: true,
		stock: 40,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: false,
			duration: "",
			type: "",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Baby", "Diapers", "Pampers", "Kids"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// FOOD & GROCERY
	// =========================================================

	{
		id: 20,
		name: "Almonds Premium California",
		brand: "FarmFresh",
		company: "FarmFresh",
		Category: "Food & Grocery",
		subcategory: "Organic & Health Foods",
		productType: "Almonds",

		images: [
			"https://m.media-amazon.com/images/I/51p6y+wJxML.jpg",
			"https://m.media-amazon.com/images/I/715gN6c2ZtL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61n8meEyYqL._SL1402_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/51p6y+wJxML.jpg",

		rating: 4.5,
		totalRatings: 1842,
		totalReviews: 371,

		price: 699,
		originalPrice: 899,
		discountPercentage: 22,

		offers: [
			{
				title: "Grocery Deal",
				description: "Special price on selected grocery products",
			},
			{
				title: "Combo Offer",
				description: "Save more when buying multiple packs",
			},
		],

		variants: [
			{
				id: "500g",
				name: "500 g",
				price: 699,
				originalPrice: 899,
				stock: 50,
				inStock: true,
			},
			{
				id: "1kg",
				name: "1 Kg",
				price: 1199,
				originalPrice: 1499,
				stock: 30,
				inStock: true,
			},
		],

		shortDescription:
			"Premium California almonds packed fresh for everyday snacking and healthy meals.",

		description: `
		- Premium California almonds
		- Rich in protein and healthy fats
		- Freshly packed
		- No artificial additives
		- Suitable for everyday snacking
	`,

		specifications: {
			origin: "California",
			type: "Whole Almonds",
			weight: "500 g",
			ingredients: "100% Almonds",
			additives: "None",
		},

		inStock: true,
		stock: 50,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: false,
			duration: "",
			type: "",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Almonds", "Healthy Food", "Dry Fruits", "Organic"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// HEALTH
	// =========================================================

	{
		id: 21,
		name: "Dr Trust Digital Blood Pressure Monitor",
		brand: "Dr Trust",
		company: "Dr Trust",
		Category: "Health",
		subcategory: "Medical Devices",
		productType: "Blood Pressure Monitor",

		images: [
			"https://m.media-amazon.com/images/I/71E029hTNaL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71-p8Fv5IsL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81TqYgoskTL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81ntNcyV6ML._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71E029hTNaL._SL1500_.jpg",

		rating: 4.4,
		totalRatings: 1642,
		totalReviews: 325,

		price: 1799,
		originalPrice: 2499,
		discountPercentage: 28,

		offers: [
			{
				title: "Health Deal",
				description: "Special discount on healthcare devices",
			},
			{
				title: "Bank Offer",
				description: "Extra discount with selected cards",
			},
		],

		shortDescription:
			"Digital blood pressure monitor designed for convenient home blood pressure measurement.",

		description: `
		- Digital blood pressure measurement
		- Large readable display
		- Automatic inflation
		- Memory storage
		- Compact design
	`,

		specifications: {
			type: "Digital BP Monitor",
			display: "LCD",
			measurement: "Automatic",
			memory: "2 x 120 Readings",
			power: "AA Batteries",
		},

		inStock: true,
		stock: 35,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Health", "BP Monitor", "Medical Device", "Healthcare"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// PET SUPPLIES
	// =========================================================

	{
		id: 22,
		name: "Dog FoodPedigree Adult",
		brand: "Pedigree",
		company: "Mars Petcare",
		Category: "Pet Supplies",
		subcategory: "Pet Food",
		productType: "Dog Food",

		images: [
			"https://m.media-amazon.com/images/I/71ExfwyWQAL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/7103rHQ1XUL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/810DKrdWbNL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71ExfwyWQAL._SL1500_.jpg",

		rating: 4.5,
		totalRatings: 2763,
		totalReviews: 594,

		price: 799,
		originalPrice: 999,
		discountPercentage: 20,

		offers: [
			{
				title: "Pet Deal",
				description: "Special discount on selected pet products",
			},
			{
				title: "Combo Offer",
				description: "Save more on multiple packs",
			},
		],

		variants: [
			{
				id: "3kg",
				name: "3 Kg",
				price: 799,
				originalPrice: 999,
				stock: 35,
				inStock: true,
			},
			{
				id: "10kg",
				name: "10 Kg",
				price: 2199,
				originalPrice: 2699,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"Complete adult dog food with balanced nutrition for everyday feeding.",

		description: `
		- Complete balanced nutrition
		- Protein-rich formula
		- Supports healthy digestion
		- Suitable for adult dogs
	`,

		specifications: {
			petType: "Dog",
			lifeStage: "Adult",
			flavor: "Chicken & Vegetables",
			weight: "3 Kg",
			type: "Dry Food",
		},

		inStock: true,
		stock: 35,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: false,
			duration: "",
			type: "",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Dog Food", "Pet Food", "Pedigree", "Dogs"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// COMPUTERS
	// =========================================================

	{
		id: 23,
		name: "Dell UltraSharp 27 Monitor",
		brand: "Dell",
		company: "Dell Technologies",
		Category: "Computers",
		subcategory: "Monitors",
		productType: "Computer Monitor",

		images: [
			"https://m.media-amazon.com/images/I/81fCUAajF9L._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71pmf1UgXhL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81oPYRTZ++L._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71PPhNDGX0L._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/81fCUAajF9L._SL1500_.jpg",

		rating: 4.7,
		totalRatings: 2142,
		totalReviews: 428,

		price: 28999,
		originalPrice: 34999,
		discountPercentage: 17,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount with selected cards",
			},
			{
				title: "No Cost EMI",
				description: "EMI available on eligible cards",
			},
		],

		variants: [
			{
				id: "27",
				name: "27-inch",
				price: 28999,
				originalPrice: 34999,
				stock: 15,
				inStock: true,
			},
			{
				id: "32",
				name: "32-inch",
				price: 38999,
				originalPrice: 44999,
				stock: 8,
				inStock: true,
			},
		],

		shortDescription:
			"Professional 4K monitor with accurate colors, slim bezels and ergonomic adjustment.",

		description: `
		- 4K Ultra HD resolution
		- Professional color accuracy
		- Slim bezel design
		- Height adjustable stand
		- Multiple connectivity options
	`,

		specifications: {
			display: {
				size: "27 inches",
				type: "IPS",
				resolution: "3840 x 2160",
				refreshRate: "60Hz",
			},
			connectivity: ["HDMI", "DisplayPort", "USB-C", "USB"],
			responseTime: "5ms",
		},

		inStock: true,
		stock: 15,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: true,
			duration: "3 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Monitor", "4K", "Dell", "Computer"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// MORE ELECTRONICS / ACCESSORIES
	// =========================================================

	{
		id: 24,
		name: "Anker 65W GaN Charger",
		brand: "Anker",
		company: "Anker Innovations",
		Category: "Electronics",
		subcategory: "Mobile Accessories",
		productType: "Wall Charger",

		images: [
			"https://m.media-amazon.com/images/I/51h3N12jqNL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71-QOPRVaOL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71rmyTixCZL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71Y60b-+uEL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/51h3N12jqNL._SL1500_.jpg",

		rating: 4.7,
		totalRatings: 4863,
		totalReviews: 942,

		price: 2999,
		originalPrice: 3999,
		discountPercentage: 25,

		offers: [
			{
				title: "Bank Offer",
				description: "Extra discount on selected cards",
			},
			{
				title: "Accessory Deal",
				description: "Limited-time accessory discount",
			},
		],

		shortDescription:
			"Compact 65W GaN charger capable of fast charging phones, tablets and laptops.",

		description: `
		- 65W fast charging
		- Compact GaN technology
		- Multiple charging ports
		- Universal compatibility
		- Travel-friendly design
	`,

		specifications: {
			power: "65W",
			technology: "GaN",
			ports: ["USB-C", "USB-A"],
			input: "100-240V",
			safety: ["Over Voltage", "Over Current", "Over Temperature"],
		},

		inStock: true,
		stock: 40,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "18 Months",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Charger", "GaN", "65W", "Mobile Accessories"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// AUDIO
	// =========================================================

	{
		id: 25,
		name: "Apple AirPods Pro",
		brand: "Apple",
		company: "Apple",
		Category: "Audio",
		subcategory: "Earbuds",
		productType: "True Wireless Earbuds",

		images: [
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1758077264181",
			"https://m.media-amazon.com/images/I/61o7EzoRpBL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71AnlRsNOXL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61xzXgMyg3L._SL1500_.jpg",
		],

		image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1758077264181",

		rating: 4.7,
		totalRatings: 8234,
		totalReviews: 1762,

		price: 24900,
		originalPrice: 26900,
		discountPercentage: 7,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount on selected cards",
			},
			{
				title: "No Cost EMI",
				description: "EMI available on eligible cards",
			},
		],

		colors: [
			{
				id: "white",
				name: "White",
				image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1758077264181",
				price: 24900,
			},
		],

		variants: [
			{
				id: "standard",
				name: "USB-C Charging Case",
				price: 24900,
				originalPrice: 26900,
				stock: 35,
				inStock: true,
			},
		],

		shortDescription:
			"Premium wireless earbuds with active noise cancellation, transparency mode and spatial audio.",

		description: `
		- Active Noise Cancellation
		- Transparency mode
		- Spatial audio
		- Wireless charging
		- Sweat and water resistance
	`,

		specifications: {
			driver: "Custom high-excursion driver",
			noiseCancellation: true,
			batteryLife: "Up to 30 hours with case",
			charging: "USB-C / Wireless",
			connectivity: ["Bluetooth", "USB-C"],
		},

		inStock: true,
		stock: 35,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["AirPods", "Apple", "Earbuds", "ANC"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// HOME DECOR
	// =========================================================

	{
		id: 26,
		name: "Minimalist LED Table Lamp",
		brand: "Philips",
		company: "Philips",
		Category: "Home & Kitchen",
		subcategory: "Lighting",
		productType: "Table Lamp",

		images: [
			"https://m.media-amazon.com/images/I/61H49SeYn3L._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71U6LDHXnVL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61Eisvw7qAL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61H49SeYn3L._SL1500_.jpg",

		rating: 4.4,
		totalRatings: 1125,
		totalReviews: 231,

		price: 1499,
		originalPrice: 1999,
		discountPercentage: 25,

		offers: [
			{
				title: "Home Deal",
				description: "Special discount on home lighting",
			},
			{
				title: "Bank Offer",
				description: "Extra discount on selected cards",
			},
		],

		variants: [
			{
				id: "9w",
				name: "9W",
				price: 1499,
				originalPrice: 1999,
				stock: 30,
				inStock: true,
			},
			{
				id: "12w",
				name: "12W",
				price: 1799,
				originalPrice: 2299,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"Minimalist LED table lamp providing comfortable illumination for desks, bedrooms and living spaces.",

		description: `
		- Modern minimalist design
		- Energy efficient LED
		- Soft comfortable lighting
		- Compact desk-friendly size
		- Long-lasting LED
	`,

		specifications: {
			power: "9W",
			lightType: "LED",
			colorTemperature: "3000K",
			material: "Metal and ABS",
			lifespan: "15,000 hours",
		},

		inStock: true,
		stock: 30,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Lamp", "LED", "Lighting", "Home Decor"],

		isFeatured: false,
		isBestSeller: false,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// GAMING ACCESSORIES
	// =========================================================

	{
		id: 27,
		name: "Logitech G Pro X Gaming Mouse",
		brand: "Logitech",
		company: "Logitech",
		Category: "Gaming",
		subcategory: "Gaming Accessories",
		productType: "Gaming Mouse",

		images: [
			"https://m.media-amazon.com/images/I/61ocaaw5KRL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61rfEoZW6-L._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/51DZJr+vw0L._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/71RKEFfBfgL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61ocaaw5KRL._SL1500_.jpg",

		rating: 4.6,
		totalRatings: 3214,
		totalReviews: 692,

		price: 8999,
		originalPrice: 10999,
		discountPercentage: 18,

		offers: [
			{
				title: "Gaming Deal",
				description: "Special discount on gaming accessories",
			},
			{
				title: "Bank Offer",
				description: "Extra discount on selected cards",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/61ocaaw5KRL._SL1500_.jpg",
				price: 8999,
			},
			{
				id: "white",
				name: "White",
				image: "https://m.media-amazon.com/images/I/51XoM-pw6-L._SX679_.jpg",
				price: 8999,
			},
		],

		variants: [
			{
				id: "wireless",
				name: "Wireless",
				price: 8999,
				originalPrice: 10999,
				stock: 25,
				inStock: true,
			},
		],

		shortDescription:
			"Lightweight professional gaming mouse with high-precision tracking and ultra-low latency.",

		description: `
		- High precision sensor
		- Lightweight construction
		- Wireless connectivity
		- Programmable buttons
		- Low-latency gaming performance
	`,

		specifications: {
			sensor: "HERO Sensor",
			dpi: "Up to 25,600 DPI",
			weight: "63g",
			connection: "Wireless",
			batteryLife: "Up to 70 hours",
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Gaming", "Mouse", "Wireless", "Logitech"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// MORE BOOKS
	// =========================================================

	{
		id: 28,
		name: "The Psychology of Money",
		brand: "Jaico",
		company: "Jaico Publishing House",
		Category: "Books",
		subcategory: "Non-Fiction",
		productType: "Finance Book",

		images: [
			"https://m.media-amazon.com/images/I/81eQqmEj65L._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/81eQqmEj65L._SL1500_.jpg",

		rating: 4.7,
		totalRatings: 8215,
		totalReviews: 1742,

		price: 299,
		originalPrice: 499,
		discountPercentage: 40,

		offers: [
			{
				title: "Book Deal",
				description: "Special discount on bestselling books",
			},
			{
				title: "Combo Offer",
				description: "Save more on selected book combinations",
			},
		],

		variants: [
			{
				id: "paperback",
				name: "Paperback",
				price: 299,
				originalPrice: 499,
				stock: 60,
				inStock: true,
			},
			{
				id: "hardcover",
				name: "Hardcover",
				price: 599,
				originalPrice: 799,
				stock: 15,
				inStock: true,
			},
		],

		shortDescription:
			"A collection of timeless lessons about wealth, investing, saving and human behavior.",

		description: `
		- Lessons about personal finance
		- Psychology of financial decisions
		- Long-term wealth principles
		- Practical financial insights
	`,

		specifications: {
			author: "Morgan Housel",
			publisher: "Jaico",
			language: "English",
			pages: "256",
			format: "Paperback",
		},

		inStock: true,
		stock: 60,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: false,
			duration: "",
			type: "",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Book", "Finance", "Money", "Non-Fiction"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// MORE FASHION
	// =========================================================

	{
		id: 29,
		name: "Adidas Performance T-Shirt",
		brand: "Adidas",
		company: "Adidas",
		Category: "Fashion",
		subcategory: "Men's Clothing",
		productType: "Sports T-Shirt",

		images: [
			"https://m.media-amazon.com/images/I/71zK5dxxaVL._SY879_.jpg",
			"https://m.media-amazon.com/images/I/71bL8HZO4YL._SY879_.jpg",
			"https://m.media-amazon.com/images/I/813jh8q4KgL._SY879_.jpg",
			"https://m.media-amazon.com/images/I/718T-beD-oL._SY879_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71zK5dxxaVL._SY879_.jpg",

		rating: 4.4,
		totalRatings: 1428,
		totalReviews: 276,

		price: 1299,
		originalPrice: 1999,
		discountPercentage: 35,

		offers: [
			{
				title: "Fashion Deal",
				description: "Special discount on selected Adidas products",
			},
			{
				title: "Bank Offer",
				description: "Additional discount with selected cards",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/71zK5dxxaVL._SY879_.jpg",
				price: 1299,
			},
			{
				id: "white",
				name: "White",
				image: "https://m.media-amazon.com/images/I/714Z2hmi+wL._SY879_.jpg",
				price: 1299,
			},
		],

		variants: [
			{
				id: "s",
				name: "S",
				price: 1299,
				originalPrice: 1999,
				stock: 15,
				inStock: true,
			},
			{
				id: "m",
				name: "M",
				price: 1299,
				originalPrice: 1999,
				stock: 22,
				inStock: true,
			},
			{
				id: "l",
				name: "L",
				price: 1299,
				originalPrice: 1999,
				stock: 20,
				inStock: true,
			},
			{
				id: "xl",
				name: "XL",
				price: 1299,
				originalPrice: 1999,
				stock: 10,
				inStock: true,
			},
		],

		shortDescription:
			"Comfortable performance T-shirt made for workouts, sports and everyday active wear.",

		description: `
		- Breathable fabric
		- Moisture-wicking technology
		- Lightweight construction
		- Regular athletic fit
		- Suitable for training and running
	`,

		specifications: {
			material: "Polyester",
			fit: "Regular",
			pattern: "Solid",
			sleeve: "Half Sleeve",
			gender: "Men",
		},

		inStock: true,
		stock: 22,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: false,
			duration: "",
			type: "",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Adidas", "T-Shirt", "Sportswear", "Men"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// COMPUTER ACCESSORIES
	// =========================================================

	{
		id: 30,
		name: "Logitech MX Master 4",
		brand: "Logitech",
		company: "Logitech",
		Category: "Computers",
		subcategory: "Computer Components",
		productType: "Wireless Mouse",

		images: [
			"https://m.media-amazon.com/images/I/61W4TEAYe3L._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/61Mpmc5iKzL._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/613naMgZIAL._SL1000_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61z3ENJubZL._SL1500_.jpg",

		rating: 4.7,
		totalRatings: 3642,
		totalReviews: 812,

		price: 7499,
		originalPrice: 8999,
		discountPercentage: 17,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount on selected bank cards",
			},
			{
				title: "Product Deal",
				description: "Limited-time discount on computer accessories",
			},
		],

		colors: [
			{
				id: "black",
				name: "Graphite",
				image: "https://m.media-amazon.com/images/I/61z3ENJubZL._SL1500_.jpg",
				price: 7499,
			},
			{
				id: "white",
				name: "Pale Gray",
				image: "https://m.media-amazon.com/images/I/61D7dUYR3DL._SL1500_.jpg",
				price: 7499,
			},
		],

		variants: [
			{
				id: "standard",
				name: "Wireless",
				price: 7499,
				originalPrice: 8999,
				stock: 30,
				inStock: true,
			},
		],

		shortDescription:
			"Premium ergonomic wireless mouse designed for productivity, precision and multi-device workflows.",

		description: `
		- Ergonomic design
		- High-precision tracking
		- Multi-device support
		- Customizable buttons
		- USB-C rechargeable
	`,

		specifications: {
			sensor: "High Precision Sensor",
			dpi: "Up to 8000 DPI",
			connection: "Bluetooth / Wireless",
			batteryLife: "Up to 70 days",
			buttons: "7 Customizable Buttons",
		},

		inStock: true,
		stock: 30,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Mouse", "Wireless", "Productivity", "Logitech"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},
	// =========================================================
	// 31 - ELECTRONICS / MOBILES
	// =========================================================
	{
		id: 31,
		name: "Samsung Galaxy S25 Ultra",
		brand: "Samsung",
		company: "Samsung",
		Category: "Electronics",
		subcategory: "Mobiles",
		productType: "Smartphone",

		images: [
			"https://m.media-amazon.com/images/I/61iG-OX-tRL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/51VW+fegsKL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71UBHJZSKgL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/51ZdNgH5qDL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61-g46cjguL._SL1500_.jpg",

		rating: 4.7,
		totalRatings: 8421,
		totalReviews: 2140,

		price: 129999,
		originalPrice: 139999,
		discountPercentage: 7,

		offers: [
			{
				title: "Bank Offer",
				description:
					"Up to ₹5,000 instant discount on selected bank cards",
			},
			{
				title: "No Cost EMI",
				description: "No Cost EMI available on eligible cards",
			},
			{
				title: "Exchange Offer",
				description: "Get additional discount on exchange",
			},
		],

		colors: [
			{
				id: "titanium-black",
				name: "Titanium Black",
				image: "https://m.media-amazon.com/images/I/61-g46cjguL._SL1500_.jpg",
				price: 129999,
			},
			{
				id: "titanium-silver",
				name: "Titanium Silver",
				image: "https://m.media-amazon.com/images/I/61isPIHrHgL._SL1500_.jpg",
				price: 129999,
			},
			{
				id: "titanium-blue",
				name: "Titanium Silverblue",
				image: "https://m.media-amazon.com/images/I/61Zdd-f4tCL._SL1500_.jpg",
				price: 129999,
			},
			{
				id: "titanium-gray",
				name: "Titanium Gray",
				image: "https://m.media-amazon.com/images/I/61+jJk5v6OL._SL1500_.jpg",
				price: 129999,
			},
		],

		variants: [
			{
				id: "256gb",
				name: "256 GB",
				price: 129999,
				originalPrice: 139999,
				stock: 30,
				inStock: true,
			},
			{
				id: "512gb",
				name: "512 GB",
				price: 149999,
				originalPrice: 159999,
				stock: 18,
				inStock: true,
			},
			{
				id: "1tb",
				name: "1 TB",
				price: 169999,
				originalPrice: 179999,
				stock: 8,
				inStock: true,
			},
		],

		shortDescription:
			"Samsung Galaxy S25 Ultra with flagship performance, advanced cameras and premium titanium design.",

		description: `
		- PREMIUM TITANIUM DESIGN
		- ADVANCED GALAXY AI FEATURES
		- 200MP PRO-GRADE CAMERA
		- POWERFUL SNAPDRAGON PROCESSOR
		- IMMERSIVE AMOLED DISPLAY
		- ALL-DAY BATTERY LIFE
		- ANDROID
	`,

		specifications: {
			display: {
				size: "6.9 inches",
				type: "Dynamic AMOLED 2X",
				refreshRate: "120Hz",
			},
			processor: {
				name: "Snapdragon 8 Elite",
			},
			camera: {
				rear: "200MP + 50MP + 50MP + 10MP",
				front: "12MP",
			},
			battery: {
				type: "Lithium-ion",
				charging: "Fast Charging",
			},
			operatingSystem: "Android",
			connectivity: ["5G", "Wi-Fi 7", "Bluetooth", "USB-C"],
		},

		inStock: true,
		stock: 30,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Flagship Smartphone", "5G", "Samsung", "Galaxy AI"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 32 - ELECTRONICS / LAPTOPS
	// =========================================================
	{
		id: 32,
		name: "MacBook Air M4",
		brand: "Apple",
		company: "Apple",
		Category: "Electronics",
		subcategory: "Laptops",
		productType: "Laptop",

		images: [
			"https://m.media-amazon.com/images/I/71CjP9jmqZL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61wJeelYVaL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71K0CntWCML._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71ow1e-aJZL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61M1XAvkBKL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71CjP9jmqZL._SX679_.jpg",

		rating: 4.8,
		totalRatings: 5321,
		totalReviews: 1432,

		price: 99900,
		originalPrice: 114900,
		discountPercentage: 13,

		offers: [
			{
				title: "Bank Offer",
				description: "Extra discount on selected bank cards",
			},
			{
				title: "No Cost EMI",
				description: "No Cost EMI available",
			},
			{
				title: "Student Offer",
				description: "Additional student benefits available",
			},
		],

		colors: [
			{
				id: "midnight",
				name: "Midnight",
				image: "https://m.media-amazon.com/images/I/71CjP9jmqZL._SX679_.jpg",
				price: 99900,
			},
			{
				id: "silver",
				name: "Silver",
				image: "https://m.media-amazon.com/images/I/711NKCLZfaL._SL1500_.jpg",
				price: 99900,
			},
			{
				id: "sky-blue",
				name: "Sky Blue",
				image: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._SX679_.jpg",
				price: 99900,
			},
			{
				id: "starlight",
				name: "Starlight",
				image: "https://m.media-amazon.com/images/I/71XIkqkx+KL._SX679_.jpg",
				price: 99900,
			},
		],

		variants: [
			{
				id: "256gb",
				name: "256 GB SSD",
				price: 99900,
				originalPrice: 114900,
				stock: 25,
				inStock: true,
			},
			{
				id: "512gb",
				name: "512 GB SSD",
				price: 119900,
				originalPrice: 134900,
				stock: 14,
				inStock: true,
			},
		],

		shortDescription:
			"MacBook Air powered by the M4 chip with a stunning display and all-day battery life.",

		description: `
		- POWERFUL M4 CHIP
		- THIN AND LIGHT DESIGN
		- LIQUID RETINA DISPLAY
		- ALL-DAY BATTERY LIFE
		- ADVANCED CAMERA
		- MAGSAFE CHARGING
		- MACOS
	`,

		specifications: {
			display: {
				size: "15.3 inches",
				type: "Liquid Retina",
				refreshRate: "60Hz",
			},
			processor: {
				name: "Apple M4",
			},
			camera: {
				rear: "N/A",
				front: "12MP Center Stage",
			},
			battery: {
				type: "Lithium-polymer",
				charging: "MagSafe Fast Charging",
			},
			operatingSystem: "macOS",
			connectivity: ["Wi-Fi 6E", "Bluetooth 5.3", "USB-C", "MagSafe"],
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.7,
			totalRatings: 9832,
			verified: true,
		},

		tags: ["MacBook", "M4", "Laptop", "Apple"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 33 - ELECTRONICS / TABLETS
	// =========================================================
	{
		id: 33,
		name: "iPad Pro 13-inch M4",
		brand: "Apple",
		company: "Apple",
		Category: "Electronics",
		subcategory: "Tablets",
		productType: "Tablet",

		images: [
			"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
			"https://images.unsplash.com/photo-1561154464-82e9adf32764",
			"https://images.unsplash.com/photo-1585790050230-5dd28404ccb9",
		],

		image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",

		rating: 4.8,
		totalRatings: 3912,
		totalReviews: 982,

		price: 109900,
		originalPrice: 119900,
		discountPercentage: 8,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount on selected bank cards",
			},
			{
				title: "No Cost EMI",
				description: "No Cost EMI available",
			},
		],

		colors: [
			{
				id: "space-black",
				name: "Space Black",
				image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
				price: 109900,
			},
			{
				id: "silver",
				name: "Silver",
				image: "https://images.unsplash.com/photo-1561154464-82e9adf32764",
				price: 109900,
			},
		],

		variants: [
			{
				id: "256gb",
				name: "256 GB",
				price: 109900,
				originalPrice: 119900,
				stock: 20,
				inStock: true,
			},
			{
				id: "512gb",
				name: "512 GB",
				price: 129900,
				originalPrice: 139900,
				stock: 12,
				inStock: true,
			},
			{
				id: "1tb",
				name: "1 TB",
				price: 169900,
				originalPrice: 179900,
				stock: 6,
				inStock: true,
			},
		],

		shortDescription:
			"iPad Pro with M4 performance, Ultra Retina XDR display and a remarkably thin design.",

		description: `
		- POWERFUL M4 CHIP
		- ULTRA RETINA XDR DISPLAY
		- THIN AND LIGHT DESIGN
		- PRO CAMERA SYSTEM
		- APPLE PENCIL SUPPORT
		- USB-C CONNECTIVITY
	`,

		specifications: {
			display: {
				size: "13 inches",
				type: "Ultra Retina XDR OLED",
				refreshRate: "120Hz",
			},
			processor: {
				name: "Apple M4",
			},
			camera: {
				rear: "12MP",
				front: "12MP Center Stage",
			},
			battery: {
				type: "Lithium-polymer",
				charging: "USB-C Fast Charging",
			},
			operatingSystem: "iPadOS",
			connectivity: ["Wi-Fi 6E", "Bluetooth 5.3", "USB-C"],
		},

		inStock: true,
		stock: 20,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["iPad", "M4", "Tablet", "Apple Pencil"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: false,
		isNew: true,
	},

	// =========================================================
	// 34 - ELECTRONICS / SMART WATCHES        Garmin Venu 3
	// =========================================================
	{
		id: 34,
		name: "Garmin Venu 3 GPS Smartwatch",
		brand: "Garmin",
		company: "Garmin",
		Category: "Electronics",
		subcategory: "Smart Watches",
		productType: "Smart Watch",

		images: [
			"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
			"https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
			"https://images.unsplash.com/photo-1544117519-31a4b719223d",
		],

		image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",

		rating: 4.7,
		totalRatings: 3120,
		totalReviews: 742,

		price: 44990,
		originalPrice: 49990,
		discountPercentage: 10,

		offers: [
			{
				title: "Bank Offer",
				description: "10% instant discount with selected credit cards",
			},
			{
				title: "Fitness Reward",
				description: "Free 3-month Garmin Connect Premium subscription",
			},
		],

		colors: [
			{
				id: "slate-black",
				name: "Slate / Black",
				image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
				price: 44990,
			},
			{
				id: "silver-whitestone",
				name: "Silver / Whitestone",
				image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
				price: 44990,
			},
		],

		variants: [
			{
				id: "45mm",
				name: "45mm (Venu 3)",
				price: 44990,
				originalPrice: 49990,
				stock: 25,
				inStock: true,
			},
			{
				id: "41mm",
				name: "41mm (Venu 3S)",
				price: 44990,
				originalPrice: 49990,
				stock: 18,
				inStock: true,
			},
		],

		shortDescription:
			"Advanced GPS smartwatch with bright AMOLED touchscreen, built-in speaker, mic, and comprehensive fitness tracking.",

		description: `
		- BRIGHT 1.4-INCH AMOLED DISPLAY
		- UP TO 14 DAYS OF BATTERY LIFE
		- ADVANCED SLEEP COACH & NAP DETECTION
		- BUILT-IN SPEAKER AND MICROPHONE
		- 30+ PRELOADED SPORTS APPS
		- BODY BATTERY ENERGY MONITORING
	`,

		specifications: {
			display: {
				size: "1.4 inch (45mm)",
				type: "AMOLED Touchscreen",
				refreshRate: "60Hz",
			},
			processor: {
				name: "Garmin Custom Sensor Hub",
			},
			camera: {
				rear: "N/A",
				front: "N/A",
			},
			battery: {
				type: "Lithium-ion",
				charging: "Proprietary Fast Charging",
			},
			operatingSystem: "Garmin OS",
			connectivity: ["Bluetooth", "Wi-Fi", "ANT+", "GPS", "NFC Garmin Pay"],
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Electronics",
			rating: 4.8,
			totalRatings: 15420,
			verified: true,
		},

		tags: ["Garmin", "Smart Watch", "Fitness", "GPS", "AMOLED"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 35 - AUDIO / HEADPHONES              Bose QuietComfort Ultra
	// =========================================================
	{
		id: 35,
		name: "Bose QuietComfort Ultra Wireless Headphones",
		brand: "Bose",
		company: "Bose Corporation",
		Category: "Audio",
		subcategory: "Headphones",
		productType: "Wireless Headphones",

		images: [
			"https://images.unsplash.com/photo-1546435770-a3e426bf472b",
			"https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
			"https://images.unsplash.com/photo-1484704849700-f032a568e944",
		],

		image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",

		rating: 4.8,
		totalRatings: 5410,
		totalReviews: 1290,

		price: 35900,
		originalPrice: 39900,
		discountPercentage: 10,

		offers: [
			{
				title: "Bank Offer",
				description: "Instant discount on selected premium cards",
			},
			{
				title: "No Cost EMI",
				description: "No Cost EMI up to 12 months available",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
				price: 35900,
			},
			{
				id: "white-smoke",
				name: "White Smoke",
				image: "https://images.unsplash.com/photo-1484704849700-f032a568e944",
				price: 35900,
			},
		],

		variants: [
			{
				id: "standard",
				name: "Standard",
				price: 35900,
				originalPrice: 39900,
				stock: 35,
				inStock: true,
			},
		],

		shortDescription:
			"Flagship wireless headphones featuring breakthrough Bose Immersive Audio, world-class noise cancellation and custom-tuned sound.",

		description: `
		- WORLD-CLASS ACTIVE NOISE CANCELLATION
		- BOSE IMMERSIVE SPATIAL AUDIO
		- CUSTOMTUNE SOUND CALIBRATION
		- UP TO 24 HOURS BATTERY LIFE
		- ULTRA-PLUSH LEATHERETTE EARCUPS
		- CRYSTAL CLEAR PHONE CALLS
	`,

		specifications: {
			display: {
				size: "N/A",
				type: "N/A",
				refreshRate: "N/A",
			},
			processor: {
				name: "Bose Custom DSP Audio SoC",
			},
			camera: {
				rear: "N/A",
				front: "N/A",
			},
			battery: {
				type: "Lithium-ion",
				charging: "USB-C Fast Charging",
			},
			operatingSystem: "N/A",
			connectivity: ["Bluetooth 5.3", "USB-C", "3.5mm Audio Jack", "Multipoint"],
		},

		inStock: true,
		stock: 35,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Audio",
			rating: 4.8,
			totalRatings: 18920,
			verified: true,
		},

		tags: ["Bose", "Headphones", "Noise Cancellation", "Spatial Audio", "Wireless"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 36 - AUDIO / EARBUDS
	// =========================================================
	{
		id: 36,
		name: "Apple AirPods Pro 2",
		brand: "Apple",
		company: "Apple",
		Category: "Audio",
		subcategory: "Earbuds",
		productType: "Wireless Earbuds",

		images: [
			"https://m.media-amazon.com/images/I/61sRKTAfrhL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/51+vJkbGtJL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/51aHwMRyg7L._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61sRKTAfrhL._SL1500_.jpg",

		rating: 4.6,
		totalRatings: 9872,
		totalReviews: 2512,

		price: 22900,
		originalPrice: 24900,
		discountPercentage: 8,

		offers: [
			{
				title: "Bank Offer",
				description: "Extra discount on selected bank cards",
			},
			{
				title: "No Cost EMI",
				description: "No Cost EMI available",
			},
		],

		colors: [
			{
				id: "white",
				name: "White",
				image: "https://m.media-amazon.com/images/I/61sRKTAfrhL._SL1500_.jpg",
				price: 22900,
			},
		],

		variants: [
			{
				id: "usb-c",
				name: "USB-C",
				price: 22900,
				originalPrice: 24900,
				stock: 50,
				inStock: true,
			},
		],

		shortDescription:
			"AirPods Pro with Active Noise Cancellation, Adaptive Audio and USB-C charging.",

		description: `
		- ACTIVE NOISE CANCELLATION
		- ADAPTIVE AUDIO
		- TRANSPARENCY MODE
		- PERSONALIZED SPATIAL AUDIO
		- USB-C CHARGING
		- SWEAT AND WATER RESISTANT
	`,

		specifications: {
			display: {
				size: "N/A",
				type: "N/A",
				refreshRate: "N/A",
			},
			processor: {
				name: "Apple H2",
			},
			camera: {
				rear: "N/A",
				front: "N/A",
			},
			battery: {
				type: "Lithium-ion",
				charging: "USB-C",
			},
			operatingSystem: "N/A",
			connectivity: ["Bluetooth 5.3", "USB-C"],
		},

		inStock: true,
		stock: 50,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["AirPods", "Earbuds", "ANC", "Apple"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 37 - GAMING / CONSOLES        Xbox Series X
	// =========================================================
	{
		id: 37,
		name: "Xbox Series X 1TB Gaming Console",
		brand: "Microsoft",
		company: "Microsoft",
		Category: "Gaming",
		subcategory: "Consoles",
		productType: "Gaming Console",

		images: [
			"https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
			"https://images.unsplash.com/photo-1607853202273-797f1c22a38e",
			"https://images.unsplash.com/photo-1592840062661-3e3b8a6e8c48",
		],

		image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",

		rating: 4.8,
		totalRatings: 9420,
		totalReviews: 2310,

		price: 52990,
		originalPrice: 55990,
		discountPercentage: 5,

		offers: [
			{
				title: "Xbox Game Pass Offer",
				description: "Includes 3 Months of Xbox Game Pass Ultimate free",
			},
			{
				title: "Bank Offer",
				description: "Instant discount on selected credit and debit cards",
			},
		],

		colors: [
			{
				id: "matte-black",
				name: "Carbon Black",
				image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
				price: 52990,
			},
		],

		variants: [
			{
				id: "1tb-disc",
				name: "1TB SSD (Disc Edition)",
				price: 52990,
				originalPrice: 55990,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"The fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles with 12 teraflops of raw graphic processing power.",

		description: `
		- 12 TERAFLOPS RAW GRAPHICAL PROCESSING POWER
		- TRUE 4K GAMING AT UP TO 120 FPS
		- XBOX VELOCITY ARCHITECTURE WITH 1TB CUSTOM NVME SSD
		- QUICK RESUME FOR INSTANT GAME SWITCHING
		- HARDWARE-ACCELERATED DIRECTX RAYTRACING
		- 3D SPATIAL SOUND WITH DOLBY ATMOS & DOLBY VISION
	`,

		specifications: {
			display: {
				size: "N/A",
				type: "4K UHD Blu-ray / 8K HDR Support",
				refreshRate: "Up to 120Hz",
			},
			processor: {
				name: "Custom 8-Core AMD Zen 2 CPU (3.8 GHz)",
			},
			camera: {
				rear: "N/A",
				front: "N/A",
			},
			battery: {
				type: "N/A",
				charging: "AC Power Cord",
			},
			operatingSystem: "Xbox OS",
			connectivity: ["HDMI 2.1", "USB 3.1 Gen 1", "Wi-Fi 5", "Ethernet 1Gbps"],
		},

		inStock: true,
		stock: 20,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Microsoft Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Gaming Official",
			rating: 4.8,
			totalRatings: 18450,
			verified: true,
		},

		tags: ["Xbox", "Xbox Series X", "Gaming", "Console", "Microsoft", "4K Gaming"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 38 - GAMING / GAMING ACCESSORIES
	// =========================================================
	{
		id: 38,
		name: "Logitech G Pro X Wireless Gaming Headset",
		brand: "Logitech",
		company: "Logitech",
		Category: "Gaming",
		subcategory: "Gaming Accessories",
		productType: "Gaming Headset",

		images: [
			"https://m.media-amazon.com/images/I/51-+udaQBpL._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/612DzRcEBHL._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/61FSa9LF1qL._SL1000_.jpg",
			"https://m.media-amazon.com/images/I/51gnn-MRVXL._SL1000_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61bDCk+O+pL._SL1402_.jpg",

		rating: 4.5,
		totalRatings: 3152,
		totalReviews: 720,

		price: 12999,
		originalPrice: 15999,
		discountPercentage: 19,

		offers: [
			{
				title: "Bank Offer",
				description: "Extra discount on selected cards",
			},
			{
				title: "Deal Offer",
				description: "Limited-time gaming accessory discount",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/61bDCk+O+pL._SL1402_.jpg",
				price: 12999,
			},
		],

		variants: [
			{
				id: "wireless",
				name: "Wireless",
				price: 12999,
				originalPrice: 15999,
				stock: 28,
				inStock: true,
			},
		],

		shortDescription:
			"Professional wireless gaming headset with surround sound and detachable microphone.",

		description: `
		- LIGHTSPEED WIRELESS
		- PRO-G AUDIO DRIVERS
		- DTS HEADPHONE:X 2.0
		- DETACHABLE MICROPHONE
		- MEMORY FOAM EAR PADS
	`,

		specifications: {
			display: {
				size: "N/A",
				type: "N/A",
				refreshRate: "N/A",
			},
			processor: {
				name: "Integrated Audio Processor",
			},
			camera: {
				rear: "N/A",
				front: "N/A",
			},
			battery: {
				type: "Lithium-ion",
				charging: "USB",
			},
			operatingSystem: "Windows/macOS",
			connectivity: ["2.4GHz Wireless", "USB"],
		},

		inStock: true,
		stock: 28,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Gaming", "Headset", "Logitech", "Wireless"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 39 - FASHION / MEN'S CLOTHING       Tommy Hilfiger Oxford Shirt
	// =========================================================
	{
		id: 39,
		name: "Tommy Hilfiger Men's Slim Fit Oxford Cotton Shirt",
		brand: "Tommy Hilfiger",
		company: "Tommy Hilfiger",
		Category: "Fashion",
		subcategory: "Men's Clothing",
		productType: "Casual Shirt",

		images: [
			"https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
			"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
			"https://images.unsplash.com/photo-1620012253295-c15c429f60c4",
		],

		image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",

		rating: 4.6,
		totalRatings: 3240,
		totalReviews: 680,

		price: 3499,
		originalPrice: 5999,
		discountPercentage: 42,

		offers: [
			{
				title: "Fashion Deal",
				description: "Flat 40% + Extra 10% on Tommy Hilfiger apparel",
			},
			{
				title: "Bank Offer",
				description: "Instant discount on selected bank credit cards",
			},
		],

		colors: [
			{
				id: "white",
				name: "Classic White",
				image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
				price: 3499,
			},
			{
				id: "navy",
				name: "Navy Blue",
				image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
				price: 3499,
			},
			{
				id: "sky-blue",
				name: "Light Sky Blue",
				image: "https://images.unsplash.com/photo-1620012253295-c15c429f60c4",
				price: 3499,
			},
		],

		variants: [
			{
				id: "s",
				name: "S",
				price: 3499,
				originalPrice: 5999,
				stock: 15,
				inStock: true,
			},
			{
				id: "m",
				name: "M",
				price: 3499,
				originalPrice: 5999,
				stock: 28,
				inStock: true,
			},
			{
				id: "l",
				name: "L",
				price: 3499,
				originalPrice: 5999,
				stock: 22,
				inStock: true,
			},
			{
				id: "xl",
				name: "XL",
				price: 3499,
				originalPrice: 5999,
				stock: 14,
				inStock: true,
			},
		],

		shortDescription:
			"Classic button-down Oxford shirt crafted from 100% premium organic cotton with the signature Tommy Hilfiger embroidered flag logo.",

		description: `
		- 100% PREMIUM ORGANIC OXFORD COTTON
		- ICONIC BUTTON-DOWN COLLAR
		- SIGNATURE TOMMY EMBROIDERED FLAG
		- BREATHABLE & WRINKLE-RESISTANT
		- SLIM TAILORED FIT
		- VERSATILE FOR FORMAL & CASUAL WEAR
	`,

		specifications: {
			material: "100% Organic Oxford Cotton",
			fit: "Slim Fit",
			sleeves: "Long Sleeves with Button Cuffs",
			pattern: "Solid / Plain",
			care: "Machine Wash Cold",
			occasion: "Smart Casual / Semi-Formal",
		},

		inStock: true,
		stock: 28,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: false,
			duration: "N/A",
			type: "N/A",
		},

		seller: {
			name: "ShopAll Premium Fashion",
			rating: 4.7,
			totalRatings: 14200,
			verified: true,
		},

		tags: ["Tommy Hilfiger", "Shirt", "Men's Fashion", "Oxford Cotton", "Formal", "Casual"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 40 - FASHION / WOMEN'S CLOTHING
	// =========================================================
	{
		id: 40,
		name: "Women's Floral Summer Dress",
		brand: "Mango",
		company: "Mango",
		Category: "Fashion",
		subcategory: "Women's Clothing",
		productType: "Dress",

		images: [
			"https://m.media-amazon.com/images/I/71ZARINFaeL._SY879_.jpg",
			"https://m.media-amazon.com/images/I/71v7d1nH0TL._SY879_.jpg",
			"https://m.media-amazon.com/images/I/81pEqB61vhL._SY879_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71ZARINFaeL._SY879_.jpg",

		rating: 4.5,
		totalRatings: 2156,
		totalReviews: 508,

		price: 2499,
		originalPrice: 3999,
		discountPercentage: 38,

		offers: [
			{
				title: "Fashion Offer",
				description: "Up to 40% off on selected styles",
			},
			{
				title: "Bank Offer",
				description: "Extra discount with selected cards",
			},
		],

		colors: [
			{
				id: "floral",
				name: "Floral Print",
				image: "https://m.media-amazon.com/images/I/71MOAWneWdL._SY879_.jpg",
				price: 2499,
			},
		],

		variants: [
			{
				id: "s",
				name: "S",
				price: 2499,
				originalPrice: 3999,
				stock: 15,
				inStock: true,
			},
			{
				id: "m",
				name: "M",
				price: 2499,
				originalPrice: 3999,
				stock: 22,
				inStock: true,
			},
			{
				id: "l",
				name: "L",
				price: 2499,
				originalPrice: 3999,
				stock: 17,
				inStock: true,
			},
			{
				id: "xl",
				name: "XL",
				price: 2499,
				originalPrice: 3999,
				stock: 8,
				inStock: true,
			},
		],

		shortDescription:
			"Elegant floral summer dress with a comfortable fit and lightweight fabric.",

		description: `
		- FLORAL PRINT
		- LIGHTWEIGHT FABRIC
		- COMFORTABLE FIT
		- BREATHABLE MATERIAL
		- PERFECT FOR SUMMER
	`,

		specifications: {
			material: "Cotton Blend",
			fit: "Regular Fit",
			sleeves: "Short Sleeves",
			pattern: "Floral",
			care: "Machine Wash",
			occasion: "Casual",
		},

		inStock: true,
		stock: 22,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-5 days",
		},

		warranty: {
			available: false,
			duration: "N/A",
			type: "N/A",
		},

		seller: {
			name: "ShopAll Fashion",
			rating: 4.5,
			totalRatings: 8421,
			verified: true,
		},

		tags: ["Dress", "Women", "Summer", "Floral"],

		isFeatured: true,
		isBestSeller: false,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 41 - FASHION / SHOES      Adidas Ultraboost Light
	// =========================================================
	{
		id: 41,
		name: "Adidas Ultraboost Light Running Shoes",
		brand: "Adidas",
		company: "Adidas",
		Category: "Fashion",
		subcategory: "Shoes",
		productType: "Running Shoes",

		images: [
			"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
			"https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
		],

		image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",

		rating: 4.7,
		totalRatings: 5820,
		totalReviews: 1390,

		price: 11999,
		originalPrice: 16999,
		discountPercentage: 29,

		offers: [
			{
				title: "Sports Offer",
				description: "Special extra discount on high-performance running shoes",
			},
			{
				title: "Bank Offer",
				description: "Instant discount with selected credit and debit cards",
			},
		],

		colors: [
			{
				id: "core-black",
				name: "Core Black",
				image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
				price: 11999,
			},
			{
				id: "cloud-white",
				name: "Cloud White",
				image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
				price: 11999,
			},
			{
				id: "solar-red",
				name: "Solar Red",
				image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
				price: 11999,
			},
		],

		variants: [
			{
				id: "7",
				name: "UK 7",
				price: 11999,
				originalPrice: 16999,
				stock: 18,
				inStock: true,
			},
			{
				id: "8",
				name: "UK 8",
				price: 11999,
				originalPrice: 16999,
				stock: 25,
				inStock: true,
			},
			{
				id: "9",
				name: "UK 9",
				price: 11999,
				originalPrice: 16999,
				stock: 20,
				inStock: true,
			},
			{
				id: "10",
				name: "UK 10",
				price: 11999,
				originalPrice: 16999,
				stock: 15,
				inStock: true,
			},
		],

		shortDescription:
			"Experience epic energy in the lightest Ultraboost ever made, featuring Light BOOST midsole and Continental rubber outsole.",

		description: `
		- 30% LIGHTER BOOST MATERIAL
		- PRIMEKNIT+ FORGED TEXTILE UPPER
		- LINEAR ENERGY PUSH (LEP) SYSTEM
		- CONTINENTAL BETTER RUBBER OUTSOLE
		- ULTIMATE ENERGY RETURN
		- SUSTAINABLE MATERIALS
	`,

		specifications: {
			material: "Primeknit+ Textile and Synthetic",
			fit: "Regular Fit with Lace Closure",
			sole: "Continental Better Rubber Outsole",
			pattern: "Sporty Knit",
			care: "Wipe with damp cloth",
			occasion: "Running / Training / Lifestyle",
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "6 Months",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Sports & Footwear",
			rating: 4.8,
			totalRatings: 11200,
			verified: true,
		},

		tags: ["Adidas", "Ultraboost", "Running", "Shoes", "Sports", "Footwear"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 42 - FASHION / BAGS
	// =========================================================
	{
		id: 42,
		name: "Samsonite Premium Travel Backpack",
		brand: "Samsonite",
		company: "Samsonite",
		Category: "Fashion",
		subcategory: "Bags",
		productType: "Travel Backpack",

		images: [
			"https://m.media-amazon.com/images/I/518Rp3fFFKL._SX679_.jpg",
			"https://m.media-amazon.com/images/I/61rmuDQWT0L._SX679_.jpg",
			"https://m.media-amazon.com/images/I/61-vjxID2FL._SY879_.jpg",
			"https://m.media-amazon.com/images/I/61bPExu9HqL._SY879_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/51BXeC23-jL._SX679_.jpg",

		rating: 4.5,
		totalRatings: 3214,
		totalReviews: 760,

		price: 4999,
		originalPrice: 6999,
		discountPercentage: 29,

		offers: [
			{
				title: "Travel Offer",
				description: "Special discount on travel essentials",
			},
			{
				title: "Bank Offer",
				description: "Additional discount with selected cards",
			},
		],

		colors: [
			{
				id: "gray",
				name: "Gray",
				image: "https://m.media-amazon.com/images/I/51BXeC23-jL._SX679_.jpg",
				price: 4999,
			},
		],

		variants: [
			{
				id: "25l",
				name: "25 L",
				price: 4999,
				originalPrice: 6999,
				stock: 25,
				inStock: true,
			},
			{
				id: "35l",
				name: "35 L",
				price: 5999,
				originalPrice: 7999,
				stock: 15,
				inStock: true,
			},
		],

		shortDescription:
			"Premium travel backpack with laptop protection, multiple compartments and water-resistant material.",

		description: `
		- LAPTOP COMPARTMENT
		- WATER-RESISTANT FABRIC
		- MULTIPLE STORAGE POCKETS
		- PADDED BACK SUPPORT
		- TRAVEL FRIENDLY DESIGN
	`,

		specifications: {
			material: "Polyester",
			capacity: "25 Litres",
			laptopSupport: "Up to 15.6 inches",
			waterResistance: "Yes",
			type: "Travel Backpack",
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll",
			rating: 4.6,
			totalRatings: 12543,
			verified: true,
		},

		tags: ["Backpack", "Travel", "Laptop Bag", "Samsonite"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 43 - HOME & KITCHEN / KITCHEN APPLIANCES        Panasonic Convection Microwave Oven
	// =========================================================
	{
		id: 43,
		name: "Panasonic 27L Convection Microwave Oven",
		brand: "Panasonic",
		company: "Panasonic Corporation",
		Category: "Home & Kitchen",
		subcategory: "Kitchen Appliances",
		productType: "Microwave Oven",

		images: [
			"https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
			"https://images.unsplash.com/photo-1585515320310-259814833e62",
			"https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
		],

		image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",

		rating: 4.6,
		totalRatings: 5120,
		totalReviews: 1180,

		price: 13490,
		originalPrice: 17990,
		discountPercentage: 25,

		offers: [
			{
				title: "Kitchen Fest Deal",
				description: "Flat ₹1,500 instant discount on convection ovens",
			},
			{
				title: "Bank Offer",
				description: "Instant discount with selected credit & debit cards",
			},
		],

		colors: [
			{
				id: "silver-black",
				name: "Metallic Silver & Black Glass",
				image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
				price: 13490,
			},
		],

		variants: [
			{
				id: "27l",
				name: "27 Litres",
				price: 13490,
				originalPrice: 17990,
				stock: 22,
				inStock: true,
			},
		],

		shortDescription:
			"Multi-stage convection microwave oven featuring 101 auto-cook menus, 360° heat distribution, baking, grilling, and zero-oil healthy cooking modes.",

		description: `
		- 27 LITRE CAPACITY SUITABLE FOR FAMILIES (3-5 MEMBERS)
		- CONVECTION, GRILL & MICROWAVE COMBINATION COOKING
		- 101 PRE-PROGRAMMED AUTO COOK MENUS
		- 360 DEGREE EVEN HEAT CIRCULATION
		- STAINLESS STEEL CAVITY FOR HYGIENIC CLEANING
		- DEFROST, BAKE, ROAST & REHEAT WITH TOUCH CONTROLS
	`,

		specifications: {
			capacity: "27 Litres",
			power: "900W Microwave / 1400W Convection Grill",
			control: "Touch Key Pad with Digital LED Display",
			temperature: "100°C - 230°C Convection",
			cavity: "Stainless Steel Rust-Free Interior",
			specialFeatures: "Auto Defrost, Child Lock, Vapor Clean, 360° Turntable",
		},

		inStock: true,
		stock: 22,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year Comprehensive + 5 Years on Magnetron",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Appliances Official",
			rating: 4.8,
			totalRatings: 14600,
			verified: true,
		},

		tags: ["Panasonic", "Microwave Oven", "Convection Oven", "Baking", "Kitchen Appliance"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 44 - HOME & KITCHEN / HOME DECOR        Nordic Ceramic Vase Set
	// =========================================================
	{
		id: 44,
		name: "Nordic Ceramic Table Vase & Decorative Planter Set",
		brand: "Nordic Haven",
		company: "HomeArt Decor",
		Category: "Home & Kitchen",
		subcategory: "Home Decor",
		productType: "Vase Set",

		images: [
			"https://images.unsplash.com/photo-1578749556568-bc2c40e68b61",
			"https://images.unsplash.com/photo-1581783342308-f792dbdd27c5",
			"https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c",
		],

		image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61",

		rating: 4.7,
		totalRatings: 2310,
		totalReviews: 540,

		price: 1799,
		originalPrice: 2999,
		discountPercentage: 40,

		offers: [
			{
				title: "Home Decor Fest",
				description: "Buy 2 home decor items & get extra 15% off",
			},
			{
				title: "Bank Offer",
				description: "Additional savings with selected cards",
			},
		],

		colors: [
			{
				id: "matte-white-beige",
				name: "Matte White & Sand Beige",
				image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61",
				price: 1799,
			},
			{
				id: "terracotta-sage",
				name: "Terracotta & Sage Green",
				image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5",
				price: 1899,
			},
		],

		variants: [
			{
				id: "set-of-3",
				name: "Set of 3 Vases",
				price: 1799,
				originalPrice: 2999,
				stock: 35,
				inStock: true,
			},
		],

		shortDescription:
			"Artisan-crafted ceramic vase set in sculptural donut and ribbed geometric silhouettes, perfect for dried pampas grass and modern shelf styling.",

		description: `
		- HANDCRAFTED 100% HIGH-GRADE CERAMIC
		- MATTE TEXTURED FROSTED FINISH
		- SCULPTURAL MODERN NORDIC AESTHETICS
		- WATER-TIGHT INTERIOR GLAZING
		- IDEAL FOR DRIED FLORALS OR FRESH BLOOMS
		- SCRATCH-RESISTANT PADDED BASE
	`,

		specifications: {
			type: "Decorative Tabletop Vase Set (3 Pieces)",
			material: "High-Temperature Kiln-Fired Ceramic",
			finish: "Matte Frosted Texture",
			dimensions: "Large (22cm), Medium (18cm), Small (14cm)",
			drainage: "Closed Bottom / Waterproof Interior",
			weight: "1.65 kg (Set)",
		},

		inStock: true,
		stock: 35,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-5 days",
		},

		warranty: {
			available: true,
			duration: "6 Months",
			type: "Replacement Warranty Against Breakage",
		},

		seller: {
			name: "ShopAll Home Decor",
			rating: 4.7,
			totalRatings: 8740,
			verified: true,
		},

		tags: ["Vase Set", "Home Decor", "Nordic", "Ceramic", "Modern Aesthetic", "Interior"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 45 - HOME & KITCHEN / FURNITURE       Ergonomic Office Chair
	// =========================================================
	{
		id: 45,
		name: "Ergonomic High-Back Mesh Executive Office Chair",
		brand: "Green Soul",
		company: "Green Soul Ergonomics",
		Category: "Home & Kitchen",
		subcategory: "Furniture",
		productType: "Office Chair",

		images: [
			"https://images.unsplash.com/photo-1580481077195-c3a82da91883",
			"https://images.unsplash.com/photo-1505797149-43b0069ec26b",
			"https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32",
		],

		image: "https://images.unsplash.com/photo-1580481077195-c3a82da91883",

		rating: 4.7,
		totalRatings: 4280,
		totalReviews: 950,

		price: 11499,
		originalPrice: 18999,
		discountPercentage: 39,

		offers: [
			{
				title: "Work From Home Offer",
				description: "Flat ₹1,000 instant discount on executive office furniture",
			},
			{
				title: "No Cost EMI",
				description: "Zero interest EMI available on all major credit cards",
			},
		],

		colors: [
			{
				id: "jet-black",
				name: "Jet Black",
				image: "https://images.unsplash.com/photo-1580481077195-c3a82da91883",
				price: 11499,
			},
			{
				id: "slate-gray",
				name: "Slate Gray",
				image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b",
				price: 11999,
			},
		],

		variants: [
			{
				id: "high-back",
				name: "High-Back with Headrest",
				price: 11499,
				originalPrice: 18999,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"Heavy-duty ergonomic high-back office chair featuring breathable mesh backrest, 3D adjustable armrests, adaptive lumbar support, and 135° recline lock.",

		description: `
		- BREATHABLE KOREAN NYLON MESH BACKREST
		- 3D MULTI-DIRECTIONAL ADJUSTABLE ARMRESTS
		- DYNAMIC 2-WAY ADAPTIVE LUMBAR SUPPORT
		- 135° MULTI-ANGLE SYNCHRO-TILT RECLINE MECHANISM
		- CLASS-4 HEAVY DUTY HYDRAULIC GAS LIFT
		- 60MM SMOOTH-ROLLING PU CASTER WHEELS
	`,

		specifications: {
			material: "High-Grade Korean Mesh & Reinforced Heavy-Duty Nylon Base",
			seating: "Molded High-Density Cold-Cured Foam Cushion",
			weightCapacity: "Supports up to 140 kg",
			dimensions: "Chair Height: 118-128cm, Seat Width: 51cm, Seat Depth: 50cm",
			color: "Jet Black",
			assembly: "DIY Kit with Tools & Step-by-Step Instruction Guide",
		},

		inStock: true,
		stock: 20,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: true,
			duration: "3 Years",
			type: "Comprehensive On-Site Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Ergonomics",
			rating: 4.8,
			totalRatings: 11420,
			verified: true,
		},

		tags: ["Office Chair", "Ergonomic Chair", "Furniture", "Work From Home", "Study Chair", "Mesh Chair"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 46 - BEAUTY / SKINCARE     The Ordinary Niacinamide Serum
	// =========================================================
	{
		id: 46,
		name: "The Ordinary Niacinamide 10% + Zinc 1% Facial Serum",
		brand: "The Ordinary",
		company: "DECIEM",
		Category: "Beauty",
		subcategory: "Skincare",
		productType: "Face Serum",

		images: [
			"https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
			"https://images.unsplash.com/photo-1556228578-8c89e6adf883",
			"https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
		],

		image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",

		rating: 4.7,
		totalRatings: 8750,
		totalReviews: 2140,

		price: 600,
		originalPrice: 750,
		discountPercentage: 20,

		offers: [
			{
				title: "Beauty Bestseller",
				description: "Buy 2 skincare essentials and get flat 10% off",
			},
			{
				title: "Bank Offer",
				description: "Extra 5% instant discount on UPI & card transactions",
			},
		],

		colors: [
			{
				id: "clear",
				name: "Clear Drop",
				image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
				price: 600,
			},
		],

		variants: [
			{
				id: "30ml",
				name: "30 ml",
				price: 600,
				originalPrice: 750,
				stock: 50,
				inStock: true,
			},
			{
				id: "60ml",
				name: "60 ml",
				price: 1050,
				originalPrice: 1300,
				stock: 30,
				inStock: true,
			},
		],

		shortDescription:
			"High-strength vitamin and mineral blemish formula with 10% pure niacinamide and 1% zinc PCA to visibly minimize pores and regulate sebum.",

		description: `
		- HIGH-STRENGTH 10% NIACINAMIDE (VITAMIN B3)
		- 1% ZINC PCA OIL-CONTROL FORMULA
		- VISIBLY MINIMIZES ENLARGED PORES
		- BALANCES VISIBLE SEBUM ACTIVITY
		- VEGAN, CRUELTY-FREE & GLUTEN-FREE
		- OIL-FREE WATER-BASED SERUM
	`,

		specifications: {
			type: "Targeted Facial Serum",
			skinType: "All Skin Types / Oily & Blemish-Prone",
			volume: "30 ml",
			keyIngredients: "10% Niacinamide, 1% Zinc PCA, Tamarindus Indica Seed Gum",
			fragrance: "Fragrance Free / Alcohol Free",
			usage: "Apply few drops morning and evening before heavier creams",
		},

		inStock: true,
		stock: 50,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: false,
			duration: "N/A",
			type: "N/A",
		},

		seller: {
			name: "ShopAll Beauty Authentic",
			rating: 4.8,
			totalRatings: 18450,
			verified: true,
		},

		tags: ["The Ordinary", "Niacinamide", "Serum", "Skincare", "Pore Minimizer", "Beauty"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 47 - BEAUTY / MAKEUP
	// =========================================================
	{
		id: 47,
		name: "Maybelline Fit Me Matte Foundation",
		brand: "Maybelline",
		company: "Maybelline New York",
		Category: "Beauty",
		subcategory: "Makeup",
		productType: "Foundation",

		images: [
			"https://m.media-amazon.com/images/I/71gnzWc8XwL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/91tTsE53tYL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81UBdZ43sfL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81sp4UZrdgL._SL1500_.jpg",	
		],

		image: "https://m.media-amazon.com/images/I/71gnzWc8XwL._SL1500_.jpg",

		rating: 4.4,
		totalRatings: 4521,
		totalReviews: 1120,

		price: 549,
		originalPrice: 699,
		discountPercentage: 21,

		offers: [
			{
				title: "Beauty Deal",
				description: "Save on selected makeup products",
			},
			{
				title: "Bank Offer",
				description: "Extra discount with selected cards",
			},
		],

		variants: [
			{
				id: "30ml",
				name: "30 ml",
				price: 549,
				originalPrice: 699,
				stock: 50,
				inStock: true,
			},
		],

		shortDescription:
			"Matte foundation offering natural-looking coverage with a lightweight finish.",

		description: `
		- MATTE FINISH
		- NATURAL COVERAGE
		- LIGHTWEIGHT FORMULA
		- OIL CONTROL
		- LONG LASTING
	`,

		specifications: {
			type: "Liquid Foundation",
			finish: "Matte",
			coverage: "Medium",
			volume: "30 ml",
			skinType: "Normal to Oily",
			usage: "Face",
		},

		inStock: true,
		stock: 50,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: false,
			duration: "N/A",
			type: "N/A",
		},

		seller: {
			name: "ShopAll Beauty",
			rating: 4.6,
			totalRatings: 5432,
			verified: true,
		},

		tags: ["Makeup", "Foundation", "Maybelline", "Beauty"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 48 - SPORTS / FITNESS
	// =========================================================
	{
		id: 48,
		name: "Decathlon Adjustable Dumbbell Set",
		brand: "Decathlon",
		company: "Decathlon",
		Category: "Sports & Toys",
		subcategory: "Fitness",
		productType: "Dumbbell Set",

		images: [
			"https://m.media-amazon.com/images/I/513RlxjHhTL._SL1024_.jpg",
			"https://m.media-amazon.com/images/I/61Z2fv0UChL._SL1122_.jpg",
			"https://m.media-amazon.com/images/I/71rlYorp4lL._SL1112_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/513RlxjHhTL._SL1024_.jpg",

		rating: 4.5,
		totalRatings: 2165,
		totalReviews: 512,

		price: 4999,
		originalPrice: 6999,
		discountPercentage: 29,

		offers: [
			{
				title: "Fitness Offer",
				description: "Special discount on fitness equipment",
			},
			{
				title: "Bank Offer",
				description: "Extra discount on selected bank cards",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/513RlxjHhTL._SL1024_.jpg",
				price: 4999,
			},
		],

		variants: [
			{
				id: "10kg",
				name: "10 kg Set",
				price: 3999,
				originalPrice: 3999,
				stock: 30,
				inStock: true,
			},
			{
				id: "20kg",
				name: "20 kg Set",
				price: 4999,
				originalPrice: 6999,
				stock: 20,
				inStock: true,
			},
			{
				id: "30kg",
				name: "30 kg Set",
				price: 6999,
				originalPrice: 8999,
				stock: 12,
				inStock: true,
			},
		],

		shortDescription:
			"Adjustable dumbbell set for strength training and home workouts.",

		description: `
		- ADJUSTABLE WEIGHTS
		- DURABLE CONSTRUCTION
		- HOME WORKOUT FRIENDLY
		- EASY STORAGE
		- MULTIPLE WEIGHT LEVELS
	`,

		specifications: {
			type: "Adjustable Dumbbell",
			material: "Cast Iron",
			totalWeight: "20 kg",
			grip: "Ergonomic",
			usage: "Strength Training",
		},

		inStock: true,
		stock: 20,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Sports",
			rating: 4.6,
			totalRatings: 6532,
			verified: true,
		},

		tags: ["Fitness", "Dumbbells", "Workout", "Gym"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 49 - SPORTS / CYCLING
	// =========================================================
	{
		id: 49,
		name: "Mountain Trail Bicycle",
		brand: "Sunspeed",
		company: "Sunspeed",
		Category: "Sports & Toys",
		subcategory: "Cycling",
		productType: "Mountain Bike",

		images: [
			"https://m.media-amazon.com/images/I/710FBlEp+AL._SL1254_.jpg",
			"https://m.media-amazon.com/images/I/71TXDAO61OL._SL1254_.jpg",
			"https://m.media-amazon.com/images/I/51+u8RdDmJL.jpg",
		],

		image: "https://m.media-amazon.com/images/I/710FBlEp+AL._SL1254_.jpg",

		rating: 4.5,
		totalRatings: 1854,
		totalReviews: 421,

		price: 24999,
		originalPrice: 29999,
		discountPercentage: 17,

		offers: [
			{
				title: "Sports Offer",
				description: "Special savings on cycling equipment",
			},
			{
				title: "Bank Offer",
				description: "Additional discount on selected cards",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://m.media-amazon.com/images/I/710FBlEp+AL._SL1254_.jpg",
				price: 24999,
			},
			{
				id: "white",
				name: "	White",
				image: "https://m.media-amazon.com/images/I/61DYS5oov9L._SL1254_.jpg",
				price: 24999,
			},
		],

		variants: [
			{
				id: "27",
				name: "27 Speed",
				price: 24999,
				originalPrice: 29999,
				stock: 10,
				inStock: true,
			},
		],

		shortDescription:
			"Mountain bicycle built for comfortable city rides and adventurous trails.",

		description: `
		- LIGHTWEIGHT FRAME
		- FRONT SUSPENSION
		- DISC BRAKES
		- MULTI-SPEED GEARS
		- OFF-ROAD TYRES
	`,

		specifications: {
			frame: "Aluminium Alloy",
			wheelSize: "27.5 inches",
			gears: "21 Speed",
			brakes: "Disc Brakes",
			suspension: "Front Suspension",
			usage: "Mountain and City",
		},

		inStock: true,
		stock: 10,

		delivery: {
			freeDelivery: true,
			deliveryDays: "5-8 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Sports",
			rating: 4.6,
			totalRatings: 6532,
			verified: true,
		},

		tags: ["Bicycle", "Mountain Bike", "Cycling", "Sports"],

		isFeatured: true,
		isBestSeller: false,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 50 - BOOKS / FICTION
	// =========================================================
	{
		id: 50,
		name: "The Silent Patient",
		brand: "Celadon Books",
		company: "Macmillan Publishers",
		Category: "Books",
		subcategory: "Fiction",
		productType: "Novel",

		images: [
			"https://m.media-amazon.com/images/I/81JJPDNlxSL._SY522_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/81JJPDNlxSL._SY522_.jpg",

		rating: 4.6,
		totalRatings: 8621,
		totalReviews: 2450,

		price: 399,
		originalPrice: 599,
		discountPercentage: 33,

		offers: [
			{
				title: "Book Deal",
				description: "Special discount on selected books",
			},
			{
				title: "Combo Offer",
				description: "Buy selected books together and save more",
			},
		],

		variants: [
			{
				id: "paperback",
				name: "Paperback",
				price: 399,
				originalPrice: 599,
				stock: 45,
				inStock: true,
			},
			{
				id: "hardcover",
				name: "Hardcover",
				price: 799,
				originalPrice: 999,
				stock: 15,
				inStock: true,
			},
		],

		shortDescription:
			"A gripping psychological thriller filled with mystery, suspense and unexpected twists.",

		description: `
		- PSYCHOLOGICAL THRILLER
		- MYSTERY
		- SUSPENSE
		- PAPERBACK EDITION
		- ENGAGING STORY
	`,

		specifications: {
			author: "Alex Michaelides",
			publisher: "Celadon Books",
			language: "English",
			pages: "336",
			format: "Paperback",
			genre: "Psychological Thriller",
		},

		inStock: true,
		stock: 45,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: false,
			duration: "N/A",
			type: "N/A",
		},

		seller: {
			name: "ShopAll Books",
			rating: 4.7,
			totalRatings: 6432,
			verified: true,
		},

		tags: ["Book", "Fiction", "Thriller", "Novel"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 51 - BOOKS / ACADEMIC
	// =========================================================
	{
		id: 51,
		name: "Clean Code",
		brand: "Pearson",
		company: "Pearson",
		Category: "Books",
		subcategory: "Academic",
		productType: "Programming Book",

		images: [
			"https://m.media-amazon.com/images/I/81Rnac2Fq+L._AC_UF1000,1000_QL80_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/81Rnac2Fq+L._AC_UF1000,1000_QL80_.jpg",

		rating: 4.8,
		totalRatings: 12842,
		totalReviews: 4215,

		price: 699,
		originalPrice: 999,
		discountPercentage: 30,

		offers: [
			{
				title: "Student Offer",
				description: "Special pricing on selected academic books",
			},
			{
				title: "Book Deal",
				description: "Limited-time discount",
			},
		],


		variants: [
			{
				id: "paperback",
				name: "Paperback",
				price: 699,
				originalPrice: 999,
				stock: 60,
				inStock: true,
			},
		],

		shortDescription:
			"A practical guide to writing clean, readable and maintainable software code.",

		description: `
		- SOFTWARE DEVELOPMENT
		- CLEAN CODE PRINCIPLES
		- OBJECT ORIENTED DESIGN
		- CODE QUALITY
		- BEST PRACTICES
	`,

		specifications: {
			author: "Robert C. Martin",
			publisher: "Pearson",
			language: "English",
			pages: "464",
			format: "Paperback",
			genre: "Programming",
		},

		inStock: true,
		stock: 60,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: false,
			duration: "N/A",
			type: "N/A",
		},

		seller: {
			name: "ShopAll Books",
			rating: 4.7,
			totalRatings: 6432,
			verified: true,
		},

		tags: ["Programming", "Coding", "Computer Science", "Academic"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 52 - ACCESSORIES / SUNGLASSES    Oakley Holbrook Polarized
	// =========================================================
	{
		id: 52,
		name: "Oakley Holbrook Polarized Square Sunglasses",
		brand: "Oakley",
		company: "Luxottica",
		Category: "Accessories",
		subcategory: "Sunglasses",
		productType: "Sunglasses",

		images: [
			"https://images.unsplash.com/photo-1511499767150-a48a237f0083",
			"https://images.unsplash.com/photo-1572635196237-14b3f281503f",
			"https://images.unsplash.com/photo-1517142089942-ba376ce32a2e",
		],

		image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",

		rating: 4.8,
		totalRatings: 4950,
		totalReviews: 1120,

		price: 9590,
		originalPrice: 11990,
		discountPercentage: 20,

		offers: [
			{
				title: "Eyewear Deal",
				description: "Flat ₹2,400 off + Free protective hard zipper case",
			},
			{
				title: "Bank Offer",
				description: "10% instant discount on selected premium cards",
			},
		],

		colors: [
			{
				id: "matte-black-prizm",
				name: "Matte Black / Prizm Black Polarized",
				image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
				price: 9590,
			},
			{
				id: "woodgrain-tungsten",
				name: "Woodgrain / Prizm Tungsten Polarized",
				image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
				price: 9990,
			},
		],

		variants: [
			{
				id: "57mm",
				name: "57mm (Standard Fit)",
				price: 9590,
				originalPrice: 11990,
				stock: 25,
				inStock: true,
			},
		],

		shortDescription:
			"Timeless classic design fused with modern Oakley technology. Featuring metal rivets and iconic O icons for high performance and daily style.",

		description: `
		- LIGHTWEIGHT O-MATTER FRAME MATERIAL
		- 4 BASE LENS GEOMETRY WITH HDO OPTICS
		- PRIZM POLARIZED LENSES FOR MAXIMUM CONTRAST
		- 100% UVA, UVB, UVC & HARMFUL BLUE LIGHT PROTECTION
		- SIGNATURE METAL SQUARE O ICON ACCENTS
		- IMPACT-RESISTANT PLUTONITE LENS
	`,

		specifications: {
			frameMaterial: "Lightweight O-Matter Stress-Resistant Thermoplastic",
			lensMaterial: "Plutonite Polycarbonate",
			lensType: "Prizm Polarized",
			uvProtection: "100% UV Protection (UV400)",
			frameShape: "Square Wayfarer",
			gender: "Unisex",
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Premium Eyewear",
			rating: 4.8,
			totalRatings: 9820,
			verified: true,
		},

		tags: ["Oakley", "Holbrook", "Sunglasses", "Polarized", "Prizm", "Eyewear", "Sport"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 53 - AUTOMOTIVE / CAR ACCESSORIES
	// =========================================================
	{
		id: 53,
		name: "Car Dashboard Phone Holder",
		brand: "Portronics",
		company: "Portronics",
		Category: "Automotive",
		subcategory: "Car Accessories",
		productType: "Phone Holder",

		images: [
			"https://m.media-amazon.com/images/I/71V-4bzOpuL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71IsHc8lEQL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71RLYPdBIWL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71rk9xKDnzL._SL1500_.jpg",

		rating: 4.3,
		totalRatings: 2841,
		totalReviews: 625,

		price: 699,
		originalPrice: 999,
		discountPercentage: 30,

		offers: [
			{
				title: "Car Accessory Deal",
				description: "Special discount on selected car accessories",
			},
			{
				title: "Bank Offer",
				description: "Extra discount with selected cards",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
				price: 699,
			},
		],


		shortDescription:
			"Adjustable dashboard phone holder designed for secure and convenient driving.",

		description: `
		- 360° ROTATION
		- STRONG GRIP
		- ONE-HAND OPERATION
		- ADJUSTABLE VIEWING ANGLE
		- EASY INSTALLATION
	`,

		specifications: {
			material: "ABS Plastic",
			rotation: "360 Degrees",
			mountType: "Dashboard",
			compatibility: "Most Smartphones",
			color: "Black",
		},

		inStock: true,
		stock: 50,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Auto",
			rating: 4.5,
			totalRatings: 4521,
			verified: true,
		},

		tags: ["Car", "Phone Holder", "Automotive", "Accessory"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 54 - AUTOMOTIVE / CAR ELECTRONICS           Garmin Dash Cam Mini 2
	// =========================================================
	{
		id: 54,
		name: "Garmin Dash Cam Mini 2 Voice-Controlled Car Camera",
		brand: "Garmin",
		company: "Garmin",
		Category: "Automotive",
		subcategory: "Car Electronics",
		productType: "Dash Camera",

		images: [
			"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
			"https://images.unsplash.com/photo-1502877338535-766e1452684a",
			"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
		],

		image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",

		rating: 4.7,
		totalRatings: 3410,
		totalReviews: 780,

		price: 11990,
		originalPrice: 14990,
		discountPercentage: 20,

		offers: [
			{
				title: "Automotive Festival",
				description: "Flat ₹3,000 off + Free 64GB High-Endurance MicroSD card",
			},
			{
				title: "Bank Offer",
				description: "Instant discount on selected credit cards",
			},
		],

		colors: [
			{
				id: "matte-black",
				name: "Matte Black Stealth",
				image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
				price: 11990,
			},
		],

		variants: [
			{
				id: "1080p-stealth",
				name: "1080p HD Stealth Edition",
				price: 11990,
				originalPrice: 14990,
				stock: 25,
				inStock: true,
			},
		],

		shortDescription:
			"Key-sized car camera with 1080p HDR video, 140-degree wide field of view, voice control, and automatic incident detection.",

		description: `
		- ULTRA-COMPACT CAR KEY-SIZED STEALTH DESIGN
		- CRISP 1080P FULL HD WITH GARMIN CLARITY HDR OPTICS
		- 140° WIDE-ANGLE FIELD OF VIEW
		- HANDS-FREE VOICE CONTROL COMMANDS ("OK GARMIN")
		- AUTOMATIC G-SENSOR INCIDENT DETECTION
		- LIVE VIEW MONITORING VIA GARMIN DRIVE APP
	`,

		specifications: {
			video: "1080p Full HD HDR (30 FPS)",
			fieldOfView: "140 Degrees Diagonal",
			nightVision: "Garmin Clarity HDR Low-Light Optimization",
			storage: "MicroSD (Up to 512GB, Class 10 Required)",
			connectivity: "Wi-Fi & Bluetooth",
			power: "Dual USB Power Adapter with Long Run Cable",
		},

		inStock: true,
		stock: 25,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-4 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Automotive",
			rating: 4.8,
			totalRatings: 12400,
			verified: true,
		},

		tags: ["Garmin", "Dash Cam", "Car Camera", "Car Electronics", "Voice Control", "Security"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true,
	},

	// =========================================================
	// 55 - BABY & KIDS / BABY GEAR
	// =========================================================
	{
		id: 55,
		name: "Baby Stroller Travel System",
		brand: "R for Rabbit",
		company: "R for Rabbit",
		Category: "Baby & Kids",
		subcategory: "Baby Gear",
		productType: "Baby Stroller",

		images: [
			"https://m.media-amazon.com/images/I/61EbAJTrWnL._SL1024_.jpg",
			"https://m.media-amazon.com/images/I/718WthhmDtL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71OKRXfYKoL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61EbAJTrWnL._SL1024_.jpg",

		rating: 4.5,
		totalRatings: 1854,
		totalReviews: 432,

		price: 6999,
		originalPrice: 9999,
		discountPercentage: 30,

		offers: [
			{
				title: "Baby Care Offer",
				description: "Special discount on baby essentials",
			},
			{
				title: "Bank Offer",
				description: "Additional discount on selected cards",
			},
		],


		variants: [
			{
				id: "standard",
				name: "Standard",
				price: 6999,
				originalPrice: 9999,
				stock: 15,
				inStock: true,
			},
		],

		shortDescription:
			"Comfortable baby stroller with reclining seat, safety harness and compact folding.",

		description: `
		- MULTI-POSITION RECLINE
		- FIVE-POINT SAFETY HARNESS
		- SUN CANOPY
		- EASY FOLDING
		- STORAGE BASKET
	`,

		specifications: {
			type: "Baby Stroller",
			ageRange: "6 Months - 4 Years",
			frame: "Metal",
			harness: "5 Point",
			folding: "Compact Fold",
			wheels: "360° Front Wheels",
		},

		inStock: true,
		stock: 15,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-6 days",
		},

		warranty: {
			available: true,
			duration: "1 Year",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Kids",
			rating: 4.6,
			totalRatings: 3215,
			verified: true,
		},

		tags: ["Baby", "Stroller", "Kids", "Baby Gear"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 56 - BABY & KIDS / TOYS
	// =========================================================
	{
		id: 56,
		name: "LEGO Classic Creative Building Set",
		brand: "LEGO",
		company: "LEGO",
		Category: "Baby & Kids",
		subcategory: "Kids Toys",
		productType: "Building Toy",

		images: [
			"https://m.media-amazon.com/images/I/91D-emQ8bVL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71hyEbpzIkL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71yb-gZAZIL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81D-fI-BOlL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/91D-emQ8bVL._SL1500_.jpg",

		rating: 4.8,
		totalRatings: 5321,
		totalReviews: 1452,

		price: 1499,
		originalPrice: 1999,
		discountPercentage: 25,

		offers: [
			{
				title: "Toy Offer",
				description: "Special discount on selected toys",
			},
			{
				title: "Combo Offer",
				description: "Save more when buying selected LEGO sets",
			},
		],

		colors: [
			{
				id: "multicolor",
				name: "Multicolor",
				image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
				price: 1499,
			},
		],

		variants: [
			{
				id: "classic",
				name: "Classic Set",
				price: 1499,
				originalPrice: 1999,
				stock: 35,
				inStock: true,
			},
		],

		shortDescription:
			"Creative LEGO building set with colorful bricks for imaginative play.",

		description: `
		- COLORFUL BUILDING BRICKS
		- CREATIVE PLAY
		- STEM LEARNING
		- MULTIPLE BUILDING IDEAS
		- SAFE FOR CHILDREN
	`,

		specifications: {
			brand: "LEGO",
			pieces: "Several Pieces",
			ageRange: "4+ Years",
			material: "Plastic",
			color: "Multicolor",
			type: "Building Toy",
		},

		inStock: true,
		stock: 35,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: false,
			duration: "N/A",
			type: "N/A",
		},

		seller: {
			name: "ShopAll Kids",
			rating: 4.6,
			totalRatings: 3215,
			verified: true,
		},

		tags: ["LEGO", "Toys", "Building", "Kids"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 57 - FOOD & GROCERY / SNACKS
	// =========================================================
	{
		id: 57,
		name: "Premium Mixed Nuts",
		brand: "Happilo",
		company: "Happilo",
		Category: "Food & Grocery",
		subcategory: "Snacks",
		productType: "Dry Fruits",

		images: [
			"https://m.media-amazon.com/images/I/71nSvTPdIXL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71MdjOTYfbL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/91J+NMOnBOL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71nSvTPdIXL._SL1500_.jpg",

		rating: 4.5,
		totalRatings: 6421,
		totalReviews: 1685,

		price: 699,
		originalPrice: 899,
		discountPercentage: 22,

		offers: [
			{
				title: "Grocery Offer",
				description: "Special discount on selected grocery products",
			},
			{
				title: "Combo Offer",
				description: "Save more on selected food combos",
			},
		],

		variants: [
			{
				id: "500g",
				name: "500 g",
				price: 699,
				originalPrice: 899,
				stock: 60,
				inStock: true,
			},
			{
				id: "1kg",
				name: "1 kg",
				price: 1299,
				originalPrice: 1599,
				stock: 40,
				inStock: true,
			},
		],

		shortDescription:
			"Premium mixed nuts packed with almonds, cashews, raisins and other nutritious dry fruits.",

		description: `
		- PREMIUM QUALITY NUTS
		- RICH IN PROTEIN
		- NO ADDED PRESERVATIVES
		- FRESHLY PACKED
		- READY TO EAT
	`,

		specifications: {
			type: "Mixed Dry Fruits",
			weight: "500 g",
			ingredients: "Almonds, Cashews, Raisins",
			storage: "Store in a Cool Dry Place",
			vegetarian: true,
		},

		inStock: true,
		stock: 60,

		delivery: {
			freeDelivery: true,
			deliveryDays: "1-3 days",
		},

		warranty: {
			available: false,
			duration: "N/A",
			type: "N/A",
		},

		seller: {
			name: "ShopAll Grocery",
			rating: 4.6,
			totalRatings: 8215,
			verified: true,
		},

		tags: ["Dry Fruits", "Snacks", "Healthy", "Nuts"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 58 - HEALTH / FITNESS & NUTRITION
	// =========================================================
	{
		id: 58,
		name: "Protein Whey Powder",
		brand: "Optimum Nutrition",
		company: "Optimum Nutrition",
		Category: "Health",
		subcategory: "Fitness & Nutrition",
		productType: "Whey Protein",

		images: [
			"https://m.media-amazon.com/images/I/71aaVOEsHLL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71fTsAhA7cL._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/716FEygwIcL._SL1500_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71aaVOEsHLL._SL1500_.jpg",

		rating: 4.6,
		totalRatings: 9542,
		totalReviews: 2610,

		price: 5499,
		originalPrice: 6999,
		discountPercentage: 21,

		offers: [
			{
				title: "Fitness Offer",
				description: "Special discount on fitness nutrition products",
			},
			{
				title: "Bank Offer",
				description: "Extra discount on selected cards",
			},
		],

		colors: [
			{
				id: "chocolate",
				name: "Chocolate",
				image: "https://m.media-amazon.com/images/I/71aaVOEsHLL._SL1500_.jpg",
				price: 5499,
			},
			{
				id: "vanilla",
				name: "Vanilla",
				image: "https://m.media-amazon.com/images/I/71IXRYpoYcL._SL1500_.jpg",
				price: 5499,
			},
		],

		variants: [
			{
				id: "1kg",
				name: "1 kg",
				price: 5499,
				originalPrice: 6999,
				stock: 35,
				inStock: true,
			},
			{
				id: "2kg",
				name: "2 kg",
				price: 8999,
				originalPrice: 10999,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"High-quality whey protein powder designed to support daily protein intake and muscle recovery.",

		description: `
		- HIGH PROTEIN CONTENT
		- FAST ABSORPTION
		- SUPPORTS MUSCLE RECOVERY
		- GREAT TASTE
		- EASY TO MIX
	`,

		specifications: {
			type: "Whey Protein",
			weight: "1 kg",
			flavor: "Chocolate",
			proteinPerServing: "24 g",
			servings: "30",
			usage: "Fitness Nutrition",
		},

		inStock: true,
		stock: 35,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: false,
			duration: "N/A",
			type: "N/A",
		},

		seller: {
			name: "ShopAll Health",
			rating: 4.6,
			totalRatings: 5215,
			verified: true,
		},

		tags: ["Protein", "Fitness", "Nutrition", "Whey"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 59 - PET SUPPLIES / DOG SUPPLIES
	// =========================================================
	{
		id: 59,
		name: "Premium Adjustable Dog Harness",
		brand: "PawSafe",
		company: "PawSafe",
		Category: "Pet Supplies",
		subcategory: "Dog Supplies",
		productType: "Dog Harness",

		images: [
			"https://m.media-amazon.com/images/I/61ig74YCcBL._SL1254_.jpg",
			"https://m.media-amazon.com/images/I/71bO5uQUOsL._SL1254_.jpg",
			"https://m.media-amazon.com/images/I/71SIeBUIEhL._SL1254_.jpg",
			"https://m.media-amazon.com/images/I/61bZjh2td4L._SL1285_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/61ig74YCcBL._SL1254_.jpg",

		rating: 4.5,
		totalRatings: 1542,
		totalReviews: 365,

		price: 999,
		originalPrice: 1499,
		discountPercentage: 33,

		offers: [
			{
				title: "Pet Offer",
				description: "Special discount on pet accessories",
			},
			{
				title: "Bank Offer",
				description: "Extra discount with selected cards",
			},
		],

		colors: [
			{
				id: "black",
				name: "Black",
				image: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
				price: 999,
			},
		],

		variants: [
			{
				id: "s",
				name: "Small",
				price: 999,
				originalPrice: 1499,
				stock: 25,
				inStock: true,
			},
			{
				id: "m",
				name: "Medium",
				price: 999,
				originalPrice: 1499,
				stock: 30,
				inStock: true,
			},
			{
				id: "l",
				name: "Large",
				price: 1099,
				originalPrice: 1599,
				stock: 20,
				inStock: true,
			},
		],

		shortDescription:
			"Comfortable adjustable dog harness with breathable padding and secure buckles.",

		description: `
		- BREATHABLE MATERIAL
		- ADJUSTABLE STRAPS
		- SECURE BUCKLE
		- REFLECTIVE DETAILS
		- COMFORTABLE FIT
	`,

		specifications: {
			material: "Nylon",
			type: "Dog Harness",
			adjustable: "Yes",
			reflection: "Yes",
			usage: "Walking and Outdoor",
			color: "Black",
		},

		inStock: true,
		stock: 30,

		delivery: {
			freeDelivery: true,
			deliveryDays: "2-5 days",
		},

		warranty: {
			available: true,
			duration: "6 Months",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Pets",
			rating: 4.6,
			totalRatings: 3214,
			verified: true,
		},

		tags: ["Dog", "Pet", "Harness", "Pet Supplies"],

		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 60 - WATCHES / LUXURY WATCHES
	// =========================================================
	{
		id: 60,
		name: "Fossil Men's Chronograph Watch",
		brand: "Fossil",
		company: "Fossil Group",
		Category: "Watches",
		subcategory: "Luxury Watches",
		productType: "Analog Watch",

		images: [
			"https://m.media-amazon.com/images/I/71VqwTO4efL._SX679_.jpg",
			"https://m.media-amazon.com/images/I/61Xwuv7aAeL._SX679_.jpg",
			"https://m.media-amazon.com/images/I/31mgFND5fkL.jpg",
			"https://m.media-amazon.com/images/I/71+30rBcoCL._SX679_.jpg",
		],

		image: "https://m.media-amazon.com/images/I/71VqwTO4efL._SX679_.jpg",

		rating: 4.6,
		totalRatings: 4218,
		totalReviews: 1054,

		price: 8999,
		originalPrice: 12999,
		discountPercentage: 31,

		offers: [
			{
				title: "Watch Offer",
				description: "Special discount on selected watches",
			},
			{
				title: "Bank Offer",
				description: "Extra discount on selected cards",
			},
			{
				title: "Gift Packaging",
				description: "Complimentary gift packaging available",
			},
		],

		colors: [
			{
				id: "silver",
				name: "Silver",
				image: "https://m.media-amazon.com/images/I/71VqwTO4efL._SX679_.jpg",
				price: 8999,
			},
			{
				id: "black",
				name: "Black",
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8VmgdFQfqZ4-VHwKn62COba5Ego8oLONZxXWCGbQ1w&s=10",
				price: 8999,
			},
		],

		variants: [
			{
				id: "steel",
				name: "Stainless Steel",
				price: 8999,
				originalPrice: 12999,
				stock: 18,
				inStock: true,
			},
			{
				id: "leather",
				name: "Leather Strap",
				price: 9499,
				originalPrice: 13999,
				stock: 12,
				inStock: true,
			},
		],

		shortDescription:
			"Premium Fossil chronograph watch with a classic design and durable stainless-steel construction.",

		description: `
		- CLASSIC CHRONOGRAPH DESIGN
		- STAINLESS STEEL CASE
		- PREMIUM STRAP
		- WATER RESISTANT
		- PRECISION QUARTZ MOVEMENT
		- ELEGANT EVERYDAY STYLE
	`,

		specifications: {
			movement: "Quartz",
			caseSize: "44mm",
			caseMaterial: "Stainless Steel",
			strapMaterial: "Leather",
			waterResistance: "5 ATM",
			display: "Analog",
		},

		inStock: true,
		stock: 18,

		delivery: {
			freeDelivery: true,
			deliveryDays: "3-5 days",
		},

		warranty: {
			available: true,
			duration: "2 Years",
			type: "Manufacturer Warranty",
		},

		seller: {
			name: "ShopAll Watches",
			rating: 4.7,
			totalRatings: 6125,
			verified: true,
		},

		tags: ["Fossil", "Watch", "Chronograph", "Luxury"],

		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false,
	},

	// =========================================================
	// 61 - ELECTRONICS / MOBILES
	// =========================================================
	{
		id: 61,
		name: "Google Pixel 9 Pro XL 5G Smartphone",
		brand: "Google",
		company: "Google LLC",
		Category: "Electronics",
		subcategory: "Mobiles",
		productType: "Smartphone",
		images: [
				"https://images.unsplash.com/photo-1598327105666-5b89351aff97",
				"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
				"https://images.unsplash.com/photo-1580910051074-3eb694886505"
		],
		image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
		rating: 4.7,
		totalRatings: 3840,
		totalReviews: 890,
		price: 124999,
		originalPrice: 129999,
		discountPercentage: 4,
		offers: [
				{
						title: "Bank Offer",
						description: "Flat ₹10,000 instant discount on HDFC Bank Cards"
				},
				{
						title: "Exchange Bonus",
						description: "Up to ₹8,000 extra on smartphone trade-in"
				}
		],
		colors: [
				{
						id: "obsidian",
						name: "Obsidian Black",
						image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
						price: 124999
				},
				{
						id: "porcelain",
						name: "Porcelain White",
						image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
						price: 124999
				},
				{
						id: "hazel",
						name: "Hazel",
						image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
						price: 124999
				}
		],
		variants: [
				{
						id: "128gb",
						name: "16GB RAM + 128GB",
						price: 124999,
						originalPrice: 129999,
						stock: 20,
						inStock: true
				},
				{
						id: "256gb",
						name: "16GB RAM + 256GB",
						price: 139999,
						originalPrice: 144999,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Google Pixel 9 Pro XL featuring Google Tensor G4, Gemini AI integrated camera system and Super Actua OLED display.",
		description: "- GOOGLE TENSOR G4 WITH ADVANCED GEMINI AI\n- 6.8-INCH SUPER ACTUA 120HZ LTPO OLED\n- 50MP PRO TRIPLE REAR CAMERA WITH 30X SUPER RES ZOOM\n- ALL-DAY BATTERY WITH 45W FAST CHARGE\n- 7 YEARS OF OS & SECURITY UPDATES",
		specifications: {
				display: {
						size: "6.8 inch",
						type: "LTPO OLED 120Hz",
						refreshRate: "1-120Hz"
				},
				processor: {
						name: "Google Tensor G4 Titan M2"
				},
				camera: {
						rear: "50MP Main + 48MP Ultrawide + 48MP Telephoto",
						front: "42MP Dual PD Selfie"
				},
				battery: {
						type: "5060 mAh",
						charging: "45W Wired & Wireless Fast Charge"
				},
				operatingSystem: "Android 15",
				connectivity: [
						"5G",
						"Wi-Fi 7",
						"Bluetooth 5.3",
						"NFC",
						"Ultra-Wideband"
				]
		},
		inStock: true,
		stock: 20,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-3 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Google Manufacturer Warranty"
		},
		seller: {
				name: "Google Official Store",
				rating: 4.8,
				totalRatings: 24500,
				verified: true
		},
		tags: [
				"Google",
				"Pixel 9 Pro XL",
				"Gemini AI",
				"Smartphone",
				"5G",
				"Flagship"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 62 - ELECTRONICS / LAPTOPS
	// =========================================================
	{
		id: 62,
		name: "ASUS ROG Zephyrus G16 OLED Gaming Laptop",
		brand: "ASUS ROG",
		company: "ASUSTeK Computer Inc.",
		Category: "Electronics",
		subcategory: "Laptops",
		productType: "Gaming Laptop",
		images: [
				"https://images.unsplash.com/photo-1603302576837-37561b2e2302",
				"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
				"https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
		],
		image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
		rating: 4.9,
		totalRatings: 2150,
		totalReviews: 460,
		price: 189990,
		originalPrice: 219990,
		discountPercentage: 14,
		offers: [
				{
						title: "Gaming Bundle",
						description: "Free ROG Impact Gaming Mouse & Backpack included"
				},
				{
						title: "No Cost EMI",
						description: "Up to 12 months No Cost EMI on leading cards"
				}
		],
		colors: [
				{
						id: "eclipse-gray",
						name: "Eclipse Gray",
						image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
						price: 189990
				},
				{
						id: "platinum-white",
						name: "Platinum White",
						image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
						price: 194990
				}
		],
		variants: [
				{
						id: "rtx4070",
						name: "Core Ultra 9 / 32GB / 1TB / RTX 4070",
						price: 189990,
						originalPrice: 219990,
						stock: 12,
						inStock: true
				},
				{
						id: "rtx4080",
						name: "Core Ultra 9 / 32GB / 2TB / RTX 4080",
						price: 239990,
						originalPrice: 269990,
						stock: 8,
						inStock: true
				}
		],
		shortDescription: "Ultra-slim CNC aluminum gaming laptop with 2.5K 240Hz ROG Nebula OLED display and NVIDIA RTX 4070 graphics.",
		description: "- INTEL CORE ULTRA 9 185H AI PROCESSOR\n- NVIDIA GEFORCE RTX 4070 8GB GDDR6 GRAPHICS\n- 16-INCH 2.5K (2560X1600) 240HZ 0.2MS ROG NEBULA OLED\n- ROG INTELLIGENT COOLING WITH TRI-FAN & VAPOR CHAMBER\n- PREMIUM 6-SPEAKER SYSTEM WITH DUAL FORCE WOOFER",
		specifications: {
				display: {
						size: "16 inch 2.5K OLED",
						type: "ROG Nebula OLED 240Hz 0.2ms",
						refreshRate: "240Hz"
				},
				processor: {
						name: "Intel Core Ultra 9 185H (16 Cores, 22 Threads)"
				},
				camera: {
						rear: "N/A",
						front: "1080p FHD IR Camera with Windows Hello"
				},
				battery: {
						type: "90WHr 4-Cell Li-ion",
						charging: "240W Fast AC Adapter / 100W Type-C"
				},
				operatingSystem: "Windows 11 Home",
				connectivity: [
						"Thunderbolt 4",
						"HDMI 2.1",
						"Wi-Fi 7",
						"Bluetooth 5.4",
						"SD Card Reader"
				]
		},
		inStock: true,
		stock: 12,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "On-site Manufacturer Warranty"
		},
		seller: {
				name: "ROG Gaming Zone",
				rating: 4.9,
				totalRatings: 18900,
				verified: true
		},
		tags: [
				"ASUS ROG",
				"Zephyrus G16",
				"Gaming Laptop",
				"RTX 4070",
				"OLED",
				"240Hz"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 63 - ELECTRONICS / TABLETS
	// =========================================================
	{
		id: 63,
		name: "Samsung Galaxy Tab S9 Ultra 5G (14.6-inch)",
		brand: "Samsung",
		company: "Samsung Electronics",
		Category: "Electronics",
		subcategory: "Tablets",
		productType: "Tablet",
		images: [
				"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
				"https://images.unsplash.com/photo-1561154464-82e9adf32764",
				"https://images.unsplash.com/photo-1589739900243-4b52cd9b104e"
		],
		image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
		rating: 4.8,
		totalRatings: 2750,
		totalReviews: 610,
		price: 108999,
		originalPrice: 122999,
		discountPercentage: 11,
		offers: [
				{
						title: "S Pen Included",
						description: "IP68 water-resistant S Pen bundled in box"
				},
				{
						title: "Bank Offer",
						description: "Extra ₹9,000 instant discount on Axis & ICICI cards"
				}
		],
		colors: [
				{
						id: "graphite",
						name: "Graphite",
						image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
						price: 108999
				},
				{
						id: "beige",
						name: "Beige",
						image: "https://images.unsplash.com/photo-1561154464-82e9adf32764",
						price: 108999
				}
		],
		variants: [
				{
						id: "256gb-wifi-5g",
						name: "12GB RAM + 256GB (5G + Wi-Fi)",
						price: 108999,
						originalPrice: 122999,
						stock: 16,
						inStock: true
				},
				{
						id: "512gb-wifi-5g",
						name: "12GB RAM + 512GB (5G + Wi-Fi)",
						price: 119999,
						originalPrice: 135999,
						stock: 10,
						inStock: true
				}
		],
		shortDescription: "Gigantic 14.6-inch Dynamic AMOLED 2X Android tablet with Snapdragon 8 Gen 2, S-Pen and IP68 water resistance.",
		description: "- 14.6-INCH DYNAMIC AMOLED 2X 120HZ HDR10+ DISPLAY\n- SNAPDRAGON 8 GEN 2 FOR GALAXY FLAGSHIP SOC\n- INBOX IP68 WATER & DUST RESISTANT S PEN WITH ULTRA-LOW LATENCY\n- MASSIVE 11,200MAH BATTERY WITH 45W SUPER FAST CHARGING\n- SAMSUNG DEX DESKTOP WORKSPACE MODE",
		specifications: {
				display: {
						size: "14.6 inch",
						type: "Dynamic AMOLED 2X (2960x1848)",
						refreshRate: "120Hz"
				},
				processor: {
						name: "Qualcomm Snapdragon 8 Gen 2 for Galaxy"
				},
				camera: {
						rear: "13MP Wide + 8MP Ultrawide",
						front: "12MP Wide + 12MP Ultrawide Dual Front"
				},
				battery: {
						type: "11,200 mAh",
						charging: "45W Fast Wired Charging"
				},
				operatingSystem: "Android 14 (One UI 6.1)",
				connectivity: [
						"5G Sub-6",
						"Wi-Fi 6E",
						"Bluetooth 5.3",
						"USB Type-C 3.2"
				]
		},
		inStock: true,
		stock: 16,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-3 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Samsung Manufacturer Warranty"
		},
		seller: {
				name: "Samsung Official Brand Store",
				rating: 4.8,
				totalRatings: 32100,
				verified: true
		},
		tags: [
				"Samsung",
				"Galaxy Tab S9 Ultra",
				"Tablet",
				"AMOLED",
				"S-Pen",
				"5G"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 64 - ELECTRONICS / MOBILE ACCESSORIES
	// =========================================================
	{
		id: 64,
		name: "Belkin 3-in-1 MagSafe Wireless Charging Stand (15W)",
		brand: "Belkin",
		company: "Belkin International",
		Category: "Electronics",
		subcategory: "Mobile Accessories",
		productType: "Wireless Charger",
		images: [
				"https://images.unsplash.com/photo-1622445262464-84b1456045b6",
				"https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
				"https://images.unsplash.com/photo-1541807084-5c52b6b3adef"
		],
		image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6",
		rating: 4.8,
		totalRatings: 4920,
		totalReviews: 1120,
		price: 11999,
		originalPrice: 14999,
		discountPercentage: 20,
		offers: [
				{
						title: "Bundle Discount",
						description: "Flat ₹1,000 off on Apple MFi certified Belkin power accessories"
				},
				{
						title: "Bank Offer",
						description: "Instant 10% discount on credit card EMI"
				}
		],
		colors: [
				{
						id: "white",
						name: "Pure White",
						image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6",
						price: 11999
				},
				{
						id: "black",
						name: "Matte Black",
						image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
						price: 11999
				}
		],
		variants: [
				{
						id: "15w-fast",
						name: "15W Fast Charge Edition",
						price: 11999,
						originalPrice: 14999,
						stock: 35,
						inStock: true
				}
		],
		shortDescription: "Premium official MagSafe 15W 3-in-1 wireless charging tree for iPhone, Apple Watch Fast Charger and AirPods.",
		description: "- OFFICIAL MADE FOR MAGSAFE 15W ULTRA-FAST CHARGING\n- SIMULTANEOUSLY CHARGES IPHONE, APPLE WATCH & AIRPODS\n- HIGH-GRADE POLISHED STAINLESS STEEL TREE ARCHITECTURE\n- SUPPORTS PORTRAIT & LANDSCAPE STANDBY ORIENTATION\n- COMPATIBLE WITH MAGSAFE CASES UP TO 3MM",
		specifications: {
				material: "Stainless Steel & Soft Touch Silicone",
				powerOutput: "15W MagSafe Phone + 5W Watch + 5W AirPods",
				inputPower: "Included 40W AC Power Adapter with 1.5m Cable",
				compatibility: "iPhone 12-16 series, Apple Watch Ultra/Series 7-10, AirPods Pro/3/4",
				safetyCertification: "Apple MFi / MagSafe Certified, Overheat & Surge Protection"
		},
		inStock: true,
		stock: 35,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Belkin Connected Equipment Warranty"
		},
		seller: {
				name: "ShopAll Premium Tech",
				rating: 4.8,
				totalRatings: 12900,
				verified: true
		},
		tags: [
				"Belkin",
				"MagSafe",
				"Wireless Charger",
				"3-in-1",
				"Fast Charging",
				"iPhone"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 65 - ELECTRONICS / SMART WATCHES
	// =========================================================
	{
		id: 65,
		name: "Amazfit T-Rex 3 Rugged Outdoor GPS Smartwatch",
		brand: "Amazfit",
		company: "Zepp Health",
		Category: "Electronics",
		subcategory: "Smart Watches",
		productType: "Smart Watch",
		images: [
				"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
				"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
				"https://images.unsplash.com/photo-1544117519-31a4b719223d"
		],
		image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
		rating: 4.7,
		totalRatings: 3890,
		totalReviews: 820,
		price: 19999,
		originalPrice: 24999,
		discountPercentage: 20,
		offers: [
				{
						title: "Outdoor Fest",
						description: "Free rugged silicone tactical strap with purchase"
				},
				{
						title: "Bank Offer",
						description: "10% instant discount on selected debit and credit cards"
				}
		],
		colors: [
				{
						id: "lava",
						name: "Lava Black",
						image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
						price: 19999
				},
				{
						id: "desert",
						name: "Desert Khaki",
						image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
						price: 19999
				}
		],
		variants: [
				{
						id: "48mm",
						name: "48mm Military Grade",
						price: 19999,
						originalPrice: 24999,
						stock: 30,
						inStock: true
				}
		],
		shortDescription: "Ultra-durable military-grade GPS outdoor smartwatch with 2000-nit AMOLED screen, offline maps, and 27-day battery life.",
		description: "- 1.5-INCH ULTRA-BRIGHT 2000-NIT AMOLED WITH GORILLA GLASS\n- UP TO 27 DAYS NORMAL BATTERY LIFE & 180H GPS TRACKING\n- DUAL-BAND 6-SATELLITE POSITIONING WITH OFFLINE TOPO MAPS\n- 45-METER FREEDIVING CERTIFIED & 10 ATM WATER RESISTANCE\n- BIO-TRACKER PPG SENSOR WITH HEART RATE, SPO2 & STRESS",
		specifications: {
				display: {
						size: "1.5 inch AMOLED (480x480)",
						type: "2000 nits Peak Brightness",
						refreshRate: "60Hz"
				},
				processor: {
						name: "Zepp OS 4.0 Dual-Core Sensor Hub"
				},
				camera: {
						rear: "N/A",
						front: "N/A"
				},
				battery: {
						type: "700 mAh Li-Po",
						charging: "Magnetic Charging Base (0-100% in 3 hours)"
				},
				operatingSystem: "Zepp OS 4.0 (AI Voice Assistant)",
				connectivity: [
						"Bluetooth 5.2 BLE",
						"Wi-Fi 2.4GHz",
						"Dual-band GPS",
						"NFC"
				]
		},
		inStock: true,
		stock: 30,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Brand Warranty"
		},
		seller: {
				name: "Amazfit Official Store",
				rating: 4.7,
				totalRatings: 11500,
				verified: true
		},
		tags: [
				"Amazfit",
				"T-Rex 3",
				"Smartwatch",
				"Rugged",
				"GPS",
				"AMOLED",
				"Outdoor"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 66 - AUDIO / HEADPHONES
	// =========================================================
	{
		id: 66,
		name: "Sennheiser Momentum 4 Wireless ANC Headphones",
		brand: "Sennheiser",
		company: "Sonova Consumer Hearing",
		Category: "Audio",
		subcategory: "Headphones",
		productType: "Wireless Headphones",
		images: [
				"https://images.unsplash.com/photo-1546435770-a3e426bf472b",
				"https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
				"https://images.unsplash.com/photo-1484704849700-f032a568e944"
		],
		image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
		rating: 4.8,
		totalRatings: 4120,
		totalReviews: 940,
		price: 26990,
		originalPrice: 34990,
		discountPercentage: 23,
		offers: [
				{
						title: "Audiophile Deal",
						description: "Free high-res audio headphone carrying case included"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹2,500 instant discount with ICICI & HDFC cards"
				}
		],
		colors: [
				{
						id: "black-copper",
						name: "Black & Copper Edition",
						image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
						price: 26990
				},
				{
						id: "white-silver",
						name: "White & Silver",
						image: "https://images.unsplash.com/photo-1484704849700-f032a568e944",
						price: 26990
				}
		],
		variants: [
				{
						id: "standard",
						name: "Audiophile Edition",
						price: 26990,
						originalPrice: 34990,
						stock: 25,
						inStock: true
				}
		],
		shortDescription: "Audiophile-grade wireless over-ear headphones with 60-hour battery life, adaptive ANC, and 42mm transducer system.",
		description: "- SIGNATURE SENNHEISER AUDIOPHILE SOUND WITH 42MM TRANSDUCERS\n- UNPRECEDENTED 60-HOUR LONG PLAYTIME BATTERY LIFE\n- NEXT-GEN HYBRID ADAPTIVE NOISE CANCELLATION & TRANSPARENCY\n- APTX ADAPTIVE, AAC & SBC HI-RES CODEC SUPPORT\n- SMART PAUSE & AUTO ON/OFF DETECTION",
		specifications: {
				transducer: "42mm Dynamic Drivers",
				frequencyResponse: "6 Hz - 22,000 Hz",
				battery: {
						type: "700mAh Rechargeable Li-ion (60h Battery)",
						charging: "USB-C Fast Charge (10 min for 6h)"
				},
				microphones: "4 Digital Beamforming Microphones for Crystal Calls",
				connectivity: [
						"Bluetooth 5.2",
						"aptX Adaptive",
						"USB-C Audio",
						"3.5mm Analog Cable"
				]
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "International Manufacturer Warranty"
		},
		seller: {
				name: "Sennheiser Audio Hub",
				rating: 4.9,
				totalRatings: 16400,
				verified: true
		},
		tags: [
				"Sennheiser",
				"Momentum 4",
				"Headphones",
				"Wireless",
				"ANC",
				"Audiophile",
				"60hr Battery"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 67 - AUDIO / SPEAKERS
	// =========================================================
	{
		id: 67,
		name: "JBL Charge 5 Portable Waterproof Bluetooth Speaker",
		brand: "JBL",
		company: "Harman International",
		Category: "Audio",
		subcategory: "Speakers",
		productType: "Bluetooth Speaker",
		images: [
				"https://images.unsplash.com/photo-1545454675-3531b543be5d",
				"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
				"https://images.unsplash.com/photo-1589003077984-894e133dabab"
		],
		image: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
		rating: 4.7,
		totalRatings: 7890,
		totalReviews: 1840,
		price: 13999,
		originalPrice: 17999,
		discountPercentage: 22,
		offers: [
				{
						title: "Music Fest Offer",
						description: "Extra 10% off with coupon CODE: JBLFEST"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected bank debit cards"
				}
		],
		colors: [
				{
						id: "squad",
						name: "Squad Camo",
						image: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
						price: 13999
				},
				{
						id: "black",
						name: "Midnight Black",
						image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
						price: 13999
				},
				{
						id: "blue",
						name: "Ocean Blue",
						image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
						price: 13999
				}
		],
		variants: [
				{
						id: "standard",
						name: "Standard (40W RMS)",
						price: 13999,
						originalPrice: 17999,
						stock: 45,
						inStock: true
				}
		],
		shortDescription: "Powerful IP67 waterproof Bluetooth portable speaker with optimized long excursion driver, separate tweeter, and built-in powerbank.",
		description: "- JBL ORIGINAL PRO SOUND WITH MASSIVE DEEP BASS\n- 20 HOURS OF CONTINUOUS WIRELESS PLAYTIME\n- IP67 DUSTPROOF & WATERPROOF FOR POOL & BEACH USE\n- BUILT-IN POWERBANK TO CHARGE SMARTPHONES VIA USB-A\n- JBL PARTYBOOST TO PAIR MULTIPLE SPEAKERS IN STEREO",
		specifications: {
				outputPower: "30W RMS Woofer + 10W RMS Tweeter (40W Total)",
				frequencyResponse: "60 Hz - 20,000 Hz",
				battery: {
						type: "7500 mAh Li-ion Polymer",
						charging: "USB-C 5V/3A (4 hours charge time)"
				},
				waterproofing: "IP67 Ingress Rated (Submersible up to 1m for 30 min)",
				connectivity: [
						"Bluetooth 5.1",
						"USB-A Power Out (5V/2A)"
				]
		},
		inStock: true,
		stock: 45,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Manufacturer Warranty"
		},
		seller: {
				name: "JBL Official Store",
				rating: 4.8,
				totalRatings: 28400,
				verified: true
		},
		tags: [
				"JBL",
				"Charge 5",
				"Bluetooth Speaker",
				"Waterproof",
				"Portable Audio",
				"Powerbank"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 68 - AUDIO / SOUNDBARS
	// =========================================================
	{
		id: 68,
		name: "Sonos Beam Gen 2 Smart Soundbar with Dolby Atmos",
		brand: "Sonos",
		company: "Sonos Inc.",
		Category: "Audio",
		subcategory: "Soundbars",
		productType: "Soundbar",
		images: [
				"https://images.unsplash.com/photo-1545454675-3531b543be5d",
				"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
				"https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
		],
		image: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
		rating: 4.8,
		totalRatings: 3120,
		totalReviews: 670,
		price: 49999,
		originalPrice: 59999,
		discountPercentage: 17,
		offers: [
				{
						title: "Home Theatre Offer",
						description: "Get 20% discount on Sonos Sub Mini when bought together"
				},
				{
						title: "Bank Offer",
						description: "No Cost EMI up to 12 months on major credit cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "Matte Black",
						image: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
						price: 49999
				},
				{
						id: "white",
						name: "Matte White",
						image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
						price: 49999
				}
		],
		variants: [
				{
						id: "beam-gen2",
						name: "Dolby Atmos Edition",
						price: 49999,
						originalPrice: 59999,
						stock: 18,
						inStock: true
				}
		],
		shortDescription: "Compact smart soundbar delivering 3D panoramic spatial audio with Dolby Atmos, crystal-clear dialogue, and Apple AirPlay 2.",
		description: "- IMMERSIVE 3D SURROUND AUDIO WITH DOLBY ATMOS\n- SPEECH ENHANCEMENT FOR CRISP WHISPER-CLEAR MOVIE DIALOGUE\n- NIGHT SOUND MODE TO REDUCE INTENSITY OF LOUD SOUND EFFECTS\n- EASY SETUP WITH SINGLE HDMI EARP CONNECTION\n- APPLE AIRPLAY 2, SPOTIFY CONNECT & SONOS TRUEPLAY TUNING",
		specifications: {
				amplifiers: "Five Class-D Digital Amplifiers",
				drivers: "1 Center Tweeter + 4 Elliptical Midwoofers + 3 Passive Radiators",
				audioFormats: "Dolby Atmos, Dolby Digital Plus, Dolby TrueHD, Stereo PCM",
				voiceAssistant: "Amazon Alexa & Sonos Voice Control Built-In",
				connectivity: [
						"HDMI eARC",
						"Optical Audio Adapter",
						"Wi-Fi 2.4/5GHz",
						"AirPlay 2",
						"Ethernet Port"
				]
		},
		inStock: true,
		stock: 18,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Sonos Official Warranty"
		},
		seller: {
				name: "ShopAll Premium Home Theatre",
				rating: 4.9,
				totalRatings: 8400,
				verified: true
		},
		tags: [
				"Sonos",
				"Beam Gen 2",
				"Soundbar",
				"Dolby Atmos",
				"Home Theatre",
				"AirPlay 2"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 69 - AUDIO / MICROPHONES
	// =========================================================
	{
		id: 69,
		name: "Shure SM7B Dynamic Vocal Studio Recording Microphone",
		brand: "Shure",
		company: "Shure Incorporated",
		Category: "Audio",
		subcategory: "Microphones",
		productType: "Microphone",
		images: [
				"https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
				"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
				"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
		],
		image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
		rating: 4.9,
		totalRatings: 5640,
		totalReviews: 1420,
		price: 36990,
		originalPrice: 42990,
		discountPercentage: 14,
		offers: [
				{
						title: "Creator Special",
						description: "Includes detachable A7WS windscreen & RPM602 switch cover plate"
				},
				{
						title: "Bank Offer",
						description: "Instant ₹3,000 discount on selected business cards"
				}
		],
		colors: [
				{
						id: "matte-black",
						name: "Dark Gray / Black",
						image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
						price: 36990
				}
		],
		variants: [
				{
						id: "sm7b-xlr",
						name: "Standard XLR Studio Mic",
						price: 36990,
						originalPrice: 42990,
						stock: 22,
						inStock: true
				}
		],
		shortDescription: "Legendary broadcast dynamic cardioid microphone chosen by world-class podcasters, streamers, and recording artists worldwide.",
		description: "- FLAT, WIDE-RANGE FREQUENCY REPRODUCTION FOR EXCEPTIONALLY CLEAN & NATURAL MUSIC & SPEECH\n- AIR SUSPENSION SHOCK ISOLATION & POP FILTER VIRTUALLY ELIMINATES MECHANICAL NOISE\n- ADVANCED ELECTROMAGNETIC SHIELDING AGAINST BROADBAND INTERFERENCE FROM MONITORS\n- CARDIOID POLAR PATTERN REJECTS OFF-AXIS AMBIENT ROOM NOISE\n- RUGGED ALL-METAL CONSTRUCTION WITH INTEGRATED YOKE MOUNT",
		specifications: {
				transducerType: "Dynamic (Moving Coil)",
				polarPattern: "Cardioid Directional",
				frequencyResponse: "50 Hz - 20,000 Hz",
				outputImpedance: "150 Ohms",
				connector: "Three-Pin Professional Audio (XLR) Male"
		},
		inStock: true,
		stock: 22,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Shure Manufacturer Warranty"
		},
		seller: {
				name: "Pro Audio Studio Gear",
				rating: 4.9,
				totalRatings: 14200,
				verified: true
		},
		tags: [
				"Shure",
				"SM7B",
				"Microphone",
				"Studio",
				"Podcasting",
				"Streaming",
				"Vocal Mic"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 70 - GAMING / CONSOLES
	// =========================================================
	{
		id: 70,
		name: "ASUS ROG Ally X 1TB Handheld Gaming Console",
		brand: "ASUS ROG",
		company: "ASUSTeK Computer Inc.",
		Category: "Gaming",
		subcategory: "Consoles",
		productType: "Handheld Gaming Console",
		images: [
				"https://images.unsplash.com/photo-1550745165-9bc0b252726f",
				"https://images.unsplash.com/photo-1607853202273-797f1c22a38e",
				"https://images.unsplash.com/photo-1592840062661-3e3b8a6e8c48"
		],
		image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
		rating: 4.8,
		totalRatings: 3410,
		totalReviews: 760,
		price: 79990,
		originalPrice: 89990,
		discountPercentage: 11,
		offers: [
				{
						title: "Game Pass Promo",
						description: "3 Months Xbox Game Pass Ultimate bundled"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹5,000 instant discount on Axis Bank credit cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "Premium Black",
						image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
						price: 79990
				}
		],
		variants: [
				{
						id: "1tb-24gb",
						name: "AMD Z1 Extreme / 24GB LPDDR5X / 1TB SSD",
						price: 79990,
						originalPrice: 89990,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Ultimate Windows 11 handheld gaming console powered by AMD Ryzen Z1 Extreme, 24GB high-speed RAM, and massive 80Wh battery.",
		description: "- AMD RYZEN Z1 EXTREME PROCESSOR WITH RDNA 3 GRAPHICS\n- 7-INCH FHD 1080P 120HZ 500-NIT TOUCHSCREEN WITH AMD FREESYNC PREMIUM\n- MASSIVE 80WH BATTERY - DOUBLE THE CAPACITY OF PREVIOUS GEN\n- 24GB LPDDR5X-7500 HIGH SPEED MEMORY + 1TB PCIE 4.0 M.2 SSD\n- DUAL USB-C PORTS WITH THUNDERBOLT 4 SUPPORT & REDESIGNED ERGONOMICS",
		specifications: {
				display: {
						size: "7.0 inch IPS Touchscreen",
						type: "1080p FHD 120Hz 7ms FreeSync Premium",
						refreshRate: "120Hz"
				},
				processor: {
						name: "AMD Ryzen Z1 Extreme (8 Cores, 16 Threads, 24MB Cache)"
				},
				camera: {
						rear: "N/A",
						front: "N/A"
				},
				battery: {
						type: "80 WHr 4-Cell Li-ion",
						charging: "65W USB-C Fast Charger"
				},
				operatingSystem: "Windows 11 Home with Armoury Crate SE",
				connectivity: [
						"USB4 / Thunderbolt 4",
						"USB 3.2 Gen 2 Type-C",
						"Wi-Fi 6E",
						"Bluetooth 5.2",
						"UHS-II MicroSD"
				]
		},
		inStock: true,
		stock: 15,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "ASUS Global Warranty"
		},
		seller: {
				name: "ROG Gaming Zone",
				rating: 4.9,
				totalRatings: 18900,
				verified: true
		},
		tags: [
				"ASUS ROG",
				"ROG Ally X",
				"Gaming",
				"Console",
				"Handheld",
				"PC Gaming"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 71 - GAMING / GAMING ACCESSORIES
	// =========================================================
	{
		id: 71,
		name: "Razer BlackWidow V4 Pro Mechanical Gaming Keyboard",
		brand: "Razer",
		company: "Razer Inc.",
		Category: "Gaming",
		subcategory: "Gaming Accessories",
		productType: "Gaming Keyboard",
		images: [
				"https://images.unsplash.com/photo-1587829741301-dc798b83add3",
				"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
				"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
		],
		image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
		rating: 4.8,
		totalRatings: 4210,
		totalReviews: 890,
		price: 19999,
		originalPrice: 24999,
		discountPercentage: 20,
		offers: [
				{
						title: "Razer Chroma Offer",
						description: "Includes magnetic plush leatherette underglow wrist rest"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "Classic Black Chroma",
						image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
						price: 19999
				}
		],
		variants: [
				{
						id: "green-switch",
						name: "Razer Green Clicky Switches",
						price: 19999,
						originalPrice: 24999,
						stock: 25,
						inStock: true
				},
				{
						id: "yellow-switch",
						name: "Razer Yellow Linear Switches",
						price: 19999,
						originalPrice: 24999,
						stock: 20,
						inStock: true
				}
		],
		shortDescription: "Full-blown battlestation mechanical keyboard with Razer Command Dial, 8 dedicated macro keys, and 8000Hz polling rate.",
		description: "- RAZER COMMAND DIAL & 8 DEDICATED MACRO KEYS\n- IMMERSIVE 3-SIDE UNDERGLOW & PER-KEY RGB ILLUMINATION\n- SOUND DAMPENING FOAM & FACTORY LUBRICATED STABILIZERS\n- TRUE 8000HZ HYPERPOLLING RATE FOR ZERO-LATENCY INPUTS\n- DOUBLESHOT ABS KEYCAPS & USB 2.0 PASSTHROUGH",
		specifications: {
				switchType: "Razer Green Clicky / Yellow Linear Mechanical Switches",
				pollingRate: "8000Hz Razer HyperPolling",
				lighting: "Razer Chroma RGB with 3-Side Underglow",
				connectivity: "Detachable Braided Type-C Cable + USB Passthrough",
				wristRest: "Magnetic Plush Leatherette with RGB Underglow"
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Razer Manufacturer Warranty"
		},
		seller: {
				name: "Razer Flagship Store",
				rating: 4.8,
				totalRatings: 15600,
				verified: true
		},
		tags: [
				"Razer",
				"BlackWidow V4 Pro",
				"Gaming Keyboard",
				"Mechanical",
				"Chroma RGB",
				"Macro"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 72 - GAMING / GAMING ACCESSORIES
	// =========================================================
	{
		id: 72,
		name: "Elgato Stream Deck MK.2 Content Creation Controller",
		brand: "Elgato",
		company: "Corsair Gaming Inc.",
		Category: "Gaming",
		subcategory: "Gaming Accessories",
		productType: "Stream Controller",
		images: [
				"https://images.unsplash.com/photo-1542751371-adc38448a05e",
				"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
				"https://images.unsplash.com/photo-1550745165-9bc0b252726f"
		],
		image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
		rating: 4.9,
		totalRatings: 6120,
		totalReviews: 1450,
		price: 13999,
		originalPrice: 16999,
		discountPercentage: 18,
		offers: [
				{
						title: "Creator Bundle",
						description: "Free Elgato Wave Link virtual audio routing software access"
				},
				{
						title: "Bank Offer",
						description: "Instant ₹1,500 discount on selected bank credit cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "Matte Black",
						image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
						price: 13999
				},
				{
						id: "white",
						name: "Arctic White",
						image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
						price: 14499
				}
		],
		variants: [
				{
						id: "15-keys",
						name: "15 Customizable LCD Keys",
						price: 13999,
						originalPrice: 16999,
						stock: 35,
						inStock: true
				}
		],
		shortDescription: "15 customizable LCD keys to trigger studio actions, switch scenes, launch apps, adjust audio, and control smart lights.",
		description: "- 15 CUSTOMIZABLE TACTILE LCD KEYS WITH INSTANT VISUAL FEEDBACK\n- ONE-TOUCH CONTROL FOR OBS, TWITCH, YOUTUBE, SPOTIFY & DISCORD\n- DETACHABLE 45-DEGREE DESKTOP STAND & SWAPPABLE FACEPLATE\n- MULTI ACTIONS: TRIGGER MULTIPLE COMMANDS SIMULTANEOUSLY OR IN SEQUENCE\n- STREAM DECK STORE: ACCESS THOUSANDS OF PLUGINS, ICONS & TRACKS",
		specifications: {
				keys: "15 Customizable LCD Keys",
				interface: "USB 2.0 Type-C (Detachable 1.5m Cable)",
				dimensions: "118 x 84 x 25 mm (without stand)",
				compatibility: "Windows 10/11 (64-bit), macOS 10.15 or later",
				weight: "145g without stand / 270g with stand"
		},
		inStock: true,
		stock: 35,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Corsair Elgato Warranty"
		},
		seller: {
				name: "ShopAll Creator Hub",
				rating: 4.9,
				totalRatings: 18200,
				verified: true
		},
		tags: [
				"Elgato",
				"Stream Deck",
				"Streaming",
				"Content Creation",
				"Gaming",
				"Shortcuts"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 73 - COMPUTERS / MONITORS
	// =========================================================
	{
		id: 73,
		name: "LG UltraGear 34-inch Curved OLED Gaming Monitor (240Hz)",
		brand: "LG",
		company: "LG Electronics",
		Category: "Computers",
		subcategory: "Monitors",
		productType: "Gaming Monitor",
		images: [
				"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
				"https://images.unsplash.com/photo-1547082299-de196ea013d6",
				"https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
		],
		image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
		rating: 4.9,
		totalRatings: 1980,
		totalReviews: 430,
		price: 89999,
		originalPrice: 119999,
		discountPercentage: 25,
		offers: [
				{
						title: "Monitor Festival",
						description: "Flat ₹10,000 instant discount with coupon CODE: ULTRAOLED"
				},
				{
						title: "No Cost EMI",
						description: "Zero interest EMI up to 18 months"
				}
		],
		colors: [
				{
						id: "black",
						name: "Hexagon Lighting Black",
						image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
						price: 89999
				}
		],
		variants: [
				{
						id: "34-curved-oled",
						name: "34-inch WQHD 800R Curved OLED (240Hz 0.03ms)",
						price: 89999,
						originalPrice: 119999,
						stock: 10,
						inStock: true
				}
		],
		shortDescription: "34-inch 21:9 WQHD (3440 x 1440) 800R curved OLED gaming display with blazing 240Hz refresh rate and 0.03ms response time.",
		description: "- 34-INCH CURVED WQHD (3440X1440) SELF-LIT OLED PANEL\n- BREATHTAKING 240HZ REFRESH RATE & 0.03MS (GTG) PIXEL RESPONSE\n- DRAMATIC 800R IMMERSIVE CURVATURE FOR OPTIMAL FIELD OF VIEW\n- NVIDIA G-SYNC COMPATIBLE & AMD FREESYNC PREMIUM PRO\n- 98.5% DCI-P3 COLOR GAMUT WITH 1,500,000:1 CONTRAST RATIO",
		specifications: {
				display: {
						size: "34 inch (86.42 cm)",
						type: "OLED Curved 800R (3440 x 1440)",
						refreshRate: "240Hz"
				},
				responseTime: "0.03ms (GtG)",
				hdr: "DisplayHDR True Black 400",
				ports: [
						"2x HDMI 2.1",
						"1x DisplayPort 1.4 (DSC)",
						"2x USB 3.0 Downstream",
						"4-Pole DTS Headphone:X Jack"
				],
				ergonomics: "Tilt, Height, Swivel Adjustable Stand"
		},
		inStock: true,
		stock: 10,
		delivery: {
				freeDelivery: true,
				deliveryDays: "3-5 days"
		},
		warranty: {
				available: true,
				duration: "3 Years",
				type: "LG On-Site OLED Burn-in Protection Warranty"
		},
		seller: {
				name: "LG Electronics Official",
				rating: 4.9,
				totalRatings: 21000,
				verified: true
		},
		tags: [
				"LG",
				"UltraGear",
				"OLED",
				"Gaming Monitor",
				"240Hz",
				"Curved Monitor",
				"34 inch"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 74 - COMPUTERS / STORAGE
	// =========================================================
	{
		id: 74,
		name: "Samsung T9 2TB Rugged Portable NVMe SSD (2000MB/s)",
		brand: "Samsung",
		company: "Samsung Electronics",
		Category: "Computers",
		subcategory: "Storage",
		productType: "External SSD",
		images: [
				"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
				"https://images.unsplash.com/photo-1531492746076-161ca9bcad58",
				"https://images.unsplash.com/photo-1544652478-6653e09f18a2"
		],
		image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
		rating: 4.9,
		totalRatings: 4890,
		totalReviews: 950,
		price: 19999,
		originalPrice: 25999,
		discountPercentage: 23,
		offers: [
				{
						title: "Storage Fest",
						description: "Includes Type-C to C and Type-C to A high-speed cables"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹2,000 instant discount on selected credit cards"
				}
		],
		colors: [
				{
						id: "carbon-black",
						name: "Carbon Black",
						image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
						price: 19999
				}
		],
		variants: [
				{
						id: "1tb",
						name: "1TB (2000 MB/s)",
						price: 11999,
						originalPrice: 15999,
						stock: 30,
						inStock: true
				},
				{
						id: "2tb",
						name: "2TB (2000 MB/s)",
						price: 19999,
						originalPrice: 25999,
						stock: 25,
						inStock: true
				},
				{
						id: "4tb",
						name: "4TB (2000 MB/s)",
						price: 34999,
						originalPrice: 44999,
						stock: 12,
						inStock: true
				}
		],
		shortDescription: "Heavy-duty portable NVMe SSD with USB 3.2 Gen 2x2 speeds up to 2000 MB/s, 3-meter drop resistance, and thermal guard.",
		description: "- BLISTERING FAST READ/WRITE SPEEDS UP TO 2,000 MB/S\n- USB 3.2 GEN 2X2 INTERFACE FOR PRO 4K/8K VIDEO EDITING\n- DROP RESISTANT UP TO 3 METERS (9.8 FT) WITH RUBBERIZED CASING\n- DYNAMIC THERMAL GUARD PREVENTS OVERHEATING THROTTLING\n- AES 256-BIT HARDWARE ENCRYPTION WITH PASSWORD PROTECTION",
		specifications: {
				capacity: "2 TB",
				sequentialRead: "Up to 2,000 MB/s",
				sequentialWrite: "Up to 2,000 MB/s",
				durability: "3-Meter Drop Resistance, Shock & Vibration Proof",
				interface: "USB 3.2 Gen 2x2 (20 Gbps) Type-C"
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-3 days"
		},
		warranty: {
				available: true,
				duration: "5 Years",
				type: "Samsung Limited Manufacturer Warranty"
		},
		seller: {
				name: "Samsung Memory Store",
				rating: 4.9,
				totalRatings: 34500,
				verified: true
		},
		tags: [
				"Samsung",
				"T9",
				"SSD",
				"Portable SSD",
				"NVMe",
				"Storage",
				"Fast Transfer"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 75 - COMPUTERS / NETWORKING
	// =========================================================
	{
		id: 75,
		name: "TP-Link Deco BE85 Tri-Band Mesh Wi-Fi 7 System (BE22000)",
		brand: "TP-Link",
		company: "TP-Link Technologies",
		Category: "Computers",
		subcategory: "Networking",
		productType: "Mesh Router",
		images: [
				"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
				"https://images.unsplash.com/photo-1544652478-6653e09f18a2",
				"https://images.unsplash.com/photo-1588702547919-26089e690ecc"
		],
		image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
		rating: 4.8,
		totalRatings: 1450,
		totalReviews: 310,
		price: 59999,
		originalPrice: 74999,
		discountPercentage: 20,
		offers: [
				{
						title: "Next-Gen Networking",
						description: "Free TP-Link HomeShield Pro lifetime security subscription"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹5,000 instant discount on HDFC credit cards"
				}
		],
		colors: [
				{
						id: "white",
						name: "Alpine White Cylindrical",
						image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
						price: 59999
				}
		],
		variants: [
				{
						id: "2-pack",
						name: "2-Pack (Up to 7,600 sq. ft Coverage)",
						price: 59999,
						originalPrice: 74999,
						stock: 12,
						inStock: true
				}
		],
		shortDescription: "Ultra-fast Wi-Fi 7 Tri-Band Mesh system delivering speeds up to 22 Gbps, multi-gig 10Gbps Ethernet ports, and 200+ device capacity.",
		description: "- NEXT-GEN TRI-BAND WI-FI 7 SPEEDS UP TO 22,000 MBPS (BE22000)\n- 2X 10GBPS WAN/LAN PORTS + 2X 2.5GBPS PORTS PER UNIT\n- 320MHZ ULTRA-WIDE CHANNELS & 4K-QAM FOR ZERO BUFFERING 8K STREAMING\n- SEAMLESS AI-DRIVEN ROAMING ACROSS 7,600 SQ FT HOMES\n- SUPPORTS OVER 200 HIGH-DEMAND SMART HOME DEVICES SIMULTANEOUSLY",
		specifications: {
				wiFiStandard: "Wi-Fi 7 (IEEE 802.11be/ax/ac/n/a/g/b)",
				speedRating: "6 GHz: 11520 Mbps + 5 GHz: 8640 Mbps + 2.4 GHz: 1376 Mbps",
				ports: "1x 10 Gbps Ethernet/Fiber Combo + 1x 10 Gbps RJ45 + 2x 2.5 Gbps RJ45 + USB 3.0",
				security: "WPA3 Personal/Enterprise, TP-Link HomeShield IoT Security",
				processor: "Quad-Core 2.2 GHz High-Efficiency Networking CPU"
		},
		inStock: true,
		stock: 12,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "3 Years",
				type: "TP-Link Replacement Warranty"
		},
		seller: {
				name: "TP-Link Networking Official",
				rating: 4.8,
				totalRatings: 9400,
				verified: true
		},
		tags: [
				"TP-Link",
				"Wi-Fi 7",
				"Deco BE85",
				"Mesh Router",
				"10Gbps",
				"Networking",
				"Home WiFi"
		],
		isFeatured: true,
		isBestSeller: false,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 76 - COMPUTERS / WEBCAMS
	// =========================================================
	{
		id: 76,
		name: "Logitech Brio 4K Ultra HD Pro Streaming Webcam with HDR",
		brand: "Logitech",
		company: "Logitech International",
		Category: "Computers",
		subcategory: "Webcams",
		productType: "Webcam",
		images: [
				"https://images.unsplash.com/photo-1587829741301-dc798b83add3",
				"https://images.unsplash.com/photo-1542751371-adc38448a05e",
				"https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
		],
		image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
		rating: 4.7,
		totalRatings: 5410,
		totalReviews: 1240,
		price: 16995,
		originalPrice: 22995,
		discountPercentage: 26,
		offers: [
				{
						title: "Streamer Deal",
						description: "Includes detachable privacy shutter & USB-C to USB-A cable"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "Anodized Black Aluminum",
						image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
						price: 16995
				}
		],
		variants: [
				{
						id: "4k-pro",
						name: "4K Pro Edition",
						price: 16995,
						originalPrice: 22995,
						stock: 30,
						inStock: true
				}
		],
		shortDescription: "Premier 4K Ultra HD webcam with RightLight 3 HDR technology, dual noise-cancelling mics, and Windows Hello facial recognition.",
		description: "- ULTRA 4K HD RESOLUTION AT 30 FPS OR 1080P AT ULTRA-SMOOTH 60 FPS\n- RIGHTLIGHT 3 WITH HDR AUTOMATICALLY ADJUSTS IN LOW LIGHT & BACKLIGHT\n- ADJUSTABLE FIELD OF VIEW: 65°, 78°, AND 90° DIAGONAL\n- SECURE INFRARED WINDOWS HELLO FACIAL RECOGNITION LOGIN\n- DUAL OMNIDIRECTIONAL NOISE-CANCELING MICROPHONES",
		specifications: {
				resolution: "4K/30fps (up to 4096 x 2160 pixels), 1080p/60fps",
				focusType: "Smooth Autofocus with 5x Digital HD Zoom",
				lensType: "Custom Glass Optical Lens",
				microphone: "Dual Built-in Omnidirectional Mic with Noise Reduction",
				connectivity: "USB-C 3.0 Plug-and-Play"
		},
		inStock: true,
		stock: 30,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Logitech Hardware Warranty"
		},
		seller: {
				name: "Logitech Official Store",
				rating: 4.8,
				totalRatings: 26500,
				verified: true
		},
		tags: [
				"Logitech",
				"Brio 4K",
				"Webcam",
				"Streaming",
				"HDR",
				"Windows Hello",
				"Zoom Meeting"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 77 - FASHION / MEN'S CLOTHING
	// =========================================================
	{
		id: 77,
		name: "Under Armour Men's Tech 2.0 Short Sleeve Training Tee",
		brand: "Under Armour",
		company: "Under Armour Inc.",
		Category: "Fashion",
		subcategory: "Men's Clothing",
		productType: "Gym T-Shirt",
		images: [
				"https://images.unsplash.com/photo-1581655353564-df123a1eb820",
				"https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
				"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
		],
		image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
		rating: 4.6,
		totalRatings: 4950,
		totalReviews: 1020,
		price: 1499,
		originalPrice: 2299,
		discountPercentage: 35,
		offers: [
				{
						title: "Athletic Offer",
						description: "Buy 2 gym wear tees & get extra 15% off"
				},
				{
						title: "Bank Offer",
						description: "Additional discount with selected cards"
				}
		],
		colors: [
				{
						id: "carbon-heather",
						name: "Carbon Heather Gray",
						image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
						price: 1499
				},
				{
						id: "pitch-gray",
						name: "Pitch Gray / Black",
						image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
						price: 1499
				},
				{
						id: "royal-blue",
						name: "Royal Blue",
						image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
						price: 1499
				}
		],
		variants: [
				{
						id: "m",
						name: "M",
						price: 1499,
						originalPrice: 2299,
						stock: 35,
						inStock: true
				},
				{
						id: "l",
						name: "L",
						price: 1499,
						originalPrice: 2299,
						stock: 40,
						inStock: true
				},
				{
						id: "xl",
						name: "XL",
						price: 1499,
						originalPrice: 2299,
						stock: 25,
						inStock: true
				}
		],
		shortDescription: "Ultra-lightweight quick-drying training tee with UA Tech fabric for an ultra-soft, natural feel during intense workouts.",
		description: "- UA TECH FABRIC IS QUICK-DRYING, ULTRA-SOFT & HAS A NATURAL FEEL\n- MATERIAL WICKS SWEAT & DRIES INCREDIBLY FAST\n- ANTI-ODOR TECHNOLOGY PREVENTS GROWTH OF ODOR-CAUSING MICROBES\n- STREAMLINED FIT & SHAPED DROP-TAIL HEM FOR COMPLETE MOBILITY",
		specifications: {
				material: "100% Recycled Polyester UA Tech Fabric",
				fit: "Loose Fuller Cut for Complete Comfort",
				neck: "Ribbed Crew Neck Collar",
				care: "Machine Wash Cold with Like Colors"
		},
		inStock: true,
		stock: 40,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "Under Armour Official",
				rating: 4.7,
				totalRatings: 18400,
				verified: true
		},
		tags: [
				"Under Armour",
				"Gym Wear",
				"T-Shirt",
				"Training",
				"Running",
				"Athletic"
		],
		isFeatured: false,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 78 - FASHION / WOMEN'S CLOTHING
	// =========================================================
	{
		id: 78,
		name: "H&M Women's Double-Breasted Wool Blend Trench Coat",
		brand: "H&M",
		company: "H&M Group",
		Category: "Fashion",
		subcategory: "Women's Clothing",
		productType: "Coat",
		images: [
				"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
				"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
				"https://images.unsplash.com/photo-1483985988355-763728e1935b"
		],
		image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
		rating: 4.6,
		totalRatings: 2840,
		totalReviews: 610,
		price: 5999,
		originalPrice: 8999,
		discountPercentage: 33,
		offers: [
				{
						title: "Autumn Winter Sale",
						description: "Flat ₹3,000 off on premium outerwear"
				},
				{
						title: "Bank Offer",
						description: "Instant 10% discount on credit card payments"
				}
		],
		colors: [
				{
						id: "camel-beige",
						name: "Classic Camel Beige",
						image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
						price: 5999
				},
				{
						id: "black",
						name: "Charcoal Black",
						image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
						price: 5999
				}
		],
		variants: [
				{
						id: "s",
						name: "S",
						price: 5999,
						originalPrice: 8999,
						stock: 18,
						inStock: true
				},
				{
						id: "m",
						name: "M",
						price: 5999,
						originalPrice: 8999,
						stock: 24,
						inStock: true
				},
				{
						id: "l",
						name: "L",
						price: 5999,
						originalPrice: 8999,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Elegant double-breasted long trench coat crafted from a heavy wool-blend with wide lapels and a detachable tie belt.",
		description: "- LUXURIOUS WOOL-BLEND FABRIC WITH SATIN INTERIOR LINING\n- DOUBLE-BREASTED TORTOISESHELL BUTTON FASTENING\n- ADJUSTABLE DETACHABLE WAIST TIE BELT FOR CINCHED SILHOUETTE\n- NOTCHED LAPEL COLLAR & WELT HAND POCKETS\n- PERFECT FOR FORMAL, WORKWEAR & WINTER TRAVEL",
		specifications: {
				material: "60% Wool, 40% Recycled Polyester (Satin Lined)",
				fit: "Tailored Regular Fit (Calf Length)",
				closure: "Double-Breasted Button & Tie Belt",
				care: "Dry Clean Only"
		},
		inStock: true,
		stock: 24,
		delivery: {
				freeDelivery: true,
				deliveryDays: "3-5 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "H&M India Official",
				rating: 4.6,
				totalRatings: 14500,
				verified: true
		},
		tags: [
				"H&M",
				"Trench Coat",
				"Women's Fashion",
				"Winter Wear",
				"Wool Coat",
				"Formal"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 79 - FASHION / SHOES
	// =========================================================
	{
		id: 79,
		name: "Birkenstock Arizona Birko-Flor Unisex Cork Sandals",
		brand: "Birkenstock",
		company: "Birkenstock Group",
		Category: "Fashion",
		subcategory: "Shoes",
		productType: "Sandals",
		images: [
				"https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
				"https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
				"https://images.unsplash.com/photo-1560769629-975ec94e6a86"
		],
		image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
		rating: 4.8,
		totalRatings: 6720,
		totalReviews: 1540,
		price: 6990,
		originalPrice: 8990,
		discountPercentage: 22,
		offers: [
				{
						title: "Footwear Deal",
						description: "Free Birkenstock cork care kit on orders above ₹6,000"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected bank credit cards"
				}
		],
		colors: [
				{
						id: "mocca",
						name: "Mocca Brown",
						image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
						price: 6990
				},
				{
						id: "black",
						name: "Matte Black",
						image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
						price: 6990
				}
		],
		variants: [
				{
						id: "eu40",
						name: "EU 40 (UK 7)",
						price: 6990,
						originalPrice: 8990,
						stock: 20,
						inStock: true
				},
				{
						id: "eu41",
						name: "EU 41 (UK 7.5)",
						price: 6990,
						originalPrice: 8990,
						stock: 25,
						inStock: true
				},
				{
						id: "eu42",
						name: "EU 42 (UK 8)",
						price: 6990,
						originalPrice: 8990,
						stock: 30,
						inStock: true
				},
				{
						id: "eu43",
						name: "EU 43 (UK 9)",
						price: 6990,
						originalPrice: 8990,
						stock: 22,
						inStock: true
				}
		],
		shortDescription: "Iconic two-strap unisex sandal with anatomically shaped cork-latex footbed and skin-friendly Birko-Flor upper.",
		description: "- ANATOMICALLY SHAPED ORIGINAL CORK-LATEX FOOTBED\n- DURABLE & SKIN-FRIENDLY SYNTHETIC BIRKO-FLOR MATERIAL\n- SUEDE LEATHER FOOTBED LINING FOR ALL-DAY BREATHABILITY\n- TWO INDIVIDUALLY ADJUSTABLE METAL PIN BUCKLES\n- LIGHTWEIGHT EVA OUTSOLE FOR SUPERIOR CUSHIONING",
		specifications: {
				upper: "Birko-Flor Tear-Resistant Synthetic Leather",
				footbed: "Natural Cork and Latex with Suede Lining",
				sole: "EVA Shock-Absorbing Sole",
				origin: "Made in Germany"
		},
		inStock: true,
		stock: 30,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "6 Months",
				type: "Brand Warranty"
		},
		seller: {
				name: "Birkenstock Official",
				rating: 4.9,
				totalRatings: 21200,
				verified: true
		},
		tags: [
				"Birkenstock",
				"Arizona",
				"Sandals",
				"Cork Footbed",
				"Comfort Footwear",
				"Unisex"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 80 - FASHION / SHOES
	// =========================================================
	{
		id: 80,
		name: "ASICS Gel-Kayano 31 Long Distance Road Running Shoes",
		brand: "ASICS",
		company: "ASICS Corporation",
		Category: "Fashion",
		subcategory: "Shoes",
		productType: "Running Shoes",
		images: [
				"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
				"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
				"https://images.unsplash.com/photo-1460353581641-37baddab0fa2"
		],
		image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
		rating: 4.8,
		totalRatings: 3820,
		totalReviews: 870,
		price: 13999,
		originalPrice: 17999,
		discountPercentage: 22,
		offers: [
				{
						title: "Marathon Fest",
						description: "Includes complimentary pair of ASICS performance running socks"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "french-blue",
						name: "French Blue / Electric Lime",
						image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
						price: 13999
				},
				{
						id: "black-pure-silver",
						name: "Black / Pure Silver",
						image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
						price: 13999
				}
		],
		variants: [
				{
						id: "uk7",
						name: "UK 7",
						price: 13999,
						originalPrice: 17999,
						stock: 15,
						inStock: true
				},
				{
						id: "uk8",
						name: "UK 8",
						price: 13999,
						originalPrice: 17999,
						stock: 25,
						inStock: true
				},
				{
						id: "uk9",
						name: "UK 9",
						price: 13999,
						originalPrice: 17999,
						stock: 20,
						inStock: true
				},
				{
						id: "uk10",
						name: "UK 10",
						price: 13999,
						originalPrice: 17999,
						stock: 18,
						inStock: true
				}
		],
		shortDescription: "Flagship stability road running shoe with 4D GUIDANCE SYSTEM and PureGEL technology for adaptive marathon-distance comfort.",
		description: "- REVOLUTIONARY 4D GUIDANCE SYSTEM FOR ADAPTIVE OVERPRONATION STABILITY\n- REARFOOT PUREGEL TECHNOLOGY DELIVERS 65% SOFTER IMPACT THAN PREVIOUS GEL\n- FF BLAST PLUS ECO CUSHIONING MADE WITH APPROX. 20% BIO-BASED CONTENT\n- HYBRID ASICSGRIP RUBBER OUTSOLE FOR SUPERIOR ROAD TRACTION\n- ENGINEERED STRETCH KNIT UPPER WITH REFLECTIVE NIGHT SAFETY ACCENTS",
		specifications: {
				surface: "Road Running / Marathon",
				heelDrop: "10 mm",
				cushioning: "Maximum PureGEL & FF BLAST PLUS ECO",
				weight: "305 g (Men's UK 8.5)"
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "6 Months",
				type: "ASICS Warranty"
		},
		seller: {
				name: "ASICS Official Store",
				rating: 4.8,
				totalRatings: 12800,
				verified: true
		},
		tags: [
				"ASICS",
				"Gel-Kayano 31",
				"Running Shoes",
				"Marathon",
				"Stability",
				"PureGEL"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 81 - FASHION / BAGS
	// =========================================================
	{
		id: 81,
		name: "Bellroy Transit Workpack 20L Water-Resistant Laptop Backpack",
		brand: "Bellroy",
		company: "Bellroy Pty Ltd",
		Category: "Fashion",
		subcategory: "Bags",
		productType: "Backpack",
		images: [
				"https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
				"https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
				"https://images.unsplash.com/photo-1577733966973-d680bffd2e80"
		],
		image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
		rating: 4.8,
		totalRatings: 2190,
		totalReviews: 540,
		price: 15999,
		originalPrice: 19999,
		discountPercentage: 20,
		offers: [
				{
						title: "Premium Travel Deal",
						description: "Free Bellroy water-resistant tech pouch included"
				},
				{
						title: "Bank Offer",
						description: "Instant 10% discount on credit card EMI"
				}
		],
		colors: [
				{
						id: "midnight-black",
						name: "Midnight Black",
						image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
						price: 15999
				},
				{
						id: "ranger-green",
						name: "Ranger Green",
						image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
						price: 15999
				}
		],
		variants: [
				{
						id: "20l",
						name: "20 Litres (Fits 16-inch Laptop)",
						price: 15999,
						originalPrice: 19999,
						stock: 22,
						inStock: true
				}
		],
		shortDescription: "Sleek, organized work backpack made from recycled water-resistant fabric with separate 16-inch laptop compartment and hidden passport pocket.",
		description: "- SEPARATE ACCESS SUSPENDED 16-INCH LAPTOP & TABLET SLEEVE\n- WATER-RESISTANT DURABLE WOVEN RECYCLED BOTTLE FABRIC & AQUAGUARD ZIPPERS\n- CONTOURED PADDED HARNESS & BREATHABLE MESH BACK PANEL\n- HIDDEN SIDE ACCESS WATER BOTTLE POCKET & SUNGLASSES POUCH\n- LUGGAGE PASS-THROUGH STRAP SLIDES ONTO ROLLER SUITCASE HANDLES",
		specifications: {
				capacity: "20 Litres",
				dimensions: "500 x 320 x 180 mm",
				laptopCapacity: "Fits up to 16-inch MacBook Pro / Laptops",
				weight: "850g",
				materials: "100% Recycled PET Polyester & Environmentally Certified Leather"
		},
		inStock: true,
		stock: 22,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "3 Years",
				type: "Bellroy Global Warranty"
		},
		seller: {
				name: "ShopAll Premium Luggage",
				rating: 4.9,
				totalRatings: 7900,
				verified: true
		},
		tags: [
				"Bellroy",
				"Backpack",
				"Laptop Bag",
				"Workpack",
				"Water-Resistant",
				"Travel"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 82 - HOME & KITCHEN / KITCHEN APPLIANCES
	// =========================================================
	{
		id: 82,
		name: "Breville Barista Express Espresso Coffee Machine",
		brand: "Breville",
		company: "Breville Group",
		Category: "Home & Kitchen",
		subcategory: "Kitchen Appliances",
		productType: "Coffee Machine",
		images: [
				"https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
				"https://images.unsplash.com/photo-1570968915860-54d5c301fa9f",
				"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
		],
		image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
		rating: 4.9,
		totalRatings: 3450,
		totalReviews: 890,
		price: 54990,
		originalPrice: 69990,
		discountPercentage: 21,
		offers: [
				{
						title: "Barista Starter Pack",
						description: "Includes stainless steel milk jug, 54mm tamper & cleaning kit"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹4,000 instant discount on HDFC credit cards"
				}
		],
		colors: [
				{
						id: "brushed-steel",
						name: "Brushed Stainless Steel",
						image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
						price: 54990
				},
				{
						id: "black-sesame",
						name: "Black Sesame Matte",
						image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f",
						price: 56990
				}
		],
		variants: [
				{
						id: "standard",
						name: "Integrated Conical Burr Grinder Edition",
						price: 54990,
						originalPrice: 69990,
						stock: 14,
						inStock: true
				}
		],
		shortDescription: "All-in-one espresso machine with integrated precision conical burr grinder, 15-bar Italian pump, and manual micro-foam milk wand.",
		description: "- INTEGRATED STAINLESS STEEL PRECISION CONICAL BURR GRINDER WITH DOSE CONTROL\n- THERMOCOIL HEATING SYSTEM PRECISELY CONTROLS WATER TEMPERATURE\n- PRE-INFUSION FUNCTION GRADUALLY INCREASES WATER PRESSURE FOR OPTIMAL EXTRACTION\n- POWERFUL MANUAL STEAM WAND CREATES LATTE ART MICRO-FOAM MILK\n- 54MM STAINLESS STEEL PORTAFILTER WITH SINGLE & DUAL WALL BASKETS",
		specifications: {
				waterTankCapacity: "2.0 Litres (67 fl. oz) with Water Filter",
				beanHopperCapacity: "250 Grams (1/2 lb)",
				pumpPressure: "15 Bar Italian High-Pressure Pump",
				power: "1600 Watts Rapid Thermocoil",
				materials: "Heavy-Duty Brushed Stainless Steel & Cast Metal"
		},
		inStock: true,
		stock: 14,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Manufacturer Warranty"
		},
		seller: {
				name: "ShopAll Coffee Boutique",
				rating: 4.9,
				totalRatings: 11200,
				verified: true
		},
		tags: [
				"Breville",
				"Espresso Machine",
				"Coffee Maker",
				"Barista Express",
				"Latte Art",
				"Kitchen"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 83 - HOME & KITCHEN / KITCHEN APPLIANCES
	// =========================================================
	{
		id: 83,
		name: "Vitamix E310 Explorian Professional High-Speed Blender",
		brand: "Vitamix",
		company: "Vita-Mix Corporation",
		Category: "Home & Kitchen",
		subcategory: "Kitchen Appliances",
		productType: "Blender",
		images: [
				"https://images.unsplash.com/photo-1570222094114-d054a817e56b",
				"https://images.unsplash.com/photo-1585515320310-259814833e62",
				"https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
		],
		image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
		rating: 4.9,
		totalRatings: 2890,
		totalReviews: 740,
		price: 34990,
		originalPrice: 42990,
		discountPercentage: 18,
		offers: [
				{
						title: "Culinary Pack",
						description: "Includes Vitamix First Blends Recipe Book & Mini-Tamper"
				},
				{
						title: "Bank Offer",
						description: "Instant 10% discount on credit card EMI"
				}
		],
		colors: [
				{
						id: "black",
						name: "Slate Black",
						image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
						price: 34990
				}
		],
		variants: [
				{
						id: "14l-container",
						name: "1.4L Low-Profile Container (2.0 Peak HP)",
						price: 34990,
						originalPrice: 42990,
						stock: 16,
						inStock: true
				}
		],
		shortDescription: "Commercial-grade variable speed home blender capable of pulverizing whole foods, creating steaming hot soups, and churning nut butters.",
		description: "- 10 VARIABLE SPEED DIAL ALLOWS REFINEMENT OF EVERY TEXTURE\n- PULSE FEATURE FOR CHUNKY SALSAS, HEARTY SOUPS & CHOPPING\n- SPECIALLY DESIGNED AIRCRAFT-GRADE HARDENED STAINLESS STEEL BLADES\n- 1.4 LITRE BPA-FREE CONTAINER DESIGNED TO FOLD INGREDIENTS BACK TO BLADES\n- SELF-CLEANING WITH A DROP OF DISH SOAP & WARM WATER IN 30 TO 60 SECONDS",
		specifications: {
				motorPower: "2.0 Peak Horsepower High-Torque Motor",
				containerCapacity: "1.4 Litres (48 oz) BPA-Free Eastman Tritan",
				bladeMaterial: "Laser-Cut Hardened Stainless Steel 3-Inch Blades",
				controls: "Variable Speed Dial + Pulse Switch",
				electricalRatings: "220-240V, 50-60Hz, 1200-1400W"
		},
		inStock: true,
		stock: 16,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "5 Years",
				type: "Full Vitamix Manufacturer Warranty"
		},
		seller: {
				name: "Vitamix Authorized Store",
				rating: 4.9,
				totalRatings: 8700,
				verified: true
		},
		tags: [
				"Vitamix",
				"Blender",
				"Smoothie Maker",
				"Kitchen Appliance",
				"Food Processor",
				"Commercial"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 84 - HOME & KITCHEN / COOKWARE
	// =========================================================
	{
		id: 84,
		name: "Le Creuset Signature Enamelled Cast Iron Dutch Oven (4.2L)",
		brand: "Le Creuset",
		company: "Le Creuset SAS",
		Category: "Home & Kitchen",
		subcategory: "Cookware",
		productType: "Dutch Oven",
		images: [
				"https://images.unsplash.com/photo-1584990347449-a29243763f03",
				"https://images.unsplash.com/photo-1585515320310-259814833e62",
				"https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
		],
		image: "https://images.unsplash.com/photo-1584990347449-a29243763f03",
		rating: 4.9,
		totalRatings: 3120,
		totalReviews: 810,
		price: 27500,
		originalPrice: 32000,
		discountPercentage: 14,
		offers: [
				{
						title: "French Cookware Offer",
						description: "Complimentary silicone spatula & oven mitt included"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected bank cards"
				}
		],
		colors: [
				{
						id: "cerise-red",
						name: "Cerise Flame Red",
						image: "https://images.unsplash.com/photo-1584990347449-a29243763f03",
						price: 27500
				},
				{
						id: "marseille-blue",
						name: "Marseille Blue",
						image: "https://images.unsplash.com/photo-1585515320310-259814833e62",
						price: 27500
				}
		],
		variants: [
				{
						id: "24cm-42l",
						name: "24 cm (4.2 Litres / 4-5 Servings)",
						price: 27500,
						originalPrice: 32000,
						stock: 18,
						inStock: true
				}
		],
		shortDescription: "Handcrafted in France since 1925, the quintessential enamelled cast iron round casserole distributes heat evenly for slow-cooking and baking sourdough.",
		description: "- HANDMADE IN FRANCE FROM HIGHEST QUALITY ENAMELLED CAST IRON\n- SUPERIOR HEAT RETENTION & UNIFORM HEAT DISTRIBUTION WITH NO HOT SPOTS\n- ADVANCED SAND-COLORED INTERIOR ENAMEL RESISTS STAINING, DULLING & CHIPPING\n- TIGHT-FITTING LID LOCKS IN MOISTURE & AROMA\n- COMPATIBLE WITH INDUCTION, GAS, ELECTRIC & OVEN SAFE UP TO 260°C",
		specifications: {
				capacity: "4.2 Litres (4.5 Qt)",
				diameter: "24 cm (9.5 inches)",
				material: "Enamelled Cast Iron with Stainless Steel Knob",
				compatibility: "Induction, Gas, Ceramic, Electric, Halogen, Oven, Broiler",
				cleaning: "Dishwasher Safe (Hand Wash Recommended)"
		},
		inStock: true,
		stock: 18,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "Lifetime",
				type: "Le Creuset Lifetime Manufacturer Warranty"
		},
		seller: {
				name: "Le Creuset Flagship",
				rating: 4.9,
				totalRatings: 13400,
				verified: true
		},
		tags: [
				"Le Creuset",
				"Dutch Oven",
				"Cast Iron",
				"Cookware",
				"Casserole",
				"French Cookware"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 85 - BEAUTY / SKINCARE
	// =========================================================
	{
		id: 85,
		name: "La Roche-Posay Anthelios UVmune 400 Invisible Sunscreen SPF 50+",
		brand: "La Roche-Posay",
		company: "L'Oreal",
		Category: "Beauty",
		subcategory: "Skincare",
		productType: "Sunscreen",
		images: [
				"https://images.unsplash.com/photo-1556228578-8c89e6adf883",
				"https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
				"https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
		],
		image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
		rating: 4.8,
		totalRatings: 6840,
		totalReviews: 1690,
		price: 1890,
		originalPrice: 2200,
		discountPercentage: 14,
		offers: [
				{
						title: "Dermatologist Pick",
						description: "Buy 2 skincare essentials and get flat 10% off"
				},
				{
						title: "Bank Offer",
						description: "Extra 5% instant discount on UPI transactions"
				}
		],
		colors: [
				{
						id: "invisible",
						name: "Invisible Fluid",
						image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
						price: 1890
				}
		],
		variants: [
				{
						id: "50ml",
						name: "50 ml Fluid",
						price: 1890,
						originalPrice: 2200,
						stock: 50,
						inStock: true
				}
		],
		shortDescription: "Dermatologist-recommended ultra-high broad spectrum SPF 50+ sunscreen with Mexoryl 400 protecting against ultra-long UVA rays.",
		description: "- BREAKTHROUGH MEXORYL 400 FILTER GUARDS AGAINST ULTRA-LONG UVA RAYS (380-400NM)\n- ULTRA-LIGHT INVISIBLE FLUID TEXTURE LEAVES ZERO WHITE CAST OR GREASINESS\n- WATER, SWEAT & SAND RESISTANT FORMULA\n- FORMULATED WITH THERMAL SPRING WATER FOR SENSITIVE SKIN\n- NON-COMEDOGENIC & ANTI-EYE STINGING TESTED UNDER OPHTHALMOLOGICAL CONTROL",
		specifications: {
				spfRating: "SPF 50+ (Broad Spectrum UVA / UVB / Ultra-Long UVA)",
				skinType: "All Skin Types including Sensitive & Reactive Skin",
				volume: "50 ml (1.7 fl. oz)",
				finish: "Invisible Natural Matte Finish (No White Cast)",
				formulation: "Fragrance-Free Liquid Fluid"
		},
		inStock: true,
		stock: 50,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-3 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "ShopAll Derm Beauty",
				rating: 4.8,
				totalRatings: 21500,
				verified: true
		},
		tags: [
				"La Roche-Posay",
				"Anthelios",
				"Sunscreen",
				"SPF 50",
				"Skincare",
				"Dermatology"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 86 - BEAUTY / SKINCARE
	// =========================================================
	{
		id: 86,
		name: "COSRX Advanced Snail 96 Mucin Power Essence (100ml)",
		brand: "COSRX",
		company: "COSRX Inc.",
		Category: "Beauty",
		subcategory: "Skincare",
		productType: "Face Essence",
		images: [
				"https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
				"https://images.unsplash.com/photo-1556228578-8c89e6adf883",
				"https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
		],
		image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
		rating: 4.8,
		totalRatings: 9450,
		totalReviews: 2410,
		price: 1190,
		originalPrice: 1450,
		discountPercentage: 18,
		offers: [
				{
						title: "K-Beauty Festival",
						description: "Buy 2 K-Beauty viral products & get 15% discount"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "clear",
						name: "Clear Essence",
						image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
						price: 1190
				}
		],
		variants: [
				{
						id: "100ml",
						name: "100 ml",
						price: 1190,
						originalPrice: 1450,
						stock: 60,
						inStock: true
				}
		],
		shortDescription: "Viral Korean skincare essence enriched with 96.3% snail secretion filtrate to deeply hydrate, repair skin barriers, and boost radiance.",
		description: "- ENRICHED WITH 96.3% SKIN-LOVING SNAIL SECRETION FILTRATE\n- INTENSELY REPAIRS DAMAGED SKIN BARRIERS & HYDRATES TIRED SKIN\n- SOOTHES REDNESS, BLEMISHES & ACNE-PRONE IRRITATION\n- LIGHTWEIGHT NON-STICKY ABSORPTION FOR LUMINOUS GLASS SKIN\n- 100% CRUELTY-FREE (NO HARMS TO ANIMALS DURING COLLECTION)",
		specifications: {
				keyIngredients: "96.3% Snail Secretion Filtrate, Sodium Hyaluronate, Panthenol, Allantoin",
				volume: "100 ml (3.38 fl. oz)",
				skinType: "All Skin Types, Dehydrated, Sensitive, Barrier Damaged",
				formulation: "Cruelty-Free, Paraben-Free, Fragrance-Free"
		},
		inStock: true,
		stock: 60,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "K-Beauty Hub Authentic",
				rating: 4.9,
				totalRatings: 28900,
				verified: true
		},
		tags: [
				"COSRX",
				"Snail Mucin",
				"Essence",
				"K-Beauty",
				"Skincare",
				"Hydration",
				"Glass Skin"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 87 - BEAUTY / HAIR CARE
	// =========================================================
	{
		id: 87,
		name: "Dyson Supersonic Nural Intelligent Sensor Hair Dryer",
		brand: "Dyson",
		company: "Dyson Limited",
		Category: "Beauty",
		subcategory: "Hair Care",
		productType: "Hair Dryer",
		images: [
				"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
				"https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
				"https://images.unsplash.com/photo-1584990347449-a29243763f03"
		],
		image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
		rating: 4.9,
		totalRatings: 3210,
		totalReviews: 810,
		price: 41900,
		originalPrice: 46900,
		discountPercentage: 11,
		offers: [
				{
						title: "Dyson Styling Offer",
						description: "Includes 5 intelligent magnetic styling attachments + storage case"
				},
				{
						title: "Bank Offer",
						description: "No Cost EMI up to 12 months on all major cards"
				}
		],
		colors: [
				{
						id: "ceramic-patina",
						name: "Ceramic Patina & Topaz Orange",
						image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
						price: 41900
				},
				{
						id: "vinca-blue",
						name: "Vinca Blue & Rose",
						image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
						price: 41900
				}
		],
		variants: [
				{
						id: "nural-pro",
						name: "Nural Scalp Protect Edition",
						price: 41900,
						originalPrice: 46900,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Intelligent hair dryer equipped with a network of Nural sensors that automatically regulates heat to protect scalp health and enhance shine.",
		description: "- NURAL SENSORS AUTOMATICALLY REDUCE TEMPERATURE TO COMFORTABLE 55°C AT SCALP\n- CAPSULE ILLUMINATION CHANGES COLOR ACCORDING TO APPLIED HEAT LEVEL\n- ATTACHMENT LEARNING REMEMBERS YOUR LAST USED AIRFLOW & TEMPERATURE\n- PAUSE DETECT AUTOMATICALLY DEACTIVATES HEATER WHEN PLACED DOWN\n- FAST DRYING POWERED BY DYSON V9 DIGITAL MOTOR (110,000 RPM)",
		specifications: {
				motor: "Dyson Digital Motor V9 (110,000 RPM Air Multiplier)",
				sensors: "ToF (Time-of-Flight) Distance Sensor, Hall Sensor, Accelerometer",
				heatSettings: "4 Precise Heat Settings (100°C, 80°C, 60°C, 28°C Cold Shot)",
				power: "1600 Watts",
				cableLength: "2.8 Meters Salon Grade Cable"
		},
		inStock: true,
		stock: 15,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-3 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Dyson Official Home Pick & Drop Warranty"
		},
		seller: {
				name: "Dyson Official Store",
				rating: 4.9,
				totalRatings: 18400,
				verified: true
		},
		tags: [
				"Dyson",
				"Supersonic Nural",
				"Hair Dryer",
				"Hair Styling",
				"Beauty",
				"Scalp Care"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 88 - BEAUTY / FRAGRANCE
	// =========================================================
	{
		id: 88,
		name: "Dior Sauvage Eau de Parfum Men's Fragrance (100ml)",
		brand: "Dior",
		company: "Christian Dior SE",
		Category: "Beauty",
		subcategory: "Fragrance",
		productType: "Perfume",
		images: [
				"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
				"https://images.unsplash.com/photo-1547887537-6158d64c35b3",
				"https://images.unsplash.com/photo-1523293182086-7651a899d37f"
		],
		image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
		rating: 4.9,
		totalRatings: 7890,
		totalReviews: 2150,
		price: 12900,
		originalPrice: 14500,
		discountPercentage: 11,
		offers: [
				{
						title: "Luxury Fragrance Gift",
						description: "Complimentary 10ml travel atomizer + Dior gift box"
				},
				{
						title: "Bank Offer",
						description: "Instant 10% discount on luxury purchases with credit cards"
				}
		],
		colors: [
				{
						id: "midnight-blue",
						name: "Midnight Gradient Glass",
						image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
						price: 12900
				}
		],
		variants: [
				{
						id: "60ml",
						name: "60 ml EDP",
						price: 9800,
						originalPrice: 11200,
						stock: 25,
						inStock: true
				},
				{
						id: "100ml",
						name: "100 ml EDP",
						price: 12900,
						originalPrice: 14500,
						stock: 30,
						inStock: true
				}
		],
		shortDescription: "Iconic sensual men's eau de parfum featuring radiant Calabrian bergamot, spicy Sichuan pepper, and smoky Papua New Guinean vanilla absolute.",
		description: "- INTENSELY FRESH CALABRIAN BERGAMOT TOP NOTE\n- WARM SPICY SICHUAN PEPPER & STAR ANISE HEART\n- AMBROXAN & SMOKY PAPUA NEW GUINEAN VANILLA ABSOLUTE BASE\n- EXCEPTIONAL LONG-LASTING 12+ HOUR PROJECTION & SILLAGE\n- REFILLABLE MAGNETIZED HEAVY-GLASS LUXURY BOTTLE",
		specifications: {
				concentration: "Eau de Parfum (EDP)",
				volume: "100 ml (3.4 fl. oz)",
				olfactiveFamily: "Citrus, Woody, Oriental Spicy",
				origin: "Made in France"
		},
		inStock: true,
		stock: 30,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "100% Authenticity Guarantee"
		},
		seller: {
				name: "ShopAll Luxury Fragrances",
				rating: 4.9,
				totalRatings: 16700,
				verified: true
		},
		tags: [
				"Dior",
				"Sauvage",
				"Perfume",
				"Eau de Parfum",
				"Fragrance",
				"Men's Luxury"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 89 - SPORTS & TOYS / FITNESS
	// =========================================================
	{
		id: 89,
		name: "Bowflex SelectTech 552 Adjustable Dumbbells Set (Pair)",
		brand: "Bowflex",
		company: "Nautilus Inc.",
		Category: "Sports & Toys",
		subcategory: "Fitness",
		productType: "Adjustable Dumbbells",
		images: [
				"https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
				"https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
				"https://images.unsplash.com/photo-1517838277536-f5f99be501cd"
		],
		image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
		rating: 4.8,
		totalRatings: 3950,
		totalReviews: 890,
		price: 29999,
		originalPrice: 38999,
		discountPercentage: 23,
		offers: [
				{
						title: "Home Gym Offer",
						description: "Includes heavy-duty storage docking trays + 1-Year JRNY fitness app"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹2,500 instant discount on leading credit cards"
				}
		],
		colors: [
				{
						id: "black-red",
						name: "Black & Crimson Red",
						image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
						price: 29999
				}
		],
		variants: [
				{
						id: "pair-552",
						name: "Pair (2.5 kg to 24 kg per dumbbell)",
						price: 29999,
						originalPrice: 38999,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Space-saving adjustable dumbbells that replace 15 pairs of weights with a turn of a dial from 2.5 kg to 24 kg per hand.",
		description: "- REPLACES 15 SETS OF WEIGHTS IN A COMPACT FOOTPRINT\n- QUICK-TURN SELECTION DIAL ADJUSTS FROM 2.5 KG UP TO 24 KG (5 TO 52.5 LBS)\n- DURABLE MOULDING AROUND METAL PLATES PROVIDES A SMOOTH & QUIET WORKOUT\n- WIDER WEIGHT RANGE SUPPORTS ARMS, CHEST, BACK, LEGS & CORE EXERCISES\n- INCLUDES HEAVY-DUTY DOCKING BASES",
		specifications: {
				weightRange: "2.5 kg to 24 kg (5 to 52.5 lbs) per dumbbell",
				weightSettings: "15 Increments (2.5, 3.5, 4.5, 5.5, 7, 8, 9, 10, 11.5, 13.5, 16, 18, 20.5, 22.5, 24 kg)",
				dimensions: "40 x 20 x 23 cm (Each Dumbbell with Tray)",
				material: "Precision Steel Core with High-Impact Thermoplastic Coating"
		},
		inStock: true,
		stock: 15,
		delivery: {
				freeDelivery: true,
				deliveryDays: "4-7 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Manufacturer Warranty on Plates & Parts"
		},
		seller: {
				name: "ShopAll Fitness Equipment",
				rating: 4.8,
				totalRatings: 9400,
				verified: true
		},
		tags: [
				"Bowflex",
				"SelectTech",
				"Dumbbells",
				"Adjustable Weights",
				"Home Gym",
				"Strength Training"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 90 - SPORTS & TOYS / FITNESS
	// =========================================================
	{
		id: 90,
		name: "Manduka PRO 6mm Ultra-Dense High-Grip Yoga Mat",
		brand: "Manduka",
		company: "Manduka LLC",
		Category: "Sports & Toys",
		subcategory: "Fitness",
		productType: "Yoga Mat",
		images: [
				"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
				"https://images.unsplash.com/photo-1518611012118-696072aa579a",
				"https://images.unsplash.com/photo-1506126613408-eca07ce68773"
		],
		image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
		rating: 4.9,
		totalRatings: 3120,
		totalReviews: 780,
		price: 9999,
		originalPrice: 12999,
		discountPercentage: 23,
		offers: [
				{
						title: "Yoga Fest",
						description: "Free botanical organic yoga mat wash spray included"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "black-sage",
						name: "Black Sage",
						image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
						price: 9999
				},
				{
						id: "odyssey-blue",
						name: "Odyssey Deep Blue",
						image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
						price: 9999
				}
		],
		variants: [
				{
						id: "standard-71",
						name: "Standard 71-inch (180cm x 66cm x 6mm)",
						price: 9999,
						originalPrice: 12999,
						stock: 25,
						inStock: true
				}
		],
		shortDescription: "The gold standard of professional yoga mats, offering unmatched 6mm high-density joint cushioning and lifetime durability.",
		description: "- ULTRA-DENSE 6MM CUSHIONING PROTECTS JOINTS & PREVENTS SINKING\n- CLOSED-CELL SURFACE KEEPS MOISTURE & SWEAT FROM SEEPING INTO MAT\n- PROPRIETARY DOT PATTERN BOTTOM PREVENTS SLIDING ON HARDWOOD OR CARPET\n- OEKO-TEX CERTIFIED EMISSION-FREE SUSTAINABLE GERMAN MANUFACTURING\n- GUARANTEED TO NEVER PEEL, FLAKE OR WEAR OUT WITH MANDUKA LIFETIME GUARANTEE",
		specifications: {
				dimensions: "180 cm x 66 cm (71\" x 26\")",
				thickness: "6 mm Ultra-High Density Cushioning",
				weight: "3.4 kg (7.5 lbs)",
				material: "High-Grade Eco-Certified PVC (100% Latex-Free)"
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "Lifetime",
				type: "Manduka Lifetime Guarantee"
		},
		seller: {
				name: "Manduka Yoga Official",
				rating: 4.9,
				totalRatings: 11800,
				verified: true
		},
		tags: [
				"Manduka",
				"Yoga Mat",
				"Pilates",
				"Fitness",
				"Joint Support",
				"6mm Mat"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 91 - SPORTS & TOYS / CYCLING
	// =========================================================
	{
		id: 91,
		name: "Trek Marlin 7 Gen 3 Hardtail Mountain Bicycle",
		brand: "Trek",
		company: "Trek Bicycle Corporation",
		Category: "Sports & Toys",
		subcategory: "Cycling",
		productType: "Mountain Bike",
		images: [
				"https://images.unsplash.com/photo-1485965120184-e220f721d03e",
				"https://images.unsplash.com/photo-1532298229144-0ec0c57515c7",
				"https://images.unsplash.com/photo-1507035895480-2b3156c31fc8"
		],
		image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
		rating: 4.9,
		totalRatings: 1840,
		totalReviews: 420,
		price: 64999,
		originalPrice: 79999,
		discountPercentage: 19,
		offers: [
				{
						title: "Rider Package",
						description: "Free professional home assembly + Trek water bottle cage & kickstand"
				},
				{
						title: "No Cost EMI",
						description: "Up to 12 months No Cost EMI available"
				}
		],
		colors: [
				{
						id: "galactic-grey",
						name: "Galactic Grey to Dark Aquatic",
						image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
						price: 64999
				},
				{
						id: "matte-dnister-black",
						name: "Matte Dnister Black",
						image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7",
						price: 64999
				}
		],
		variants: [
				{
						id: "size-m",
						name: "Frame M (Rider 5'5\" - 5'9\" / 29\" Wheels)",
						price: 64999,
						originalPrice: 79999,
						stock: 8,
						inStock: true
				},
				{
						id: "size-l",
						name: "Frame L (Rider 5'9\" - 6'2\" / 29\" Wheels)",
						price: 64999,
						originalPrice: 79999,
						stock: 10,
						inStock: true
				}
		],
		shortDescription: "Trail-confident race-ready mountain bike with upgraded RockShox suspension, 1x10 Shimano Deore drivetrain, and hydraulic disc brakes.",
		description: "- LIGHTWEIGHT ALPHA SILVER ALUMINIUM FRAME WITH INTERNAL CABLE ROUTING\n- ROCKSHOX JUDY 100MM AIR SUSPENSION FORK WITH HYDRAULIC LOCKOUT\n- SHIMANO DEORE M4100 1X10 SPEED DRIVETRAIN (11-46T WIDE CASSETTE)\n- SHIMANO MT200 HYDRAULIC DISC BRAKES FOR UNMATCHED STOPPING POWER\n- BONTRAGER KOVEE TUBELESS READY 29-INCH WHEELS WITH 2.40\" TIRES",
		specifications: {
				frame: "Alpha Silver Aluminium, Internal Derailleur & Dropper Post Routing",
				fork: "RockShox Judy, Solo Air spring, TurnKey lockout, 100mm travel",
				drivetrain: "Shimano Deore M4100, 10 speed (1x10 Setup)",
				brakes: "Shimano MT200 Hydraulic Disc Brakes",
				weight: "14.6 kg (32.2 lbs)"
		},
		inStock: true,
		stock: 10,
		delivery: {
				freeDelivery: true,
				deliveryDays: "5-8 days"
		},
		warranty: {
				available: true,
				duration: "Lifetime",
				type: "Trek Lifetime Frame Warranty"
		},
		seller: {
				name: "Trek Premium Bicycles",
				rating: 4.9,
				totalRatings: 7800,
				verified: true
		},
		tags: [
				"Trek",
				"Marlin 7",
				"Mountain Bike",
				"Bicycle",
				"Cycling",
				"Shimano Deore",
				"Hydraulic Brakes"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 92 - SPORTS & TOYS / TOYS
	// =========================================================
	{
		id: 92,
		name: "LEGO Star Wars Millennium Falcon 75257 Detailed Starship",
		brand: "LEGO",
		company: "The LEGO Group",
		Category: "Sports & Toys",
		subcategory: "Toys",
		productType: "Building Blocks",
		images: [
				"https://images.unsplash.com/photo-1585366119957-e9730b6d0f60",
				"https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5",
				"https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
		],
		image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60",
		rating: 4.9,
		totalRatings: 5120,
		totalReviews: 1210,
		price: 14999,
		originalPrice: 18999,
		discountPercentage: 21,
		offers: [
				{
						title: "LEGO Collector Bonus",
						description: "Includes 7 Star Wars Minifigures (Finn, Chewbacca, Lando, C-3PO, Boolio, D-O & R2-D2)"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "grey",
						name: "Starship Grey",
						image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60",
						price: 14999
				}
		],
		variants: [
				{
						id: "1353-pieces",
						name: "1,353 Pieces Set",
						price: 14999,
						originalPrice: 18999,
						stock: 20,
						inStock: true
				}
		],
		shortDescription: "Iconic 1,353-piece LEGO Star Wars Corellian freighter model featuring rotating top and bottom gun turrets, 2 spring-loaded shooters, and detailed interior.",
		description: "- 1,353 AUTHENTIC LEGO BUILDING PIECES FOR IMMERSIVE STAR WARS BUILDING\n- OPENING TOP ROOF PANELS FOR ACCESSIBLE INTERIOR CARGO & COCKPIT PLAY\n- INCLUDES 7 ICONIC STAR WARS CHARACTERS: FINN, CHEWBACCA, LANDO, C-3PO & MORE\n- WORKING SPRING-LOADED LASER SHOOTERS & ROTATING TURRETS\n- MEASURES OVER 44CM LONG AND 32CM WIDE",
		specifications: {
				pieceCount: "1,353 Pieces",
				ageRecommendation: "9+ Years to Adult Collectors",
				dimensions: "Over 14cm high, 44cm long, 32cm wide",
				minifiguresIncluded: "7 Characters with Weapons & Accessories"
		},
		inStock: true,
		stock: 20,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "LEGO Missing Piece Guarantee"
		},
		seller: {
				name: "LEGO Certified Store",
				rating: 4.9,
				totalRatings: 22100,
				verified: true
		},
		tags: [
				"LEGO",
				"Star Wars",
				"Millennium Falcon",
				"Building Toy",
				"Collector",
				"Model Kit"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 93 - BOOKS / SELF-HELP
	// =========================================================
	{
		id: 93,
		name: "Deep Work: Rules for Focused Success in a Distracted World",
		brand: "Grand Central Publishing",
		company: "Hachette Book Group",
		Category: "Books",
		subcategory: "Self-Help",
		productType: "Paperback Book",
		images: [
				"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
				"https://images.unsplash.com/photo-1512820790803-83ca734da794",
				"https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
		],
		image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
		rating: 4.7,
		totalRatings: 8420,
		totalReviews: 1890,
		price: 399,
		originalPrice: 599,
		discountPercentage: 33,
		offers: [
				{
						title: "Bookworm Bundle",
						description: "Buy 3 bestselling non-fiction books & get extra 15% off"
				},
				{
						title: "Free Bookmark",
						description: "Includes inspirational wooden engraved bookmark"
				}
		],
		colors: [
				{
						id: "paperback",
						name: "Paperback Edition",
						image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
						price: 399
				}
		],
		variants: [
				{
						id: "paperback",
						name: "Paperback (304 Pages)",
						price: 399,
						originalPrice: 599,
						stock: 50,
						inStock: true
				},
				{
						id: "hardcover",
						name: "Collector's Hardcover",
						price: 799,
						originalPrice: 1099,
						stock: 25,
						inStock: true
				}
		],
		shortDescription: "Wall Street Journal Bestseller by Cal Newport detailing how the ability to focus without distraction is the superpower of the modern knowledge economy.",
		description: "- AUTHOR: CAL NEWPORT (GEORGETOWN COMPUTER SCIENCE PROFESSOR)\n- MASTERING DEEP WORK TO PRODUCE PEAK QUALITY OUTPUT IN LESS TIME\n- PRACTICAL FRAMEWORK: 4 RIGOROUS RULES TO ELIMINATE SHALLOW DISTRACTIONS\n- TRANSFORMATIONAL READ FOR STUDENTS, SOFTWARE ENGINEERS & KNOWLEDGE WORKERS",
		specifications: {
				author: "Cal Newport",
				publisher: "Grand Central Publishing / Piatkus",
				language: "English",
				pageCount: "304 Pages",
				isbn13: "978-0349411903"
		},
		inStock: true,
		stock: 50,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "ShopAll Book Depot",
				rating: 4.8,
				totalRatings: 38400,
				verified: true
		},
		tags: [
				"Cal Newport",
				"Deep Work",
				"Self-Help",
				"Productivity",
				"Focus",
				"Bestseller"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 94 - BOOKS / FICTION
	// =========================================================
	{
		id: 94,
		name: "Dune: Deluxe Hardcover Illustrated Edition by Frank Herbert",
		brand: "Ace Books",
		company: "Penguin Random House",
		Category: "Books",
		subcategory: "Fiction",
		productType: "Hardcover Book",
		images: [
				"https://images.unsplash.com/photo-1512820790803-83ca734da794",
				"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
				"https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
		],
		image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
		rating: 4.9,
		totalRatings: 11200,
		totalReviews: 2980,
		price: 1499,
		originalPrice: 2299,
		discountPercentage: 35,
		offers: [
				{
						title: "Sci-Fi Masterpiece",
						description: "Includes illustrated endpapers & fold-out poster map of Arrakis"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "deluxe-hardcover",
						name: "Embossed Foil Hardcover",
						image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
						price: 1499
				}
		],
		variants: [
				{
						id: "deluxe-hardcover",
						name: "Deluxe Illustrated Hardcover (688 Pages)",
						price: 1499,
						originalPrice: 2299,
						stock: 30,
						inStock: true
				}
		],
		shortDescription: "The definitive science fiction masterpiece set on the desert planet Arrakis, winner of the Hugo and Nebula Awards.",
		description: "- WINNER OF THE HUGO AND NEBULA AWARDS FOR BEST NOVEL\n- EPIC SAGA OF PAUL ATREIDES, SPICE MELANGE, AND THE DESERT FREMEN\n- LUXURY HARDCOVER WITH FOIL STAMPING, STAINED EDGES & ARRAKIS MAP\n- INSPIRATION BEHIND THE BLOCKBUSTER OSCAR-WINNING FILMS",
		specifications: {
				author: "Frank Herbert",
				publisher: "Ace / Penguin Random House",
				format: "Deluxe Hardcover with Dust Jacket",
				pageCount: "688 Pages",
				language: "English"
		},
		inStock: true,
		stock: 30,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "ShopAll Book Depot",
				rating: 4.8,
				totalRatings: 38400,
				verified: true
		},
		tags: [
				"Dune",
				"Frank Herbert",
				"Sci-Fi",
				"Fiction",
				"Novel",
				"Hardcover",
				"Arrakis"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 95 - ACCESSORIES / WALLETS
	// =========================================================
	{
		id: 95,
		name: "Bellroy Hide & Seek Premium Leather RFID Blocking Bifold Wallet",
		brand: "Bellroy",
		company: "Bellroy Pty Ltd",
		Category: "Accessories",
		subcategory: "Wallets",
		productType: "Leather Wallet",
		images: [
				"https://images.unsplash.com/photo-1627123424574-724758594e93",
				"https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
				"https://images.unsplash.com/photo-1511499767150-a48a237f0083"
		],
		image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
		rating: 4.8,
		totalRatings: 4120,
		totalReviews: 910,
		price: 7499,
		originalPrice: 8999,
		discountPercentage: 17,
		offers: [
				{
						title: "Leather Gift Pack",
						description: "Complimentary luxury foil gift presentation box"
				},
				{
						title: "Bank Offer",
						description: "10% instant discount on credit card transactions"
				}
		],
		colors: [
				{
						id: "caramel",
						name: "Caramel Brown",
						image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
						price: 7499
				},
				{
						id: "black",
						name: "Black / RFID",
						image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
						price: 7499
				}
		],
		variants: [
				{
						id: "rfid-hi",
						name: "RFID Edition (Holds 5-12 Cards)",
						price: 7499,
						originalPrice: 8999,
						stock: 35,
						inStock: true
				}
		],
		shortDescription: "Slim, timeless leather bifold wallet featuring hidden bill section, coin pouch, and RFID blocking security protection.",
		description: "- CRAFTED FROM PREMIUM CERTIFIED ENVIRONMENTALLY SOURCED LEATHER\n- SLIM PROFILE HOLDS 5 TO 12 CARDS AND FLAT UNCURLED CURRENCY NOTES\n- HIDDEN FLAP CONCEALS EXTRA CASH BILLS AND SPARE CARDS FOR SECURITY\n- BUILT-IN RFID BLOCKING LINING PROTECTS AGAINST DIGITAL THEFT\n- BACKED BY BELLROY'S 3-YEAR WARRANTY",
		specifications: {
				dimensions: "115 x 95 x 10 mm",
				capacity: "5 - 12 Cards + Full Size Cash Notes + Coins",
				leatherType: "Gold-Rated Leather Working Group Certified Cow Leather",
				protection: "RFID Blocking Frequency Shielding"
		},
		inStock: true,
		stock: 35,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "3 Years",
				type: "Bellroy Manufacturer Warranty"
		},
		seller: {
				name: "Bellroy Leather Goods",
				rating: 4.9,
				totalRatings: 11400,
				verified: true
		},
		tags: [
				"Bellroy",
				"Wallet",
				"Leather Wallet",
				"RFID",
				"Bifold",
				"Men's Accessories"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 96 - HEALTH / WELLNESS
	// =========================================================
	{
		id: 96,
		name: "Theragun Pro Plus 6-in-1 Percussive Therapy Deep Muscle Massage Gun",
		brand: "Therabody",
		company: "Therabody Inc.",
		Category: "Health",
		subcategory: "Wellness",
		productType: "Massage Gun",
		images: [
				"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
				"https://images.unsplash.com/photo-1518611012118-696072aa579a",
				"https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
		],
		image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
		rating: 4.9,
		totalRatings: 2840,
		totalReviews: 670,
		price: 49999,
		originalPrice: 59999,
		discountPercentage: 17,
		offers: [
				{
						title: "Athlete Recovery Bundle",
						description: "Includes 6 interchangeable therapy attachments & travel case"
				},
				{
						title: "No Cost EMI",
						description: "Up to 12 months No Cost EMI on all leading cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "Matte Stealth Black",
						image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
						price: 49999
				}
		],
		variants: [
				{
						id: "pro-plus-6in1",
						name: "Pro Plus 6-in-1 Multi-Therapy",
						price: 49999,
						originalPrice: 59999,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Ultimate multi-therapy device combining 16mm deep muscle percussive massage, near-infrared LED light therapy, vibration, and heat therapy.",
		description: "- SCIENTIFICALLY PROVEN 16MM PERCUSSIVE DEPTH REACHES 60% DEEPER INTO MUSCLE\n- BUILT-IN NEAR-INFRARED LED LIGHT THERAPY BOOSTS LOCAL CIRCULATION & REPAIR\n- HEATED MASSAGE ATTACHMENT WITH 3 FAST TEMPERATURE SETTINGS\n- PATENTED ERGONOMIC MULTI-GRIP TRIANGLE HANDLE PREVENTS WRIST STRAIN\n- GUIDED BLUETOOTH THERABODY APP ROUTINES WITH LCD SCREEN FEEDBACK",
		specifications: {
				amplitude: "16 mm Deep Tissue Muscle Stroke",
				stallForce: "Up to 60 lbs No-Stall Force",
				speeds: "5 Built-in Speeds (1750, 1900, 2100, 2200, 2400 PPM) + App Customization",
				therapies: "Percussive, Infrared LED, Heat, Vibration, Breathwork, Cold (Attachment sold separately)",
				batteryLife: "150 Minutes Fast USB-C Charging Battery"
		},
		inStock: true,
		stock: 15,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Therabody Official Manufacturer Warranty"
		},
		seller: {
				name: "Therabody Health Store",
				rating: 4.9,
				totalRatings: 9800,
				verified: true
		},
		tags: [
				"Theragun",
				"Therabody",
				"Massage Gun",
				"Recovery",
				"Deep Tissue",
				"Health & Wellness"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 97 - PET SUPPLIES / CAT SUPPLIES
	// =========================================================
	{
		id: 97,
		name: "Petlibro Automatic Pet Feeder with WiFi App & 1080p HD Camera",
		brand: "Petlibro",
		company: "Petlibro Inc.",
		Category: "Pet Supplies",
		subcategory: "Cat Supplies",
		productType: "Smart Pet Feeder",
		images: [
				"https://images.unsplash.com/photo-1543466835-00a7907e9de1",
				"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
				"https://images.unsplash.com/photo-1537151625747-768eb6cf92b2"
		],
		image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
		rating: 4.7,
		totalRatings: 3410,
		totalReviews: 760,
		price: 8999,
		originalPrice: 11999,
		discountPercentage: 25,
		offers: [
				{
						title: "Smart Pet Deal",
						description: "Includes food-grade 304 stainless steel feeding bowl & desiccant bag"
				},
				{
						title: "Bank Offer",
						description: "Instant discount with selected credit cards"
				}
		],
		colors: [
				{
						id: "white",
						name: "Glacier White",
						image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
						price: 8999
				},
				{
						id: "black",
						name: "Space Black",
						image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
						price: 8999
				}
		],
		variants: [
				{
						id: "5l-camera",
						name: "5L Capacity with 1080p Night Vision Camera",
						price: 8999,
						originalPrice: 11999,
						stock: 25,
						inStock: true
				}
		],
		shortDescription: "Smart WiFi pet feeder with 1080p wide-angle camera, 2-way audio intercom, scheduled feeding app controls, and anti-clog mechanism.",
		description: "- 1080P HD 145° WIDE-ANGLE CAMERA WITH AUTOMATIC INFRARED NIGHT VISION\n- 2-WAY REAL-TIME AUDIO ALLOWS TALKING & COMFORTING YOUR PET REMOTELY\n- SMARTPHONE APP SCHEDULES UP TO 10 MEALS A DAY WITH PORTION CONTROL\n- PATENTED ANTI-CLOG ROTARY MOTOR SYSTEM PREVENTS FOOD JAMMING\n- DUAL POWER SUPPLY WITH D-CELL BATTERY BACKUP DURING POWER OUTAGES",
		specifications: {
				capacity: "5 Litres (Approx. 2.5 kg Dry Kibble)",
				kibbleSize: "2mm - 15mm Dry Food",
				camera: "1080p FHD with 145° FOV & IR Night Vision",
				connectivity: "2.4GHz Wi-Fi via Petlibro Smartphone App",
				bowlMaterial: "Food Grade 304 Stainless Steel"
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Petlibro Manufacturer Warranty"
		},
		seller: {
				name: "ShopAll Pet Care",
				rating: 4.8,
				totalRatings: 12400,
				verified: true
		},
		tags: [
				"Petlibro",
				"Pet Feeder",
				"Cat Feeder",
				"Smart Pet Care",
				"WiFi Camera",
				"Dog Feeder"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 98 - WATCHES / LUXURY WATCHES
	// =========================================================
	{
		id: 98,
		name: "Seiko Prospex Automatic Diver 200m Mechanical Watch",
		brand: "Seiko",
		company: "Seiko Watch Corporation",
		Category: "Watches",
		subcategory: "Luxury Watches",
		productType: "Automatic Watch",
		images: [
				"https://images.unsplash.com/photo-1523275335684-37898b6baf30",
				"https://images.unsplash.com/photo-1524805444758-089113d48a6d",
				"https://images.unsplash.com/photo-1533139502658-0198f920d8e8"
		],
		image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
		rating: 4.9,
		totalRatings: 3820,
		totalReviews: 890,
		price: 44900,
		originalPrice: 52000,
		discountPercentage: 14,
		offers: [
				{
						title: "Diver Collection Pack",
						description: "Includes Seiko presentation gift box & warranty registration card"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹4,000 instant discount on selected credit cards"
				}
		],
		colors: [
				{
						id: "black-dial",
						name: "Matte Black Dial / Steel",
						image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
						price: 44900
				},
				{
						id: "save-the-ocean-blue",
						name: "Glacier Blue Sunburst",
						image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
						price: 46900
				}
		],
		variants: [
				{
						id: "4R35-steel",
						name: "Caliber 4R35 Automatic (200m ISO Diver)",
						price: 44900,
						originalPrice: 52000,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Iconic Japanese ISO-certified 200m professional automatic diver watch with scratch-resistant sapphire crystal and Lumibrite indices.",
		description: "- IN-HOUSE SEIKO CALIBER 4R35 AUTOMATIC MOVEMENT WITH 41-HOUR POWER RESERVE\n- 200-METER (660 FT) ISO DIVER CERTIFIED WATER RESISTANCE\n- ANTI-REFLECTIVE COATED SCRATCH-RESISTANT SAPPHIRE CRYSTAL\n- UNIDIRECTIONAL 120-CLICK ROTATING CERAMIC ELAPSED-TIME BEZEL\n- ULTRA-BRIGHT SEIKO LUMIBRITE HANDS & HOUR MARKERS FOR DEEP DIVE READABILITY",
		specifications: {
				movement: "Automatic Mechanical Caliber 4R35 (Hand-Winding & Hacking Capability)",
				caseDiameter: "43.8 mm, Thickness: 12.8 mm",
				caseMaterial: "316L Stainless Steel with Super-Hard Coating",
				crystal: "Sapphire Crystal with Anti-Reflective Coating",
				waterResistance: "200m / 660ft Diver's ISO Standard"
		},
		inStock: true,
		stock: 15,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "3 Years",
				type: "Seiko International Warranty"
		},
		seller: {
				name: "Seiko Luxury Timepieces",
				rating: 4.9,
				totalRatings: 18200,
				verified: true
		},
		tags: [
				"Seiko",
				"Prospex",
				"Automatic Watch",
				"Diver Watch",
				"Luxury Watch",
				"Sapphire"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 99 - ELECTRONICS / CAMERAS
	// =========================================================
	{
		id: 99,
		name: "Sony Alpha 7 IV Full-Frame Mirrorless Camera (Body)",
		brand: "Sony",
		company: "Sony Corporation",
		Category: "Electronics",
		subcategory: "Cameras",
		productType: "Mirrorless Camera",
		images: [
				"https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
				"https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
				"https://images.unsplash.com/photo-1512790182412-b19e6d62bc39"
		],
		image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
		rating: 4.9,
		totalRatings: 3410,
		totalReviews: 820,
		price: 214990,
		originalPrice: 242990,
		discountPercentage: 12,
		offers: [
				{
						title: "Pro Creator Kit",
						description: "Includes Sony 64GB Tough SD Card & extra NP-FZ100 battery"
				},
				{
						title: "No Cost EMI",
						description: "Up to 18 months No Cost EMI available"
				}
		],
		colors: [
				{
						id: "black",
						name: "Magnesium Alloy Black",
						image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
						price: 214990
				}
		],
		variants: [
				{
						id: "body-only",
						name: "Body Only",
						price: 214990,
						originalPrice: 242990,
						stock: 12,
						inStock: true
				},
				{
						id: "with-28-70mm",
						name: "With 28-70mm Zoom Lens",
						price: 232990,
						originalPrice: 262990,
						stock: 8,
						inStock: true
				}
		],
		shortDescription: "33MP full-frame Exmor R CMOS sensor camera with 4K 60p 10-bit 4:2:2 video recording and real-time Eye AF.",
		description: "- 33MP FULL-FRAME BACK-ILLUMINATED EXMOR R CMOS SENSOR\n- BIONZ XR IMAGE PROCESSING ENGINE DELIVERS UP TO 8X PROCESSING POWER\n- 4K 60P 10-BIT 4:2:2 MOVIE RECORDING WITH S-CINETONE COLOR SCIENCE\n- 759-POINT PHASE-DETECTION AF WITH REAL-TIME EYE AF FOR HUMANS/ANIMALS/BIRDS\n- 5.5-STEP 5-AXIS IN-BODY OPTICAL IMAGE STABILIZATION",
		specifications: {
				sensor: "33.0 Megapixel 35mm Full-Frame Exmor R CMOS Sensor",
				viewfinder: "3.68M-Dot Quad-VGA OLED Electronic Viewfinder",
				videoRecording: "4K UHD at 60p (Super 35mm), 4K 30p Full-frame 7K Oversampling",
				isoRange: "ISO 100-51200 (Expandable to 50-204800)",
				connectivity: [
						"Full-Size HDMI Type-A",
						"USB-C 3.2 Gen 2 (10Gbps)",
						"Dual SD/CFexpress Type A Slots",
						"Wi-Fi 5GHz"
				]
		},
		inStock: true,
		stock: 12,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Sony India Official Warranty"
		},
		seller: {
				name: "Sony Alpha Imaging Hub",
				rating: 4.9,
				totalRatings: 17400,
				verified: true
		},
		tags: [
				"Sony",
				"Alpha 7 IV",
				"Camera",
				"Mirrorless",
				"4K Video",
				"Full Frame",
				"Photography"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 100 - ELECTRONICS / DRONES
	// =========================================================
	{
		id: 100,
		name: "DJI Mini 4 Pro Drone with 4K/60fps HDR & RC-2 Controller",
		brand: "DJI",
		company: "SZ DJI Technology Co., Ltd.",
		Category: "Electronics",
		subcategory: "Drones",
		productType: "Camera Drone",
		images: [
				"https://images.unsplash.com/photo-1508614589041-895b88991e3e",
				"https://images.unsplash.com/photo-1473968512647-3e447244af8f",
				"https://images.unsplash.com/photo-1527977966376-1c8408f9f108"
		],
		image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
		rating: 4.9,
		totalRatings: 2890,
		totalReviews: 670,
		price: 98990,
		originalPrice: 114990,
		discountPercentage: 14,
		offers: [
				{
						title: "Fly More Bundle",
						description: "Includes 3 Intelligent Flight Batteries, Charging Hub & Shoulder Bag"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹5,000 instant discount on Axis Bank cards"
				}
		],
		colors: [
				{
						id: "light-grey",
						name: "Classic DJI Light Grey",
						image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
						price: 98990
				}
		],
		variants: [
				{
						id: "rc2-combo",
						name: "Fly More Combo Plus (DJI RC 2 Screen Controller)",
						price: 98990,
						originalPrice: 114990,
						stock: 14,
						inStock: true
				}
		],
		shortDescription: "Ultra-lightweight under 249g folding drone with omnidirectional obstacle sensing, 4K/60fps HDR true vertical shooting, and 20km FHD video transmission.",
		description: "- ULTRA-LIGHT FOLDING DESIGN WEIGHS LESS THAN 249G (NO REGISTRATION REQUIRED IN MOST REGIONS)\n- OMNIDIRECTIONAL ACTIVE OBSTACLE SENSING WITH ADVANCED APAS 5.0\n- 4K/60FPS HDR & 4K/100FPS SLOW-MOTION VIDEO WITH 10-BIT D-LOG M & HLG\n- TRUE VERTICAL SHOOTING ROTATES GIMBAL 90° FOR TIKTOK & INSTAGRAM REELS\n- UP TO 34 MINUTES FLIGHT TIME PER BATTERY (UP TO 102 MIN WITH COMBO)",
		specifications: {
				takeoffWeight: "Under 249 g",
				cameraSensor: "1/1.3-inch CMOS Sensor, 48MP Effective Pixels, f/1.7 Aperture",
				videoTransmission: "DJI O4 Video Transmission up to 20 km (FHD 1080p/60fps Live View)",
				maxFlightTime: "34 Minutes per Standard Intelligent Flight Battery",
				controller: "DJI RC 2 with Built-In 5.5-Inch 700-Nit FHD Touchscreen"
		},
		inStock: true,
		stock: 14,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "DJI Official Warranty"
		},
		seller: {
				name: "DJI Authorized Experience Store",
				rating: 4.9,
				totalRatings: 13900,
				verified: true
		},
		tags: [
				"DJI",
				"Mini 4 Pro",
				"Drone",
				"4K Video",
				"Aerial Photography",
				"Gimbal",
				"RC 2"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 101 - ELECTRONICS / MOBILE ACCESSORIES
	// =========================================================
	{
		id: 101,
		name: "Anker Prime 20,000mAh Power Bank (200W Total Output)",
		brand: "Anker",
		company: "Anker Innovations",
		Category: "Electronics",
		subcategory: "Mobile Accessories",
		productType: "Power Bank",
		images: [
				"https://images.unsplash.com/photo-1609592426815-56064f77c8e7",
				"https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
				"https://images.unsplash.com/photo-1541807084-5c52b6b3adef"
		],
		image: "https://images.unsplash.com/photo-1609592426815-56064f77c8e7",
		rating: 4.8,
		totalRatings: 4210,
		totalReviews: 980,
		price: 9999,
		originalPrice: 13999,
		discountPercentage: 29,
		offers: [
				{
						title: "Fast Power Deal",
						description: "Includes 140W 0.6m USB-C to USB-C charging cable & travel pouch"
				},
				{
						title: "Bank Offer",
						description: "Instant 10% discount on credit card transactions"
				}
		],
		colors: [
				{
						id: "dark-grey",
						name: "Anodized Dark Grey",
						image: "https://images.unsplash.com/photo-1609592426815-56064f77c8e7",
						price: 9999
				}
		],
		variants: [
				{
						id: "20000mah-200w",
						name: "20,000mAh (200W Output)",
						price: 9999,
						originalPrice: 13999,
						stock: 30,
						inStock: true
				}
		],
		shortDescription: "High-capacity power bank equipped with 2 USB-C and 1 USB-A ports delivering up to 200W total power with smart digital display.",
		description: "- 200W TOTAL POWER OUTPUT FAST CHARGES TWO LAPTOPS AT 100W EACH SIMULTANEOUSLY\n- 20,000MAH MASSIVE CAPACITY CHARGES IPHONE 15 OVER 3 TIMES OR MACBOOK AIR OVER 1 TIME\n- SMART DIGITAL DISPLAY SHOWS REAL-TIME BATTERY PERCENTAGE, INPUT & OUTPUT POWER\n- LIGHTNING-FAST 100W RECHARGING REFILLS THE POWER BANK FULLY IN JUST 1 HOUR 15 MINS\n- ACTIVE SHIELD 2.0 SAFETY SYSTEM MONITORS TEMPERATURE OVER 3 MILLION TIMES PER DAY",
		specifications: {
				capacity: "20,000 mAh (72 Wh Airline Compliant)",
				totalOutput: "200W Max (100W Max per Single USB-C Port)",
				ports: "2x USB-C Power Delivery 3.1 + 1x USB-A Fast Charge",
				display: "Full-Color TFT Smart Digital Display",
				dimensions: "126.9 x 54.6 x 49.6 mm (Weight: 540 g)"
		},
		inStock: true,
		stock: 30,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "24 Months",
				type: "Anker Hassle-Free Warranty"
		},
		seller: {
				name: "Anker Official Store",
				rating: 4.9,
				totalRatings: 21500,
				verified: true
		},
		tags: [
				"Anker",
				"Power Bank",
				"Fast Charging",
				"200W",
				"USB-C",
				"Laptop Charger",
				"20000mAh"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 102 - AUDIO / EARBUDS
	// =========================================================
	{
		id: 102,
		name: "Sony WF-1000XM5 Wireless Noise Cancelling Earbuds",
		brand: "Sony",
		company: "Sony Corporation",
		Category: "Audio",
		subcategory: "Earbuds",
		productType: "Wireless Earbuds",
		images: [
				"https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
				"https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b",
				"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
		],
		image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
		rating: 4.8,
		totalRatings: 6120,
		totalReviews: 1480,
		price: 24990,
		originalPrice: 29990,
		discountPercentage: 17,
		offers: [
				{
						title: "Audio Festival",
						description: "Flat ₹3,000 instant discount with ICICI & HDFC credit cards"
				},
				{
						title: "No Cost EMI",
						description: "Up to 6 months No Cost EMI available"
				}
		],
		colors: [
				{
						id: "black",
						name: "Matte Black",
						image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
						price: 24990
				},
				{
						id: "silver",
						name: "Platinum Silver",
						image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b",
						price: 24990
				}
		],
		variants: [
				{
						id: "standard",
						name: "High-Resolution Audio Wireless",
						price: 24990,
						originalPrice: 29990,
						stock: 35,
						inStock: true
				}
		],
		shortDescription: "Best-in-class noise cancellation wireless earbuds featuring Dynamic Driver X, dual proprietary processors, and bone conduction sensors.",
		description: "- THE BEST NOISE CANCELLING WITH DUAL PROCESSORS V2 & HD QN2E\n- ASTONISHING SOUND QUALITY POWERED BY DYNAMIC DRIVER X TRANSDUCER\n- SONY'S BEST EVER CALL QUALITY WITH BONE CONDUCTION SENSORS & AI NOISE REDUCTION\n- SMALLER & LIGHTER ERGONOMIC DESIGN WITH NOISE ISOLATION FOAM TIPS\n- MULTIPOINT CONNECTION PAIRS TO TWO BLUETOOTH DEVICES SIMULTANEOUSLY",
		specifications: {
				driverUnit: "8.4 mm Dynamic Driver X",
				batteryLife: "8 Hours (Earbuds with ANC) + 16 Hours (Charging Case) = 24 Hours Total",
				charging: "Qi Wireless Charging + USB-C Fast Charge (3 min for 60 min playback)",
				codecs: "LDAC, AAC, SBC, LC3, Hi-Res Audio Wireless Certified",
				waterResistance: "IPX4 Splash and Sweat Resistant"
		},
		inStock: true,
		stock: 35,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-3 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Sony Manufacturer Warranty"
		},
		seller: {
				name: "Sony Official Audio",
				rating: 4.8,
				totalRatings: 24100,
				verified: true
		},
		tags: [
				"Sony",
				"WF-1000XM5",
				"Earbuds",
				"ANC",
				"Wireless",
				"Hi-Res Audio",
				"LDAC"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 103 - AUDIO / HEADPHONES
	// =========================================================
	{
		id: 103,
		name: "Audio-Technica ATH-M50x Professional Studio Monitor Headphones",
		brand: "Audio-Technica",
		company: "Audio-Technica Corporation",
		Category: "Audio",
		subcategory: "Headphones",
		productType: "Studio Headphones",
		images: [
				"https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
				"https://images.unsplash.com/photo-1484704849700-f032a568e944",
				"https://images.unsplash.com/photo-1546435770-a3e426bf472b"
		],
		image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
		rating: 4.9,
		totalRatings: 12400,
		totalReviews: 3450,
		price: 13990,
		originalPrice: 17990,
		discountPercentage: 22,
		offers: [
				{
						title: "Studio Pro Bundle",
						description: "Includes 3 detachable cables (1.2m-3m coiled, 3m straight, 1.2m straight) & 6.3mm adapter"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "Professional Studio Black",
						image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
						price: 13990
				}
		],
		variants: [
				{
						id: "m50x-wired",
						name: "Professional Wired Studio Edition",
						price: 13990,
						originalPrice: 17990,
						stock: 40,
						inStock: true
				}
		],
		shortDescription: "Industry standard professional studio monitor headphones critically acclaimed by audio engineers and pro audio reviewers worldwide.",
		description: "- PROPRIETARY 45MM LARGE-APERTURE DRIVERS WITH RARE EARTH MAGNETS\n- EXCEPTIONAL CLARITY THROUGHOUT EXTENDED FREQUENCY RANGE WITH DEEP ACCURATE BASS\n- CIRCUMAURAL CONTOURS AROUND EARS FOR EXCELLENT SOUND ISOLATION IN LOUD ENVIRONMENTS\n- 90-DEGREE SWIVELING EARCUPS FOR EASY ONE-EAR MONITORING\n- PROFESSIONAL-GRADE EARPAD AND HEADBAND MATERIAL DELIVERS SUPERIOR COMFORT",
		specifications: {
				driverDiameter: "45 mm Neodymium Magnets and CCAW Voice Coils",
				frequencyResponse: "15 Hz - 28,000 Hz",
				maximumInputPower: "1,600 mW at 1 kHz",
				sensitivity: "99 dB",
				impedance: "38 Ohms"
		},
		inStock: true,
		stock: 40,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "3 Years",
				type: "Audio-Technica Authorized Warranty"
		},
		seller: {
				name: "Pro Audio Studio Gear",
				rating: 4.9,
				totalRatings: 27800,
				verified: true
		},
		tags: [
				"Audio-Technica",
				"ATH-M50x",
				"Studio Monitor",
				"Headphones",
				"Sound Engineering",
				"Music Production"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 104 - AUDIO / TURNTABLES
	// =========================================================
	{
		id: 104,
		name: "Audio-Technica AT-LP120XUSB Direct-Drive Vinyl Turntable",
		brand: "Audio-Technica",
		company: "Audio-Technica Corporation",
		Category: "Audio",
		subcategory: "Turntables",
		productType: "Turntable",
		images: [
				"https://images.unsplash.com/photo-1539185441755-769473a23570",
				"https://images.unsplash.com/photo-1545454675-3531b543be5d",
				"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
		],
		image: "https://images.unsplash.com/photo-1539185441755-769473a23570",
		rating: 4.8,
		totalRatings: 2450,
		totalReviews: 590,
		price: 34990,
		originalPrice: 42990,
		discountPercentage: 19,
		offers: [
				{
						title: "Vinyl Enthusiast Deal",
						description: "Includes pre-mounted AT-VM95E Dual Magnet phono cartridge & removable dust cover"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹3,000 instant discount on selected credit cards"
				}
		],
		colors: [
				{
						id: "silver",
						name: "Classic Silver Aluminum",
						image: "https://images.unsplash.com/photo-1539185441755-769473a23570",
						price: 34990
				},
				{
						id: "black",
						name: "Midnight Black",
						image: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
						price: 34990
				}
		],
		variants: [
				{
						id: "lp120xusb",
						name: "Direct-Drive USB + Analog Edition",
						price: 34990,
						originalPrice: 42990,
						stock: 12,
						inStock: true
				}
		],
		shortDescription: "Professional direct-drive turntable with selectable 33/45/78 RPM speeds, built-in switchable phono preamp, and USB audio output for vinyl digitization.",
		description: "- DIRECT-DRIVE DC SERVO MOTOR WITH SELECTABLE 33/45/78 RPM SPEEDS\n- BALANCED S-SHAPED TONEARM WITH HYDRAULICALLY DAMPED LIFT CONTROL\n- AT-VM95E DUAL MAGNET PHONO CARTRIDGE WITH 0.3 X 0.7 MIL ELLIPTICAL STYLUS\n- USB OUTPUT CONNECTS DIRECTLY TO MAC/PC FOR DIGITAL FLAC/WAV RECORDING\n- BUILT-IN SWITCHABLE PHONO PRE-AMPLIFIER FOR DIRECT CONNECTION TO POWERED SPEAKERS",
		specifications: {
				motor: "Direct Drive High-Torque DC Servo Motor",
				speeds: "33-1/3 RPM, 45 RPM, 78 RPM with Quartz Pitch Lock",
				platter: "Die-Cast Aluminum Platter with Heavy-Damped Felt Mat",
				outputs: "Phono (Pre-Amp Bypass), Line (RCA Stereo), USB Type-B"
		},
		inStock: true,
		stock: 12,
		delivery: {
				freeDelivery: true,
				deliveryDays: "3-6 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Audio-Technica Manufacturer Warranty"
		},
		seller: {
				name: "Vinyl & Hi-Fi Boutique",
				rating: 4.9,
				totalRatings: 6800,
				verified: true
		},
		tags: [
				"Audio-Technica",
				"AT-LP120XUSB",
				"Turntable",
				"Vinyl",
				"Record Player",
				"Hi-Fi Audio"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 105 - GAMING / GAMING ACCESSORIES
	// =========================================================
	{
		id: 105,
		name: "Thrustmaster T300 RS GT Force Feedback Racing Wheel & Pedals",
		brand: "Thrustmaster",
		company: "Guillemot Corporation",
		Category: "Gaming",
		subcategory: "Gaming Accessories",
		productType: "Racing Wheel",
		images: [
				"https://images.unsplash.com/photo-1592840062661-3e3b8a6e8c48",
				"https://images.unsplash.com/photo-1607853202273-797f1c22a38e",
				"https://images.unsplash.com/photo-1550745165-9bc0b252726f"
		],
		image: "https://images.unsplash.com/photo-1592840062661-3e3b8a6e8c48",
		rating: 4.8,
		totalRatings: 1890,
		totalReviews: 410,
		price: 39999,
		originalPrice: 48999,
		discountPercentage: 18,
		offers: [
				{
						title: "Sim Racing Bundle",
						description: "Official Gran Turismo licensed product with T3PA-GT 3-pedal set included"
				},
				{
						title: "Bank Offer",
						description: "Instant ₹3,500 discount on selected credit cards"
				}
		],
		colors: [
				{
						id: "black-gt",
						name: "GT Edition Brushed Metal",
						image: "https://images.unsplash.com/photo-1592840062661-3e3b8a6e8c48",
						price: 39999
				}
		],
		variants: [
				{
						id: "t300-gt",
						name: "T300 RS GT Edition (PS5 / PS4 / PC)",
						price: 39999,
						originalPrice: 48999,
						stock: 10,
						inStock: true
				}
		],
		shortDescription: "Industrial-grade dual-belt 1080° force feedback racing wheel with brushless motor and adjustable 3-pedal GT set.",
		description: "- 25-WATT BRUSHLESS MOTOR DELIVERS FAST, SMOOTH & ULTRA-RESPONSIVE FORCE FEEDBACK\n- DUAL-BELT PULLEY SYSTEM ELIMINATES DEAD ZONES & REDUCES MECHANICAL COGGING\n- H.E.A.R.T CONTACTLESS MAGNETIC SENSORS ENSURE LIFELONG 16-BIT PRECISION\n- DETACHABLE 28CM REINFORCED RUBBER RACING WHEEL WITH 100% METAL SEQUENTIAL PADDLES\n- FULLY COMPATIBLE WITH PLAYSTATION 5, PLAYSTATION 4 AND WINDOWS PC",
		specifications: {
				rotationAngle: "Adjustable from 270° to 1080°",
				forceFeedback: "Industrial Brushless Motor (25W)",
				pedals: "T3PA-GT 3-Pedal Set (100% Metal Accelerator, Brake with Conical Rubber Mod, Clutch)",
				compatibility: "PS5, PS4, PC (Windows 10/11)"
		},
		inStock: true,
		stock: 10,
		delivery: {
				freeDelivery: true,
				deliveryDays: "3-5 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Thrustmaster Manufacturer Warranty"
		},
		seller: {
				name: "SimRacing Pro Store",
				rating: 4.8,
				totalRatings: 5400,
				verified: true
		},
		tags: [
				"Thrustmaster",
				"T300 RS GT",
				"Racing Wheel",
				"Sim Racing",
				"PS5",
				"PC Gaming",
				"Force Feedback"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 106 - GAMING / GAMING ACCESSORIES
	// =========================================================
	{
		id: 106,
		name: "SteelSeries Arctis Nova Pro Wireless Multi-System Gaming Headset",
		brand: "SteelSeries",
		company: "SteelSeries ApS",
		Category: "Gaming",
		subcategory: "Gaming Accessories",
		productType: "Wireless Gaming Headset",
		images: [
				"https://images.unsplash.com/photo-1546435770-a3e426bf472b",
				"https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
				"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef"
		],
		image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
		rating: 4.8,
		totalRatings: 2750,
		totalReviews: 620,
		price: 34999,
		originalPrice: 42999,
		discountPercentage: 19,
		offers: [
				{
						title: "Pro Gamer Pack",
						description: "Includes OLED Wireless Base Station & 2 Swappable Hot-Swap Batteries"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹3,000 instant discount on credit card payments"
				}
		],
		colors: [
				{
						id: "black",
						name: "Starlight Black",
						image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
						price: 34999
				}
		],
		variants: [
				{
						id: "pc-ps-switch",
						name: "Multi-System (PC / PlayStation / Switch / Mobile)",
						price: 34999,
						originalPrice: 42999,
						stock: 18,
						inStock: true
				}
		],
		shortDescription: "Premium multi-system wireless gaming headset with Nova Pro Acoustic System, Active Noise Cancellation, and Infinity Power hot-swap batteries.",
		description: "- NOVA PRO ACOUSTIC SYSTEM COMBINES HI-RES AUDIO DRIVERS & PRO SONAR SOFTWARE\n- ACTIVE NOISE CANCELLATION (ANC) WITH 4-MIC HYBRID SYSTEM TO BLOCK BACKGROUND DISTRACTIONS\n- INFINITY POWER SYSTEM INCLUDES 2 HOT-SWAPPABLE BATTERIES FOR UNLIMITED BATTERY PLAY\n- MULTI-SYSTEM OLED BASE STATION CONNECTS PC & CONSOLE SIMULTANEOUSLY\n- CLEARCAST GEN 2 BIDIRECTIONAL NOISE-CANCELLING RETRACTABLE MICROPHONE",
		specifications: {
				drivers: "40 mm High-Res Neodymium Drivers (10–40,000 Hz)",
				wirelessRange: "12 m (40 ft) on 2.4 GHz Quantum 2.0 Wireless + Bluetooth 5.0",
				batterySystem: "Dual 44-Hour Hot-Swappable Battery System (22h each)",
				compatibility: "PC, PS5, PS4, Nintendo Switch, Mac, Mobile / Bluetooth"
		},
		inStock: true,
		stock: 18,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "SteelSeries Global Warranty"
		},
		seller: {
				name: "ShopAll Esports Gear",
				rating: 4.8,
				totalRatings: 8900,
				verified: true
		},
		tags: [
				"SteelSeries",
				"Arctis Nova Pro",
				"Gaming Headset",
				"Wireless",
				"ANC",
				"PS5",
				"PC Gaming"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 107 - GAMING / GAMING ACCESSORIES
	// =========================================================
	{
		id: 107,
		name: "Razer Viper V3 Pro Ultra-Lightweight Wireless Esports Mouse (54g)",
		brand: "Razer",
		company: "Razer Inc.",
		Category: "Gaming",
		subcategory: "Gaming Accessories",
		productType: "Gaming Mouse",
		images: [
				"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
				"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
				"https://images.unsplash.com/photo-1587829741301-dc798b83add3"
		],
		image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
		rating: 4.9,
		totalRatings: 3420,
		totalReviews: 780,
		price: 14999,
		originalPrice: 17999,
		discountPercentage: 17,
		offers: [
				{
						title: "Esports HyperPolling",
						description: "Includes true 8000Hz HyperPolling Wireless Dongle in box"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "Matte Black",
						image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
						price: 14999
				},
				{
						id: "white",
						name: "Arctic White",
						image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
						price: 14999
				}
		],
		variants: [
				{
						id: "8k-wireless",
						name: "True 8000Hz HyperPolling Wireless",
						price: 14999,
						originalPrice: 17999,
						stock: 30,
						inStock: true
				}
		],
		shortDescription: "54g ultra-lightweight symmetrical wireless esports mouse with Focus Pro 35K Gen-2 optical sensor and true 8000Hz polling rate.",
		description: "- 54G ULTRA-LIGHTWEIGHT SYMMETRICAL COMPETITIVE DESIGN TESTED BY ESPORTS PROS\n- RAZER FOCUS PRO 35K GEN-2 OPTICAL SENSOR WITH 99.8% RESOLUTION ACCURACY\n- TRUE 8000HZ WIRELESS POLLING RATE FOR 0.125MS RESPONSE TIMES\n- RAZER OPTICAL MOUSE SWITCHES GEN-3 RATED FOR 90 MILLION CLICKS WITH ZERO DEBOUNCE DELAY\n- UP TO 95 HOURS OF CONTINUOUS BATTERY LIFE AT 1000HZ (17H AT 8000HZ)",
		specifications: {
				sensor: "Razer Focus Pro 35K Gen-2 Optical (100–35,000 DPI)",
				maxSpeed: "750 IPS at 70 G Max Acceleration",
				weight: "54 grams (Ultra-Lightweight Solid Shell)",
				pollingRate: "Up to 8000Hz Wireless with Included HyperPolling Dongle"
		},
		inStock: true,
		stock: 30,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Razer Manufacturer Warranty"
		},
		seller: {
				name: "Razer Flagship Store",
				rating: 4.8,
				totalRatings: 15600,
				verified: true
		},
		tags: [
				"Razer",
				"Viper V3 Pro",
				"Gaming Mouse",
				"Esports",
				"8000Hz",
				"Ultra-Lightweight",
				"Wireless"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 108 - COMPUTERS / MONITORS
	// =========================================================
	{
		id: 108,
		name: "ASUS ProArt 32-inch 4K HDR Color-Accurate Professional Monitor",
		brand: "ASUS ProArt",
		company: "ASUSTeK Computer Inc.",
		Category: "Computers",
		subcategory: "Monitors",
		productType: "Professional Monitor",
		images: [
				"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
				"https://images.unsplash.com/photo-1547082299-de196ea013d6",
				"https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
		],
		image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
		rating: 4.8,
		totalRatings: 1840,
		totalReviews: 390,
		price: 64999,
		originalPrice: 79999,
		discountPercentage: 19,
		offers: [
				{
						title: "Adobe Creator Deal",
						description: "Includes 3 Months complimentary Adobe Creative Cloud subscription"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹5,000 instant discount on HDFC & ICICI credit cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "ProArt Matte Black & C-Clamp",
						image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
						price: 64999
				}
		],
		variants: [
				{
						id: "32-4k-pro",
						name: "32-inch 4K UHD IPS (100% sRGB / 100% Rec.709)",
						price: 64999,
						originalPrice: 79999,
						stock: 12,
						inStock: true
				}
		],
		shortDescription: "32-inch 4K UHD (3840 x 2160) factory-calibrated IPS monitor with Delta E < 2 color accuracy, HDR-400, and 90W USB-C Power Delivery.",
		description: "- 32-INCH 4K UHD (3840X2160) IPS PANEL WITH 178° WIDE VIEWING ANGLE\n- INTERNATIONAL COLOR STANDARD 100% SRGB & 100% REC. 709 COLOR GAMUT\n- CALMAN VERIFIED WITH FACTORY CALIBRATED DELTA E < 2 ACCURACY\n- EXTENSIVE CONNECTIVITY INCLUDING 90W POWER DELIVERY USB-C, DISPLAYPORT & HDMI\n- ERGONOMIC STAND WITH TILT, SWIVEL, PIVOT & HEIGHT ADJUSTMENTS + C-CLAMP DESK MOUNT",
		specifications: {
				display: {
						size: "32 inch (81.28 cm)",
						type: "4K UHD IPS (3840 x 2160)",
						refreshRate: "60Hz"
				},
				colorAccuracy: "Delta E < 2, 100% sRGB, 100% Rec.709",
				brightness: "400 cd/m² (VESA DisplayHDR 400 Certified)",
				ports: "1x USB-C (90W PD & DP Alt Mode), 1x DisplayPort 1.2, 2x HDMI 2.0, 4x USB 3.2 Hub"
		},
		inStock: true,
		stock: 12,
		delivery: {
				freeDelivery: true,
				deliveryDays: "3-5 days"
		},
		warranty: {
				available: true,
				duration: "3 Years",
				type: "ASUS ProArt Zero Bright Dot Warranty"
		},
		seller: {
				name: "ASUS ProArt Official",
				rating: 4.9,
				totalRatings: 11200,
				verified: true
		},
		tags: [
				"ASUS ProArt",
				"4K Monitor",
				"Color Accurate",
				"Photo Editing",
				"Video Editing",
				"USB-C",
				"32 inch"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 109 - COMPUTERS / KEYBOARDS
	// =========================================================
	{
		id: 109,
		name: "Keychron Q1 Pro QMK Wireless Custom Mechanical Keyboard",
		brand: "Keychron",
		company: "Keychron Inc.",
		Category: "Computers",
		subcategory: "Keyboards",
		productType: "Mechanical Keyboard",
		images: [
				"https://images.unsplash.com/photo-1587829741301-dc798b83add3",
				"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
				"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
		],
		image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
		rating: 4.9,
		totalRatings: 2840,
		totalReviews: 690,
		price: 18999,
		originalPrice: 22999,
		discountPercentage: 17,
		offers: [
				{
						title: "Custom Keyboards Deal",
						description: "Includes Mac & Windows OSA profile double-shot PBT keycaps"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected credit cards"
				}
		],
		colors: [
				{
						id: "carbon-black",
						name: "Full CNC Carbon Black",
						image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
						price: 18999
				},
				{
						id: "silver-grey",
						name: "Silver Grey Anodized",
						image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
						price: 18999
				}
		],
		variants: [
				{
						id: "banana-switch",
						name: "K Pro Banana Tactile Switches (75% Layout)",
						price: 18999,
						originalPrice: 22999,
						stock: 18,
						inStock: true
				},
				{
						id: "red-switch",
						name: "K Pro Red Linear Switches (75% Layout)",
						price: 18999,
						originalPrice: 22999,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "75% full aluminum CNC body wireless custom mechanical keyboard with double-gasket acoustic design and QMK/VIA key remapping.",
		description: "- PREMIUM FULL CNC MACHINED 6063 ALUMINUM SOLID HEAVYWEIGHT BODY\n- DOUBLE-GASKET ACOUSTIC MOUNTING DESIGN REDUCES RESONANCE FOR DEEP THOCKY SOUND\n- QMK & VIA SUPPORT ENABLES COMPLETE CUSTOM RE-MAPPING OF EVERY KEY & ROTARY KNOB\n- BLUETOOTH 5.1 WIRELESS CONNECTS UP TO 3 DEVICES + WIRED TYPE-C MODE\n- HOT-SWAPPABLE PCB SUPPORTS BOTH 3-PIN AND 5-PIN MX SWITCHES",
		specifications: {
				layout: "75% Exploded Layout with Programmable Rotary Encoder Knob",
				bodyMaterial: "Full CNC Machined Aluminum (Weight: approx. 1.73 kg)",
				switches: "Factory Pre-Lubed Keychron K Pro Mechanical Switches",
				battery: "4000 mAh Rechargeable Li-polymer (Up to 300 Hours Battery Life)",
				compatibility: "macOS, Windows, Linux, Android, iOS"
		},
		inStock: true,
		stock: 18,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Keychron Official Warranty"
		},
		seller: {
				name: "Keychron Mechanical Hub",
				rating: 4.9,
				totalRatings: 8700,
				verified: true
		},
		tags: [
				"Keychron",
				"Q1 Pro",
				"Mechanical Keyboard",
				"Custom Keyboard",
				"Wireless",
				"QMK",
				"75% Layout"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 110 - COMPUTERS / LAPTOPS
	// =========================================================
	{
		id: 110,
		name: "Dell XPS 15 InfinityEdge Touchscreen Laptop",
		brand: "Dell",
		company: "Dell Technologies",
		Category: "Computers",
		subcategory: "Laptops",
		productType: "Ultrabook",
		images: [
				"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
				"https://images.unsplash.com/photo-1603302576837-37561b2e2302",
				"https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
		],
		image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
		rating: 4.8,
		totalRatings: 2190,
		totalReviews: 480,
		price: 219990,
		originalPrice: 249990,
		discountPercentage: 12,
		offers: [
				{
						title: "Dell Premier Deal",
						description: "Includes Dell Premier 15-inch sleeve + 130W Type-C adapter"
				},
				{
						title: "No Cost EMI",
						description: "No Cost EMI up to 12 months available on all cards"
				}
		],
		colors: [
				{
						id: "platinum-silver",
						name: "Platinum Silver with Black Carbon Fiber",
						image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
						price: 219990
				}
		],
		variants: [
				{
						id: "i9-32gb-1tb",
						name: "Intel Core i9-13900H / 32GB / 1TB / RTX 4060 / 3.5K OLED Touch",
						price: 219990,
						originalPrice: 249990,
						stock: 8,
						inStock: true
				}
		],
		shortDescription: "Flagship 15.6-inch 3.5K OLED InfinityEdge touch laptop crafted from CNC aluminum and aerospace carbon fiber with NVIDIA RTX 4060.",
		description: "- 13TH GEN INTEL CORE I9-13900H 14-CORE PROCESSOR (UP TO 5.4 GHZ)\n- 15.6-INCH 3.5K (3456X2160) INFINITYEDGE OLED TOUCH DISPLAY WITH DISPLAYHDR 500\n- NVIDIA GEFORCE RTX 4060 8GB GDDR6 DEDICATED GRAPHICS\n- AEROSPACE-INSPIRED CARBON FIBER PALM REST WITH HUGE PRECISION GLASS TOUCHPAD\n- QUAD-SPEAKER DESIGN WITH WAVES NX 3D AUDIO",
		specifications: {
				display: {
						size: "15.6 inch 3.5K OLED Touch",
						type: "OLED InfinityEdge (3456x2160) 400 nits",
						refreshRate: "60Hz"
				},
				processor: {
						name: "Intel Core i9-13900H (14 Cores, 20 Threads, 24MB Cache)"
				},
				graphics: "NVIDIA GeForce RTX 4060 8GB GDDR6 (40W)",
				battery: {
						type: "86WHr 6-Cell Integrated Battery",
						charging: "130W Type-C Power Adapter"
				},
				operatingSystem: "Windows 11 Pro"
		},
		inStock: true,
		stock: 8,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "3 Years",
				type: "Dell Premium On-Site Hardware & Accidental Damage"
		},
		seller: {
				name: "Dell Official Store",
				rating: 4.8,
				totalRatings: 29400,
				verified: true
		},
		tags: [
				"Dell",
				"XPS 15",
				"Laptop",
				"OLED",
				"Intel Core i9",
				"RTX 4060",
				"Ultrabook"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 111 - FASHION / MEN'S CLOTHING
	// =========================================================
	{
		id: 111,
		name: "Ralph Lauren Classic Fit Soft Touch Polo T-Shirt",
		brand: "Ralph Lauren",
		company: "Ralph Lauren Corporation",
		Category: "Fashion",
		subcategory: "Men's Clothing",
		productType: "Polo T-Shirt",
		images: [
				"https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
				"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
				"https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
		],
		image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
		rating: 4.7,
		totalRatings: 3450,
		totalReviews: 760,
		price: 7990,
		originalPrice: 9990,
		discountPercentage: 20,
		offers: [
				{
						title: "Luxury Apparel Deal",
						description: "Free Ralph Lauren gift packaging on orders above ₹7,000"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "navy",
						name: "Classic Navy Blue / Red Pony",
						image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
						price: 7990
				},
				{
						id: "white",
						name: "Bright White / Navy Pony",
						image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
						price: 7990
				}
		],
		variants: [
				{
						id: "m",
						name: "M",
						price: 7990,
						originalPrice: 9990,
						stock: 20,
						inStock: true
				},
				{
						id: "l",
						name: "L",
						price: 7990,
						originalPrice: 9990,
						stock: 25,
						inStock: true
				},
				{
						id: "xl",
						name: "XL",
						price: 7990,
						originalPrice: 9990,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Timeless classic fit polo shirt crafted from ultra-soft luxurious interlock cotton with signature embroidered Pony on the chest.",
		description: "- CRAFTED FROM 100% LONG-STAPLE SOFT TOUCH INTERLOCK COTTON\n- SIGNATURE EMBROIDERED POLO PONY LOGO ON LEFT CHEST\n- RIBBED POLO COLLAR WITH THREE-BUTTON PLACKET\n- TENNIS TAIL VENTED HEM FOR MAXIMUM EASE OF MOVEMENT\n- ELEVATED SMART CASUAL LUXURY STAPLE",
		specifications: {
				material: "100% Premium Combed Cotton Interlock",
				fit: "Classic Fit (Roomiest Silhouette)",
				collar: "Ribbed Polo Collar with Genuine Shell Buttons",
				care: "Machine Wash Warm, Tumble Dry Low"
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "Ralph Lauren Authorized",
				rating: 4.9,
				totalRatings: 8400,
				verified: true
		},
		tags: [
				"Ralph Lauren",
				"Polo Shirt",
				"Men's Luxury",
				"Classic Fit",
				"Casual Fashion",
				"Designer"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 112 - FASHION / WOMEN'S CLOTHING
	// =========================================================
	{
		id: 112,
		name: "Levi's Women's 721 High Rise Skinny Stretch Denim Jeans",
		brand: "Levi's",
		company: "Levi Strauss & Co.",
		Category: "Fashion",
		subcategory: "Women's Clothing",
		productType: "Denim Jeans",
		images: [
				"https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
				"https://images.unsplash.com/photo-1582418702059-97ebafb35d09",
				"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
		],
		image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
		rating: 4.6,
		totalRatings: 5420,
		totalReviews: 1190,
		price: 2499,
		originalPrice: 3999,
		discountPercentage: 38,
		offers: [
				{
						title: "Levi's Denim Festival",
						description: "Buy 2 pairs of Levi's jeans & get extra 20% off"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected credit cards"
				}
		],
		colors: [
				{
						id: "dark-indigo",
						name: "Dark Indigo Stone Wash",
						image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
						price: 2499
				},
				{
						id: "washed-black",
						name: "Washed Jet Black",
						image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09",
						price: 2499
				}
		],
		variants: [
				{
						id: "w28-l30",
						name: "28W x 30L",
						price: 2499,
						originalPrice: 3999,
						stock: 20,
						inStock: true
				},
				{
						id: "w30-l30",
						name: "30W x 30L",
						price: 2499,
						originalPrice: 3999,
						stock: 30,
						inStock: true
				},
				{
						id: "w32-l30",
						name: "32W x 30L",
						price: 2499,
						originalPrice: 3999,
						stock: 25,
						inStock: true
				}
		],
		shortDescription: "Flattering high-rise skinny jeans designed with Levi's Sculpt Hyperstretch fabric that holds, lifts, and moves with your body.",
		description: "- LEVI'S SCULPT HYPERSTRETCH DENIM WON'T BAG OUT OR LOSE SHAPE\n- 10.25-INCH HIGH RISE WAISTLINE HUGS & ACCENTUATES YOUR CURVES\n- SKINNY LEG OPENING FROM HIP TO ANKLE\n- ICONIC LEVI'S LEATHER TWO-HORSE PATCH ON BACK WAIST\n- 5-POCKET TIMELESS STYLING WITH ZIP FLY AND BUTTON CLOSURE",
		specifications: {
				material: "70% Cotton, 20% Polyester, 8% Viscose, 2% Elastane (Hyperstretch)",
				rise: "High Rise (10.25 inches)",
				legOpening: "Skinny (10.5 inches)",
				care: "Machine Wash Cold Inside Out"
		},
		inStock: true,
		stock: 30,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "Levi's Official Store",
				rating: 4.8,
				totalRatings: 31200,
				verified: true
		},
		tags: [
				"Levi's",
				"721",
				"Jeans",
				"Skinny Jeans",
				"High Rise",
				"Women's Fashion",
				"Denim"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 113 - FASHION / SHOES
	// =========================================================
	{
		id: 113,
		name: "Timberland Premium 6-Inch Waterproof Nubuck Leather Boots",
		brand: "Timberland",
		company: "VF Corporation",
		Category: "Fashion",
		subcategory: "Shoes",
		productType: "Leather Boots",
		images: [
				"https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
				"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
				"https://images.unsplash.com/photo-1603808033192-082d6919d3e1"
		],
		image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
		rating: 4.8,
		totalRatings: 4890,
		totalReviews: 1120,
		price: 16999,
		originalPrice: 21999,
		discountPercentage: 23,
		offers: [
				{
						title: "Winter Heritage Deal",
						description: "Includes genuine Timberland waterproofer spray & extra taslan laces"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹2,000 instant discount on credit cards"
				}
		],
		colors: [
				{
						id: "wheat-nubuck",
						name: "Iconic Wheat Yellow Nubuck",
						image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
						price: 16999
				},
				{
						id: "black-nubuck",
						name: "Stealth Black Nubuck",
						image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
						price: 16999
				}
		],
		variants: [
				{
						id: "uk7",
						name: "UK 7 (EU 41)",
						price: 16999,
						originalPrice: 21999,
						stock: 15,
						inStock: true
				},
				{
						id: "uk8",
						name: "UK 8 (EU 42)",
						price: 16999,
						originalPrice: 21999,
						stock: 22,
						inStock: true
				},
				{
						id: "uk9",
						name: "UK 9 (EU 43)",
						price: 16999,
						originalPrice: 21999,
						stock: 20,
						inStock: true
				},
				{
						id: "uk10",
						name: "UK 10 (EU 44)",
						price: 16999,
						originalPrice: 21999,
						stock: 12,
						inStock: true
				}
		],
		shortDescription: "The original yellow boot crafted in premium waterproof Better Leather with seam-sealed construction, PrimaLoft insulation, and anti-fatigue footbed.",
		description: "- PREMIUM FULL-GRAIN WATERPROOF BETTER LEATHER FROM LWG SILVER-RATED TANNERY\n- DIRECT-ATTACH SEAM-SEALED WATERPROOF CONSTRUCTION KEEPS FEET DRY\n- 400 GRAMS OF WARM PRIMALOFT RECYCLED THERMAL INSULATION\n- EXCLUSIVE ANTI-FATIGUE TECHNOLOGY FOOTBED PROVIDES ALL-DAY SHOCK ABSORPTION\n- HEAVY-DUTY RUBBER LUG OUTSOLE FOR MAXIMUM GRIP ON SNOW, MUD & ROCK",
		specifications: {
				upper: "Premium Waterproof Nubuck Leather with Padded Leather Collar",
				insulation: "400g PrimaLoft ECO Insulation",
				hardware: "Rustproof Brass Hexagonal Eyelets with Taslan Nylon Laces",
				outsole: "Durable Rubber Lug Outsole for Traction"
		},
		inStock: true,
		stock: 22,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Timberland Manufacturer Warranty"
		},
		seller: {
				name: "Timberland Heritage Store",
				rating: 4.9,
				totalRatings: 16400,
				verified: true
		},
		tags: [
				"Timberland",
				"Yellow Boot",
				"Waterproof Boots",
				"Nubuck Leather",
				"Winter Footwear",
				"Men's Fashion"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 114 - FASHION / BAGS
	// =========================================================
	{
		id: 114,
		name: "Fossil Women's Fiona Genuine Leather Crossbody Bag",
		brand: "Fossil",
		company: "Fossil Group",
		Category: "Fashion",
		subcategory: "Bags",
		productType: "Crossbody Bag",
		images: [
				"https://images.unsplash.com/photo-1584917865442-de89df76afd3",
				"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d",
				"https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
		],
		image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
		rating: 4.7,
		totalRatings: 3120,
		totalReviews: 670,
		price: 8499,
		originalPrice: 11999,
		discountPercentage: 29,
		offers: [
				{
						title: "Handbag Fest",
						description: "Complimentary embossed Fossil brass key charm included"
				},
				{
						title: "Bank Offer",
						description: "Instant 10% discount on credit card payments"
				}
		],
		colors: [
				{
						id: "brown-cognac",
						name: "Cognac Brown Leather",
						image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
						price: 8499
				},
				{
						id: "black",
						name: "Midnight Black",
						image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d",
						price: 8499
				}
		],
		variants: [
				{
						id: "crossbody",
						name: "Standard Crossbody (Adjustable Strap)",
						price: 8499,
						originalPrice: 11999,
						stock: 25,
						inStock: true
				}
		],
		shortDescription: "Chic and versatile structured genuine leather crossbody handbag with antique brass hardware and easy-access zippered pockets.",
		description: "- 100% GENUINE SUPPLE GRAINED LEATHER WITH POLYESTER INTERIOR LINING\n- OLD ENGLISH BRUSHED BRASS HARDWARE & ICONIC FOSSIL KEY CHARM\n- ADJUSTABLE 22-INCH CROSSBODY SHOULDER STRAP FOR HANDS-FREE COMFORT\n- MAIN ZIPPERED COMPARTMENT FITS IPAD MINI, SMARTPHONE, WALLET & COSMETICS\n- 1 BACK SLIDE POCKET & 1 FRONT ZIPPERED POCKET FOR QUICK ACCESSIBILITY",
		specifications: {
				dimensions: "25 x 19 x 7 cm (9.8\" L x 7.5\" H x 2.75\" W)",
				material: "100% Genuine Leather with Recycled Polyurethane Trim",
				closure: "Top Metal Zipper Closure",
				strapDrop: "56 cm (22 inches) Fully Adjustable"
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Fossil Manufacturer Warranty"
		},
		seller: {
				name: "Fossil Luxury Accessories",
				rating: 4.8,
				totalRatings: 18900,
				verified: true
		},
		tags: [
				"Fossil",
				"Fiona",
				"Crossbody Bag",
				"Leather Bag",
				"Handbag",
				"Women's Accessories"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 115 - HOME & KITCHEN / KITCHEN APPLIANCES
	// =========================================================
	{
		id: 115,
		name: "Nutribullet Pro 900W High-Speed Nutrient Extractor",
		brand: "Nutribullet",
		company: "Capital Brands LLC",
		Category: "Home & Kitchen",
		subcategory: "Kitchen Appliances",
		productType: "Smoothie Maker",
		images: [
				"https://images.unsplash.com/photo-1570222094114-d054a817e56b",
				"https://images.unsplash.com/photo-1585515320310-259814833e62",
				"https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
		],
		image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
		rating: 4.7,
		totalRatings: 8450,
		totalReviews: 2190,
		price: 5999,
		originalPrice: 8999,
		discountPercentage: 33,
		offers: [
				{
						title: "Health Nutrition Deal",
						description: "Includes 2 BPA-free Colossal Cups (900ml) + 2 To-Go Lids + Recipe Book"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected bank cards"
				}
		],
		colors: [
				{
						id: "matte-champagne",
						name: "Champagne Gold",
						image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
						price: 5999
				},
				{
						id: "metallic-silver",
						name: "Metallic Silver",
						image: "https://images.unsplash.com/photo-1585515320310-259814833e62",
						price: 5999
				}
		],
		variants: [
				{
						id: "900w-set",
						name: "900W 9-Piece Complete Set",
						price: 5999,
						originalPrice: 8999,
						stock: 40,
						inStock: true
				}
		],
		shortDescription: "High-speed 900W personal blender with cyclonic extractor blade capable of breaking down dense fruits, nuts, and leafy greens in under 60 seconds.",
		description: "- 900 WATTS OF RAW NUTRIENT EXTRACTION POWER\n- STAINLESS STEEL EXTRACTOR BLADE CREATES CYCLONIC ACTION TO PULVERIZE WHOLE FOODS\n- BLENDS DIRECTLY INTO BPA-FREE CUPS - SIMPLY TWIST ON TO-GO LID TO TAKE WITH YOU\n- SIMPLE INTUITIVE PUSH-AND-TWIST OPERATION WITH NO BUTTONS\n- DISHWASHER SAFE CUPS FOR QUICK, EFFORTLESS CLEANUP",
		specifications: {
				motorPower: "900 Watts High-Torque Power Base",
				cupCapacity: "900 ml (32 oz) & 700 ml (24 oz) BPA-Free Eastman Tritan",
				bladeMaterial: "Laser-Honed Stainless Steel Extractor Blades",
				voltage: "220-240V AC 50Hz"
		},
		inStock: true,
		stock: 40,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Nutribullet Brand Warranty"
		},
		seller: {
				name: "Nutribullet Official",
				rating: 4.8,
				totalRatings: 25600,
				verified: true
		},
		tags: [
				"Nutribullet",
				"Pro 900",
				"Blender",
				"Smoothie Maker",
				"Nutrient Extractor",
				"Kitchen"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 116 - HOME & KITCHEN / KITCHEN APPLIANCES
	// =========================================================
	{
		id: 116,
		name: "KitchenAid Artisan 4.8L Tilt-Head Stand Mixer (Empire Red)",
		brand: "KitchenAid",
		company: "Whirlpool Corporation",
		Category: "Home & Kitchen",
		subcategory: "Kitchen Appliances",
		productType: "Stand Mixer",
		images: [
				"https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
				"https://images.unsplash.com/photo-1584990347449-a29243763f03",
				"https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
		],
		image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
		rating: 4.9,
		totalRatings: 4120,
		totalReviews: 950,
		price: 44990,
		originalPrice: 54990,
		discountPercentage: 18,
		offers: [
				{
						title: "Baking Masterclass Pack",
						description: "Includes Stainless Steel Dough Hook, Flat Beater, Wire Whip & Pouring Shield"
				},
				{
						title: "Bank Offer",
						description: "Flat ₹4,000 instant discount on HDFC & ICICI credit cards"
				}
		],
		colors: [
				{
						id: "empire-red",
						name: "Iconic Empire Red",
						image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
						price: 44990
				},
				{
						id: "onyx-black",
						name: "Onyx Black Gloss",
						image: "https://images.unsplash.com/photo-1584990347449-a29243763f03",
						price: 44990
				}
		],
		variants: [
				{
						id: "48l-artisan",
						name: "4.8 Litre Stainless Steel Bowl (300W Direct Drive)",
						price: 44990,
						originalPrice: 54990,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Iconic American direct-drive stand mixer featuring 59-point planetary mixing action, 10 speeds, and tilt-back head for artisan baking.",
		description: "- 59-POINT PLANETARY MIXING ACTION THOROUGHLY TOUCHES EVERY CORNER OF BOWL\n- FULL DIE-CAST METAL HEAVY-DUTY STABLE CONSTRUCTION (10.9 KG)\n- 10 OPTIMIZED SPEEDS FROM GENTLE STIR TO HIGH SPEED WHIPPING\n- MULTI-PURPOSE POWER HUB SUPPORTS OVER 15 OPTIONAL PASTA & GRINDING ATTACHMENTS\n- 4.8L POLISHED STAINLESS STEEL BOWL MIXES ENOUGH DOUGH FOR 9 DOZEN COOKIES",
		specifications: {
				bowlCapacity: "4.8 Litres (5 Qt) Stainless Steel with Ergonomic Handle",
				motorType: "Direct Drive AC (300 Watts High Torque)",
				speeds: "10 Variable Speed Settings",
				weight: "10.9 kg Solid Die-Cast Metal"
		},
		inStock: true,
		stock: 15,
		delivery: {
				freeDelivery: true,
				deliveryDays: "3-5 days"
		},
		warranty: {
				available: true,
				duration: "5 Years",
				type: "KitchenAid Official In-Home Warranty"
		},
		seller: {
				name: "KitchenAid Flagship Boutique",
				rating: 4.9,
				totalRatings: 14200,
				verified: true
		},
		tags: [
				"KitchenAid",
				"Artisan",
				"Stand Mixer",
				"Baking",
				"Dough Mixer",
				"Empire Red",
				"Kitchen"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 117 - HOME & KITCHEN / FURNITURE
	// =========================================================
	{
		id: 117,
		name: "West Elm Mid-Century Walnut Coffee Table with Pop-Up Top",
		brand: "West Elm",
		company: "Williams-Sonoma Inc.",
		Category: "Home & Kitchen",
		subcategory: "Furniture",
		productType: "Coffee Table",
		images: [
				"https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
				"https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
				"https://images.unsplash.com/photo-1540574163026-643ea20ade25"
		],
		image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
		rating: 4.8,
		totalRatings: 1950,
		totalReviews: 420,
		price: 34999,
		originalPrice: 46999,
		discountPercentage: 26,
		offers: [
				{
						title: "Living Room Fest",
						description: "Flat ₹5,000 off + Free white glove delivery & assembly"
				},
				{
						title: "Bank Offer",
						description: "Instant 10% discount on credit card transactions"
				}
		],
		colors: [
				{
						id: "walnut",
						name: "Warm Walnut Wood Finish",
						image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
						price: 34999
				}
		],
		variants: [
				{
						id: "popup-standard",
						name: "Pop-Up Storage Table (110cm x 60cm)",
						price: 34999,
						originalPrice: 46999,
						stock: 10,
						inStock: true
				}
		],
		shortDescription: "Mid-century solid wood coffee table with smooth mechanical pop-up work surface and concealed interior storage compartment.",
		description: "- SOLID KILN-DRIED HARDWOOD LEGS WITH FSC-CERTIFIED WALNUT VENEER\n- MECHANICAL SPRING-LOADED TOP LIFTS UP & FORWARD TO WORK AT LAPTOP HEIGHT\n- CONCEALED DEEP INTERIOR STORAGE COMPARTMENT HIDES REMOTES, LAPTOPS & GAMES\n- SIDE OPEN DISPLAY SHELF FOR BOOKS AND ART OBJECTS\n- TAPERED ROUNDED WOODEN LEGS WITH BRASS FINISHED DETAILS",
		specifications: {
				dimensions: "110 cm W x 60 cm D x 45 cm H (Extends to 64 cm H when popped up)",
				materials: "Kiln-Dried Engineered Wood with Solid Walnut Veneer",
				liftMechanism: "Heavy-Duty Powder-Coated Steel Spring Lift Mechanism",
				assembly: "Simple Leg Assembly Required (Tools Included)"
		},
		inStock: true,
		stock: 10,
		delivery: {
				freeDelivery: true,
				deliveryDays: "5-9 days"
		},
		warranty: {
				available: true,
				duration: "3 Years",
				type: "Manufacturer Warranty on Wood & Hardware"
		},
		seller: {
				name: "West Elm Studio Furniture",
				rating: 4.9,
				totalRatings: 6700,
				verified: true
		},
		tags: [
				"West Elm",
				"Coffee Table",
				"Pop-Up Table",
				"Mid-Century",
				"Furniture",
				"Walnut Wood",
				"Living Room"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 118 - HOME & KITCHEN / FURNITURE
	// =========================================================
	{
		id: 118,
		name: "Zinus 10-Inch Green Tea Memory Foam Queen Bed Mattress",
		brand: "Zinus",
		company: "Zinus Inc.",
		Category: "Home & Kitchen",
		subcategory: "Furniture",
		productType: "Mattress",
		images: [
				"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
				"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
				"https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
		],
		image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
		rating: 4.7,
		totalRatings: 8940,
		totalReviews: 2410,
		price: 18999,
		originalPrice: 26999,
		discountPercentage: 30,
		offers: [
				{
						title: "100-Night Sleep Trial",
						description: "100-night risk-free home sleep trial with full refund guarantee"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "white-knitted",
						name: "Breathable Knitted Jacquard Cover",
						image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
						price: 18999
				}
		],
		variants: [
				{
						id: "queen-10in",
						name: "Queen Size (78 x 60 x 10 Inches)",
						price: 18999,
						originalPrice: 26999,
						stock: 20,
						inStock: true
				},
				{
						id: "king-10in",
						name: "King Size (78 x 72 x 10 Inches)",
						price: 22999,
						originalPrice: 31999,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "CertiPUR-US certified pressure-relieving memory foam mattress infused with refreshing natural green tea and purified charcoal.",
		description: "- REFRESHING GREEN TEA EXTRACT & ACTIVATED CHARCOAL INFUSED MEMORY FOAM\n- CONTOURING AIRFLOW FOAM ALIEVIATES PRESSURE POINTS ON SHOULDERS, HIPS & SPINE\n- CERTIPUR-US CERTIFIED FOR HIGHEST INDOOR AIR QUALITY & DURABILITY\n- BREATHABLE SOFT POLY JACQUARD COVER PROMOTES COOL AIR CIRCULATION\n- EXPERTLY COMPRESSED & ROLLED INTO A COMPACT BOX FOR EASY BEDROOM SETUP",
		specifications: {
				firmness: "Medium Firm (6.5 / 10)",
				layers: "2.5\" Green Tea Memory Foam + 2\" Pressure Relief Foam + 5.5\" High-Density Base Support Foam",
				certifications: "CertiPUR-US & OEKO-TEX Standard 100",
				warranty: "10-Year Worry-Free Limited Manufacturer Warranty"
		},
		inStock: true,
		stock: 20,
		delivery: {
				freeDelivery: true,
				deliveryDays: "4-7 days"
		},
		warranty: {
				available: true,
				duration: "10 Years",
				type: "Zinus 10-Year Manufacturer Warranty"
		},
		seller: {
				name: "Zinus Sleep Store",
				rating: 4.8,
				totalRatings: 28900,
				verified: true
		},
		tags: [
				"Zinus",
				"Mattress",
				"Memory Foam",
				"Green Tea",
				"Queen Bed",
				"Furniture",
				"Bedroom"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 119 - HOME & KITCHEN / LIGHTING
	// =========================================================
	{
		id: 119,
		name: "Philips Hue Gradient Signe Smart LED Floor Lamp",
		brand: "Philips Hue",
		company: "Signify N.V.",
		Category: "Home & Kitchen",
		subcategory: "Lighting",
		productType: "Smart Floor Lamp",
		images: [
				"https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
				"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
				"https://images.unsplash.com/photo-1540932239986-30128078f3c5"
		],
		image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
		rating: 4.8,
		totalRatings: 1890,
		totalReviews: 420,
		price: 24999,
		originalPrice: 29999,
		discountPercentage: 17,
		offers: [
				{
						title: "Smart Lighting Pack",
						description: "Works seamlessly with Alexa, Google Home & Apple HomeKit"
				},
				{
						title: "Bank Offer",
						description: "Instant ₹2,500 discount on selected credit cards"
				}
		],
		colors: [
				{
						id: "black",
						name: "Matte Black Slim Aluminum",
						image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
						price: 24999
				},
				{
						id: "white",
						name: "Matte White",
						image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
						price: 24999
				}
		],
		variants: [
				{
						id: "floor-lamp-145cm",
						name: "Floor Lamp (145 cm Height / 2550 Lumens)",
						price: 24999,
						originalPrice: 29999,
						stock: 15,
						inStock: true
				}
		],
		shortDescription: "Architectural slim gradient floor lamp blending multiple colors simultaneously with 16 million colors and Spotify/TV sync.",
		description: "- GRADIENT COLOR TECHNOLOGY BLENDS MULTIPLE LIGHT COLORS SEAMLESSLY IN A SINGLE FIXTURE\n- 16 MILLION VIBRANT COLORS + 50,000 SHADES OF WARM-TO-COOL WHITE LIGHT\n- SYNC LIGHTS WITH MOVIES, GAMING AND SPOTIFY MUSIC TRACKS\n- HANDS-FREE VOICE CONTROL VIA APPLE SIRI, AMAZON ALEXA & GOOGLE ASSISTANT\n- SLEEK SLIM ALUMINUM PROFILE CASTS INDIRECT AMBIENT WALL-WASH ILLUMINATION",
		specifications: {
				height: "145.8 cm (57.4 inches), Base Diameter: 11 cm",
				lightOutput: "2,550 Lumens at 4000K",
				lifetime: "25,000 Hours LED Life",
				connectivity: "Bluetooth App Direct Control + Zigbee (Philips Hue Bridge Compatible)"
		},
		inStock: true,
		stock: 15,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "2 Years",
				type: "Philips Signify Warranty"
		},
		seller: {
				name: "Philips Hue Official",
				rating: 4.8,
				totalRatings: 11200,
				verified: true
		},
		tags: [
				"Philips Hue",
				"Gradient Signe",
				"Floor Lamp",
				"Smart Light",
				"RGB",
				"Home Decor",
				"Lighting"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 120 - HOME & KITCHEN / HOME DECOR
	// =========================================================
	{
		id: 120,
		name: "Umbra Prisma Modern Geometric Wall Mirror (Hexagon Brass)",
		brand: "Umbra",
		company: "Umbra LLC",
		Category: "Home & Kitchen",
		subcategory: "Home Decor",
		productType: "Wall Mirror",
		images: [
				"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
				"https://images.unsplash.com/photo-1581783342308-f792dbdd27c5",
				"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15"
		],
		image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
		rating: 4.7,
		totalRatings: 2450,
		totalReviews: 540,
		price: 6499,
		originalPrice: 8999,
		discountPercentage: 28,
		offers: [
				{
						title: "Home Decor Fest",
						description: "Includes heavy-duty drywall mounting hardware & template"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "brass",
						name: "Brushed Brass Wire",
						image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
						price: 6499
				},
				{
						id: "matte-black",
						name: "Matte Black Wire",
						image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5",
						price: 6499
				}
		],
		variants: [
				{
						id: "large-56cm",
						name: "Large Hexagon (56.5 cm x 42.5 cm)",
						price: 6499,
						originalPrice: 8999,
						stock: 25,
						inStock: true
				}
		],
		shortDescription: "Contemporary geometric 3D wire framed wall mirror that functions as eye-catching wall art and functional entryway mirror.",
		description: "- 3D GEOMETRIC BRASS WIRE FRAME ADDS DEPTH & ARCHITECTURAL ELEGANCE\n- CAN BE HUNG VERTICALLY OR HORIZONTALLY TO SUIT ANY ROOM WALL\n- REFLECTS NATURAL LIGHT TO MAKE SMALL ROOMS & ENTRYWAYS FEEL LARGER\n- HIGH-DEFINITION HD SILVER-BACKED GLASS WITH ZERO DISTORTION\n- DESIGNED BY SUNG WOOK PARK FOR UMBRA DESIGN STUDIO",
		specifications: {
				dimensions: "56.5 x 42.5 x 8.3 cm (22.25 x 16.75 x 3.25 inches)",
				frameMaterial: "Electroplated Plated Steel Wire with Brass Finish",
				mirrorType: "HD Float Glass with Anti-Shatter Film",
				weight: "3.2 kg"
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "3-5 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Umbra Manufacturer Warranty"
		},
		seller: {
				name: "ShopAll Home Decor",
				rating: 4.7,
				totalRatings: 8900,
				verified: true
		},
		tags: [
				"Umbra",
				"Prisma",
				"Mirror",
				"Wall Decor",
				"Brass",
				"Geometric",
				"Home Decor"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 121 - BEAUTY / SKINCARE
	// =========================================================
	{
		id: 121,
		name: "Paula's Choice 2% BHA Liquid Salicylic Acid Exfoliant",
		brand: "Paula's Choice",
		company: "Paula's Choice LLC",
		Category: "Beauty",
		subcategory: "Skincare",
		productType: "Chemical Exfoliant",
		images: [
				"https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
				"https://images.unsplash.com/photo-1556228578-8c89e6adf883",
				"https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
		],
		image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
		rating: 4.8,
		totalRatings: 11400,
		totalReviews: 2950,
		price: 2900,
		originalPrice: 3400,
		discountPercentage: 15,
		offers: [
				{
						title: "Glow Skin Offer",
						description: "Buy 2 Paula's Choice products & get free 30ml travel size"
				},
				{
						title: "Bank Offer",
						description: "Extra 5% instant discount on prepaid transactions"
				}
		],
		colors: [
				{
						id: "standard",
						name: "Clear Liquid Toner",
						image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
						price: 2900
				}
		],
		variants: [
				{
						id: "118ml",
						name: "118 ml Full Size",
						price: 2900,
						originalPrice: 3400,
						stock: 45,
						inStock: true
				}
		],
		shortDescription: "Globally acclaimed leave-on liquid exfoliant with 2% Salicylic Acid (BHA) to unclog enlarged pores, smooth wrinkles, and brighten skin tone.",
		description: "- 2% BHA (SALICYLIC ACID) PENETRATES DEEP INSIDE PORES TO DISSOLVE SEBUM & BLACKHEADS\n- GREEN TEA EXTRACT DELIVERS POTENT ANTIOXIDANT PROTECTION & SOOTHES REDNESS\n- CLINICALLY PROVEN TO DRAMATICALLY IMPROVE SKIN TEXTURE & TONE\n- GENTLE NON-ABRASIVE LEAVE-ON FORMULA FOR DAILY USE\n- 100% FRAGRANCE-FREE, PARABEN-FREE & CRUELTY-FREE",
		specifications: {
				activeIngredient: "2% Salicylic Acid (BHA), Camellia Oleifera (Green Tea) Leaf Extract",
				volume: "118 ml (4 fl. oz)",
				skinType: "All Skin Types / Oily, Combination, Acne-Prone, Enlarged Pores",
				pHRange: "3.5 - 3.9 (Optimal Exfoliation pH)"
		},
		inStock: true,
		stock: 45,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-3 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "Paula's Choice Direct",
				rating: 4.9,
				totalRatings: 27400,
				verified: true
		},
		tags: [
				"Paula's Choice",
				"BHA",
				"Salicylic Acid",
				"Exfoliant",
				"Skincare",
				"Pores",
				"Blackheads"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 122 - BEAUTY / MAKEUP
	// =========================================================
	{
		id: 122,
		name: "Urban Decay Naked3 Eyeshadow Palette with 12 Neutral Rosy Tones",
		brand: "Urban Decay",
		company: "L'Oreal",
		Category: "Beauty",
		subcategory: "Makeup",
		productType: "Eyeshadow Palette",
		images: [
				"https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
				"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
				"https://images.unsplash.com/photo-1596462502278-27bfdc403348"
		],
		image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
		rating: 4.8,
		totalRatings: 4890,
		totalReviews: 1120,
		price: 4999,
		originalPrice: 6200,
		discountPercentage: 19,
		offers: [
				{
						title: "Beauty Collector Edition",
						description: "Includes double-ended shadow/blending brush & full-size interior mirror"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "naked3-rose",
						name: "12 Rose-Gold Neutrals",
						image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
						price: 4999
				}
		],
		variants: [
				{
						id: "12-shades",
						name: "12 Full Size Eyeshadow Pans (15.6g Total)",
						price: 4999,
						originalPrice: 6200,
						stock: 25,
						inStock: true
				}
		],
		shortDescription: "12 rose-hued neutral eyeshadow shades ranging from soft matte pink to micro-glitter copper and deep metallic rose gold.",
		description: "- 12 UNIVERSALLY FLATTERING ROSE-GOLD NEUTRAL EYESHADOW SHADES\n- VELVETY SMOOTH ULTRA-BLENDABLE PIGMENT INFUSION SYSTEM FORMULA\n- MATTE, PEARL, METALLIC & MICRO-SHIMMER FINISHES\n- ZERO FALLOUT & LONG-WEAR VIBRANCY UP TO 12 HOURS\n- SLEEK ROSE-GOLD EMBOSSED TIN PALETTE WITH DUAL-ENDED CRUELTY-FREE BRUSH",
		specifications: {
				shades: "12 Shades: Strange, Dust, Burnout, Limit, Buzz, Trick, Nooner, Liar, Factory, Mugshot, Darkside, Blackheart",
				finish: "Matte, Shimmer, Metallic & Micro-Glitter",
				formulation: "100% Cruelty-Free Powder",
				netWeight: "12 x 1.3g (0.05 oz)"
		},
		inStock: true,
		stock: 25,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "100% Authentic Product Guarantee"
		},
		seller: {
				name: "Urban Decay Official",
				rating: 4.9,
				totalRatings: 18400,
				verified: true
		},
		tags: [
				"Urban Decay",
				"Naked3",
				"Eyeshadow",
				"Makeup",
				"Rose Gold",
				"Beauty",
				"Palette"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 123 - SPORTS & TOYS / SPORTS EQUIPMENT
	// =========================================================
	{
		id: 123,
		name: "Wilson NBA Official Game Basketball Composite Leather Ball",
		brand: "Wilson",
		company: "Amer Sports",
		Category: "Sports & Toys",
		subcategory: "Sports Equipment",
		productType: "Basketball",
		images: [
				"https://images.unsplash.com/photo-1519766304817-4f37bda74a29",
				"https://images.unsplash.com/photo-1546519638-68e109498ffc",
				"https://images.unsplash.com/photo-1518611012118-696072aa579a"
		],
		image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29",
		rating: 4.9,
		totalRatings: 5410,
		totalReviews: 1280,
		price: 4999,
		originalPrice: 6999,
		discountPercentage: 29,
		offers: [
				{
						title: "NBA Player Pack",
						description: "Includes Wilson dual-action ball pump & needle"
				},
				{
						title: "Bank Offer",
						description: "Instant discount with selected credit cards"
				}
		],
		colors: [
				{
						id: "amber-leather",
						name: "Official Amber Leather",
						image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29",
						price: 4999
				}
		],
		variants: [
				{
						id: "size-7",
						name: "Size 7 (Official Men's 29.5\" Ball)",
						price: 4999,
						originalPrice: 6999,
						stock: 35,
						inStock: true
				}
		],
		shortDescription: "Official basketball of the NBA constructed with Pure Feel composite leather cover for pro-level grip and real bounce consistency.",
		description: "- OFFICIAL BALL OF THE NBA WITH EMBOSSED LOGO & COMMISSIONER SIGNATURE\n- PURE FEEL COVER FOR PRO-LEVEL TOUCH, FEEL & DURABILITY\n- NBA PRO SEAMS CHANNEL CONSTRUCTION SUITED TO PLAYERS PREFERENCES\n- PRESSURE LOCK BLADDER IMPROVES AIR RETENTION & PRESSURE CONSISTENCY\n- SUITABLE FOR INDOOR HARDWOOD AND HIGH-END OUTDOOR COURTS",
		specifications: {
				ballSize: "Size 7 (Official 29.5 inches / 74.9 cm circumference)",
				coverMaterial: "Pure Feel Microfiber Composite Leather",
				bladder: "Pressure Lock Inflation Retention Bladder",
				playingSurface: "Indoor / Outdoor Hybrid Court"
		},
		inStock: true,
		stock: 35,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Wilson Sports Warranty"
		},
		seller: {
				name: "Wilson Sports Official",
				rating: 4.9,
				totalRatings: 21900,
				verified: true
		},
		tags: [
				"Wilson",
				"NBA",
				"Basketball",
				"Official Game Ball",
				"Sports Equipment",
				"Size 7"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
},

	// =========================================================
	// 124 - SPORTS & TOYS / OUTDOOR
	// =========================================================
	{
		id: 124,
		name: "Coleman Sundome 4-Person WeatherTec Dome Camping Tent",
		brand: "Coleman",
		company: "Newell Brands",
		Category: "Sports & Toys",
		subcategory: "Outdoor",
		productType: "Camping Tent",
		images: [
				"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
				"https://images.unsplash.com/photo-1510312305653-8ed496efae75",
				"https://images.unsplash.com/photo-1485965120184-e220f721d03e"
		],
		image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
		rating: 4.7,
		totalRatings: 4210,
		totalReviews: 950,
		price: 7999,
		originalPrice: 10999,
		discountPercentage: 27,
		offers: [
				{
						title: "Camper's Deal",
						description: "Includes expandable carry bag, rainfly & steel ground stakes"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "navy-grey",
						name: "Navy Blue & Light Grey",
						image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
						price: 7999
				},
				{
						id: "green-grey",
						name: "Forest Green & Grey",
						image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75",
						price: 7999
				}
		],
		variants: [
				{
						id: "4-person",
						name: "4-Person Tent (9 x 7 Feet / 4ft 11in Center Height)",
						price: 7999,
						originalPrice: 10999,
						stock: 20,
						inStock: true
				}
		],
		shortDescription: "Spacious 4-person dome camping tent with WeatherTec system, inverted seams, ground vent, and quick 10-minute setup.",
		description: "- WEATHERTEC SYSTEM WITH WELDED CORNERS & INVERTED SEAMS KEEPS WATER OUT\n- TESTED TO WITHSTAND 35+ MPH WINDS WITH STRONG FIBERGLASS FRAME\n- LARGE WINDOWS & GROUND VENT PUSH HEAT UP AND OUT FOR OPTIMAL AIRFLOW\n- E-PORT ALLOWS BRINGING ELECTRICAL POWER CONVENIENTLY INSIDE TENT\n- QUICK & EASY 10-MINUTE SNAG-FREE CONTINUOUS POLE SLEEVES SETUP",
		specifications: {
				capacity: "4 Persons (Fits 1 Queen Size Airbed)",
				dimensions: "9 x 7 ft (2.74 x 2.13 m) with 4 ft 11 in (1.5 m) Center Height",
				fabric: "Polyguard 2x Double-Thick Polyester with Rainfly",
				weight: "4.4 kg (9.7 lbs)"
		},
		inStock: true,
		stock: 20,
		delivery: {
				freeDelivery: true,
				deliveryDays: "3-5 days"
		},
		warranty: {
				available: true,
				duration: "1 Year",
				type: "Coleman Manufacturer Warranty"
		},
		seller: {
				name: "Coleman Outdoor Gear",
				rating: 4.8,
				totalRatings: 14500,
				verified: true
		},
		tags: [
				"Coleman",
				"Sundome",
				"Camping Tent",
				"Outdoor",
				"WeatherTec",
				"Trekking",
				"4-Person Tent"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: true
},

	// =========================================================
	// 125 - BOOKS / BUSINESS
	// =========================================================
	{
		id: 125,
		name: "Zero to One: Notes on Startups, or How to Build the Future",
		brand: "Crown Business",
		company: "Penguin Random House",
		Category: "Books",
		subcategory: "Business",
		productType: "Hardcover Book",
		images: [
				"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
				"https://images.unsplash.com/photo-1512820790803-83ca734da794",
				"https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
		],
		image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
		rating: 4.8,
		totalRatings: 9410,
		totalReviews: 2180,
		price: 599,
		originalPrice: 899,
		discountPercentage: 33,
		offers: [
				{
						title: "Startup Essential",
						description: "Buy 2 business bestsellers and get flat 15% off"
				},
				{
						title: "Bank Offer",
						description: "Instant discount on selected cards"
				}
		],
		colors: [
				{
						id: "hardcover",
						name: "Hardcover Edition",
						image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
						price: 599
				}
		],
		variants: [
				{
						id: "hardcover",
						name: "Hardcover (224 Pages)",
						price: 599,
						originalPrice: 899,
						stock: 50,
						inStock: true
				}
		],
		shortDescription: "New York Times #1 Bestseller by PayPal co-founder and venture capitalist Peter Thiel on thinking for yourself to create true innovation.",
		description: "- #1 NEW YORK TIMES BESTSELLER BY PETER THIEL & BLAKE MASTERS\n- HOW TO BUILD COMPANIES THAT CREATE SINGULAR NEW THINGS (0 TO 1)\n- ESSENTIAL FRAMEWORK ON MONOPOLIES, TECHNOLOGY VS GLOBALIZATION & STARTUP SECRETS\n- ENDORSED BY ELON MUSK, MARK ZUCKERBERG, AND SILICON VALLEY LEADERS",
		specifications: {
				authors: "Peter Thiel with Blake Masters",
				publisher: "Crown Business / Virgin Books",
				format: "Hardcover with Dust Jacket",
				pageCount: "224 Pages",
				language: "English"
		},
		inStock: true,
		stock: 50,
		delivery: {
				freeDelivery: true,
				deliveryDays: "2-4 days"
		},
		warranty: {
				available: false,
				duration: "N/A",
				type: "N/A"
		},
		seller: {
				name: "ShopAll Book Depot",
				rating: 4.8,
				totalRatings: 38400,
				verified: true
		},
		tags: [
				"Peter Thiel",
				"Zero to One",
				"Business",
				"Startups",
				"Entrepreneurship",
				"Bestseller"
		],
		isFeatured: true,
		isBestSeller: true,
		isDeal: true,
		isNew: false
}
];
