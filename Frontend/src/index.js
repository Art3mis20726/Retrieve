import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from  "./pages/about";
import Profile from  "./pages/profile";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);