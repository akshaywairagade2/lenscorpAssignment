import Image from 'next/image'

const Comp_Advantages = (props) => {
  return (
    <div>
        <Image src={props.image} width={50} height={30}/>
        <span>{props.title}</span>
        <p>{props.description}</p>
    </div>
  );
};

export default Comp_Advantages;
