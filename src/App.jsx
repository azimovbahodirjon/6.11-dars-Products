import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayouts from "./layouts/MainLayouts";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import "./index.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
