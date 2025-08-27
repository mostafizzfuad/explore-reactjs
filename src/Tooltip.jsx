// Tooltip.jsx
import ReactDOM from "react-dom";

export default function Tooltip({ text }) {
	return ReactDOM.createPortal(
		<div
			style={{
				position: "absolute",
				top: "50px",
				left: "100px",
				background: "black",
				color: "white",
				padding: "5px",
				borderRadius: "5px",
			}}
		>
			{text}
		</div>,
		document.getElementById("tooltip-root")
	);
}
