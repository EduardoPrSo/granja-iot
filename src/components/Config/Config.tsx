import { useEffect, useState } from 'react'
import styles from './Config.module.css'
import * as Switch from '@radix-ui/react-switch';
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Config() {

    const [automatic, setAutomatic] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/getValues')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const updateData = (name: string) => {
        const value = document.getElementById(`data--new--value--${name}`) as HTMLInputElement;

        if (value.value === '') return alert('Insira um valor');

        fetch('http://localhost:3000/api/updateValue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                value: value.value
            })
        })
    }

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
                    data.map((item: any, index) => {
                        return (
                            <div className={styles.sensorsContainer} key={index}>
                                <div className={styles.itemsContainer}>
                                    <div>
                                        <p style={{color: 'grey', fontSize: '15px'}}>Nome</p>
                                        <p>{item.name}</p>
                                    </div>
                                    <div>
                                        <p style={{color: 'grey', fontSize: '15px'}}>Valor</p>
                                        <input type="text" id={`data--new--value--${item.name}`} />
                                    </div>
                                    <CheckCircleIcon className={styles.iconButton} onClick={()=>updateData(item.name)}/>
                                </div>
                            </div>
                        )
                    })
                :
                <></>
            }
        </div>
    )
}