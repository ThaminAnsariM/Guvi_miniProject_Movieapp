import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Trailer() {
  const [trailer, SetTrailer] = useState([]);

  console.log(trailer);

  const Parms = useParams();

  const API_Key = "api_key=dd65ea68edeb37fd583997a135774d80";

  console.log("trailer", Parms.id);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${Parms.id}/videos?language=en-US&${API_Key}`
        );
        
        SetTrailer(response.data.results.find((vedio) =>
            vedio.type ==="Trailer" && vedio.site === "YouTube"
        ));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, [Parms.id]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50 ">
  <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 ">
    Watch the Official Trailer
  </h1>

  <div className="w-full max-w-4xl">
    <div className="relative pt-[56.25%] overflow-hidden rounded-lg shadow-lg">
      {trailer?.key ? (
            <iframe
              loading="lazy"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Movie Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          ) : (
            <p className=" text-center font-bold text-4xl text-gray-700 dark:text-red-600">
              Trailer not available.
            </p>
          )}
    </div>
  </div>
</div>

  );
}

export default Trailer;
