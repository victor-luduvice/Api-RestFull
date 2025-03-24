import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import home from './pages/home/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <home/>
  </StrictMode>,
)
