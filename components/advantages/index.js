
import styles from './advantages.module.css';
import accuracy from '../../public/accuracy.png'
import dpi from '../../public/dpi.png'
import fingerprint from '../../public/fingerprint.png'
import flash from '../../public/flash.png'
import rocket from '../../public/rocket.png'
import template1 from '../../public/template1.png'
import Comp_Advantages from './advantage_component';

const Advantages = () => {
  return (
    <div className={styles.mainadvantage} id='advantages'>
      <h1 style={{marginLeft:"3rem"}}>Advantages</h1>
      <div className={styles.advantage}>
        <Comp_Advantages 
          image={rocket} 
          title={"Superior accuracy"}
          description={"Neural network based technology provides extremely high recognition accuracy for verification and identification"}
        />
        <Comp_Advantages 
          image={fingerprint} 
          title={"All types of fingerprints"}
          description={"Processing of photo images and standard scans (flats, rolls, latents) with one technologycreating templates compatible between each other"}
        />
        <Comp_Advantages 
          image={template1} 
          title={"Fixed size of biometric template"}
          description={"Fingerprint biometric templates always have standard size - 512 bytes regardless of fingerprint or image type"}
        />
        <Comp_Advantages 
          image={flash} 
          title={"High matching speed"}
          description={"Matching performance is 100+ million matches per 1 s on one modern CPU and up to 1 billion matches per 1 s using batch mode or GPU"}
        />
        <Comp_Advantages 
          image={dpi} 
          title={"DPI tolerant technology"}
          description={"Algorithm works with images or scans from 250 dpi and higher and doesn't require exact DPI values (for example, exactly 500 dpi)"}
        />
        <Comp_Advantages 
          image={accuracy} 
          title={"Identification with the highest confidence"}
          description={"By capturing of 4 fingers at once with our mobile SDK you can guarantee almost 100% reliable and user-friendly identification"}
        />
      </div>
    </div>
  );
};

export default Advantages;
