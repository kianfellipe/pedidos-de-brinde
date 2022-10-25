import logo from './logo-kian.svg'
import './styles.css'
import React from 'react'

function Header (){
    return(
        <header>
            <div className="headerContainer">
                <img src={logo} alt="Kian"/>
            </div>
        </header>
    )

}

export default Header