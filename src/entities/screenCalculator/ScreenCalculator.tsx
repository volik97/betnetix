import React, {useEffect} from 'react';
import styles from '@/entities/screenCalculator/screenCalculator.module.scss'
import { calculatorStore} from "@/store/calculator";
import {performCalculation} from "@/helpers/performCalculation";
function ScreenCalculator() {
    const { previousValue, currentValue, operation, deleteLastDigit, inputDigit, setOperation, calculate, clear, toggleSign, inputDot } = calculatorStore();

    // разделяем сотни запятыми
    const formatWithCommas = (number: string) => {
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    // форматируем значения
    const formattedPreviousValue = formatWithCommas(previousValue || '');
    const formattedCurrentValue = formatWithCommas(currentValue || '');
    const formattedCalculatedValue = formatWithCommas(String(performCalculation(previousValue, currentValue, operation ? operation : '')));


    //обработка событий с клавиатуры
    const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key;

        // обработка чисел
        if (!isNaN(Number(key))) {
            inputDigit(key);
        }

        // обработка операторов
        switch (key) {
            case '+':
            case '-':
            case '*':
            case '/':
                setOperation(key);
                break;
            case 'Enter':
                calculate();
                break;
            case 'Backspace':
                deleteLastDigit()
                break;
            case '.':
                inputDot();
                break;
            case '%':
                setOperation('%');
                break;
            case 'Escape':
                clear(); // Сброс всех данных при нажатии Esc
                break;
            case '+/-':
                toggleSign(); // Изменение знака числа
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={styles.screen_calculator}>
            <p className={styles.calculated_value}>
                {formattedCalculatedValue}
            </p>
            <p className={styles.calculate_value}>
                {formattedPreviousValue}
                <span>{operation}</span>
                {formattedCurrentValue}
            </p>
        </div>
    );
}

export default ScreenCalculator;