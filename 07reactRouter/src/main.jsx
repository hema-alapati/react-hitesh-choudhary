import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/> }>
      <Route path='' element={<Home />} />
      <Route path="about/" element={<About />}        
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
  </React.StrictMode>
);
