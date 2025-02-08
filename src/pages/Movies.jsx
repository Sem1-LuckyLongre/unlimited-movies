import { useLoaderData, useNavigate } from "react-router-dom";
import { Card } from "../components/UI/Card";
import { useEffect, useState } from "react";

export const Movies = () => {
  const moviesData = useLoaderData();
  const HandleSubmit = () => {
    let searchValue = document.getElementById("searchV").value;
    localStorage.setItem("Search_Value", searchValue);

    // window.location.reload();
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search movies..."
          id="searchV"
          required
          name="search"
        />
        <button type="submit" onClick={HandleSubmit} className="search-button">
          Search
        </button>
      </div>

      {/* Check if there's an error or no movies found */}
      {moviesData?.error && <div className="error-message">Not Found</div>}

      {/* Display movies if there's no error */}
      {!moviesData?.error && moviesData?.Search?.length > 0 && (
        <ul className="card-container">
          {moviesData.Search.map((curMovie) => {
            return <Card key={curMovie.imdbID} curMovie={curMovie} />;
          })}
        </ul>
      )}

      {/* If no movies found and no error, show a default message */}
      {!moviesData?.error && moviesData?.Search?.length === 0 && (
        <div className="error-message">No movies found</div>
      )}
    </>
  );
};
