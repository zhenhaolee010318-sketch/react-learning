import { createContext, useContext, useState } from "react";
import type { User } from "../types/user";
import { createStore, useStore, type StoreApi } from 'zustand'

export interface UserStore {
    user: User | null;
    setUser: (user: User) => void;
}

export const createUserStore = createStore<UserStore>(set => ({
    user: null,
    setUser: (user: User) => set({ user })
}))

/** */
export type TaskStoreApi = StoreApi<UserStore>

export const UserContext = createContext<TaskStoreApi | null>(null)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [store] = useState(createUserStore)
    return (
        <UserContext.Provider value={store} >
            {children}
        </UserContext.Provider>
    )
}

export function useUser<T>(selector: (state: UserStore) => T): T {
    const context = useContext(UserContext)

    return useStore(context!, selector)
}
