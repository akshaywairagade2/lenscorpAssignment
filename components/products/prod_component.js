import Image from 'next/image'
import Link from 'next/link'
const Product_Component = (props) => {
  return (
    <div  style={{marginLeft:"40px", marginRight:"40px", textAlign:"center"}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Image
            src={props.logo}
            width={150}
            height={150}
            alt="Picture of the logo"
          />
      </div>
        
       <p  style={{color:"blue" , textAlign:"center", marginTop:"20px", marginBottom:"20px"}}><b>{props.title}</b></p>

      <Link href={props.linkURL}>
      <text style={{ color:"blue" , textAlign:"center", fontSize:"40px", fontWeight:"400"}} ><u>{props.linkText}</u></text>
      </Link>

      <p style={{color:"blue" , textAlign:"center"}}>{props.description}</p>
        
    </div>
  );
};

export default Product_Component;
