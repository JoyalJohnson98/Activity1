import React from 'react';

import './index.css';

import Navigation from './Components/Navbar/Navbar';

import ReactDOM from 'react-dom/client';

import Favourite from './Components/Pages/Favourite';

import Link from './Components/Pages/Link';

import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([

  { path: '/', element: <Navigation /> },

  { path: '/favourite', element: <Favourite /> },

  { path: '/link', element: <Link /> },

 

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>

);



// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
