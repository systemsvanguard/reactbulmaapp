//src/pages/SiteFooter.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const SiteFooter = () => {
  /* ending copyrighht year is current year */
  const GetCurrentYear = () => {
    const currDate = new Date();
    const currYear = currDate.getFullYear();
    return (
      <span><strong>{currYear}</strong></span>
    );
  }

  return (
    <div>
      <footer className="footer has-background-link-light is-widescreen">
        <div className="content has-text-centered">
            <p>
               <strong>Smooth File Uploads</strong><br />  Yet <a href="http://www.ryanhunter.ca/code/">another</a>       demo project.   <strong><em>Filler text</em></strong> kindly supplied by  <a href="https://pirateipsum.me/">PirateIpsum.me</a>. <br />This source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.  <br />
               Copyright &copy; 2018 - <GetCurrentYear /> | All rights reserved.</p>


            <div className="footernav_outer">
              <p className="footernav_inner">
                <ul id="ul-footernav">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/services">Services</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/resources">Resources</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteFooter;