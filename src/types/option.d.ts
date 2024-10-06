export interface IOption{
    id: 'smallLetters' |
    'upperLetters' |
    'numbers' |
    'specialSymbols' | "uniqueSymbols";
    name: string;
    use: boolean
}