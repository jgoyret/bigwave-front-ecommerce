import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
