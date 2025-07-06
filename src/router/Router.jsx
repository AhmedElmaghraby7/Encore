import { createBrowserRouter, Navigate } from "react-router-dom";
import Info from "../pages/Info";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Terms from "../pages/Terms";
import Cart from "../pages/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/info",
    element: <App />,
    children: [{ index: true, element: <Info /> }],
  },
  {
    path: "/shop",
    element: <App />,
    children: [{ index: true, element: <Shop /> }],
  },
  {
    path: "/terms",
    element: <App />,
    children: [{ index: true, element: <Terms /> }],
  },
  {
    path: "/cart",
    element: <App />,
    children: [{ index: true, element: <Cart /> }],
  },
]);

export default router;
