import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components";
import App from "./App";
import { CourseList } from "./components/CourseList/CourseList";

export const routes = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path:'courses',
        Component:CourseList
      }
    ],
  },
]);
