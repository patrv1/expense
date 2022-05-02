import React from 'react';


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright {year} lit Inc</p>
        </footer>
    )
}

export default Footer;