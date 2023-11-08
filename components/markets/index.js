
import Link from 'next/link';
import styles from './markets.module.css';
import Image from 'next/image'
import Comp_Market from './market_component';
import id_sm from '../../public/id_sm.png'
import banks_sm from '../../public/bank_sm.png'
import gov_sm from '../../public/gov_sm.png'
import police_sm from '../../public/police_sm.png'
import forensic_sm from '../../public/forensic_sm.png'

const Markets = () => {
  return (
    <div className={styles.main}>
        <text style={{fontSize:"50px", marginLeft:"5rem", marginTop:"1rem", color:"blue"}}>
          Markets
        </text>
        <div className={styles.sub_main}>
            <Comp_Market
              side={"left"}
              title={"National ID"}
              description={`National biometric system plays a key role in fraud prevention, providing of digital governmental services and national security. Fingerprint recognition is a "must-have" biometric modality in such systems: it's reliable, unique for any individuals including identical twins and changes less over time than face.Our algorithms are designed to work with millions of records in enrollment databases with high accuracy and low false accept rate even for a search with one finger. High matching speed - up to 1 billion matches per 1 s - is a crucial advantage for big scale projects. It significantly saves customer's budget: numbers of required matching servers is up to 100 times less than the same numbers for "traditional" recognition algorithms.`}
              logo={id_sm}
            />
            <Comp_Market
              side={"right"}
              title={"Banks"}
              description={`Banks go digital today. Now good service means that a lot of features can be provided to a client remotely, without visiting bank office. Biometric identification and verification help to prove customer's identity for online operations. Its safer and more convenient than a password, biometrics can not be forgotten or passed to someone else and it doesn't require memorizing.Our technologies unlock fingerprint recognition for user's online verification and customer onboarding, because it requires only a regular phone. Mobile SDK can verify a person using 4 fingers, which are user-friendly to capture. It ensures ultimate verification and identification accuracy, which is much higher than recognition with one face.`}              
              logo={banks_sm}
            />
            <Comp_Market
              side={"left"}
              title={"Governmental services"}
              description={`Biometric identification and verification expedite and secure providing of digital governmental services. Its especially convenient for elder citizens, who often have difficulties with online authorization and memorizing lot of different passwords, which stops them from using digital services.Fingerprint recognition provides high accuracy of identification, especially when several fingers are used. It contains different biometric data and reliability of recognition is increasing not several times, but by orders of magnitude.Our technologies allow to acquire fingerprints by a scanner and a phone with compatible templates, as well as to use fingerprints acquired by a phone and converted to standard format (WSQ) in legacy systems.`}
              logo={gov_sm}
            />
            <Comp_Market
              side={"right"}
              title={"Police and migration"}
              description={`Our algorithms demonstrate superior accuracy of neural networks working with national scale databases of tens or hundreds of millions individuals. Specially trained algorithms of detection and segmentation allow to automatically process fingerprint cards, segmenting flat and roll fingerprints of different quality, checking right/left hands and finger positions.Mobile finger acquisition opens new possibilities for law enforcement, making fingerprint recognition possible without a scanner, but with an ordinary mobile phone. Our technologies can not just capture, but also run fingerprints against a database stored locally on a phone. It makes a check against relatively small databases (less than 10,000-100,000 fingers) fast and fully mobile - it requires only phone application instead of expensive mobile biometric terminals.`}
              logo={police_sm}
            />
            <Comp_Market
              side={"left"}
              title={"Forensics"}
              description={`Quality of latents collected from a crime scene is usually far away from ideal: its "dirty", partial, with artifacts. In many cases forensic experts should process it manually.Unlike "traditional" algorithms, neural networks can identify even partial fingerprints automatically. Furthermore, ability of machine algorithms to recognize complicated patterns surpasses human's, so the algorithm can automatically find list of candidates and human can validate it manually.Our SDK also have detection and segmentation algorithms for processing fingerprint cards and all types of fingerprints on it automatically.`}
              logo={forensic_sm}
            />
        </div>
      
    </div>
  );
};

export default Markets;
