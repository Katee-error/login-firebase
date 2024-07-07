import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import './index.css'
import './firebase.js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
