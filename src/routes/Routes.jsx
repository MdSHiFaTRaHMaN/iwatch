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
import ComingSoon from "../pages/ComingSoon";
import Help from "../pages/Help";
import Setting from "../pages/Setting";

const routes = createBrowserRouter([
    {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
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
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "", // এটি /dashboard
      element: <Dashboard />,
    },
    {
      path: "files", // এটি /dashboard/files
      element: <ComingSoon />
    },
    {
      path: "help",
      element: <Help />
    },
    {
      path: "settings",
      element: <Setting />
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ],
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
