import React from "react";

function Gerners({setGenreType}) {
  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  return (
    <div className="flex flex-wrap gap-3 p-4">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={ ()=>setGenreType(genre.id)}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition duration-200 text-sm"
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default Gerners;
