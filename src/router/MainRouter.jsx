import { About, Home, NotFound } from "../pages";
import MainLayout from "../layouts/MainLayout";
import Service from "../pages/Service";
import ServiceDetail from "../pages/ServiceDetail";
import Project from "../pages/Project";
import ProjectDetail from "../pages/ProjectDetail";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";

const MainRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "serviceDetail/:id",
        element: <ServiceDetail />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "projectDetail/:id",
        element: <ProjectDetail />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blogDetail/:id",
        element: <BlogDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default MainRouter;
