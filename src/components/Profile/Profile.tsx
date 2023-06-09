import styles from './Profile.module.css'

export default function Profile(){

    return (
        <div className={styles.mainContainer}>
            <div className={styles.itemsContainer}>
                <div>
                    <h3>Nome:</h3>
                    <p>Central 1</p>
                </div>  
            </div>
            <div className={styles.itemsContainer}>
                <div>
                    <h3>Email:</h3>
                    <p>granjaiot@hotmail.com</p>
                </div>  
            </div>
            <div className={styles.itemsContainer}>
                <div>
                    <h3>Sensores:</h3>
                    <p>6</p>
                </div>  
            </div>
        </div>
    )
}