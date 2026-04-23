import { RouterProvider } from "react-router";
import { router } from "./routes";

// BLV Dashboard Application
export default function App() {
  return <RouterProvider router={router} />;
}