'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import styles from './websiteCounter.module.css'

const WebsiteCounter = () => {

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(true);

    const getCount = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const data = await axios.post(
                "https://lenscorp-service-website-counter.onrender.com/api/countPost",
                {

                },
                config
            );

            setCount(data.data.mycount)
            setFlag(false)

        } catch (error) {

        }
    }

    useEffect(() => {
        if (flag) getCount();
    }, [])
    return (
        <div className={styles.hitCounter}>
            <p className={styles.title}>Website Statistics</p>
            <div className={styles.countContainer}>
                <span className={styles.count}>{count}</span>
                <p className={styles.label}>Total Website Hits</p>
            </div>
        </div>
    );
}

export default WebsiteCounter;