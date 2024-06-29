import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";
import About from "./pages/About";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";
import Category from "./pages/Category";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
    {
      path: "/products",
      element: <AllProducts />,
    },
    {
      path: "/categories/:id",
      element: <Category />,
    },
    {
      path: "/products/:slug",
      element: <Product />,
    },
    {
      path: "/about-this-project",
      element: <About />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
