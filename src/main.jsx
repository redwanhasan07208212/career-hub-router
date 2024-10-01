import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Applied from "./components/Applied/Applied";
import Error from "./components/ErrorPage/Error";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/applied",
        element:<Applied></Applied>,
        loader:()=>fetch('../jobs.json')
      },
      {
        path:'/jobs/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('../jobs.json')
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
