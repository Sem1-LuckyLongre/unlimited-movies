import { useLoaderData, useNavigate } from "react-router-dom";
import "./MoviesDetails.css";

export const MoviesDetails = () => {
  const movieData = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <div className="poster-container">
        <img src={movieData.Poster} alt={movieData.Title} />
      </div>
      <div className="details-container">
        <h1 className="title">{movieData.Title}</h1>
        <div className="badges">
          <span className="badge">#MOVIE</span>
          <span className="badge year">YEAR: {movieData.Year}</span>
        </div>
        <p className="plot">{movieData.Plot}</p>
        <div className="awards">🏆 {movieData.Awards}</div>
        <div className="extra-details">
          <p><strong>Rating:</strong> ⭐ {movieData.imdbRating}/10</p>
          <p><strong>Duration:</strong> {movieData.Runtime}</p>
          <p><strong>Box Office:</strong> 💰 {movieData.BoxOffice}</p>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>GO BACK</button>
      </div>
    </div>
  );
}
