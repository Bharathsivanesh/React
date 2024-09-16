import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Csspomponent from './csscomponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Csspomponent/>
  </StrictMode>,
)
