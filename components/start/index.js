
import Link from 'next/link';
import styles from './start.module.css';
import Image from 'next/image'
import start from '../../public/start.png'

const Start = () => {
  return (
    <start className={styles.start}>
        <div>
          <h1>Contactless fingerprint recognition</h1>
          <ul>
            <li>&#8226; Highly accurate neural network algorithms</li>
            <li>&#8226; Work with scans and photo images</li>
            <li>&#8226; All types of fingerprints are supported</li>
          </ul>
          <h3>
              Top-tier algorithm accuracy <a href='https://pages.nist.gov/pft/results/pftiii/'><u>in NIST PFT III evaluation</u></a>
          </h3>
        </div>
        <div>
        <Image
            src={start}
            width={300}
            height={300}
            alt="Picture of the hand"
          />
        </div>
    </start>
  );
};

export default Start;
