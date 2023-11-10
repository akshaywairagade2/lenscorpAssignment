'use client'
import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';
import logo from '../../public/logo.png'

const Footer = () => {
  return (
    <div className={styles.footer_main}>
     <div><Image src={logo} width={170} height={30}></Image></div> 
     <div style={{marginLeft: '22%', flexDirection:'column'}}>
     <div style={{textAlign:"center", justifyContent:"center"}}>
      <text>All Right Reserved, 2023. Neurodactyl, LLC.</text>
     </div>
     <div style={{textAlign:"center", justifyContent:"center"}}>
      <text>Address: Georgia, Tbilisi, Nadzaladevi District, Kursebi Street,</text> 
     </div>
      <div style={{textAlign:"center", justifyContent:"center"}}>
      <text>N15. Identification Number: 400354488</text>
      </div>
      <div style={{textAlign:"center", justifyContent:"center"}}>
      <a href='mailto:info@neurodactyl.com'>E-mail us: info@neurodactyl.com</a>
      </div>
      </div>
    </div>
  );
};

export default Footer;
