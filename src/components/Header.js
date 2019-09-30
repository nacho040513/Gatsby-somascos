import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" style={{"width":"100px"}}/></span>
        <h1>Proceso Vocacional</h1>
        <p>Arriésgate a la aventura de ser Somasco <a to="/generic">AQUi</a>.</p>
    </header>
)

export default Header
