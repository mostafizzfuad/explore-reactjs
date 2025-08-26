// Status.jsx

export default function Status({ status }) {
	switch (status) {
		case "loading":
			return <h2>Loading...</h2>;
		case "success":
			return <h2>Data loaded successfully ✅</h2>;
		case "error":
			return <h2>Error occurred ❌</h2>;
		default:
			return <h2>Idle...</h2>;
	}
}
