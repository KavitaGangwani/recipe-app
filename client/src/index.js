import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AIsuggest from './pages/AIsuggest';
import RecipiePage from './pages/RecipiePage';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/aisuggest',
    element:<AIsuggest/>
  },
  {
    path:'/rec/:id',
    element:<RecipiePage/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   <RouterProvider router={router}/>

  </React.StrictMode>
);


