import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Form from './login'
// import Csspomponent from './csscomponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Csspomponent/> */}
    <Form/>
  </StrictMode>,
)
