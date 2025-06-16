import  { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router";
import Gerners from "./Gerners";

function Allmovies() {
  const [allMovies, setAllmovies] = useState([]);
  const [page, setPage] = useState(1);
  const [GenreType, setGenreType] = useState(null);
  console.log(GenreType);

  const API_Key = "api_key=dd65ea68edeb37fd583997a135774d80";

  
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc${
            GenreType ? `&with_genres=${GenreType}` : ""
          }&${API_Key}`
        );

        setAllmovies((prev) => [
          ...prev,
          ...response.data.results.filter(
            (newMovies) =>
              !prev.some((existing) => existing.id === newMovies.id)
          ),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }



    // Fetch data on page changes
  useEffect(() => {
    fetchData();
  }, [page, GenreType]);

  // Reset page to 1 and clear movies when genre changes
  useEffect(() => {
    setAllmovies([]);
    setPage(1);
  }, [GenreType]);

  //

  return (
    <>
      <Gerners setGenreType={setGenreType}></Gerners>
      <InfiniteScroll
        dataLength={allMovies.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={true}
        loader={<h4 className="text-center py-4">Loading...</h4>}
      >
        <div className="flex flex-wrap justify-center items-center gap-6 p-6 bg-gray-100 min-h-screen">
          {allMovies.map((movies) => (
            <div
              key={movies.id}
              className="w-72 bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
                alt="Movie Poster"
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                  {movies.title}
                </h1>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {movies.overview}
                </p>
                <div className="flex justify-between items-center mt-10">
                  <Link to={`/Moviedetail/${movies.id}`}>
                    <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </Link>
                  <span className="text-sm text-gray-500">{`⭐${movies.vote_average.toFixed(
                    1
                  )} | ${movies.vote_count} users `}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Allmovies;
