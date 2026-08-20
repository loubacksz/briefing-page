import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // for rendering components on the client(browser)
import './assets/css/index.css'
import App from './components/App.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
)

// 'use strict' -> activates modern JS