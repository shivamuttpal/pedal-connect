import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ContactMe from "./pages/ContactMe";
import Layout from "./components/layout/Layout";

import { Helmet } from "react-helmet";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {

  
  return (
    <>
      <RouterProvider router={router} />
   
      <Helmet>
        <title>PedalConnect</title>
      </Helmet>
    </>
  );
}

export default App;
