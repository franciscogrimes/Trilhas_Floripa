import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/home";
import Trilhas from "../../Pages/trails";
import NovaTrilha from "../../Pages/newTrail";
import App from "../../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/menu-principal",
        element: <Home />,
      },
      {
        path: "/trilhas",
        element: <Trilhas />,
      },
      {
        path: "/nova-trilha",
        element: <NovaTrilha />,
      },
    ],
  },
]);

export default routes;
