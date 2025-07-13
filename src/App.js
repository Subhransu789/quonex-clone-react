import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import VissonMission from "./components/VissionMission";
import CoreBusinessAreas from "./components/CoreBusinessAreas";
import ProductCarousel from "./components/ProductCarousel";
import CompetitiveEdge from "./components/Competitive Edge";
import Team from "./components/Team";
import WomenLed from "./components/WomenLed";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App(){
  return(
    <>
    <Header/>

    <HeroSection/>
    <AboutUs/>
    <WhyChooseUs/>
    <VissonMission/>
    <CoreBusinessAreas/>
    <ProductCarousel/>
    <CompetitiveEdge/>
    <WomenLed/>
    <Team/>
    <Contact/>
    <Footer/>
    </>
  );
}







export default App;