// Dashboard.jsx
import React, { useContext } from "react";
import AuthContext from "./AuthContext";

export default function Dashboard() {
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext); // Context থেকে মান নেওয়া

	return (
		<div>
			{isLoggedIn ? (
				<>
					<h2>Welcome, User!</h2>
					<button onClick={() => setIsLoggedIn(false)}>Logout</button>
				</>
			) : (
				<>
					<h2>Please Login</h2>
					<button onClick={() => setIsLoggedIn(true)}>Login</button>
				</>
			)}
		</div>
	);
}
