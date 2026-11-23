import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
			<div className="text-center max-w-lg">
				{/* 404 */}
				<h1 className="text-[120px] sm:text-[160px] font-extrabold leading-none text-indigo-600">
					404
				</h1>

				{/* Title */}
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
					Page Not Found
				</h2>

				{/* Description */}
				<p className="text-gray-500 mt-3 text-base sm:text-lg">
					Sorry, the page you are looking for doesn't exist or may
					have been moved.
				</p>

				{/* Buttons */}
				<div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
					{/* Back */}
					<button
						onClick={() => window.history.back()}
						className="flex items-center justify-center gap-2 px-5 py-3
                       border border-gray-300 rounded-lg
                       text-gray-700 font-medium
                       hover:bg-gray-100 transition"
					>
						<ArrowLeft size={18} />
						Go Back
					</button>

					{/* Home */}
					<Link
						to="/"
						className="flex items-center justify-center gap-2 px-5 py-3
                       bg-indigo-600 text-white rounded-lg
                       font-medium hover:bg-indigo-700 transition"
					>
						<Home size={18} />
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
