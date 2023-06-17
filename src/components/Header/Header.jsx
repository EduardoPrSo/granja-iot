import styles from './Header.module.css'

export default function Header(props){
    return (
        <div className={styles.headerContainer}>
            <h1>{props.title}</h1>
        </div>
    )
}