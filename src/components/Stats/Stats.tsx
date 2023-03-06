import styles from './Stats.module.css'
import Bars from '../Bars/Bars'

interface ProgressBarData {
    currentValue: number;
    minValue: number;
    maxValue: number;
    unity: string;
    placeholder: string;
    colorMin: string;
    colorMax: string;
}

export default function Stats(){
    
    const data: ProgressBarData = {
        currentValue: 50,
        minValue: 0,
        maxValue: 100,
        unity: 'C',
        placeholder: 'Temperatura',
        colorMin: '#673ab7',
        colorMax: '#e91e63',
    }
    
    const data2: ProgressBarData = {
        currentValue: 300,
        minValue: 0,
        maxValue: 300,
        unity: 'C',
        placeholder: 'Luminosidade',
        colorMin: '#3ab73a',
        colorMax: '#e91e63',
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.barsContainer}>
                <Bars data={data}/>
                <Bars data={data2}/>
                <Bars data={data2}/>
                <Bars data={data2}/>
                <Bars data={data2}/>
                <Bars data={data2}/>
            </div>
        </div>
    )
}