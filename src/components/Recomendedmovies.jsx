import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router"; 

function Recomendedmovies({ id }) {
  const [recomendedMovies, setRecomendedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 

  const API_Key = "api_key=dd65ea68edeb37fd583997a135774d80";

  
  useEffect(() => {
    setRecomendedMovies([]);
    setPage(1);
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=${page}&${API_Key}`
        );

        setRecomendedMovies((prev) => [
          ...prev,
          ...response.data.results.filter(
            (newMovie) => !prev.some((m) => m.id === newMovie.id)
          ),
        ]);

        setTotalPages(response.data.total_pages); // ✅ Set max pages
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (id) fetchData();
  }, [id, page]);

  return (
    <div className="w-full mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Recommended Movies</h1>
      <InfiniteScroll
        dataLength={recomendedMovies.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={page < totalPages} // ✅ Only fetch if more pages
        loader={<h4 className="text-center py-4">Loading...</h4>}
      >
        <div className="flex flex-wrap justify-center items-center gap-6 p-6 bg-gray-100 min-h-screen">
          {recomendedMovies.map((movie) => (
            <div
              key={movie.id}
              className="w-72 bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                  {movie.title}
                </h1>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {movie.overview}
                </p>
                <div className="flex justify-between items-center mt-10">
                  <Link to={`/Moviedetail/${movie.id}`}>
                    <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition-colors0" onClick={window.scrollTo({ top: 0, behavior: 'smooth' })} >
                      View Details
                    </button>
                  </Link>
                  <span className="text-sm text-gray-500">
                    ⭐ {movie.vote_average.toFixed(1)} | {movie.vote_count} users
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Recomendedmovies;
