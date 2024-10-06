import {create} from 'zustand'

export const userStore = create((set) => ({
    user: {
        name: undefined
    },
    createUser: (newUser) => set((state) => ({
        user: {...state.user, ...newUser}
    }))
}))