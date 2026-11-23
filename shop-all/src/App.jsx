import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Category from "./pages/Category.jsx";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop.jsx";


function App() {
	return (
		<>
		
			<ScrollToTop />

			<Header />

			<main className="mt-40">
				<Outlet />
			</main>

			<Footer />
		
		</>
	);
}

export default App;
