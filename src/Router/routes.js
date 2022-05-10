import Home from "../Components/Home";
import NotFoundPage from "./NotFoundPage";
import Currency from "../Components/Currency";
import Contact from "../Components/Contact";
import Login from "../Components/Login";
import Team from "../Components/Team";

const routes = [
  {
    path: "/currencies/:currency",
    exact: true,
    main: <Currency></Currency>,
  },
  {
    path: "/team",
    exact: true,
    main:  <Team ></Team>,
  },
  {
    path: "/contact",
    exact: true,
    main:  <Contact ></Contact>,
  },
  {
    path: "/login",
    exact: true,
    main:  <Login ></Login>,
  },
  {
    path: "/",
    exact: true,
    main:  <Home ></Home>,
  },
  {
    path: "",
    exact: false,
    main:  <NotFoundPage></NotFoundPage>,
  },


];
export default routes;
