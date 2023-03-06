import { useState } from 'react';
import styles from './AddPage.module.css'
import { PlusIcon, ChevronDownIcon, ChevronUpIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function AddPage(){
    const [addSession, setAddSession] = useState(false);


    return(
        <div className={styles.mainContainer}>
            <div className={styles.sensorsContainer} style={{height: addSession ? '78%' : '91%'}}>
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
                <input type="text" name="" id="" placeholder="Nome" className={styles.addInputs}/>
                <select className={styles.addInputs}>
                    <option value="">Temperatura</option>
                    <option value="">Luminosidade</option>
                </select>
                <PlusIcon className={styles.iconButton} onClick={()=>setAddSession(false)}/>
            </div>
            <div className={styles.addCointainer} onClick={()=>setAddSession(!addSession)}>
                <h3>Adicionar sensor/atuador</h3>
                {addSession ? <ChevronDownIcon className={styles.iconButton} /> : <ChevronUpIcon className={styles.iconButton} />}
            </div>
        </div>
    )
}