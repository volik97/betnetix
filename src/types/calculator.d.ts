export interface ICalculatorState {
    currentValue: string;
    previousValue: string;
    operation: string | null;
    isNewInput: boolean;

    // методы для управления состоянием калькулятора
    inputDigit: (digit: string) => void;
    inputDot: () => void;
    clear: () => void;
    toggleSign: () => void;
    setOperation: (operation: string) => void;
    calculate: () => void;
    calculatePercentage: () => void; // метод для расчета %
    deleteLastDigit: () => void; // удаление последнего символа

}