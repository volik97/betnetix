import {create} from 'zustand'
import {IUserState} from "@/types/user";

export const userStore = create<IUserState>((set) => ({
    user: {
        name: undefined
    },
    createUser: (newUser) => set((state) => ({
        user: {...state.user, ...newUser}
    }))
}))