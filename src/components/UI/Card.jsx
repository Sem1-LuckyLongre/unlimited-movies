import { NavLink } from "react-router-dom";
import "./Card.css";

export const Card = ({ curMovie }) => {
  const { Poster, Title, imdbID } = curMovie;

  return (
    <li className="card" key={curMovie.imdbID}>
      <img src={Poster} alt={Title} className="card-image" />
      <div className="card-content">
        {/* <h3 className="card-title">{Title}</h3>
        <p className="card-year">{Year}</p>
        <p className="card-plot">{imdbID}</p> */}
        <NavLink to={`/movies/${imdbID}`}>
          <button className="card-button">Watch Now</button>
        </NavLink>
      </div>
    </li>
  );
};
