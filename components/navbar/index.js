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
            text3={"Fingers capture and recognition for mobile devices"} href3={"/sdk"}
          />
          <DropDown 
            title={"Solutions ↓ "}
            text1={"Biometric Duplication"} href1={"/sdk"}
            text2={"Fingerprint Card Conversion"} href2={"/sdk"}
          />
          <Link style={{marginRight: 20}} href="/">
            Advantages
          </Link>
          <Link style={{marginRight: 20}} href="/">
            Markets
          </Link>
          <Link style={{marginRight: 20}} href="/">
            News
          </Link>
          <Link style={{marginRight: 20}} href="/">
            About Us
          </Link>
          <Link style={{marginRight: 20}} href="/">
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