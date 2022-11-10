import React, { useRef } from 'react'
import Footer from '../Footer/Footer'
import Text from '../Text/Text'
import logoLight from './../../assets/logo_light.png'
import './Header.scss'


const Header = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive')
    }

    return (
        <div className='header'>
            <main className='main'>
                <nav>
                    <div className="header">
                        <div className="header-left">
                            <img src={logoLight} alt="{logo image}" className='left__img' />
                            <span className='bar__btn' onClick={showNavbar}><i className="fa-solid fa-bars"></i></span>
                        </div>
                        <div ref={navRef} className="header-middle">
                            <span className='close__btn' onClick={showNavbar}><i className="fa-solid fa-xmark"></i></span>
                            <a href="#l">Design Theory</a>
                            <a href="#l">UX</a>
                            <a href="#l">UI</a>
                            <a href="#l">Typography</a>
                        </div>
                    </div>
                    <div className="nav-right">
                        <input type="text" />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </nav >
                <Text />
            </main>
            <Footer />
        </div>
    )
}

export default Header