export const getMoviesDetails = async ({params}) => {
    const ID = params.movieID;
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${ID}&apikey=${import.meta.env.VITE_API_KEY}`
      );
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  