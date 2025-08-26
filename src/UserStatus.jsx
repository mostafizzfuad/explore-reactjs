// UserStatus.jsx
export default function UserStatus({ isLoggedIn }) {
	return (
		<div>
			{isLoggedIn ? (
				<h2>Welcome back, User!</h2>
			) : (
				<h2>Please login first.</h2>
			)}
		</div>
	);
}