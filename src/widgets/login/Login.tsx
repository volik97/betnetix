'use client'
import React, {FormEvent, useState} from 'react';
import styles from '@/widgets/login/login.module.scss'
import Button from "@/shared/ui/button/Button";
import Input from "@/shared/ui/input/Input";
import {userStore} from "@/store/user";
import {useRouter} from "next/navigation";
import BlockWrapper from "@/features/blockWrapper/BlockWrapper";
function Login() {
    const router = useRouter()
    const [page, setPage] = useState('')
    const [userName, setUserName] = useState('')
    const createUser = userStore((state) => state.createUser)
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(userName){
            createUser({name: userName})
            if (typeof window !== 'undefined') {
                localStorage.setItem('name', userName)
            }
            router.push(`/${page}`)
        }
    }
    return (
        <div className={styles.login__container}>
            <BlockWrapper>
                <form onSubmit={(event) => handleSubmit(event)} className={styles.login__wrapper}>
                    <p>Начать</p>
                    <div className={styles.input__wrapper}>
                        <label htmlFor={'name'}>Ваше имя</label>
                        <Input required={true} onChange={(e) => setUserName(e.target.value)} value={userName} placeholder={"Как вас зовут?"} id={'name'}/>
                    </div>
                    <div className={styles.divider}/>
                    <div className={styles.buttons__wrapper}>
                        <Button onClick={() => setPage('calculator')} type={'submit'} text={'Открыть калькулятор'}/>
                        <Button onClick={() => setPage('password')} type={'submit'} text={'Открыть генератор'}/>
                    </div>
                </form>
            </BlockWrapper>
        </div>
    );
}

export default Login;