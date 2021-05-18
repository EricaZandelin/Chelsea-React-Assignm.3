import React from 'react'
import "./Footer.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";


function Footer() {

    return (
        <>
        <div className="all__footer">
        <div class="social-media__container">
       <FaFacebookSquare className="fb"/>
       <FaInstagramSquare className="ig"/>
       <FaYoutubeSquare className="yt"/>
        </div>
        <div class="list__container">
        <ul>
          <li>About us</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>      
        </>
    )
}

export default Footer
