import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './src/App'
import React from 'react'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
    )