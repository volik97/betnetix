import React from 'react';
import styles from '@/shared/ui/button/button.module.scss'
function Button({text, onClick, disabled}: {text: string, onClick: () => void, disabled?: boolean}) {
    return (
        <button disabled={disabled ?? false} onClick={onClick} className={styles.button}>{text}</button>
    );
}

export default Button;