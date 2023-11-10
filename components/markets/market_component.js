
import styles from './markets.module.css';
import Image from 'next/image'

const Comp_Market = (props) => {
  return (
    <>
        {
            props.side=="left" && 
            <div className={styles.para_div}><div>
            <span>{props.title}</span>
            <p>{props.description}</p>
            </div><Image src={props.logo} width={500} height={500}/></div>
        }
        {
            props.side=="right" && 
            <div className={styles.para_div} ><Image src={props.logo} width={500} height={500}/><div><span>{props.title}</span><p>{props.description}</p></div></div>
        }

    </>
  );
};

export default Comp_Market;
