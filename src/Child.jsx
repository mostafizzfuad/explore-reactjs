// Child.jsx

import React, { Component } from "react";
import GrandChild from "./GrandChild";
export default class Child extends Component {
	render() {
		return <GrandChild />
	}
}
