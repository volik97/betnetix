'use client'
import React from 'react';
import styles from '@/widgets/header/header.module.scss'
import Image from "next/image";
import Link from "next/link";
import {userStore} from "@/store/user";
function Header() {

    let userNameLS;
    if(typeof window !== 'undefined') userNameLS = localStorage.getItem('name');

    const user = userStore((state) => state.user)

    return ((userNameLS || user.name) &&
        <header className={styles.header__container}>
            <div className={styles.header__wrapper}>
                <Image width="143" height="24" src={'/logo.svg'} alt={'logo'}/>
                <div className={styles.header__menu}>
                    <Link href={"/"}>Главная</Link>
                    <Link href={"/calculator"}>Калькулятор</Link>
                    <Link href={"/password"}>Генератор паролей</Link>
                </div>
                <div className={styles.header__user}>
                    <p>{userNameLS}</p>
                    <Image width="32" height="32" src={'/avatar.svg'} alt={'avatar'}/>
                </div>
            </div>
        </header>
    );
}

export default Header;