import React, { useState } from "react";

export default function ValidatedForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		age: "",
		terms: false,
		gender: "",
		country: "",
	});

	const [errors, setErrors] = useState({});

	// Change Handler
	const handleChange = (e) => {
		const { name, type, value, checked } = e.target;
		setForm({
			...form,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	// Validation Function
	const validate = () => {
		let newErrors = {};

		if (!form.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!form.email) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			newErrors.email = "Email is invalid";
		}

		if (!form.age) {
			newErrors.age = "Age is required";
		} else if (form.age < 18) {
			newErrors.age = "You must be at least 18 years old";
		}

		if (!form.terms) {
			newErrors.terms = "You must accept terms & conditions";
		}

		if (!form.gender) {
			newErrors.gender = "Gender is required";
		}

		if (!form.country) {
			newErrors.country = "Country is required";
		}

		return newErrors;
	};

	// Submit Handler
	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			setErrors({});
			alert(
				"✅ Form Submitted Successfully!\n" +
					JSON.stringify(form, null, 2)
			);
			console.log(form);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{ maxWidth: "400px", margin: "20px auto" }}
		>
			<h2>Form with Validation</h2>

			{/* Name */}
			<input
				type="text"
				name="name"
				placeholder="Enter your name"
				value={form.name}
				onChange={handleChange}
			/>
			{errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
			<br />

			{/* Email */}
			<input
				type="email"
				name="email"
				placeholder="Enter your email"
				value={form.email}
				onChange={handleChange}
			/>
			{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
			<br />

			{/* Age */}
			<input
				type="number"
				name="age"
				placeholder="Enter your age"
				value={form.age}
				onChange={handleChange}
			/>
			{errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
			<br />

			{/* Checkbox */}
			<label>
				<input
					type="checkbox"
					name="terms"
					checked={form.terms}
					onChange={handleChange}
				/>
				Accept Terms & Conditions
			</label>
			{errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
			<br />

			{/* Radio */}
			<div>
				Gender:
				<label>
					<input
						type="radio"
						name="gender"
						value="Male"
						checked={form.gender === "Male"}
						onChange={handleChange}
					/>
					Male
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="Female"
						checked={form.gender === "Female"}
						onChange={handleChange}
					/>
					Female
				</label>
			</div>
			{errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
			<br />

			{/* Dropdown */}
			<select name="country" value={form.country} onChange={handleChange}>
				<option value="">Select Country</option>
				<option value="Bangladesh">Bangladesh</option>
				<option value="India">India</option>
				<option value="USA">USA</option>
			</select>
			{errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
			<br />
			<br />

			<button type="submit">Submit</button>
		</form>
	);
}
