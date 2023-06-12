import { createBrowserRouter, useNavigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Registration/Login/Login";
import Registration from "../pages/Registration/Registration/Registration";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Instructor from "../Layout/Dashboard/Instructor/Instructor";
import Courses from "../components/Courses/Courses";
import Payment from "../components/Payment/Payment";
import MyClass from "../components/MyClass/MyClass";







export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "//payment/:classId",
        element: <Payment/>,
      },
      {
        path: "/myclass",
        element: <MyClass/>,
      },

      {
        path: "/instructor",
        element: <Instructor />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

