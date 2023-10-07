import React, { useState } from 'react';
import './dist/navbar.css'
import Logo from '../../Assets/Logo.png'
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'
const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNav = () => {
        setActive('navBar activeNavbar');
    }
    const closeNav = () => {
        setActive('navBar');
    }
    return (
        <>
            <section className='navBarSection'>
                <header className='header flex'>
                    <div className='logoDiv'>
                        <a href='#' className='logo'>
                            <img src={Logo} className='icon' />
                        </a>
                    </div>
                    <div className={active}>
                        <ul className="navLists flex">
                            <li className="navItem">
                                <a href='#' className='navLink'>Home</a>
                            </li>
                            <li className="navItem">
                                <a href='#' className='navLink'>About us</a>
                            </li>
                            <li className="navItem">
                                <a href='#' className='navLink'>Start Goda Ai</a>
                            </li>
                            <li className="navItem">
                                <a href='#' className='navLink'>Become Publisher</a>
                            </li>
                            <button className='btn'>
                                LOGIN
                            </button>

                        </ul>
                        <div onClick={closeNav} className="closeNavbar">
                            <AiFillCloseCircle className="icon" />
                        </div>
                    </div>
                    <div onClick={showNav} className="toggleNavbar">
                        <PiDotsNineBold className='icon' />
                    </div>
                </header>
            </section>
        </>
    )
}
export default Navbar