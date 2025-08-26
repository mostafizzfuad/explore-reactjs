import React, { useState } from "react";

export default function MultiForm() {
	const [form, setForm] = useState({ name: "", email: "", age: "" });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // পেজ রিফ্রেশ বন্ধ করার জন্য
		console.log(form);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="name"
				placeholder="Name"
				value={form.name}
				onChange={handleChange}
			/>
			<br />
			<input
				name="email"
				placeholder="Email"
				value={form.email}
				onChange={handleChange}
			/>
			<br />
			<input
				name="age"
				placeholder="Age"
				value={form.age}
				onChange={handleChange}
			/>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
}

// e.target.name = name attribute of the input field
// e.target.value = current value of the input field
