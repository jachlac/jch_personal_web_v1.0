import React from 'react';
import '../../styles/layout/Footer.css'
var hoy = new Date ()

const Footer = (props) => {
    return (

        <footer className='Holder' >

            <img src="./images/Footer/corchetes.png" width={50} alt="corchete"></img>
           <p className='ParFooter'> by Jose Chicala - Desarrollador Full stack - Copyright © 2022.</p>
            </footer>
            
        );
    }

    export default Footer;