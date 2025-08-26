import User from "./User";

export default function UserList() {
	const users = [
		{ id: 1, name: "Mostafizur", age: 26 },
		{ id: 2, name: "Siam", age: 24 },
		{ id: 3, name: "Junnun", age: 22 },
	];

	return (
		<div>
			{users.map((user) => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
}
