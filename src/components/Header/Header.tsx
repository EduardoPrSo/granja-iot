import styles from './Header.module.css'

interface Props {
    title: string
}

export default function Header(props: Props){
    return (
        <div className={styles.headerContainer}>
            <h1>{props.title}</h1>
        </div>
    )
}