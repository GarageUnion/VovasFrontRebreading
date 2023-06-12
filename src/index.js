import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';

import EnterPage from './loginforms/EnterPage';
import RegistrationPage from './loginforms/RegistrationPage';

import PiesRecipe from './pages/new recipes/PiesRecipe';
import CraftBreadRecipe from './pages/new recipes/CraftBreadRecipe';

import ProductsPage from './pages/navigation/ProductsPage';
import PiesPage from './pages/navigation/PiesPage';
import CraftBreadPage from './pages/navigation/CraftBreadPage';

import ProductsInfoPage from './pages/info/ProductsInfoPage';
import PiesInfoPage from './pages/info/PiesInfoPage';
import CraftBreadInfoPage from './pages/info/CraftBreadInfoPage';

import './css/index.css'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <ProductsPage/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: "/pies",
            element: <PiesPage/>,
            errorElement: <ErrorPage/>,
        },
        
        {
            path: "/craftbread",
            element: <CraftBreadPage/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/pie-info/:id",
            element: <PiesInfoPage/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/product-info/:id",
            element: <ProductsInfoPage/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/craftbread-info/:id",
            element: <CraftBreadInfoPage/>,
            errorElement: <ErrorPage />,
        },
      
      {
          path: "/enter",
          element: <EnterPage/>,
          errorElement: <ErrorPage />,
      },

      {
          path: "/registration",
          element: <RegistrationPage/>,
          errorElement: <ErrorPage />,
      },
      {
          path: "/pies-recipe",
          element: <PiesRecipe/>,
          errorElement: <ErrorPage />,
      },
      {
          path: "/craftbread-recipe",
          element: <CraftBreadRecipe/>,
          errorElement: <ErrorPage />,
      },
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
