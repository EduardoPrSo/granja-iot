import { useState } from 'react';
import styles from './AddPage.module.css'
import { PlusIcon, ChevronDownIcon, ChevronUpIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function AddPage(){
    const [addSession, setAddSession] = useState(false);

    return(
        <div className={styles.mainContainer}>
            <div className={styles.sensorsContainer} style={{height: addSession ? '81%' : '91%'}}>
                <div className={styles.itemsContainer}>
                    <div>
                        <p style={{color: 'grey', fontSize: '15px'}}>Nome</p>
                        <p>Sensor 1</p>
                    </div>
                    <div>
                        <p style={{color: 'grey', fontSize: '15px'}}>Tipo</p>
                        <p>Temperatura</p>
                    </div>
                    <TrashIcon className={styles.iconButton} />
                </div>
            </div>
            <div className={styles.addItems} style={{visibility: addSession ? 'visible' : 'hidden', transitionDelay: addSession ? '.3s' : '0s'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '2px', width: '40%'}}>
                    <input type="text" name="" id="" placeholder="Nome" className={styles.addInputs}/>
                </div>
                <select className={styles.addSelect}>
                    <option value="0">Selecione</option>
                    <option value="1">Temperatura</option>
                    <option value="2">Luminosidade</option>
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