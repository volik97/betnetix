import {create} from 'zustand'
import {IPasswordState} from "@/types/password";

export const passwordStore = create<IPasswordState>((set) => ({
    password: [],
    appendPassword: (password) => set((state) => ({
        password: [...state.password, password]}    ))
}))