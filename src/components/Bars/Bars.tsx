import { useEffect, useState } from 'react'
import styles from './Bars.module.css'

interface Props {
    data: {
        currentValue: number,
        minValue: number;
        maxValue: number;
        unity: string;
        placeholder: string;
        colorMin: string;
        colorMax: string;
    }
}

export default function Bars({data}: Props){
    const [value, setValue] = useState(0)

    useEffect(() => {
        const valueMedia = data.maxValue - data.minValue
        const unityValue = 155 / valueMedia
        const status = unityValue * data.currentValue
        const totalValue = 255 - status
        setValue(totalValue)
    }, [data])

    return (
        <div className={styles.main}>
            <svg className={styles.svgTwo} xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">
                <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor={data.colorMax} />
                    <stop offset="100%" stopColor={data.colorMin} />
                </linearGradient>
                <circle className={styles.circleTwo} cx="50" cy="50" r="33" strokeLinecap="round"/>
            </svg>
            <svg className={styles.svgOne} xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">
                <circle className={styles.circleOne} cx="50" cy="50" r="33" style={{strokeDashoffset: value}} strokeLinecap="round"/>
            </svg>
            <h1 className={styles.statusInfo}>{data.currentValue+data.unity}</h1>
            <p>{data.placeholder}</p>
        </div>
    )
}