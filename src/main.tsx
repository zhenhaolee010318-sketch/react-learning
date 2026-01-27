import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserProvider } from './store/userStore.tsx'
import { ThemeProvider } from './store/themeStore.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider >
        <App />
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
)
