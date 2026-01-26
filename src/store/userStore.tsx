import { createContext, useContext } from "react";
import type { User } from "../types/user";
import { create, useStore, type StoreApi } from 'zustand'

interface UserStore {
    user: User | null;
    setUser: (user: User) => void;
}

export const createUserStore = create<UserStore>(set => ({
    user: null,
    setUser: (user: User) => set({ user })
}))

/** */
export type TaskStoreApi = StoreApi<UserStore>

export const UserContext = createContext<TaskStoreApi | null>(null)

// export const UserProvider = ({ childern }: { childern: React.ReactNode }) => {
//     const [store] = useState(createUserStore)
//     return (
//         <UserContext.Provider value={store} >
//             {childern}
//         </UserContext.Provider>
//     )
// }

export function useUser(selector: (state: UserStore) => User) {
    const context = useContext(UserContext)

    return useStore(context!, selector)
}