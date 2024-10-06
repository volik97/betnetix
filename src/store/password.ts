import {create} from 'zustand'

export const passwordStore = create((set) => ({
    password: [],
    appendPassword: (password) => set((state) => ({
        password: [...state.password, password]}    ))
}))