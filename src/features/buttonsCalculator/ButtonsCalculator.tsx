import React from 'react';
import styles from '@/features/buttonsCalculator/buttonsCalculator.module.scss'
import {useCalculatorStore} from "@/store/calculator";
function ButtonsCalculator() {
        const {inputDigit, inputDot, calculatePercentage, toggleSign, clear, setOperation, calculate} = useCalculatorStore()
    return (
        <div className={styles.buttons__wrapper}>
            <button className={styles.button__lightGrey} onClick={() => clear()}>C</button>
            <button className={styles.button__lightGrey} onClick={() => toggleSign()}>+/-</button>
            <button className={styles.button__lightGrey} onClick={() => calculatePercentage()}>%</button>
            <button className={styles.button__orange} onClick={() => setOperation('/')}>÷</button>
            <button onClick={() => inputDigit('7')}>7</button>
            <button onClick={() => inputDigit('8')}>8</button>
            <button onClick={() => inputDigit('9')}>9</button>
            <button className={styles.button__orange} onClick={() => setOperation('×')}>×</button>
            <button onClick={() => inputDigit('4')}>4</button>
            <button onClick={() => inputDigit('5')}>5</button>
            <button onClick={() => inputDigit('6')}>6</button>
            <button className={styles.button__orange} onClick={() => setOperation('-')}>-</button>
            <button onClick={() => inputDigit('1')}>1</button>
            <button onClick={() => inputDigit('2')}>2</button>
            <button onClick={() => inputDigit('3')}>3</button>
            <button className={styles.button__orange} onClick={() => setOperation('+')}>+</button>
            <button className={styles.button__null} onClick={() => inputDigit('0')}>0</button>
            <button onClick={() => inputDot()}>.</button>
            <button className={styles.button__orange} onClick={() => calculate()}>=</button>
        </div>
    );
}

export default ButtonsCalculator;