import axios from './axios'
import React,{useState} from 'react'
import { useEffect } from 'react'
import "./Row.css"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
function Row(props) {
  const [trailerUrl,setTrailerUrl]=useState("")
  const base_url = "https://image.tmdb.org/t/p/original/";
  const RunVideo = (movie) => {
    if(trailerUrl){
      setTrailerUrl("")
    }
    else{
        if(movie?.original_name === "Peaky Blinders")
        {
          movie.original_name = "Gentlemen"
        }
        if(movie?.original_name === "Stranger Things")
        {
          movie.original_name = "Enola Holmes"
        }
        movieTrailer(movie?.original_name || movie?.name || movie?.title || "").then((url)=>{
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v')); 
        }).catch(()=>console.log("Temporarily Unavailable"))
      }
  }
  const [movies,setMovies] = useState([])
  useEffect(() => {
    async function giveMovies() {
        const req = await axios.get(props.fetchUrl);
        setMovies(
            req.data.results
        );
        return req;
    }
    giveMovies();
  }, [props.fetchUrl])
  const opts = {
    height : "500px",
    width : "100%",
    playerVars : {
      autoplay : 1
    },
  }
  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="row_posters">
            {
            movies.map((movie) => 
            (
            <div className='box'><img
                    className={`row_poster ${props.isLarge && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${props.isLarge ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    onClick={()=> RunVideo(movie)} />
                    <h6 className={`movieName ${props.isLarge && "fontChange"}`}>{movie.title||movie.name||movie.original_name}</h6></div>
            )
            )
        }
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row