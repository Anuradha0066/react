import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter}from 'react-router-dom'
import ContextP from './Context.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    {/* <Context.Provider> */}
    <App />
    {/* </Context.Provider> */}
    </BrowserRouter>
  </StrictMode>,

)

