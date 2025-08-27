// Modal.js
import ReactDOM from "react-dom";

export default function Modal({ children }) {
	return ReactDOM.createPortal(
		<div
			style={{
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				background: "white",
				padding: "20px",
				border: "2px solid black",
			}}
		>
			{children}
		</div>,
		document.getElementById("modal-root") // এখানে render হবে
	);
}

