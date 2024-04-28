import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import "../styles/Navbar.css";
import Circle from './Circle';
import HorizontalLine from './HorizontalLine';

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState("");
    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <>
            {currentPage === "/" ? (
                <nav className="navbar"><h1>aeon</h1></nav>
            ) : currentPage === "/signup" ? (
                <nav className="navbar">
                    <h1>aeon</h1>
                    <div className="login-link">
                        Have an account? <Link to="/">Log in</Link>
                    </div>
                </nav>
            ) : currentPage === "/signup/otp" ? (
                <nav className="navbar">
                    <h1>Aeon</h1>
                    <div className='navbar-mid-section'>
                        <div className='two-circles first-row'> 
                            <Circle name="Create Account" status="active"/><HorizontalLine status="active"/><Circle name="Confirm Email" status="not-active"/>
                        </div>
                        <div className='second-row'>
                            <p>Create account</p>
                            <p>Verify mail</p>
                        </div>    
                    </div>
                    <div className="login-link">
                        Have an account? <Link to="/">Log in</Link>
                    </div>
                </nav>
            ): currentPage === "/signup/otp-confirmed" ? (
                <nav className="navbar">
                    <h1>Aeon</h1>
                    <div className='navbar-mid-section'>
                        <div className='two-circles first-row'> 
                            <Circle name="Create Account" status="active"/><HorizontalLine status="active"/><Circle name="Confirm Email" status="active"/>
                        </div>
                        <div className='second-row'>
                            <p>Create account</p>
                            <p>Verify mail</p>
                        </div>    
                    </div>
                    <div className="login-link">
                        Have an account? <Link to="/">Log in</Link>
                    </div>
                </nav>
            ):  currentPage === "/signup/individual" ? (
                <nav className="navbar">
                    <div className="navbar-left">
                        <h1>Aeon</h1>
                    </div>
                    <div className='navbar-mid-section'>
                        <div className='two-circles first-row'> 
                            <Circle name="Create Account" status="not-active"/><HorizontalLine status="not-active"/><Circle name="Confirm Email" status="not-active"/>
                        </div>
                        <div className='second-row'>
                            <p>Create account</p>
                            <p>Verify mail</p>
                        </div>    
                    </div>                   
                    
                    <div className="login-link">
                        <p> Have an account? <Link to="/">Log in</Link></p>
                    </div>
                </nav>
        
            ):  currentPage === "/signup/business" ? (
                <nav className="navbar">
                    <div className="navbar-left">
                        <h1>Aeon</h1>
                    </div>
                    <div className='navbar-mid-section'>
                        <div className='two-circles first-row'> 
                            <Circle name="Create Account" status="not-active"/><HorizontalLine status="not-active"/><Circle name="Confirm Email" status="not-active"/>
                        </div>
                        <div className='second-row'>
                            <p>Create account</p>
                            <p>Verify mail</p>
                        </div>    
                    </div>
                    <div className="login-link">
                        <p>Have an account? <Link to="/">Log in</Link></p>
                    </div>
                </nav>
        
            ): null}
        </>
    );
};

export default Navbar;
