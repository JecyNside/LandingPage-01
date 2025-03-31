import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import MenuBar from "./components/MenuBar";
import Text from "./components/Text";
import SectionHero from "./components/Pages/SectionHero";
import SectionSlider from "./components/Pages/SectionSlider";
import ReactLenis from "lenis/react";

export default function App() {
  return (
    <ReactLenis root>
      <main>
        <Header />
        <SectionHero />
        <SectionSlider />
      </main>
    </ReactLenis>
  );
}
