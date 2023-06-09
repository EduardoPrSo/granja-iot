import styles from './Profile.module.css'
import { useSession, signOut } from 'next-auth/react';

export default function Profile(){
    const { data: session } = useSession()

    return (
        <div className={styles.mainContainer}>
            <div className={styles.itemsContainer}>
                <div>
                    <h3>Nome:</h3>
                    <p>Central {1}</p>
                </div>  
            </div>
            <div className={styles.itemsContainer}>
                <div>
                    <h3>Email:</h3>
                    <p>{session.user.email}</p>
                </div>  
            </div>
            <div className={styles.itemsContainer}>
                <div>
                    <h3>Sensores:</h3>
                    <p>6</p>
                </div>  
            </div>
            <button onClick={()=>signOut()}>SAIR</button>
        </div>
    )
}