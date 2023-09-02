
import './App.css';
import Home from './Components/Pages/Home/Home';
import Popular from './Components/Pages/Popular/index';
import Battle from './Components/Pages/Battle/index';
import Navigation from './Components/Navigation/Navigation';
import Results from './Components/Pages/Battle/Results';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Navigation/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "popular",
        element:<Popular/>,
      },
      {
        path: "battle",
        element:<Battle/>,
      },
      {
        path: "battle/results",
        element:<Results/>,
      },
      {
        path: "*",
        element: <h1>Error</h1>,
      }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
