import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import {
	User,
	Mail,
	Phone,
	Lock,
	Eye,
	EyeOff,
	ArrowRight,
	ShoppingBag,
	CheckCircle2,
	AlertCircle,
	Loader2,
	Link,
} from "lucide-react";

const Register = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		agreeToTerms: false,
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [errors, setErrors] = useState({});
	const [registerError, setRegisterError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	
	const navigate = useNavigate();


	// ==========================================
	// HANDLE INPUT CHANGE
	// ==========================================

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));

		// Remove error when user changes field
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}

		setRegisterError("");
	};

	// ==========================================
	// VALIDATE FORM
	// ==========================================

	const validateForm = () => {
		const newErrors = {};

		// First name
		if (!formData.firstName.trim()) {
			newErrors.firstName = "First name is required";
		} else if (formData.firstName.trim().length < 2) {
			newErrors.firstName =
				"First name must contain at least 2 characters";
		}

		// Last name
		if (!formData.lastName.trim()) {
			newErrors.lastName = "Last name is required";
		} else if (formData.lastName.trim().length < 2) {
			newErrors.lastName = "Last name must contain at least 2 characters";
		}

		// Email
		if (!formData.email.trim()) {
			newErrors.email = "Email address is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		// Phone
		if (!formData.phone.trim()) {
			newErrors.phone = "Phone number is required";
		} else if (!/^[0-9]{10}$/.test(formData.phone)) {
			newErrors.phone = "Phone number must contain exactly 10 digits";
		}

		// Password
		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (formData.password.length < 8) {
			newErrors.password = "Password must contain at least 8 characters";
		}

		// Confirm password
		if (!formData.confirmPassword) {
			newErrors.confirmPassword = "Please confirm your password";
		} else if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		// Terms
		if (!formData.agreeToTerms) {
			newErrors.agreeToTerms = "You must agree to the Terms & Conditions";
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	// ==========================================
	// HANDLE REGISTER
	// ==========================================

	const handleSubmit = async (e) => {
		e.preventDefault();

		setRegisterError("");

		const isValid = validateForm();

		if (!isValid) {
			return;
		}

		setIsLoading(true);

		try {
			/*
			 * FRONTEND DEMO
			 *
			 * Replace this with your real API request later.
			 *
			 * Example:
			 *
			 * const response = await fetch("/api/register", {
			 *   method: "POST",
			 *   headers: {
			 *     "Content-Type": "application/json",
			 *   },
			 *   body: JSON.stringify({
			 *     firstName: formData.firstName,
			 *     lastName: formData.lastName,
			 *     email: formData.email,
			 *     phone: formData.phone,
			 *     password: formData.password,
			 *   }),
			 * });
			 */

			await new Promise((resolve) => setTimeout(resolve, 1500));

			console.log("Registration Data:", {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				phone: formData.phone,
				password: formData.password,
			});

			alert("Account created successfully!");
			
			navigate("/");
			
			// Example:
			// navigate("/login");
		} catch (error) {
			setRegisterError("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	// ==========================================
	// GOOGLE SIGNUP
	// ==========================================

	const handleGoogleSignup = () => {
		console.log("Google Signup");

		/*
		 * Add Google OAuth integration here.
		 */
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 sm:py-12">
			<div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
				<div className="grid lg:grid-cols-2">
					{/* ======================================
              LEFT SIDE
          ======================================= */}

					<div className="hidden lg:flex relative bg-black text-white p-12 flex-col justify-between overflow-hidden">
						{/* Background circles */}

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

						{/* Main Content */}

						<div className="relative z-10 max-w-md">
							<p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
								Join ShopAll
							</p>

							<h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
								Your shopping
								<br />
								journey starts here.
							</h1>

							<p className="text-gray-400 text-lg leading-relaxed">
								Create your ShopAll account and enjoy a faster,
								smarter, and more personalized shopping
								experience.
							</p>

							{/* Benefits */}

							<div className="mt-10 space-y-4">
								<div className="flex items-center gap-3">
									<CheckCircle2
										size={20}
										className="text-white"
									/>

									<span className="text-gray-300">
										Save products to your wishlist
									</span>
								</div>

								<div className="flex items-center gap-3">
									<CheckCircle2
										size={20}
										className="text-white"
									/>

									<span className="text-gray-300">
										Track all your orders
									</span>
								</div>

								<div className="flex items-center gap-3">
									<CheckCircle2
										size={20}
										className="text-white"
									/>

									<span className="text-gray-300">
										Get personalized recommendations
									</span>
								</div>

								<div className="flex items-center gap-3">
									<CheckCircle2
										size={20}
										className="text-white"
									/>

									<span className="text-gray-300">
										Faster checkout
									</span>
								</div>
							</div>
						</div>

						{/* Footer */}

						<div className="relative z-10 text-sm text-gray-500">
							© 2026 ShopAll. All rights reserved.
						</div>
					</div>

					{/* ======================================
              RIGHT SIDE - REGISTER FORM
          ======================================= */}

					<div className="p-6 sm:p-10 lg:p-12 xl:p-14">
						{/* Mobile Logo */}

						<div className="lg:hidden flex items-center justify-center mb-8">
							<div className="flex items-center gap-3">
								<div className="w-11 h-11 bg-black text-white rounded-xl flex items-center justify-center">
									<ShoppingBag size={24} />
								</div>

								<span className="text-2xl font-bold">
									ShopAll
								</span>
							</div>
						</div>

						<div className="max-w-md mx-auto">
							{/* Header */}

							<div className="mb-7">
								<h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
									Create account
								</h2>

								<p className="text-gray-500 mt-3">
									Create your account and start shopping with
									ShopAll.
								</p>
							</div>

							{/* Error */}

							{registerError && (
								<div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
									<AlertCircle
										size={20}
										className="mt-0.5 shrink-0"
									/>

									<p className="text-sm">{registerError}</p>
								</div>
							)}

							{/* ==================================
                  REGISTER FORM
              =================================== */}

							<form onSubmit={handleSubmit} className="space-y-4">
								{/* First Name + Last Name */}

								<div className="grid sm:grid-cols-2 gap-4">
									{/* First Name */}

									<div>
										<label
											htmlFor="firstName"
											className="block text-sm font-semibold text-gray-700 mb-2"
										>
											First name
										</label>

										<div className="relative">
											<User
												size={19}
												className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
											/>

											<input
												id="firstName"
												type="text"
												name="firstName"
												value={formData.firstName}
												onChange={handleChange}
												placeholder="Keyur"
												autoComplete="given-name"
												className={`w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none transition ${
													errors.firstName
														? "border-red-400 focus:ring-4 focus:ring-red-100"
														: "border-gray-200 focus:border-black focus:ring-4 focus:ring-gray-100"
												}`}
											/>
										</div>

										{errors.firstName && (
											<p className="mt-1.5 text-xs text-red-500">
												{errors.firstName}
											</p>
										)}
									</div>

									{/* Last Name */}

									<div>
										<label
											htmlFor="lastName"
											className="block text-sm font-semibold text-gray-700 mb-2"
										>
											Last name
										</label>

										<div className="relative">
											<User
												size={19}
												className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
											/>

											<input
												id="lastName"
												type="text"
												name="lastName"
												value={formData.lastName}
												onChange={handleChange}
												placeholder="Patel"
												autoComplete="family-name"
												className={`w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none transition ${
													errors.lastName
														? "border-red-400 focus:ring-4 focus:ring-red-100"
														: "border-gray-200 focus:border-black focus:ring-4 focus:ring-gray-100"
												}`}
											/>
										</div>

										{errors.lastName && (
											<p className="mt-1.5 text-xs text-red-500">
												{errors.lastName}
											</p>
										)}
									</div>
								</div>

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
											size={19}
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
											className={`w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none transition ${
												errors.email
													? "border-red-400 focus:ring-4 focus:ring-red-100"
													: "border-gray-200 focus:border-black focus:ring-4 focus:ring-gray-100"
											}`}
										/>
									</div>

									{errors.email && (
										<p className="mt-1.5 text-xs text-red-500">
											{errors.email}
										</p>
									)}
								</div>

								{/* Phone */}

								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-semibold text-gray-700 mb-2"
									>
										Phone number
									</label>

									<div className="relative">
										<Phone
											size={19}
											className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
										/>

										<input
											id="phone"
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={(e) => {
												// Allow numbers only
												const value =
													e.target.value.replace(
														/\D/g,
														"",
													);

												// Maximum 10 digits
												if (value.length <= 10) {
													setFormData((prev) => ({
														...prev,
														phone: value,
													}));
												}

												// Clear phone error while typing
												if (errors.phone) {
													setErrors((prev) => ({
														...prev,
														phone: "",
													}));
												}

												setRegisterError("");
											}}
											onKeyDown={(e) => {
												// Prevent common non-numeric keys
												const allowedKeys = [
													"Backspace",
													"Delete",
													"ArrowLeft",
													"ArrowRight",
													"Tab",
													"Home",
													"End",
												];

												if (
													!/[0-9]/.test(e.key) &&
													!allowedKeys.includes(e.key)
												) {
													e.preventDefault();
												}
											}}
											inputMode="numeric"
											pattern="[0-9]*"
											maxLength={10}
											placeholder="9876543210"
											autoComplete="tel"
											className={`w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none transition ${
												errors.phone
													? "border-red-400 focus:ring-4 focus:ring-red-100"
													: "border-gray-200 focus:border-black focus:ring-4 focus:ring-gray-100"
											}`}
										/>
									</div>

									{errors.phone && (
										<p className="mt-1.5 text-xs text-red-500">
											{errors.phone}
										</p>
									)}
								</div>

								{/* Password */}

								<div>
									<label
										htmlFor="password"
										className="block text-sm font-semibold text-gray-700 mb-2"
									>
										Password
									</label>

									<div className="relative">
										<Lock
											size={19}
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
											placeholder="Create a password"
											autoComplete="new-password"
											className={`w-full pl-11 pr-12 py-3.5 rounded-xl border outline-none transition ${
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
										>
											{showPassword ? (
												<EyeOff size={19} />
											) : (
												<Eye size={19} />
											)}
										</button>
									</div>

									{errors.password && (
										<p className="mt-1.5 text-xs text-red-500">
											{errors.password}
										</p>
									)}

									{/* Password requirements */}

									{!errors.password && (
										<p className="mt-1.5 text-xs text-gray-400">
											Use at least 8 characters.
										</p>
									)}
								</div>

								{/* Confirm Password */}

								<div>
									<label
										htmlFor="confirmPassword"
										className="block text-sm font-semibold text-gray-700 mb-2"
									>
										Confirm password
									</label>

									<div className="relative">
										<Lock
											size={19}
											className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
										/>

										<input
											id="confirmPassword"
											type={
												showConfirmPassword
													? "text"
													: "password"
											}
											name="confirmPassword"
											value={formData.confirmPassword}
											onChange={handleChange}
											placeholder="Confirm your password"
											autoComplete="new-password"
											className={`w-full pl-11 pr-12 py-3.5 rounded-xl border outline-none transition ${
												errors.confirmPassword
													? "border-red-400 focus:ring-4 focus:ring-red-100"
													: "border-gray-200 focus:border-black focus:ring-4 focus:ring-gray-100"
											}`}
										/>

										<button
											type="button"
											onClick={() =>
												setShowConfirmPassword(
													(prev) => !prev,
												)
											}
											className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
										>
											{showConfirmPassword ? (
												<EyeOff size={19} />
											) : (
												<Eye size={19} />
											)}
										</button>
									</div>

									{errors.confirmPassword && (
										<p className="mt-1.5 text-xs text-red-500">
											{errors.confirmPassword}
										</p>
									)}
								</div>

								{/* Terms */}

								<div className="pt-1">
									<label className="flex items-start gap-3 cursor-pointer">
										<input
											type="checkbox"
											name="agreeToTerms"
											checked={formData.agreeToTerms}
											onChange={handleChange}
											className="w-4 h-4 mt-0.5 rounded border-gray-300 text-black focus:ring-black"
										/>

										<span className="text-sm text-gray-500 leading-5">
											I agree to the{" "}
											<button
												type="button"
												className="font-semibold text-gray-800 hover:underline"
											>
												Terms & Conditions
											</button>{" "}
											and{" "}
											<button
												type="button"
												className="font-semibold text-gray-800 hover:underline"
											>
												Privacy Policy
											</button>
											.
										</span>
									</label>

									{errors.agreeToTerms && (
										<p className="mt-1.5 text-xs text-red-500">
											{errors.agreeToTerms}
										</p>
									)}
								</div>

								{/* Register Button */}
								{/* <Link to="/"> */}
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
											Creating account...
										</>
									) : (
										<>
											Create account
											<ArrowRight size={19} />
										</>
									)}
								</button>
								{/* </Link> */}
							</form>

							{/* Divider */}

							<div className="flex items-center gap-4 my-6">
								<div className="h-px bg-gray-200 flex-1" />

								<span className="text-sm text-gray-400">
									OR
								</span>

								<div className="h-px bg-gray-200 flex-1" />
							</div>

							{/* Google Signup */}

							<button
								type="button"
								onClick={handleGoogleSignup}
								className="w-full border border-gray-200 py-3.5 rounded-xl font-semibold text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
							>
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

							{/* Login Link */}

							<p className="text-center text-sm text-gray-500 mt-7">
								Already have an account?{" "}
								<a href="/login">
									<button
										type="button"
										onClick={() =>
											console.log("Navigate to Login")
										}
										className="font-semibold text-black hover:underline"
									>
										Sign in
									</button>
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
