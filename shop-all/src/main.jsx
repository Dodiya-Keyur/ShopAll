import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// Layout
import App from "./App.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import Category from "./pages/Category.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import { ProductProvider } from "./store/ProductStore.jsx";
import FeaturedProducts from "./pages/FeaturedProducts.jsx";
import BestDeals from "./pages/BestDeals.jsx";
import Categories from "./pages/Categories.jsx";
import Product from "./pages/Product.jsx";
import { Provider } from "react-redux";
import ShopAllStore from "./store/ReduxStore.js";
import NewArrivals from "./pages/NewArrivals.jsx";
import BestSellers from "./pages/BestSellers.jsx";
import SearchResults from "./pages/SearchResults.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,

		children: [
			// Home
			{
				index: true,
				element: <Home />,
			},

			// Search Results
			{
				path: "/search",
				element: <SearchResults />,
			},

			// About
			{
				path: "/about",
				element: <About />,
			},

			// Contact Us
			{
				path: "/contact",
				element: <ContactUs />,
			},

			// Cart
			{
				path: "/cart",
				element: <Cart />,
			},

			//FeaturedProducts
			{
				path: "/featured-products",
				element: <FeaturedProducts />,
			},

			//BestDeals
			{
				path: "/best-deals",
				element: <BestDeals />,
			},

			//NewArrivals
			{
				path: "/newarrivals",
				element: <NewArrivals />,
			},

			//BestSellers
			{
				path: "/bestsellers",
				element: <BestSellers />,
			},

			// Wishlist
			{
				path: "/wishlist",
				element: <Wishlist />,
			},

			// Categories
			{
				path: "/categories",
				element: <Categories />,
			},

			// Category
			{
				path: "/categories/:category",
				element: <Category />,
			},

			// Sub Category
			{
				path: "/categories/:category/:subcategory",
				element: <Category />,
			},

			// Product
			{
				path: "/product/:productId",
				element: <Product />,
			},
		],
	},

	{
		path: "/login",
		element: <Login />,
	},

	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ProductProvider>
			<Provider store={ShopAllStore}>
				<RouterProvider router={router} />
			</Provider>
		</ProductProvider>
	</StrictMode>,
);
