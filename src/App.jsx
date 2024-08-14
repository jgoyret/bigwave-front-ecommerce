import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";
import About from "./pages/About";
import AllProducts from "./pages/AllProducts";
import ProductView from "./pages/ProductView";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import OrderGreetings from "./pages/OrderGreetings";
import OrderInfo from "./pages/OrderInfo";
import Layout from "./pages/Layout";
import Checkout2 from "./pages/Checkout2";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <RegisterForm />,
        },
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/products",
          element: <AllProducts />,
        },
        {
          path: "/categories/:slug",
          element: <Category />,
        },
        {
          path: "/products/:slug",
          element: <ProductView />,
        },
        {
          path: "/about-this-project",
          element: <About />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/checkout2",
          element: <Checkout2 />,
        },
        {
          path: "/my-profile",
          element: <Profile />,
        },
        {
          path: "/order-completed",
          element: <OrderGreetings />,
        },
        {
          path: "/order/:orderId",
          element: <OrderInfo />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
