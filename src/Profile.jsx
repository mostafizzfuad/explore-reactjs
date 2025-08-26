// Profile.jsx
import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function Profile() {
	const user = useContext(UserContext); // "Guest" পাবে
	return <h2>Welcome, {user}</h2>;
}
