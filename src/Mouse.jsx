// Mouse.jsx (Render Props Component)
import { useState } from "react";

function Mouse({ render }) {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	function handleMouseMove(e) {
		setPosition({ x: e.clientX, y: e.clientY });
	}

	return (
		<div
			style={{ height: "200px", border: "1px solid gray" }}
			onMouseMove={handleMouseMove}
		>
			{/* render props call */}
			{render(position)}
		</div>
	);
}

export default Mouse;
