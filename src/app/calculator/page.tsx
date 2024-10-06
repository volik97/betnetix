"use client"
import React from 'react';
import Calculator from "@/widgets/calculator/Calculator";
import styles from "@/app/calculator/page.module.scss";
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
        <div className={styles.calculator}>
            <Calculator/>
        </div>
    );
}

export default Page;