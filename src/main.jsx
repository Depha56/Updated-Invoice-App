import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import SingleInvoice from './assets/components/singleInvoice.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/SingleInvoice' element={<SingleInvoice/>}/>
      <Route path= '/App' element={<App/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
