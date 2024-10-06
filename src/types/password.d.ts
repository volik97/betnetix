export interface IPasswordState {
    password: string[]; // Измените тип на string[]
    appendPassword: (password: string) => void;
}