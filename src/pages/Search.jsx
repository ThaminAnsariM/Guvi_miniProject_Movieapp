import { useFormik } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function Search() {
  const [searchMovies, setsearchMovies] = useState([]);

  const API_Key = "api_key=dd65ea68edeb37fd583997a135774d80";

  console.log(searchMovies);

  const formik = useFormik({
    initialValues: {
      searchQuery: "",
    },
    onSubmit: async (values) => {
      fetchData(values);
    },
  });

  async function fetchData(val) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${val.searchQuery}&include_adult=false&language=en-US&${API_Key}`
      );

      setsearchMovies(
        response.data.results.filter(
          (newMovie) =>
            !searchMovies.some((existing) => existing.id === newMovie.id)
        ).sort((a,b)=>b.vote_average - a.vote_average)
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to MovieHub</h2>
        <p className="text-gray-700">Discover your Desired  movies here...</p>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-wrap w-full max-w-2xl my-4"
        >
          <input
            type="text"
            name="searchQuery"
            value={formik.values.searchQuery}
            onChange={formik.handleChange}
            placeholder="Search for movies..."
            className="w-full p-2 border border-gray-300 rounded m-2"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-sm m-2 hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </form>

        {/* displaying results */}

        <div className="flex flex-wrap justify-center items-center gap-6 p-6 min-h-screen">
          {searchMovies.map((movie) => (
            <div
              key={movie.id}
              className="w-72 bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
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
                    <button
                      className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition-colors0"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      View Details
                    </button>
                  </Link>
                  <span className="text-sm text-gray-500">
                    ⭐
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}{" "}
                    | {movie.vote_count ?? 0} users
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
