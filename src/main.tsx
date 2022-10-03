import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CarrosTopApp } from './CarrosTopApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename='/ds-react-ex1' >
      <CarrosTopApp />
    </BrowserRouter>
  </React.StrictMode>
)
