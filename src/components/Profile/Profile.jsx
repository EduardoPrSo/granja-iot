import { useState, useEffect } from 'react'
import styles from './Profile.module.css'

export default function Profile(){
    const [data, setData] = useState(false)

    useEffect(() => {
        fetch(`/api/getUserData`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.itemsContainer}>
                <div>
                    <h3>Nome:</h3>
                    <p>{data ? data.user.name : ""}</p>
                </div>  
            </div>
            <div className={styles.itemsContainer}>
                <div>
                    <h3>Email:</h3>
                    <p>{data ? data.user.email : ""}</p>
                </div>  
            </div>
            <div className={styles.itemsContainer}>
                <div>
                    <h3>Sensores:</h3>
                    <p>{data ? data.sensors : ""}</p>
                </div>  
            </div>
        </div>
    )
}