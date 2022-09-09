import React from 'react';
import { Link } from 'react-router-dom';
import openImg from '../assets/images/openclass_logo.png';
import fccImg from '../assets/images/fcc_primary_small.png';
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

          <Link to='/' as={Link} style={{textDecoration: 'none'}}>
            <h4>CV</h4>
          </Link>

          <Link to='/Certifications' as={Link} style={{textDecoration: 'none'}}>
            <h4>Certifications</h4>
          </Link>

          <Link to='/Projects' as={Link} style={{textDecoration: 'none'}}>
            <h4>Projects</h4>
          </Link>

          <Link to='/Videos' as={Link} style={{textDecoration: 'none'}}>
            <h4>Videos</h4>
          </Link>

        </div>

        <div className="flexible--img">

          <img id="img--oc"
            src={openImg} alt="no libImg !"
           />

          <img id="img--fcc"
            src={fccImg} alt="no libImg !"
           />

          <img id="img--gh"
            src={ghImg} alt="no libImg !"
           />

          <img id="img--vite"
            src={viteImg} alt="no viteImg !"
           />

          <img id="img--react"
            src={reactImg} alt="no reactImg !"
           />

          <img id="img--lib"
            src={libImg} alt="no libImg !"
           />

          <img id="img--redux"
            src={reduxImg} alt="no libImg !"
           />

          <img id="img--ts"
            src={tsImg} alt="no libImg !"
           />

        </div>

      </nav>

    </div>
  );
}