import styles from './startSDKRestAPI.module.css';

const startSDKRestAPI=(props)=>{
    return (
        <>
        <div className={styles.startSDK}>
            <h1>{props.title}</h1>
            <hr></hr>
            <p style={{textAlign:"center"}}>{props.para}</p>
            <button href={props.link} style={{marginTop:"2rem", width:"15%"}}><b>Try Online</b></button>
        </div>
        </>
    );
}

export default startSDKRestAPI;