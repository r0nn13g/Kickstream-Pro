import React from "react";
import '../styles/footer-styles.css'

const Footer = () => {
  const now = new Date();
  return(
    <footer className="footer">
      <p id='footer-time' >Arrival: {now.getHours()}:{now.getUTCMinutes()}:{now.getUTCSeconds()}</p >
      <p id="footer-text">2024 Kickstream Pro. ALL RIGHTS RESERVED</p>
    </footer>
  )
}

export default Footer;
