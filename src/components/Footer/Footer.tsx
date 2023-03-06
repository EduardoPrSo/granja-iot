import Link from 'next/link'
import styles from './Footer.module.css'
import { UserIcon, ChartBarIcon, Cog8ToothIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Footer(){
    return (
        <div className={styles.headerContainer}>
            <Link href={'/'} style={{textDecoration: 'none', color: 'grey'}}>
                <UserIcon className={styles.iconButton} />
            </Link>
            <Link href={'status'} style={{textDecoration: 'none', color: 'grey'}}>
                <ChartBarIcon className={styles.iconButton} />
            </Link>
            <Link href={'/config'} style={{textDecoration: 'none', color: 'grey'}}>
                <Cog8ToothIcon className={styles.iconButton} />
            </Link>
            <Link href={'/adicionar'} style={{textDecoration: 'none', color: 'grey'}}>
                <PlusIcon className={styles.iconButton} />
            </Link>
        </div>
    )
}