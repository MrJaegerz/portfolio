import React, { useState, useEffect } from 'react'
import logo from '../assets/img/Capture.PNG'
import { Link } from 'react-scroll'
import akatsuki from '../assets/img/akatsuki.gif'
import { ScrollPercentage } from 'react-scroll-percentage'
import saitama from '../assets/img/saitama-profile.gif'
import NavbarResponsive from './NavbarResponsive'

const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
];

function Navbar() {

    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    const social = [
        { name: 'Github', icon: 'fab fa-github', link: 'https://github.com/XxJaeger' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/aim%C3%A9-koutsimouka-462b44136/' },
        { name: 'Twitter', icon: 'fab fa-twitter', link: 'https://twitter.com/ElCreator5' }
    ]
    const links = [
        { name: 'Home', href: 'home', icon: 'fas fa-home' },
        { name: 'About', href: 'about', icon: 'fas fa-user' },
        { name: 'Resume', href: 'resume', icon: 'fas fa-file' },
        { name: 'Portfolio', href: 'portfolio', icon: 'fas fa-book' },
        { name: 'Contact', href: 'contact', icon: 'fas fa-envelope' }
    ]
    return (
        <header>
            <div id="navbar-left">
                <div className="profile" style={{ marginTop: '10%', height: '33%' }}>
                    <img
                        src={saitama}
                        className="profile-picture" alt="profile-picture"></img>
                    <h1>Aime KSMK</h1>
                    <div className="social-network">
                        {social.map((result, key) => {
                            return (
                                <a href={result.link} target="_blank" key={key}>
                                    <i className={result.icon} style={{ color: 'white' }}></i>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <nav id="navbar" className='nav-menu navbar'>
                        <ul className="navbar-title">
                            {links.map((result, key) => {
                                return (
                                    <li>
                                        <div style={{ height: 35, margin: '10px 20px' }}>
                                            <Link className='nav-link' key={key} style={{ textAlign: 'center', display: 'flex', height: '100%', cursor: 'pointer' }}
                                                to={result.href} spy={true} smooth={true} duration={2000}>
                                                <div>
                                                    <i className={result.icon} style={{ fontSize: 25, marginRight: 15, width: 35 }}></i>
                                                </div>
                                                <div style={{ paddingTop: 4 }}>
                                                    <span style={{ color: 'white' }}>{result.name}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div>
                    {/* <img
                    src={akatsuki} style={{ marginTop: 150, marginBottom: '10%' }}
                    className="profile-picture" alt="profile-picture"></img> */}
                </div>
            </div>
            <NavbarResponsive/>

        </header>
    )
}

export default Navbar
