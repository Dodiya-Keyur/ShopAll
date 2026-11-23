import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import {
	Eye,
	EyeOff,
	Mail,
	Lock,
	ArrowRight,
	ShoppingBag,
	CheckCircle2,
	AlertCircle,
	Loader2,
} from "lucide-react";

const Login = () => {

	const [formData, setFormData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState({});
	const [loginError, setLoginError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	// Handle input changes
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));

		// Remove error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}

		setLoginError("");
	};

	// Validate form
	const validateForm = () => {
		const newErrors = {};

		if (!formData.email.trim()) {
			newErrors.email = "Email address is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (formData.password.length < 6) {
			newErrors.password = "Password must contain at least 8 characters";
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	// Handle login
	const handleSubmit = async (e) => {
		e.preventDefault();

		
		
		setLoginError("");

		if (!validateForm()) {
			return;
		}

		setIsLoading(true);
		navigate("/");

		try {
			/*
			 * FRONTEND DEMO
			 *
			 * Replace this section with your API call later.
			 *
			 * Example:
			 *
			 * const response = await fetch("/api/login", {
			 *   method: "POST",
			 *   headers: {
			 *     "Content-Type": "application/json",
			 *   },
			 *   body: JSON.stringify({
			 *     email: formData.email,
			 *     password: formData.password,
			 *   }),
			 * });
			 */

			await new Promise((resolve) => setTimeout(resolve, 1500));

			console.log("Login Data:", formData);

			// Demo success
			alert("Login successful!");
			navigate("/");

			// Example:
			// navigate("/");
		} catch (error) {
			setLoginError("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
			
		}
	};

	// Google login
	const handleGoogleLogin = () => {
		console.log("Google Login");

		/*
		 * Add Google OAuth integration here.
		 */
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
			<div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
				<div className="grid lg:grid-cols-2">
					{/* =====================================
              LEFT SIDE - BRANDING
          ====================================== */}
					<div className="hidden lg:flex relative bg-black text-white p-12 flex-col justify-between overflow-hidden">
						{/* Background decoration */}
						<div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

						<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

						{/* Logo */}
						<div className="relative z-10">
							<div className="flex items-center gap-3">
								<div className="w-11 h-11 bg-white text-black rounded-xl flex items-center justify-center">
									<ShoppingBag size={24} />
								</div>

								<span className="text-2xl font-bold tracking-tight">
									ShopAll
								</span>
							</div>
						</div>

						{/* Main content */}
						<div className="relative z-10 max-w-md">
							<p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
								Welcome Back
							</p>

							<h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
								Everything you love,
								<br />
								all in one place.
							</h1>

							<p className="text-gray-400 text-lg leading-relaxed">
								Sign in to access your personalized shopping
								experience, track orders, save favorites, and
								discover products made for you.
							</p>

							{/* Features */}
							<div className="mt-10 space-y-4">
								<div className="flex items-center gap-3">
									<CheckCircle2
										size={20}
										className="text-white"
									/>
									<span className="text-gray-300">
										Personalized recommendations
									</span>
								</div>

								<div className="flex items-center gap-3">
									<CheckCircle2
										size={20}
										className="text-white"
									/>
									<span className="text-gray-300">
										Easy order tracking
									</span>
								</div>

								<div className="flex items-center gap-3">
									<CheckCircle2
										size={20}
										className="text-white"
									/>
									<span className="text-gray-300">
										Wishlist & saved products
									</span>
								</div>
							</div>
						</div>

						{/* Footer */}
						<div className="relative z-10 text-sm text-gray-500">
							© 2026 ShopAll. All rights reserved.
						</div>
					</div>

					{/* =====================================
              RIGHT SIDE - LOGIN FORM
          ====================================== */}
					<div className="p-6 sm:p-10 lg:p-12 xl:p-16 ">
						{/* Mobile Logo */}
						<div className="lg:hidden flex items-center justify-center mb-10">
							<div className="flex items-center gap-3">
								<div className="w-11 h-11 bg-black text-white rounded-xl flex items-center justify-center">
									<ShoppingBag size={24} />
								</div>

								<span className="text-2xl font-bold">
									ShopAll
								</span>
							</div>
						</div>

						{/* Header */}
						<div className="max-w-md mx-auto">
							<div className="mb-8">
								<h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
									Welcome back
								</h2>

								<p className="text-gray-500 mt-3">
									Sign in to your account to continue
									shopping.
								</p>
							</div>

							{/* Login error */}
							{loginError && (
								<div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
									<AlertCircle
										size={20}
										className="mt-0.5 shrink-0"
									/>

									<p className="text-sm">{loginError}</p>
								</div>
							)}

							{/* =================================
                  LOGIN FORM
              ================================== */}
							<form onSubmit={handleSubmit} className="space-y-5">
								{/* Email */}
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-semibold text-gray-700 mb-2"
									>
										Email address
									</label>

									<div className="relative">
										<Mail
											size={20}
											className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
										/>

										<input
											id="email"
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="you@example.com"
											autoComplete="email"
											className={`w-full pl-12 pr-4 py-3.5 rounded-xl border outline-none transition ${
												errors.email
													? "border-red-400 focus:ring-4 focus:ring-red-100"
													: "border-gray-200 focus:border-black focus:ring-4 focus:ring-gray-100"
											}`}
										/>
									</div>

									{errors.email && (
										<p className="mt-2 text-sm text-red-500">
											{errors.email}
										</p>
									)}
								</div>

								{/* Password */}
								<div>
									<div className="flex items-center justify-between mb-2">
										<label
											htmlFor="password"
											className="block text-sm font-semibold text-gray-700"
										>
											Password
										</label>

										<button
											type="button"
											onClick={() =>
												console.log("Forgot Password")
											}
											className="text-sm font-semibold text-gray-700 hover:text-black hover:underline"
										>
											Forgot password?
										</button>
									</div>

									<div className="relative">
										<Lock
											size={20}
											className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
										/>

										<input
											id="password"
											type={
												showPassword
													? "text"
													: "password"
											}
											name="password"
											value={formData.password}
											onChange={handleChange}
											placeholder="Enter your password"
											autoComplete="current-password"
											className={`w-full pl-12 pr-12 py-3.5 rounded-xl border outline-none transition ${
												errors.password
													? "border-red-400 focus:ring-4 focus:ring-red-100"
													: "border-gray-200 focus:border-black focus:ring-4 focus:ring-gray-100"
											}`}
										/>

										<button
											type="button"
											onClick={() =>
												setShowPassword((prev) => !prev)
											}
											className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
											aria-label={
												showPassword
													? "Hide password"
													: "Show password"
											}
										>
											{showPassword ? (
												<EyeOff size={20} />
											) : (
												<Eye size={20} />
											)}
										</button>
									</div>

									{errors.password && (
										<p className="mt-2 text-sm text-red-500">
											{errors.password}
										</p>
									)}
								</div>

								{/* Remember Me */}
								<div className="flex items-center">
									<label className="flex items-center gap-3 cursor-pointer select-none">
										<input
											type="checkbox"
											name="rememberMe"
											checked={formData.rememberMe}
											onChange={handleChange}
											className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
										/>

										<span className="text-sm text-gray-600">
											Remember me
										</span>
									</label>
								</div>

								{/* Login Button */}
								<button
									type="submit"
									disabled={isLoading}
									className="w-full bg-black text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
								>
									{isLoading ? (
										<>
											<Loader2
												size={20}
												className="animate-spin"
											/>
											Signing in...
										</>
									) : (
										<>
											Sign in
											<ArrowRight size={19} />
										</>
									)}
								</button>
							</form>

							{/* Divider */}
							<div className="flex items-center gap-4 my-7">
								<div className="h-px bg-gray-200 flex-1" />

								<span className="text-sm text-gray-400">
									OR
								</span>

								<div className="h-px bg-gray-200 flex-1" />
							</div>

							{/* Google Login */}
							<button
								type="button"
								onClick={handleGoogleLogin}
								className="w-full border border-gray-200 py-3.5 rounded-xl font-semibold text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
							>
								{/* Google Icon */}
								<svg width="20" height="20" viewBox="0 0 24 24">
									<path
										fill="#4285F4"
										d="M21.35 12.27c0-.68-.06-1.35-.17-1.98H12v3.75h5.23a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.92-4.2 2.92-7.16Z"
									/>
									<path
										fill="#34A853"
										d="M12 21.9c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.53A9.74 9.74 0 0 0 12 21.9Z"
									/>
									<path
										fill="#FBBC05"
										d="M6.53 13.98A5.86 5.86 0 0 1 6.23 12c0-.69.12-1.36.3-1.98V7.49H3.28A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.03 4.51l3.25-2.53Z"
									/>
									<path
										fill="#EA4335"
										d="M12 5.99c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.83 3.08 14.63 2.1 12 2.1a9.74 9.74 0 0 0-8.72 5.39l3.25 2.53C7.3 7.71 9.46 5.99 12 5.99Z"
									/>
								</svg>
								Continue with Google
							</button>

							{/* Register */}
							<p className="text-center text-sm text-gray-500 mt-8">
								Don't have an account?
								<a href="/register">
									<button
										type="button"
										onClick={() =>
											console.log("Navigate to Register")
										}
										className="font-semibold text-black hover:underline"
									>
										Create account
									</button>
								</a>
							</p>

							{/* Terms */}
							<p className="text-center text-xs text-gray-400 mt-8 leading-relaxed">
								By continuing, you agree to our{" "}
								<button className="underline hover:text-gray-600">
									Terms of Service
								</button>{" "}
								and{" "}
								<button className="underline hover:text-gray-600">
									Privacy Policy
								</button>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
