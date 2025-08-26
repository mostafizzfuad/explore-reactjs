// Notification.jsx
export default function Notification({ hasMessage }) {
	return (
		<div>
			<h2>Dashboard</h2>
			{hasMessage && <p>You have new messages!</p>}
		</div>
	);
}
