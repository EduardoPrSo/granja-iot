import { useState } from 'react'
import styles from './Config.module.css'
import * as Switch from '@radix-ui/react-switch';

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
        </div>
    )
}