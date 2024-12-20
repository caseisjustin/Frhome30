import React from "react"
import MovieItem from "./MovieItem"

const Movies = ({data}) => {
	console.log(data)
	return (
		<div>
			Movies
			<div className="flex gap-2 flex-wrap container">
				{
					data?.results?.map((movie) => (
						<MovieItem key={movie.id} {...movie}/>
					))
				}
			</div>
		</div>
	)
}

export default Movies