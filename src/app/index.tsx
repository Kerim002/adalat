import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import {Providers} from './providers'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers  />
  </StrictMode>,
)