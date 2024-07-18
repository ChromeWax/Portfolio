import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

import Apothecary from "./pages/Projects/Art/Apothecary.tsx";
import Realism from "./pages/Projects/Art/Realism.tsx";
import NeonBar from "./pages/Projects/Art/NeonBar.tsx";
import WWITrench from "./pages/Projects/Art/WWITrench.tsx";
import Beach from "./pages/Projects/Art/Beach.tsx";
import StillLife from "./pages/Projects/Art/StillLife.tsx";
import Switch from "./pages/Projects/Art/Switch.tsx";
import ChromePhone from "./pages/Projects/Art/ChromePhone.tsx";
import GameBoy from "./pages/Projects/Art/GameBoy.tsx";

import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Projects />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "apothecary",
    element: <Apothecary />
  },
  {
    path: "realism",
    element: <Realism />
  },
  {
    path: "neonbar",
    element: <NeonBar />
  },
  {
    path: "wwitrench",
    element: <WWITrench />
  },
  {
    path: "beach",
    element: <Beach />
  },
  {
    path: "stilllife",
    element: <StillLife />
  },
  {
    path: "switch",
    element: <Switch />
  },
  {
    path: "chromephone",
    element: <ChromePhone />
  },
  {
    path: "gameboy",
    element: <GameBoy />
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
