import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'
import Header from './components/Header'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import  ApplicationForm from './components/ApplicationForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <React.StrictMode>
      <Header />
      <BrowserRouter>
       <Routes>
        <Route path='/' Component={App} />
        <Route path='/app' Component={ApplicationForm} />
       </Routes>
      </BrowserRouter>

    </React.StrictMode>
  </Provider>,
)
