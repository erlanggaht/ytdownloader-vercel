import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CaraDownload from "./components/cara-download";
import ErrorElement from "./components/ErrorElement";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/youtdownload",
    element: <App />,
    errorElement: <ErrorElement />,
  },
  {
    path : "/cara-download/:browser",
    element : <CaraDownload/>,
    errorElement : <ErrorElement/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
