import React from "react";
import '../styles/footer-styles.css'

const Footer = () => {
  const now = new Date();
  return(
    <footer className="footer">
      <p id='footer-time' >Arrival: {now.getHours()}:{now.getUTCMinutes()}:{now.getUTCSeconds()}</p >
      <p id="footer-text">2023 KICKSTER®. ALL RIGHTS RESERVED</p>
    </footer>
  )
}

export default Footer;
