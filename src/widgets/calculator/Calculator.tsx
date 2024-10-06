"use client"
import React from 'react';
import styles from '@/widgets/calculator/calcuator.module.scss'
import ScreenCalculator from "@/features/screenCalculator/ScreenCalculator";
import ButtonsCalculator from "@/features/buttonsCalculator/ButtonsCalculator";
function Calculator() {
    return (
        <section className={styles.calculator__container}>
            <div className={styles.calculator__description}>
                <h1>Калькулятор</h1>
                <p>Очень Простой калькулятор обычный - только стандартные функции калькулятора: сложение, вычитание, умножение и деление. Простой калькулятор работает на смартфонах и ПК даже без интернета, не требует установки, быстро загружается и работает онлайн.</p>
            </div>
            <div className={styles.calculator__wrapper}>
                <ScreenCalculator/>
                <ButtonsCalculator/>
            </div>
        </section>

    );
};

export default Calculator;