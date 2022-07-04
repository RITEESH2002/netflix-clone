import axios from './axios';
import React,{useEffect, useState} from 'react'
import './Banner.css'
import requests from './Requests';
function Banner() {
    
const[movie,setMovie] = useState([]);
useEffect(() => {
  async function fetchData()
  {
    const request = await axios.get(requests.fetchTrending);
    setMovie(
        request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ]
    )
        return request;
  }
  fetchData();
}, [])

console.log(movie);
function truncate (string,n) {
    return string?.length>n ? string.substr(0,n-1)+"..." : string;
}  
return (
    <header className='banner' style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>{movie?.original_name || movie?.name ||movie?.title}</h1>
            <h1 className='banner_description'>{truncate(movie?.overview,190)}</h1>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className="banner_button">My List</button>
            </div>
        </div>
        <div className='fade_bottom'></div>
    </header>
  );
}

export default Banner