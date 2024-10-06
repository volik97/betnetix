import {IOption} from "@/types/option";

//
const numbers = '0123456789'
const smallLetters = 'abcdefghijklmnopqrstuvwxyz'
const specialSymbols =  '%*)?@#$~'
const allOptions = {
    smallLetters: smallLetters,
    upperLetters: smallLetters.toUpperCase(),
    numbers: numbers,
    specialSymbols: specialSymbols,
} as const;

//получаем рандомный символ. symbols - массив символов, repeatSymbols - флаг уникальности
const getRandomSymbol = (symbols: string[], repeatSymbols: boolean) => {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[randomIndex];

    // если повторения запрещены, удаляем выбранный символ из массива
    if (repeatSymbols) {
        symbols.splice(randomIndex, 1);
    }

    return symbol;
}
export const generatePassword = (options:IOption[], passwordSize: number) => {
    let password: string = ''; // инициализируем пароль
    const currentOptions: string[] = []; // инициализируем опции

    // добавляем наборы символов на основе опций
    options.forEach((option) => option.id !== 'uniqueSymbols' && option.use && currentOptions.push(allOptions[option.id]))

    // проверяем длинну, если опции не выбраны возвращаем текст ошибки
    if(currentOptions.length === 0) return {err: "Выберите хотя бы одну опцию!"}

    // объединяем все опции и сплитим на отдельные символы
    const symbols = currentOptions.join('').split('')

    // проверка длины доступных символов для случая, когда символы не должны повторяться
    if (options[4].use && symbols.length < passwordSize) {
        return {err: "Недостаточно символов для создания пароля из уникальных значений! Максимальная длина 70 символов"};
    }

    // генерация пароля
    for (let i = 0; i < passwordSize; i++) {
        const symbol = getRandomSymbol(symbols, options[4].use);
        password += symbol;
    }

    return password;
}