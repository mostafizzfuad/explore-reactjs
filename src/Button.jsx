// Button.jsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Button() {
	const { theme, toggleTheme } = useContext(ThemeContext); // 3. useContext দিয়ে context access

	return (
		<button onClick={toggleTheme}>
			{theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
		</button>
	);
}

export default Button;
