import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ShoppingCartProvider } from './context/movieContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
        <App />
    </ShoppingCartProvider>
  
  </React.StrictMode>,
)
