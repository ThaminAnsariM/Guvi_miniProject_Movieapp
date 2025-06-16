import React from "react";
import axios from "axios";

function Add_to_watch({ movie }) {
  const API_Key = "api_key=dd65ea68edeb37fd583997a135774d80";
  const Account_id = 22072353;

  async function postData() {
    try {
      const send = await axios.post(
        `https://api.themoviedb.org/3/account/${Account_id}/watchlist?${API_Key}`,
        {
          media_type: "movie",
          media_id: movie.id,
          watchlist: true,
        }
      );
      console.log("Added to watchlist:", response.data);
      alert("✅ Movie added to watchlist!");
    } catch (error) {
      console.log("Error while posting data", error);
      alert("❌ Failed to add to watchlist.");
    }
  }

  return (
    <div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={postData}
      >
        ➕ Add to Watchlist
      </button>
    </div>
  );
}

export default Add_to_watch;
