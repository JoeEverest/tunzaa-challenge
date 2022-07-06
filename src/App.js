import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Movies from "./screens/Movies";
import Series from "./screens/Series";
import "./assets/css/styless.css"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="movies" element={<Movies />} />
			<Route path="series" element={<Series />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
}

export default App;
