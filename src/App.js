// App.jsx
import Mouse from "./Mouse";

export default function App() {
	return (
		<div>
			<h2>Render Props Example</h2>
			<Mouse
				render={(pos) => (
					<p>
						Mouse Position: {pos.x}, {pos.y}
					</p>
				)}
			/>
		</div>
	);
}
