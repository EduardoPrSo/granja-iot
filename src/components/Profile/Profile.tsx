import styles from './Profile.module.css'

export default function Profile(){

    return (
        <div className={styles.mainContainer}>
            <h3>Nome:</h3>
            <p>Central</p>
            <h3>Email:</h3>
            <p>Email</p>
        </div>
    )
}