import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'milligram/dist/milligram.css'
import UseEffect from "./UseEffect.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
      <UseEffect/>

  </StrictMode>,
)
