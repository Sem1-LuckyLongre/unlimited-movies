export const getMoviesData = async () => {
  try {
    let searchValue = localStorage.getItem("Search_Value");
    if (!searchValue) {
      searchValue = "spider-man"; // default search value
    }

    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=${searchValue}`
    );

    const data = await response.json();

    if (data.Response === "False") {
      // API returns a "False" response when no movies are found or there's an error
      return { error: "Not Found" };
    }

    return data;
  } catch (error) {
    console.log(error);
    return { error: "An error occurred while fetching data." };
  }
};
