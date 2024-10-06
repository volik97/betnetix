import React from 'react';
import styles from '@/shared/ui/button/button.module.scss'
function Button({text, onClick, disabled=false, type='button'}: {type?: "submit" | "reset" | "button" | undefined, text: string, onClick: () => void, disabled?: boolean}) {
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={styles.button}>{text}</button>
    );
}

export default Button;