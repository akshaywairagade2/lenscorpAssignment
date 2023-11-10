'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DropDown from './dropdown';
import logo from '../../public/logo.png'
import emailImage from '../../public/email.png'


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEmailClick = () => {
    const recipientEmail = 'info@neurodactyl.com';
    window.location.href = `mailto:${recipientEmail}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">
          <Image
            src={logo}
            width={200}
            height={200}
            alt="Picture of the logo"
          />
        </Link>
      </div>
      <div className={`${styles.menuToggle} ${isMobileMenuOpen && styles.show}`} style={{cursor:'pointer'}} onClick={toggleMobileMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul style={{fontFamily:"'TildaSans', Arial, sans-serif", fontSize:"25px", fontWeight:"400", color:"#ffffff"}} className={isMobileMenuOpen ? `${styles.navLinks} ${styles.show}` : styles.navLinks}>
        <li>
          <DropDown
            title="Products ↓ "
            text1="Server SDK for fingerprint recognition"
            href1="/sdk"
            text2="Server platform for fingerprint recognition"
            href2="/rest_api"
            text3="Fingers capture and recognition for mobile devices"
            href3="https://neurodactyl.com/mobileapp"
          />
        </li>
        <li>
          <DropDown
            title="Solutions ↓ "
            text1="Biometric Duplication"
            href1="https://neurodactyl.com/deduplication"
            text2="Fingerprint Card Conversion"
            href2="https://neurodactyl.com/fingerprintcards"
          />
        </li>
        <li><Link href="#advantages">Advantages</Link></li>
        <li><Link href="#markets">Markets</Link></li>
        <li><Link href="#news">News</Link></li>
        <li><Link href="#aboutus">About Us</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li onClick={handleEmailClick}>
        <Image
            src={emailImage}
            width={50}
            height={50}
            alt="Picture of the logo"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
