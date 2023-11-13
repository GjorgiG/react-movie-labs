// import React, { useState, useEffect } from "react";
// import PageTemplate from '../components/templateMovieListPage'
// import { getUpcomingMovies } from "../api/tmdb-api";

// const UpcomingMovies = (props) => {
//   const [movies, setMovies] = useState([]);
//   // const favorites = movies.filter(m => m.favorite)
//   // localStorage.setItem('favorites', JSON.stringify(favorites))

//   const addToFavorites = (movieId) => {
//     const updatedMovies = movies.map((m) =>
//       m.id === movieId ? { ...m, favorite: true } : m
//     );
//     setMovies(updatedMovies);
//   };

//   useEffect(() => {
//     getUpcomingMovies().then(movies => {
//       setMovies(movies);
//     });
//   }, []);

//   return (
//     <PageTemplate
//       title='Upcoming Movies'
//       movies={movies || []}
//       selectFavorite={addToFavorites}
//     />
//   );
// };
// export default UpcomingMovies;

import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMovies = (props) => {
  const [movies, setMovies] = useState([]);

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getUpcomingMovies()
      .then((movies) => {
        console.log(movies); // Log the fetched movie data
        setMovies(movies);
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur
      });
  }, []);

  console.log(movies); // Log the movies state

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};

export default UpcomingMovies;