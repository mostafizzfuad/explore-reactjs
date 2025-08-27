// DataProvider.jsx
function DataProvider({ render }) {
	const data = "Hello from DataProvider!";
	return <div>{render(data)}</div>;
}
export default DataProvider;