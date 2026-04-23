import { createBrowserRouter } from "react-router";
import Homepage1905 from "../imports/Homepage1905";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage1905,
  },
  {
    path: "*",
    Component: Homepage1905,
  },
]);