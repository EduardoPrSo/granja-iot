import { useEffect, useState } from 'react';
import styles from './AddPage.module.css'
import { PlusIcon, ChevronDownIcon, ChevronUpIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function AddPage(){

    const [addSession, setAddSession] = useState(false);
    const [data, setData] = useState([])

    const types = {
        1: 'Temperatura',
        2: 'Luminosidade',
        3: 'Umidade'
    }

    useEffect(() => {
        fetch('http://localhost:3000/api/getValues')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    
    function updateSensor(name){
        fetch('http://localhost:3000/api/updateSensor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        })
    }

    return(
        <div className={styles.mainContainer}>
            <div className={styles.sensorsContainer} style={{height: addSession ? '81%' : '91%'}}>
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
                                <TrashIcon className={styles.iconButton} onClick={()=>updateSensor(item.name)}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.addItems} style={{visibility: addSession ? 'visible' : 'hidden', transitionDelay: addSession ? '.3s' : '0s'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '2px', width: '40%'}}>
                    <input type="text" name="" id="" placeholder="Nome" className={styles.addInputs}/>
                </div>
                <select className={styles.addSelect}>
                    <option value="1">Selecione</option>
                    <option value="2">Temperatura</option>
                    <option value="3">Luminosidade</option>
                </select>
                <PlusIcon className={styles.iconButton} onClick={()=>{setAddSession(false)}}/>
            </div>
            <div className={styles.addCointainer} onClick={()=>setAddSession(!addSession)}>
                <h3>Adicionar sensor</h3>
                {addSession ? <ChevronDownIcon className={styles.iconButton} /> : <ChevronUpIcon className={styles.iconButton} />}
            </div>
        </div>
    )
}