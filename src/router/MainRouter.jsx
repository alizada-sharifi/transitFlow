import {
  About,
  Home,
  NotFound,
  Service,
  ServiceDetail,
  Project,
  ProjectDetail,
  Blog,
  BlogDetail,
  Team,
} from "../pages";
import MainLayout from "../layouts/MainLayout";
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
        path: "team",
        element: <Team />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default MainRouter;
