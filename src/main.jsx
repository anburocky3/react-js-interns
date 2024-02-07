import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/Guest";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage.jsx";
import ErrorPage from "./pages/Error.jsx";
import FollowersPage from "./pages/FollowersPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // it will work like that. anbu.com/
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/about/:name",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/followers",
        element: <FollowersPage />,
      },
      //   {
      //     path: "*",
      //     element: <p>404 Not found!</p>,
      //   },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
