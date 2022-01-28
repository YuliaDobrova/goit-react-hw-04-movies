import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/Api';

import MovieList from '../components/movieList/MovieList';
import { PageStyled } from '../pagesStyles/PageStyled';

const HomePage = () => {
  /* TRENDING MOVIES */
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetchTrendingMovies().then(results => setMovies(results));
    setisLoading(false);
  }, [setisLoading]);

  return (
    <>
      <PageStyled>
        <div className="container">
          <h1 className="HomePageTitle">What's Popular</h1>
          <MovieList key={movies} movies={movies} isLoading={isLoading} />
        </div>
      </PageStyled>
    </>
  );
};

export default HomePage;

// HOW IT LOOKED BEFORE CHANGE FROM CLASS TO HOOKS

// import React, { Component } from 'react';
// import { fetchTrendingMovies } from '../services/Api';

// import MovieList from '../components/movieList/MovieList';
// import { PageStyled } from '../pagesStyles/PageStyled';

// class HomePage extends Component {
//   /* TRENDING MOVIES */
//   state = {
//     movies: [],
//     isLoading: false,
//   };

//   async componentDidMount() {
//     this.setState({ isLoading: true });
//     await fetchTrendingMovies().then(results =>
//       //  console.log(results)
//       this.setState({ movies: results, isLoading: false }),
//     );
//   }

//   render() {
//     return (
//       <>
//         <PageStyled>
//           <div className="container">
//             <h1 className="HomePageTitle">What's Popular</h1>
//             <MovieList movies={this.state.movies} isLoading={this.state.isLoading} />
//           </div>
//         </PageStyled>
//       </>
//     );
//   }
// }

// export default HomePage;
