
import './App.css';
import Home from './Components/Pages/Home/Home';
import Popular from './Components/Pages/Popular/Popular';
import Battle from './Components/Pages/Battle/Battle';
import Navigation from './Components/Navigation/Navigation';

import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
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
