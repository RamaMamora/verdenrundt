import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
const Footer = () => {
  // State til farveændring ved klik
  const [facebookClicked, setFacebookClicked] = useState(false);
  const [instagramClicked, setInstagramClicked] = useState(false);
  return (
    <footer className={styles.footer}>
      <div className={styles.infoFooter}>
        {" "}
        <h3>VerdenRundt</h3>
        <p>
          Her deler vi guides, fortællinger og billeder fra vores rejser rundt i
          hele verden.
        </p>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className={styles.menuer}>
        <h3>Indhold</h3>
        <a href="/">Forside</a>
        <a href="/Destination">Destinationer</a>
        <a href="">Rejsetips</a>
        <a href="/About">Om os</a>
      </div>
      <div className={styles.socialIcon}>
        <h3>Kontakt os</h3>
        <div className={styles.icon}>
          {/* Facebook-ikon */}
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={facebookClicked ? styles.clicked : styles.default}
            onClick={() => setFacebookClicked(true)} // Skifter farve ved klik
          >
            <FaFacebook />
          </Link>

          {/* Instagram-ikon */}
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={instagramClicked ? styles.clicked : styles.default}
            onClick={() => setInstagramClicked(true)} // Skifter farve ved klik
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
