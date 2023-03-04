import styles from './Header.module.css'
import { UserIcon, ChartBarIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'

export default function Header(){
    return (
        <div className={styles.headerContainer}>
            <UserIcon className={styles.iconButton} />
            <ChartBarIcon className={styles.iconButton} />
            <Cog8ToothIcon className={styles.iconButton} />
        </div>
    )
}