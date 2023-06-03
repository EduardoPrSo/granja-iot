import { useState } from 'react'
import styles from './Config.module.css'
import * as Switch from '@radix-ui/react-switch';
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Config() {

    const [automatic, setAutomatic] = useState(false);

    return (
        <div className={styles.mainContainer}>
            <div style={{ display: 'flex', alignItems: 'center' }} className={styles.automaticModeContainer}>
                <label className={styles.Label} htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                    Modo automático
                </label>
                <Switch.Root className={styles.SwitchRoot} id="airplane-mode" checked={automatic} onClick={()=>setAutomatic(!automatic)}>
                    <Switch.Thumb className={styles.SwitchThumb} />
                </Switch.Root>
            </div>
            {
                automatic === false ? 
                <div className={styles.sensorsContainer}>
                    <div className={styles.itemsContainer}>
                        <div>
                            <p style={{color: 'grey', fontSize: '15px'}}>Nome</p>
                            <p>Sensor 1</p>
                        </div>
                        <div>
                            <p style={{color: 'grey', fontSize: '15px'}}>Valor</p>
                            <input type="text" />
                        </div>
                        <CheckCircleIcon className={styles.iconButton} />
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}