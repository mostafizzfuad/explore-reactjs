// // ErrorBoundary.jsx
// import React, { Component } from "react";

// class ErrorBoundary extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { hasError: false };
// 	}

// 	// কোনো child component এ error ধরা পড়লে ট্রিগার হবে
// 	static getDerivedStateFromError(error) {
// 		return { hasError: true };
// 	}

// 	// error details log করা যায়
// 	componentDidCatch(error, info) {
// 		console.error("Error caught by ErrorBoundary:", error, info);
// 	}

// 	render() {
// 		if (this.state.hasError) {
// 			return <h2 style={{ color: "red" }}>Something went wrong!</h2>;
// 		}
// 		return this.props.children;
// 	}
// }

// export default ErrorBoundary;
