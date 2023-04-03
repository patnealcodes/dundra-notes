import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Characters from './pages/Characters/Characters';
import { Layout } from './components/Layout';
import Quests from './pages/Quests/Quests';
import Locations from './pages/Locations/Locations';
import Factions from './pages/Factions/Factions';
import CharacterDetails, { loader as characterDetailsLoader } from './pages/CharacterDetails/CharacterDetails';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path:"characters/:id",
        loader: characterDetailsLoader,
        element: <CharacterDetails />
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "quests",
        element: <Quests />,
      },
      {
        path: "factions",
        element: <Factions />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
