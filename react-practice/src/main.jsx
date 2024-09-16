  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'

  import './index.css'
  // import Form from './login'
  import Aarrayvalue from './nav'
  // import Csspomponent from './csscomponent.jsx'

  createRoot(document.getElementById('root')).render(
    <StrictMode>

      {/* <Csspomponent/> */}
      {/* <Form/> */}
      <Aarrayvalue ans={["sun","moon"]}/>
    </StrictMode>,
  )
