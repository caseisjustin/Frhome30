import React, { memo, useEffect, useState } from "react"
import Movies from "@/components/movies/Movies"
import { request } from "@/api"

const Home = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		request("/discover/movie")
			.then(res => {
				setData(res.data)
			})
	}, [])

	return (
		<div>
			Home
			<Movies data={data}/>
		</div>
	)
}

export default memo(Home)