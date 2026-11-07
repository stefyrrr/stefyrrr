import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  document.documentElement.classList.add('has-reveal')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
