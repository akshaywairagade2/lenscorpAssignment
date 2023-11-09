'use client';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image'
import logo from '../../public/logo.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DropDown from './dropdown';

const Navbar = () => {

  const handleEmailClick = () => {
    const recipientEmail = 'akshaywairagade2@gmail.com';
    window.location.href = `mailto:${recipientEmail}`;
  }
  
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
      <div style={{display: 'flex', flexDirection: 'row'}}>
          <DropDown 
            title={"Products ↓ "}
            text1={"Server SDK for fingerprint recognition"} href1={"/sdk"}
            text2={"Server platform for fingerprint recognition"} href2={"/rest_api"}
            text3={"Fingers capture and recognition for mobile devices"} href3={"https://neurodactyl.com/mobileapp"}
          />
          <DropDown 
            title={"Solutions ↓ "}
            text1={"Biometric Duplication"} href1={"https://neurodactyl.com/deduplication"}
            text2={"Fingerprint Card Conversion"} href2={"https://neurodactyl.com/fingerprintcards"}
          />
          <Link style={{marginRight: 20}} href="#advantages">
            Advantages
          </Link>
          <Link style={{marginRight: 20}} href="#markets">
            Markets
          </Link>
          <Link style={{marginRight: 20}} href="#news">
            News
          </Link>
          <Link style={{marginRight: 20}} href="#aboutus">
            About Us
          </Link>
          <Link style={{marginRight: 20}} href="#contact">
            Contact
          </Link>
          <a style={{marginRight: 20}} onClick={() => handleEmailClick()}>
            <EmailOutlinedIcon/>
          </a>    
      </div>
    </nav>
  );
};

export default Navbar;