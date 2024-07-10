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
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
