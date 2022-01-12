import React, {useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import DropDown from "./components/DropDown";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";


function App() {
    
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', hideMenu)
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    })
    return (
        <div>
            <NavBar toggle={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/about" exact element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
