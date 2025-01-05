import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './Css/index.css'
import './Css/loadingScreen.css'
import './Css/mediaqueri.css'
import Index from './router/router'

createRoot(document.getElementById('Site')).render(
  <StrictMode>
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  </StrictMode>,
);