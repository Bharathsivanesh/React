    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'

    import './index.css'
    // import Form from './login'
    // import Aarrayvalue from './nav'
import Pro from './props'
    // import Csspomponent from './csscomponent.jsx'

    createRoot(document.getElementById('root')).render(
      <StrictMode>

        {/* <Csspomponent/> */}
        {/* <Form/> */}
       <Pro/>
      </StrictMode>,
    )
