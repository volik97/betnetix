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
        case '×':
        case '*':
            return prev * current;
        case '/':
            return current !== 0 ? prev / current : 'Error';
        default:
            return current;
    }
};