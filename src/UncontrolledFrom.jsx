import React, { useRef } from "react";

export default function UncontrolledForm() {
	const nameRef = useRef();
	const emailRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault(); // page reload আটকানো
		alert(
			`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`
		);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" ref={nameRef} />
			</label>
			<br />
			<label>
				Email:
				<input type="email" ref={emailRef} />
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
}

// nameRef.current - input element কে point করে
// nameRef.current.value - input element এর value কে point করে
