import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components";
import App from "./App";

export const routes = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      {
        path: "",
        Component: Home,
      },
    ],
  },
]);
