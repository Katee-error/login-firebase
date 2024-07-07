import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"


function App() {
  
  return (
   <Routes>
    <Route exact path="/home" element={<Home/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
   </Routes>
  )
}

export default App

