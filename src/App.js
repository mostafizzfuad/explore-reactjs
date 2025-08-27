// App.jsx
import withLogger from "./components/withLogger";
import Hello from "./components/Hello";

// HOC দিয়ে wrap করা
const HelloWithLogger = withLogger(Hello);

export default function App() {
	return <HelloWithLogger name="Mostafizur" />;
}


