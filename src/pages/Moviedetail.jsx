
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import Recomendedmovies from "../components/Recomendedmovies";
import { Link } from "react-router";
import Add_to_watch from "../components/Add_to_watch";
import Cast from "../components/Cast";


function Moviedetail() {
  const [movie, SetMovie] = useState([]);
  const params = useParams();
  console.log(params.id)

  const API_Key = "api_key=dd65ea68edeb37fd583997a135774d80";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?${API_Key}`
        );

        SetMovie(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  },[params.id]);

  return (
    <div className=" w-full min-h-screen  flex flex-col justify-center items-center px-4 py-5">
      <div className="  bg-white shadow-lg rounded-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Poster */}
        <div className="w-full md:w-[450px] h-auto bg-gray-100">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Poster"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {movie.title}
            </h1>
            <p className="text-gray-600 mb-1 text-sm">{movie.release_date}</p>
            <p className="text-gray-700 mb-4">{movie.genres?.map((g) => g.name).join(" 🔷 ")}</p>
            <p className="text-gray-700 mb-4"> {movie.overview}</p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Add_to_watch movie = {movie}></Add_to_watch>
            
            <Link to={`/Trailer/${movie.id}`}>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
              🎬 Watch Trailer
            </button>
            </Link>

            {/* Cast Placeholder */}
          
            
            <Cast id={movie.id}></Cast>
          

          </div>
        </div>
         
      </div>
      
          
      {/* recomendedsection */}
      <Recomendedmovies id={movie.id} ></Recomendedmovies>
    </div>
  );
}

export default Moviedetail;
