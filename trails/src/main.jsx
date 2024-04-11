import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRoute } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render();
const routers = createBrowserRoute([
  {
    path: "/",
    element: <home />,
  },
]);

return (
  <RouterProvider router={routers}>
    <App />
  </RouterProvider>
);
