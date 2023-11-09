import styles from './startSDKRestAPI.module.css';

const startSDKRestAPI=(props)=>{
    return (
        <>
        <div className={styles.startSDK}>
            <h1>{props.title}</h1>
            <hr></hr>
            <p>{props.para}</p>
            <button href={props.link}><b>Try Online</b></button>
        </div>
        </>
    );
}

export default startSDKRestAPI;