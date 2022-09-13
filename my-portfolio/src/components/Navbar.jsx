import React from 'react';
import { Link } from 'react-router-dom';
import mysqlImg from '../assets/images/mysql_logo.png';
import mongooseImg from '../assets/images/mongoose_logo.png';
import pythonImg from '../assets/images/python_logo.png';
import ghImg from '../assets/images/gh_logo.png';
import viteImg from '../assets/images/vite_logo.svg';
import reactImg from '../assets/images/react_logo.svg';
import libImg from '../assets/images/logo_lib.png';
import reduxImg from '../assets/images/redux.png';
import tsImg from '../assets/images/ts.png';
import '../styles/navstyle.scss';


export const Navbar = () => {
  return (
    <div className="main--div">

      <nav className="navbar">

        <div className="flexible--links">

          <Link className="topressbtn" to='/' as={Link} style={{textDecoration: 'none'}}>
            <h4>About</h4>
          </Link>

          <Link className="topressbtn" to='/Certifications' as={Link} style={{textDecoration: 'none'}}>
            <h4>Certifications</h4>
          </Link>

          <Link className="topressbtn" to='/Contact' as={Link} style={{textDecoration: 'none'}}>
            <h4>Contact</h4>
          </Link>

          <Link className="topressbtn" to='/Videos' as={Link} style={{textDecoration: 'none'}}>
            <h4>Videos</h4>
          </Link>

        </div>

        <div className="flexible--img">

          <img id="img--gh"
            src={ghImg} alt="no ghImg !"
           />

          <img id="img--python"
            src={pythonImg} alt="no pythonImg !"
           />

          <img id="img--lib"
            src={libImg} alt="no libImg !"
           />

          <img id="img--react"
            src={reactImg} alt="no reactImg !"
           />

          <img id="img--vite"
            src={viteImg} alt="no viteImg !"
           />

          <img id="img--redux"
            src={reduxImg} alt="no reduxImg !"
           />

          <img id="img--ts"
            src={tsImg} alt="no tsImg !"
           />

          <img id="img--mysql" style={{background: 'lightgrey', borderRadius: '50%'}}
            src={mysqlImg} alt="no openImg !"
           />

          <img id="img--mongoose" style={{background: 'lightgrey', borderRadius: '50%'}}
            src={mongooseImg} alt="no fccImg !"
           />

        </div>

      </nav>

    </div>
  );
}