import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to="/">
				<h1 className="color-white">Demo Streaming</h1>
			</Link>
			<div>
				<span className="color-white">Login</span>

				<button className="color-white nav-button">
					Start your free trial
				</button>
			</div>
		</nav>
	);
}

export default Nav;
