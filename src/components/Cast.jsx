import { useState, useEffect } from "react";
import axios from "axios";

function Cast({ id }) {
  const [Cast, setcast] = useState([]);

  console.log("castid", id);

  const API_Key = "api_key=dd65ea68edeb37fd583997a135774d80";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?${API_Key}`
        );
        setcast(response.data.cast.sort((a, b) => b.popularity - a.popularity));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  console.log(Cast);

  return (
    <div className="w-full overflow-x-auto ">
      <h2 className="text-lg font-semibold text-gray-800">Cast</h2>
      <div className="flex flex-wrap gap-6 p-4">
        {Cast.slice(0, 10).map((member) => (
          <div className="flex flex-col items-center min-w-max">
            <img
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                  : "https://via.placeholder.com/100x150?text=No+Image"
              }
              alt={member.name}
              className="w-20 h-20 object-cover rounded-full shadow"
            />
            <p className="mt-2 text-center text-sm font-semibold text-gray-800">
              <span className="text-blue-600">{member.name}</span>
              <br />
              <span className="text-gray-600 text-xs">
                as {member.character}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;
