import Axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";

function Movies() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getData = async () => {
		setLoading(true);
		const config = {
			method: "get",
			url: "https://raw.githubusercontent.com/amawalla/js-coding-challenge/master/feed/sample.json",
			headers: {},
		};

		Axios(config)
			.then(function (response) {
				setData(response.data.entries);
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
				setError(true);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	//filter the first 21 entries where releaseYear >= 2010 sorted by title ascending and programmeType = movie
	const filteredData = data
		.filter(
			(entry) => entry.releaseYear >= 2010 && entry.programType === "movie"
		)
		.sort((a, b) => a.title.localeCompare(b.title))
		.slice(0, 21);

	return (
		<>
			<Nav />
			<div className="content">
				<div className="title">
					<h3>Popular Movies</h3>
				</div>
				<div className="wrapper">
					{loading ? (
						<>Loading...</>
					) : (
						<>
							{error ? (
								<>
									<p>Oops, something went wrong</p>
								</>
							) : (
								<>
									{filteredData.map((entry) => (
										<>
											<div className="movie-item">
												<img
													src={entry.images["Poster Art"].url}
													alt={entry.title}
												/>
												<p>{entry.title}</p>
											</div>
										</>
									))}
								</>
							)}
						</>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Movies;
