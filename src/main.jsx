import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
// redux toolkit
import { store } from './context/strore.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import "number-brm"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
