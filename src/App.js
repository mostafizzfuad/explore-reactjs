// App.jsx
import styled from "styled-components";

const Button = styled.button`
	background: purple;
	color: white;
	padding: 10px 20px;
	border-radius: 10px;
	border: none;
	cursor: pointer;

	&:hover {
		background: darkblue;
	}
`;



export default function App() {
	return <Button>Click Me</Button>;
}

