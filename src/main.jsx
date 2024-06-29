import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import './index.css'
import './firebase.js'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home/>,
//       },
//       {
//         path: "/login",
//         element: <LoginPage/>,
//       },
//       {
//         path: "/register",
//         element: <RegisterPage/>,
//       },
//     ],
//   },
// ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <ChakraProvider theme={theme}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ChakraProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
