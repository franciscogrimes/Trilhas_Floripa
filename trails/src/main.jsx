import React from "react";
import ReactDOM from "react-dom/client";

import routes from "./components/routes/route";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}></RouterProvider>
);
