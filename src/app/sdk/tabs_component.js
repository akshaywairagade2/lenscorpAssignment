import Image from 'next/image'
import Link from 'next/link'
import styles from './tabs_component.module.css';

const Tab_Component = (props) => {
    return (
        <div className={styles.Tab_Component}>
            <ul>
                <li>
                    {props.number1==="1" &&
                    <div style={{ display: "flex" }}>
                        <div style={{ height: '50px', width: '50px', border: '1px solid #000000', borderColor: 'black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <text>{props.number1}</text>
                        </div>
                        <div>
                            <h1>{props.title1}</h1>
                            <p>{props.des1}</p>
                            <br />
                        </div>
                    </div>
                    }
                </li>

                <li>
                 {props.number2==="2" &&
                    <div style={{ display: "flex" }}>
                        <div style={{ height: '50px', width: '50px', border: '1px solid #000000', borderColor: 'black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <text>{props.number2}</text>
                        </div>
                        <div>
                            <h1>{props.title2}</h1>
                            <p>{props.des2}</p>
                            <br />
                        </div>
                    </div>
                    }
                </li>

                <li>
                    {props.number3==="3" &&
                    <div style={{ display: "flex" }}>
                        <div style={{ height: '50px', width: '50px', border: '1px solid #000000', borderColor: 'black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <text>{props.number3}</text>
                        </div>
                        <div>
                            <h1>{props.title3}</h1>
                            <p>{props.des3}</p>
                            <br />
                        </div>
                    </div>
                    }
                </li>

                <li>
                {props.number4==="4" &&
                    <div style={{ display: "flex" }}>
                        <div style={{ height: '50px', width: '50px', border: '1px solid #000000', borderColor: 'black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <text>{props.number4}</text>
                        </div>
                        <div>
                            <h1>{props.title4}</h1>
                            <p>{props.des4}</p>
                            <br />
                        </div>
                    </div>
                    }
                </li>
            </ul>
        </div >
    );
};

export default Tab_Component;