import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("dflsj")
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="navBar">
            <h1>Ticket Tracer</h1>
            <div className={`links ${isMenuOpen ? "open" : ""}`}>
                <h3>Check Ticket</h3>
                <h3>Pay Ticket</h3>
                <h3>Contact Us</h3>
                {/* <Link onClick={toggleMenu} to="/">Home</Link>
                    <Link onClick={toggleMenu} to="about">About</Link>
                    <Link onClick={toggleMenu} to="models">vehicle models</Link>
                    <Link onClick={toggleMenu} to="testimonial">Testimonial</Link>
                    <Link onClick={toggleMenu} to="team">Our Team</Link>
                <Link onClick={toggleMenu} to="contact">contact</Link> */}
            </div>
            {/* <div>
                <button className="signIn">Sign in</button>
                <button className="logIn">Log in</button>
            </div> */}
        </nav>
    )
}
export default Navbar;