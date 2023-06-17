import Link from 'next/link'
import styles from './Footer.module.css'
import { UserIcon, ChartBarIcon, Cog8ToothIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Footer(props){
    return (
        <div className={styles.headerContainer}>
            <Link href={'/'} style={{textDecoration: 'none', color: props.tab === "PERFIL" ? "rgb(0, 162, 255)" : 'grey'}}>
                <UserIcon className={styles.iconButton} />
            </Link>
            <Link href={'/status'} style={{textDecoration: 'none', color: props.tab === "METRICAS" ? "rgb(0, 162, 255)" : 'grey'}}>
                <ChartBarIcon className={styles.iconButton} />
            </Link>
            <Link href={'/config'} style={{textDecoration: 'none', color: props.tab === "CONFIGURAÇÕES" ? "rgb(0, 162, 255)" : 'grey'}}>
                <Cog8ToothIcon className={styles.iconButton} />
            </Link>
            <Link href={'/adicionar'} style={{textDecoration: 'none', color: props.tab === "SENSORES" ? "rgb(0, 162, 255)" : 'grey'}}>
                <PlusIcon className={styles.iconButton} />
            </Link>
        </div>
    )
}