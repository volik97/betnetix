import {create} from 'zustand'
import {ICalculatorState} from "@/types/calculator";

export const useCalculatorStore = create<ICalculatorState>((set) => ({
    currentValue: '0',   // начальное значение
    previousValue: '',    // предыдущее значение
    operation: null,      // операция
    isNewInput: false,    // начало нового ввода (false по умолчанию)

    // ввод цифры
    inputDigit: (digit: string) => {
        set((state) => {
            if (state.isNewInput) {
                // если ввод после операции, начинаем с новой цифры
                return { currentValue: digit, isNewInput: false };
            }
            // если текущее значение 0, начинаем с новой цифры
            const newValue = state.currentValue === '0' ? digit : state.currentValue + digit;
            return { currentValue: newValue };
        });
    },

    // десятичная точка
    inputDot: () => {
        set((state) => {
            // добавляем точку, перед этим проверяем нет ли ее уже
            if (!state.currentValue.includes('.')) {
                return { currentValue: state.currentValue + '.' };
            }
            return state;
        });
    },

    // очищаем поля
    clear: () => set({ currentValue: '0', previousValue: '', operation: null, isNewInput: false }),

    // меняем знак числу
    toggleSign: () => {
        set((state) => {
            const newValue = state.currentValue.startsWith('-')
                ? state.currentValue.slice(1)
                : '-' + state.currentValue;
            return { currentValue: newValue };
        });
    },

    // устанавливаем операцию
    setOperation: (operation: string) => {
        set((state) => {
            if (state.currentValue === '') return state;

            // если операция уже была, нужно сначала выполнить текущее вычисление
            if (state.previousValue && state.operation) {
                const result = performCalculation(state.previousValue, state.currentValue, state.operation);
                return {
                    previousValue: result.toString(),
                    currentValue: '',
                    operation: operation,
                    isNewInput: true,
                };
            }

            return {
                previousValue: state.currentValue,
                currentValue: '',
                operation: operation,
                isNewInput: true,
            };
        });
    },

    // выполнение вычисления
    calculate: () => {
        set((state) => {
            if (!state.operation || !state.previousValue) return state;

            const result = performCalculation(state.previousValue, state.currentValue, state.operation);
            return {
                currentValue: result.toString(),
                previousValue: '',
                operation: null,
                isNewInput: true,
            };
        });
    },

    // считаем проценты текущего числа
    calculatePercentage: () => {
        set((state) => {
            const current = parseFloat(state.currentValue);
            const result = current / 100;
            return { currentValue: result.toString(), isNewInput: true };
        });
    },
    // функция для удаления последнего символа
    deleteLastDigit: () => set((state) => {
        const newValue = state.currentValue.slice(0, -1);

        return {
            currentValue: newValue.length > 0 ? newValue : '0' // если строка пустая, устанавливаем 0
        };
    }),
}));

// функция для выполнения математических операций
export const performCalculation = (prevValue: string, currValue: string, operation: string) => {
    const prev = parseFloat(prevValue);
    const current = parseFloat(currValue);

    if(!currValue){
        return prevValue
    }
    switch (operation) {
        case '+':
            return prev + current;
        case '-':
            return prev - current;
        case '×' || '*':
            return prev * current;
        case '/':
            return current !== 0 ? prev / current : 'Error';
        default:
            return current;
    }
};