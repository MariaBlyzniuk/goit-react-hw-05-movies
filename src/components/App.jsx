import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import MoviesPage from 'views/Searchpage/MoviesPage';

import Appbar from './AppBar/AppBar';
// import NotFoundView from 'ui/NotFoundView';
// import Cast from './Cast/Cast';
// import HomePage from './HomePage/HomePage';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import Reviews from './Reviews/Reviews';
// import SearchBar from './MoviesPage/SearchBar';

const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: "HomePage" */)
);
// const MoviesPage = lazy(() =>
//   import('../views/MoviesPage' /* webpackChunkName: "MoviesPage" */)
// );
const MoviesPage = lazy(() =>
  import('../views/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  )
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));

export const App = () => {
  return (
    <>
      <Appbar />
        {/* <SearchBar></SearchBar>  */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>

          {/* <Route path="*" element={<NotFoundView />} /> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};

// 1dfef0d74d94332f9b324af0036ff049 key

// https://api.themoviedb.org/3/movie/550?api_key=1dfef0d74d94332f9b324af0036ff049

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGZlZjBkNzRkOTQzMzJmOWIzMjRhZjAwMzZmZjA0OSIsInN1YiI6IjYzODFlYjg4ZmI4MzQ2MDA4NDQwMDhjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rzqHIr6s9MLe9HOTP6pDvjMlfC53YrGI_9t5HOK3hB0  ???????? ?????????????? ?? API (v4 auth)