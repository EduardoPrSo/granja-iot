import { useEffect, useState } from 'react';
import styles from './AddPage.module.css'
import { PlusIcon, ChevronDownIcon, ChevronUpIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function AddPage(){

    const [addSession, setAddSession] = useState(false);
    const [data, setData] = useState([])
    const [disabledData, setDisabledData] = useState([])

    const types = {
        1: 'Temperatura',
        2: 'Luminosidade',
        3: 'Umidade'
    }

    useEffect(() => {
        fetch(`/api/getValues`)
            .then(res => res.json())
            .then(data => setData(data))

        fetch(`/api/getDisabledValues`)
            .then(res => res.json())
            .then(data => setDisabledData(data))
    }, [])

    function changeItem(status, name = false){
        if (name === false) name = document.getElementById('select--sensor').value;
        fetch(`/api/updateSensors`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, status: status})
        })
        window.location.reload();
    }

    return(
        <div className={styles.mainContainer}>
            <div className={styles.sensorsContainer} style={{height: addSession ? '82%' : '91%'}}>
                {
                    data.map((item, index) => {
                        if (item.type == 0) return;
                        return (
                            <div className={styles.itemsContainer} key={index}>
                                <div>
                                    <p style={{color: 'grey', fontSize: '15px'}}>Nome</p>
                                    <p>{item.name}</p>
                                </div>
                                <div>
                                    <p style={{color: 'grey', fontSize: '15px'}}>Tipo</p>
                                    <p>{types[item.type]}</p>
                                </div>
                                <TrashIcon className={styles.iconButton} onClick={()=>changeItem(0, item.name)}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.addItems} style={{visibility: addSession ? 'visible' : 'hidden', transitionDelay: addSession ? '.3s' : '0s'}}>
                <select type="text" className={styles.addSelect} id='select--sensor'>
                    <option value="0">Selecione o sensor</option>
                    {disabledData.map((item, index) => {
                        return(
                            <option key={index} value={item.name}>{item.name}</option>
                        )
                    })}
                </select>
                <PlusIcon className={styles.iconButton} onClick={()=>{setAddSession(false);changeItem(1)}}/>
            </div>
            <div className={styles.addCointainer} onClick={()=>setAddSession(!addSession)}>
                <h3>Adicionar sensor</h3>
                {addSession ? <ChevronDownIcon className={styles.iconButton} /> : <ChevronUpIcon className={styles.iconButton} />}
            </div>
        </div>
    )
}