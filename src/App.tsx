import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages'
import ThemeToggle from './components/ThemeToggle'
import { examples } from './data/examples'

function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {examples.map((example) => (
          <Route
            key={example.id}
            path={example.route}
            element={<example.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
