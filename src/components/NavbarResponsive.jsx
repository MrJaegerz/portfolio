import React from 'react'

function NavbarResponsive() {

    const navbar = () => {
        console.log("Toto")
        const navbarLeft = document.getElementById('navbar-left')
        var style = window.getComputedStyle(navbarLeft, null).getPropertyValue("display");
        
        if (style == 'none') {
            navbarLeft.style.display = "block";
            navbarLeft.style.zIndex = 3;
        }
        else {
            navbarLeft.style.display = "none";
        }
    }

    return (
        <div className="navbar-right" onClick={navbar}>
            <i className='fas fa-bars fa-2x'></i>
        </div>
    )
}

export default NavbarResponsive
