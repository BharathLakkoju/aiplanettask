import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateChallenge from "./components/CreateChallenge.tsx";
import "./index.css";
import Header from "./components/Header.tsx";
import ChallengeDetail from "./components/ChallengeDetailPage.tsx";
import EditChallenge from "./components/EditChallenge.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateChallenge />,
  },
  {
    path: "/details",
    element: <ChallengeDetail />,
  },
  {
    path: "/edit",
    element: <EditChallenge />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
