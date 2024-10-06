"use client"
import React, {useEffect} from 'react';
import GeneratorPasswords from "@/widgets/generatorPasswords/GeneratorPasswords";
import styles from "./page.module.scss"
import {userStore} from "@/store/user";
import {useRouter} from "next/navigation";
function Page() {
    const user = userStore((state) => state.user)
    const userName = localStorage.getItem('name')
    const router = useRouter();
    if(!user || !userName){
        alert('Нужно ввести имя!')
        return router.push('/')
    }
    return (
        <section className={styles.generatorPasswords}>
            <GeneratorPasswords/>
        </section>
    );
}

export default Page;