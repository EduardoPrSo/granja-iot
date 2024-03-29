import { useEffect, useState } from 'react';
import styles from './Stats.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Stats(){
    const [data, setData] = useState([])

    const types = {
        1: {
            min: -20,
            max: 50,
            unit: '°C'
        },
        2: {
            min: 1,
            max: 500,
            unit: 'lux' 
        },
        3: {
            min: 0,
            max: 100,
            unit: '%'
        }
    }

    useEffect(() => {
        const fetchData = () => {
          fetch(`/api/getValues`)
            .then(res => res.json())
            .then(data => setData(data))
        };
        fetchData();
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    return ( 
        <div className={styles.mainContainer}>
            <div className={styles.barsContainer}>
                {
                    data.map((item, index) => {
                        return (
                            <div className={styles.bar} key={index}>
                                <CircularProgressbar className={styles.bar} value={item.current_value} minValue={types[item.type].min} maxValue={types[item.type].max} text={`${item.current_value} ${types[item.type].unit}`} styles={buildStyles({rotation: 0.50, textSize: '.95rem'})} />
                                <p>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}