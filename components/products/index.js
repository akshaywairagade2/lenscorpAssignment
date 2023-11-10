
import styles from './products.module.css';
import Product_Component from './prod_component';
import sdk from '../../public/sdk.png'
import api from '../../public/api.png'
import mobile_sdk from '../../public/mobile_sdk.png'

const Products = () => {
  return (
    <div className={styles.product}>
      <div style={{display:'row'}}>
      <text style={{fontSize:"50px", color:"blue", marginLeft:"3rem"}}>
        Products
      </text>
      
      <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
        <div style={{display: 'flex', flex: 0.33}}>
          <Product_Component 
            logo={sdk}
            title={"Server SDK for fingerprint recognition"}
            linkText={"SDK"}
            linkURL={"/sdk"}
            description={"Detection, template extraction and matching (1:1, 1:N, M:N). Scans and photo images are supported."}
          />
        </div>
        <div className={styles.vl}></div>
        <div style={{display: 'flex', flex: 0.33}}>
        <Product_Component 
            logo={api}
            title={"Server platform for fingerprint recognition"}
            linkText={"REST API"}
            linkURL={"/rest_api"}
            description={"Easy integration of biometric features, microservices architecture for system scaling and load balancing"}
          />
        </div>
        <div className={styles.vl}></div>
        <div style={{display: 'flex', flex: 0.33}}>
        <Product_Component 
            logo={mobile_sdk}
            title={"Fingers capture and recognition for mobile devices"}
            linkText={"Mobile SDK"}
            linkURL={"https://neurodactyl.com/mobileapp"}
            description={"Touchless fingerprint acquisition and recognition with mobile phones (Android, iOS, web)"}
          />
        </div>
      </div>
      </div>
    
     
    </div>
  );
};

export default Products;
