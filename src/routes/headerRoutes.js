import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";

const headerRoutes = [
  { name: "home", path: "/", exact: true, component: HomePage },
  { name: "movies", path: "/movies", exact: true, component: MoviesPage },
];
export default headerRoutes;
