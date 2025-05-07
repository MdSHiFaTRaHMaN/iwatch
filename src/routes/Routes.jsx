import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NewsDetails from "../pages/newsdetails/NewsDetails";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import ErrorPage from "../components/ErrorPage";
import Chatpage from "../pages/chatpage/Chatpage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news-details",
        element: <NewsDetails />,
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/chat",
    element: <Chatpage />,
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);
export default routes;
