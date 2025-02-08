import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Unlimited Movies, Anytime, Anywhere</h1>
        <p className="hero-description">
          Watch your favorite movies with just a click. Join now and explore
          thousands of films.
        </p>
        <NavLink to={"/movies"} className="explore-link">
          <button className="explore-button">Explore Now</button>
        </NavLink>
      </section>
    </div>
  );
};
