import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
<<<<<<< Updated upstream
import RegisterForm from "./pages/RegisterForm";
=======
import About from "./pages/About";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      path: "/register",
      element: <RegisterForm />,
=======
      path: "/about-this-project",
      element: <About />,
>>>>>>> Stashed changes
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
