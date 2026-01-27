import { createContext, useContext, useState, useEffect } from "react";
import { createStore, useStore, type StoreApi } from 'zustand'

export type Theme = 'light' | 'dark';

export interface ThemeStore {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

export const createThemeStore = createStore<ThemeStore>((set, get) => ({
    theme: (localStorage.getItem('theme') as Theme) || 'light',
    setTheme: (theme: Theme) => {
        set({ theme });
        localStorage.setItem('theme', theme);
        // 更新根元素的类名
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    },
    toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        get().setTheme(newTheme);
    }
}))

export type ThemeStoreApi = StoreApi<ThemeStore>

export const ThemeContext = createContext<ThemeStoreApi | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [store] = useState(createThemeStore)
    
    // 初始化时应用主题
    useEffect(() => {
        const theme = store.getState().theme;
        const root = document.documentElement; // Tailwind 暗色模式需要作用在 html 元素上
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [store])

    return (
        <ThemeContext.Provider value={store}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme<T>(selector: (state: ThemeStore) => T): T {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return useStore(context, selector)
}
