import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TileSection from "../components/tileSection";
import { homeObjOne } from "../components/tileSection/data"
import Portfolio from "../components/Portfolios";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection id='home' />
            <TileSection id='about' {...homeObjOne}/>
            <Portfolio id='portfolio' />
            <Contact id='contact'/>
            <Footer/>
        </>
    )
};
 
export default Home;