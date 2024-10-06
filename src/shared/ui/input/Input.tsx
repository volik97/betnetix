import React from 'react';
import styles from "@/shared/ui/input/input.module.scss"
function Input({placeholder, id, type, required, onChange, value}: {value?: string|number, required?: boolean, placeholder: string, id: string, type?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    return (
        <input required={required} value={value ?? ''} type={type ?? 'text'} onChange={(e) => onChange(e)} autoComplete={"off"} id={id} placeholder={placeholder} className={styles.input} min={1} max={80}></input>
    );
}

export default Input;