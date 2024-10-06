import React from 'react';
import styles from '@/shared/ui/checkbox/checkbox.module.scss'
function Checkbox({label, use, onChange, id}: {label: string, use: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, id: string}) {
    return (
        <div className={styles.checkbox}>
                <input id={id} onChange={(e) => onChange(e)} type="checkbox" checked={use}/>
                <span>{label}</span>
        </div>
    );
}

export default Checkbox;