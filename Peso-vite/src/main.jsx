import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IMCCalculator from './App.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IMCCalculator />
  </StrictMode>,
)
