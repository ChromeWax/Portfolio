import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

import Portfolio from "./pages/Projects/Programming/Portfolio.tsx";
import Botography from "./pages/Projects/Programming/Botography.tsx";
import RoboRythm from "./pages/Projects/Programming/RoboRythm.tsx";
import Apothecary from "./pages/Projects/Art/Apothecary.tsx";
import LanternFall from "./pages/Projects/Programming/LanternFall.tsx";
import FishNChips from "./pages/Projects/Programming/FishNChips.tsx";
import Realism from "./pages/Projects/Art/Realism.tsx";
import Lock from "./pages/Projects/Programming/Lock.tsx";
import HomeLab from "./pages/Projects/Programming/HomeLab.tsx";
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
    path: "portfolio",
    element: <Portfolio />
  },
  {
    path: "botography",
    element: <Botography />
  },
  {
    path: "roborythm",
    element: <RoboRythm />
  },
  {
    path: "apothecary",
    element: <Apothecary />
  },
  {
    path: "lanternfall",
    element: <LanternFall />
  },
  {
    path: "fishnchips",
    element: <FishNChips />
  },
  {
    path: "realism",
    element: <Realism />
  },
  {
    path: "lock",
    element: <Lock />
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
    path: "homelab",
    element: <HomeLab />
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
