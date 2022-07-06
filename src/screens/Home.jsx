import React from "react";
import Footer from "../components/Footer";
import Nav from "./../components/Nav";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<Nav />
			<div className="content">
				<div className="title">
					<h3>Popular Titles</h3>
				</div>
				<div className="wrapper">
					<Link to="series">
						<div className="movie-item">
							<div className="image-placeholder">
								<h2>SERIES</h2>
							</div>
							<p>Popular Series</p>
						</div>
					</Link>
					<Link to="movies">
						<div className="movie-item">
							<div className="image-placeholder">
								<h2>MOVIES</h2>
							</div>
							<p>Popular Movies</p>
						</div>
					</Link>
				</div>
			</div>
			<Footer additionalCLasses="fixed-bottom" />
		</>
	);
}

export default Home;
