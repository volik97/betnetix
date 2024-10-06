export interface IUserState {
    user: {name?: string;}
    createUser: (newUser: {name: string}) => void;
}