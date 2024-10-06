'use client'
import React from 'react';
import BlockWrapper from "@/entities/blockWrapper/BlockWrapper";
import {passwordStore} from "@/store/password";
import styles from '@/features/passwords/passwords.module.scss'
import Image from "next/image";
function Passwords() {
    const passwords: string[] = passwordStore((state) => state.password)

    const handleCopy = (password:string) => {
        navigator.clipboard.writeText(password)
        alert('Пароль успешно скопирован!')
    }

    return (
        <BlockWrapper>
            <div className={styles.passwords__wrapper}>
                <p>Результаты</p>
                <div className={styles.passwords}>
                    {passwords.reverse().map((password) =>
                        <div key={password} className={styles.password}><p>{password}</p><Image onClick={() => handleCopy(password)} width={20} height={20} src={'/copy.svg'} alt={'copy'}></Image></div>)}
                </div>
            </div>
        </BlockWrapper>
    );
}

export default Passwords;