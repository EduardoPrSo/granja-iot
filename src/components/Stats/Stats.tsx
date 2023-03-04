import Bars from '../Bars/Bars'

interface ProgressBarData {
    currentValue: number;
    minValue: number;
    maxValue: number;
    unity: string;
    placeholder: string;
}

export default function Stats(){

    const data: ProgressBarData = {
        currentValue: 50,
        minValue: 0,
        maxValue: 100,
        unity: 'C',
        placeholder: 'Temperatura',
    }
    
    const data2: ProgressBarData = {
        currentValue: 300,
        minValue: 0,
        maxValue: 300,
        unity: 'C',
        placeholder: 'Luminosidade',
    }

    return (
        <>
            <Bars data={data}/>
            <Bars data={data2}/>
        </>
    )
}