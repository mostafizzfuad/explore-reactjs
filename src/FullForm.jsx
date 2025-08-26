import React, { useState } from "react";

export default function FullForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		age: "",
		terms: false, // checkbox
		gender: "", // radio
		country: "", // select dropdown
	});

	// Common Change Handler
	const handleChange = (e) => {
		const { name, type, value, checked } = e.target;
		// e.target - যেই input field এ change হয়েছে সেই field কে refer করে
		// name - input field এর name attribute এর value
		// type - input field এর type attribute এর value
		// value - input field এর current value
		// checked - checkbox বা radio button এর জন্য current checked state (true/false)

		setForm({
			...form,
			[name]: type === "checkbox" ? checked : value,
		});

		// এখানে আমরা form state কে update করছি
		// ...form - spread operator দিয়ে আগের state এর সব property কে কপি করছি
		// [name]: ... - এখানে computed property name ব্যবহার করছি যাতে dynamic ভাবে property update করা যায়
		// type === "checkbox" ? checked : value - checkbox এর জন্য checked state ব্যবহার করছি, অন্য সব input এর জন্য value ব্যবহার করছি
		// এর ফলে form state এর শুধু সেই property update হবে যেটার name attribute change হয়েছে
		// যেমন ধরো name="email" হলে শুধু form.email update হবে, বাকিগুলো আগের মতোই থাকবে
		// এটা একটি common change handler যা সব ধরনের input field এর জন্য কাজ করবে
		// এতে আলাদা আলাদা change handler লেখার প্রয়োজন পড়ে না
		// যেমন ধরো আলাদা করে handleNameChange, handleEmailChange ইত্যাদি লেখার প্রয়োজন নেই
		// এটা কোডকে অনেক বেশি concise এবং maintainable করে তোলে
		// কারণ নতুন input field যোগ করলেও শুধু name attribute ঠিকমতো দিতে হবে, আর change handler একই থাকবে
		// এতে bugs এর সম্ভাবনাও কমে যায় কারণ সব input একই ভাবে handle হচ্ছে
		// এটা একটি best practice যা React এ forms handle করার সময় অনুসরণ করা উচিত
		// এতে কোডও অনেক বেশি readable হয়
		// এবং future এ যদি form এ নতুন field যোগ করতে হয় তাহলে খুব সহজেই করা যায়
		// শুধু form state এ নতুন property যোগ করতে হবে এবং input field এ name attribute দিতে হবে, change handler একই থাকবে
	};

	// Submit Handler
	const handleSubmit = (e) => {
		e.preventDefault(); // পেজ রিলোড বন্ধ করে
		console.log(form); // পুরো form data object print হবে
		alert(JSON.stringify(form, null, 2));
		// JSON.stringify() - এই ফাংশন object কে JSON string এ কনভার্ট করে।
		// এখানে form object কে string এ কনভার্ট করা হচ্ছে যাতে alert এ সুন্দরভাবে দেখা যায়।
		// সাধারণত object alert দিলে কিছু সুন্দর করে দেখা যায় না: alert(form); --> [object Object]
		// null মানে হলো কোন custom replacer function নেই (যা data কে filter বা modify করতে পারে)
		// ২ এর মানে হলো প্রতিটি level এ ২টা space দিয়ে indent করবে
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{ maxWidth: "500px", margin: "20px auto" }}
		>
			<h2>Complete Form Example</h2>

			{/* Text Input */}
			<input
				type="text"
				name="name"
				placeholder="Enter your name"
				value={form.name}
				onChange={handleChange}
			/>
			<br />
			<br />

			{/* Email Input */}
			<input
				type="email"
				name="email"
				placeholder="Enter your email"
				value={form.email}
				onChange={handleChange}
			/>
			<br />
			<br />

			{/* Number Input */}
			<input
				type="number"
				name="age"
				placeholder="Enter your age"
				value={form.age}
				onChange={handleChange}
			/>
			<br />
			<br />

			{/* Checkbox */}
			<label>
				<input
					type="checkbox"
					name="terms"
					checked={form.terms} // checkbox এর জন্য value এর পরিবর্তে checked attribute ব্যবহার হয়
                    // checked attribute দিয়ে নির্ধারণ করা হচ্ছে checkbox টি চেকড হবে কিনা
                    // form.terms যদি true হয় তাহলে checkbox টি চেকড থাকবে, false হলে unchecked থাকবে
                    // কিন্তু প্রশ্ন হলো state কিভাবে update হবে?
                    // সেটা হচ্ছে onChange event এর মাধ্যমে, যখন user checkbox এ ক্লিক করবে তখন onChange handler call হবে
                    // onChange handler এ আমরা form state update করছি, যেখানে e.target.name = terms এবং e.target.checked = true/false
                    // true কিভাবে হবে? যখন checkbox এ ক্লিক করা হবে তখন checked state টগল হবে, অর্থাৎ true থেকে false বা false থেকে true হবে 
                    // টগল কি অটোমেটিক হবে? হ্যাঁ, ব্রাউজার অটোমেটিক টগল করে দেয় যখন user checkbox এ ক্লিক করে
					onChange={handleChange}
				/>
				Accept Terms & Conditions
			</label>
			<br />
			<br />

			{/* Radio Buttons */}
			<div>
				Gender:
				<label>
					<input
						type="radio"
						name="gender"
						value="Male"
						checked={form.gender === "Male"}
						// checked attribute দিয়ে নির্ধারণ করা হচ্ছে কোন radio button টি সিলেক্টেড হবে
						// "form.gender === "Male" মানে — state এর gender যদি 'Male' হয় তাহলে এই radio button এ টিক দাও"
						// কিন্তু প্রশ্ন হলো state কিভাবে update হবে?
						// সেটা হচ্ছে onChange event এর মাধ্যমে, যখন user এই radio button এ ক্লিক করবে তখন onChange handler call হবে
						// onChange handler এ আমরা form state update করছি, যেখানে e.target.name = gender এবং e.target.value = Male
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
			<br />

			{/* Dropdown Select - ব্যাখ্যা নিচে */}
			<select name="country" value={form.country} onChange={handleChange}>
				<option value="">Select Country</option>
				<option value="Bangladesh">Bangladesh</option>
				<option value="India">India</option>
				<option value="USA">USA</option>
			</select>

			<br />
			<br />

			<button type="submit">Submit</button>
		</form>
	);
}

// e.target.value (select-option এর জন্য) - যেই option টি সিলেক্ট করা হয়েছে সেই option এর value attribute এর value দিবে
// যেমন ধরো <option value="Bangladesh">Bangladesh</option> এ সিলেক্ট করলে e.target.value হবে "Bangladesh"

// e.target.name (select-option এর জন্য) - যেই select field এ change হয়েছে সেই select field এর name attribute এর value দিবে
// যেমন ধরো <select name="country"> এ change করলে e.target.name হবে "country"

// তাই setForm এ আমরা [name]: value করে লিখতে পারছি, যা dynamic ভাবে সঠিক property update করবে

// select এর value দিয়ে আমরা নির্ধারণ করছি কোন option টি সিলেক্টেড হবে
// যেমন ধরো value={form.country} মানে form.country এর value যেটা হবে সেই option টি সিলেক্টেড থাকবে
// যেমন ধরো form.country যদি "India" হয় তাহলে <option value="India">India</option> টি সিলেক্টেড থাকবে
// আর যখন user অন্য option সিলেক্ট করবে তখন onChange handler call হবে এবং form.country update হবে
