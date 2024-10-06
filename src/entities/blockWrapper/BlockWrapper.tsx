import React from 'react';
import styles from '@/entities/blockWrapper/blockWrapper.module.scss'
function BlockWrapper({children}: {children: JSX.Element}) {
    return (
        <div className={styles.block}>{children}</div>
    );
}

export default BlockWrapper;