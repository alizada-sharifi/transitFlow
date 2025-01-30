import { Home, NotFound } from "../pages";
import MainLayout from "../layouts/MainLayout";

const MainRouter = [
  {
    path: "/",
    element: <MainLayout />, // Parent layout
    children: [
      {
        path: "", // Matches "/"
        element: <Home />,
      },
      {
        path: "*", // Matches all undefined routes
        element: <NotFound />,
      },
    ],
  },
];

export default MainRouter;
