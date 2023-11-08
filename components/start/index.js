
import Link from 'next/link';
import styles from './start.module.css';
import Image from 'next/image'
import start from '../../public/start.png'

const Start = () => {
  return (
    <div className={styles.start}>
        <div>
          <text style={{fontSize:"40px", fontWeight:700}}>
            Contactless fingerprint recognition
          </text>
          <ul>
            <li>&#8226; Highly accurate neural network algorithms</li>
            <li>&#8226; Work with scans and photo images</li>
            <li>&#8226; All types of fingerprints are supported</li>
          </ul>
          <text style={{fontSize:"24px", fontWeight:900}}>
              Top-tier algorithm accuracy <a href='https://pages.nist.gov/pft/results/pftiii/'><u>in NIST PFT III evaluation</u></a>
          </text>
        </div>
        <div>
        <Image
            src={start}
            width={300}
            height={300}
            alt="Picture of the hand"
          />
        </div>
    </div>
  );
};

export default Start;
