import { lazy } from "react";

const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage.js" /*webpackChunkName: "HomePage" */)
    ),
  },
  {
    name: "movies",
    path: "/movies",
    exact: true,
    component: lazy(() =>
      import("../pages/MoviesPage" /*webpackChunkName: "MoviesPage" */)
    ),
  },
  {
    name: "movieDetails",
    path: "/movies/:id",
    exact: false,
    component: lazy(() =>
      import(
        "../pages/MovieDetailsPage.js" /*webpackChunkName: "MovieDetailsPage" */
      )
    ),
  },
];

export default mainRoutes;
