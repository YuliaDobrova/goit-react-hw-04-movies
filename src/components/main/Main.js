import React, { Suspense } from "react";
import { Switch, Route } from "react-router";
import mainRoutes from "../../routes/mainRoutes";
import Loader from "react-loader-spinner";

const Main = () => {
  return (
    <main>
      <Suspense
        fallback={
          <Loader
            type="Bars"
            color="rgba(33, 229, 243, 0.9)"
            height={80}
            width={80}
            className="loader"
          />
        }
      >
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.name}
            />
          ))}
        </Switch>
      </Suspense>
      <p className="footer">
        Designed and developed
        <br />
        by GoIT Student
        <br />
        Dobrova Yulia
      </p>
    </main>
  );
};

export default Main;

// import HomePage from "../pages/HomePage";
// import MovieDetailsPage from "../pages/MovieDetailsPage";
// import MoviesPage from "../pages/MoviesPage";
// import NotFoundView from "../pages/NotFoundView";

// const HomePage = lazy(() =>
//   import("../pages/HomePage.js" /*webpackChunkName: "HomePage" */)
// );
// const MovieDetailsPage = lazy(() =>
//   import(
//     "../pages/MovieDetailsPage.js" /*webpackChunkName: "MovieDetailsPage" */
//   )
// );
// const MoviesPage = lazy(() =>
//   import("../pages/MoviesPage" /*webpackChunkName: "MoviesPage" */)
// );
// const NotFoundView = lazy(() =>
//   import("../pages/NotFoundView.js" /*webpackChunkName: "NotFoundView" */)
// );
