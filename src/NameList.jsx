export default function NameList() {
	const names = ["Mostafizur", "Siam", "Junnun"];

	return (
		<ul>
			{names.map((name, index) => (
				<li key={index}>{name}</li> // key দিতে হবে
			))}
		</ul>
	);
}
