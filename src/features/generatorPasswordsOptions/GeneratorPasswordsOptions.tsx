'use client'
import React, {useEffect, useState} from 'react';
import BlockWrapper from "@/entities/blockWrapper/BlockWrapper";
import styles from '@/features/generatorPasswordsOptions/generatorPasswordsOptions.module.scss'
import Input from "@/shared/ui/input/Input";
import Checkbox from "@/shared/ui/checkbox/Checkbox";
import Button from "@/shared/ui/button/Button";
import {IOption} from "@/types/option";
import {generatePassword} from "@/helpers/generatePassword";
import {passwordStore} from "@/store/password";

function GeneratorPasswordsOptions() {
    // Получение метода appendPassword из хранилища состояния passwordStore
    const appendPassword = passwordStore((state) => state.appendPassword);

    // Состояние для отображения ошибок
    const [error, setError] = useState<string | null>(null);

    // Состояние для хранения длины пароля
    const [passwordSize, setPasswordSize] = useState<number>(10);

    // Состояние для хранения настроек генерации пароля
    const [settingsData, setSettingsData] = useState<IOption[]>([
        {
            index: 0,
            name: "Использовать прописные буквы",
            use: true,
        },

        {
            index: 1,
            name: "Использовать строчные буквы",
            use: true,
        },
        {
            index: 2,
            name: "Использовать цифры",
            use: true,
        },
        {
            index: 3,
            name: "Использовать символы: %, *, ), ?, @, #, $, ~",
            use: true,
        },
        {
            index: 4,
            name: "Избегать повторения символов",
            use: true,
        },
    ]);

    // Обработчик изменения состояния чекбоксов
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Если есть ошибка, очищаем её
        if (error) {
            setError(null);
        }

        // Получаем индекс чекбокса по его id
        const checkboxIndex = parseInt(event.target.id);

        let currentSettingsDataElement;
        // Поиск соответствующего элемента опций
        settingsData.findIndex((element) => {
            if (element.index === checkboxIndex) currentSettingsDataElement = element;
        });
        currentSettingsDataElement.use = !currentSettingsDataElement.use;
        // Обновляем состояние настроек
        setSettingsData([
                ...settingsData.filter((el) => el.index < checkboxIndex),
                currentSettingsDataElement,
                ...settingsData.filter((el) => el.index > checkboxIndex),
        ]);
    }

    // Валидация длины
    useEffect(()=> {
        if(passwordSize <= 0){
            setError('Длина не может равняться 0, быть пустой или отрицательной!')
        } else {
            setError(null)
        }
    }, [passwordSize])

    // Обработчик генерации пароля
    const handleGenerate = (options, passwordSize) => {
        // Проверка, что хотя бы одна опция выбрана
        const someOptionUse = settingsData.some(option => option.use)
        if(!someOptionUse){
            setError("Выберите хотя бы одну опцию!")
        }
        // Генерация пароля
        const data:string|{err: string} = generatePassword(options, passwordSize)

        // Проверка на ошибки при генерации
        if(typeof data !== "string" && data?.err){
            setError(data.err)
        } else{
            // Если пароль сгенерирован успешно, добавляем его в хранилище
            appendPassword(data)
        }
    }
    return (
        <BlockWrapper>
            <div className={styles.generatorPasswordOptions__wrapper}>
                <div className={styles.generatorPasswordOptions__lengthPassword}>
                    {/* Блок для ввода длины пароля */}
                    <p>Длина пароля</p>
                    <Input
                        id={'length'}
                        placeholder={'Введите число'}
                        value={passwordSize}
                        type={'number'}
                        onChange={(e) => setPasswordSize(+e.target.value)} // Обновление состояния длины пароля
                    />
                </div>

                {/* Генерация списка чекбоксов по настройкам */}
                {settingsData.map((option) =>
                    <Checkbox
                        id={option.index}
                        key={option.index}
                        label={option.name}
                        use={option.use}
                        onChange={(e) => handleCheckboxChange(e)} // Обработчик для изменения чекбокса
                    />
                )}

                {/* Отображение ошибки, если она есть */}
                {error && <p className={styles.error}>{error}</p>}

                {/* Разделитель */}
                <div className={styles.divider} />

                {/* Кнопка для генерации пароля */}
                <div className={styles.button__wrapper}>
                    <Button
                        disabled={!!error} // Кнопка отключена, если есть ошибка
                        text={'Сгенерировать пароль'}
                        onClick={() => handleGenerate(settingsData, passwordSize)} // Генерация пароля
                    />
                </div>
            </div>
        </BlockWrapper>
    );
}

export default GeneratorPasswordsOptions;