import React from 'react'
import "./styles/styles.css"
import Logo from "./images/logo2.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
          <img src={Logo} alt="" width="200px" class="logo"/>
          

          <div>
              <ul className="nav_links">
                  <li><Link class="nav-link active" aria-current="page" to="/">HOME</Link></li>
                  <li><Link class="nav-link active" aria-current="page" to="/about">SOBRE</Link></li>
                  <li><a href="#dest">DESTINOS</a></li>
              </ul>
            </div>
            <a className="cta" href="#contato"><button>CONTATO</button></a>
    </header>
  )
}

export default Nav

