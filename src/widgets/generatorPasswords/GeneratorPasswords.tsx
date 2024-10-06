import React from 'react';
import styles from '@/widgets/generatorPasswords/generatorPasswords.module.scss'
import GeneratorPasswordsOptions from "@/features/generatorPasswordsOptions/GeneratorPasswordsOptions";
import Passwords from "@/features/passwords/Passwords";
function GeneratorPasswords() {
    return (
        <div className={styles.generatorPassword__container}>
            <h1>Генератор паролей</h1>
            <div className={styles.generatorPassword__wrapper}>
                <GeneratorPasswordsOptions/>
                <Passwords/>
            </div>
        </div>
    );
}

export default GeneratorPasswords;