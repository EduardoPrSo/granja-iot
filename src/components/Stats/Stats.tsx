import styles from './Stats.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Stats(){

    return (
        <div className={styles.mainContainer}>
            <div className={styles.barsContainer}>
                <CircularProgressbar value={10} minValue={-50} maxValue={100} text={`20 Graus`} styles={buildStyles({rotation: 0.50})} />
            </div>
        </div>
    )
}