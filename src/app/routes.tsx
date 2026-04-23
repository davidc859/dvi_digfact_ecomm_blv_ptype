import { createBrowserRouter } from "react-router";
import Homepage from "../imports/Homepage1905";
import BlvPage from "./components/BlvPage";
import Panier from "../imports/Panier200825";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/blv",
    Component: BlvPage,
  },
  {
    path: "/panier",
    Component: Panier,
  },
]);
