// GrandChild.jsx
// (গ) Consumer (Function Component বা Class Component — দুটোতেই কাজ করে)
import UserContext from "./UserContext";

export default function GrandChild() {
	return (
		<UserContext.Consumer>
			{(user) => <h2>User: {user}</h2>}
		</UserContext.Consumer>
	);
}
