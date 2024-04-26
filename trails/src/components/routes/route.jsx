import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Trilhas from "../../pages/trails";
import NovaTrilha from "../../pages/newTrail";
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
