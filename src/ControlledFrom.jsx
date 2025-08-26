import React, { useState } from "react";

export default function ControlledForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault(); // page reload আটকানো
		alert(`Name: ${name}, Email: ${email}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					value={name} // state এর সাথে bind
					onChange={(e) => setName(e.target.value)} // state update
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
}
