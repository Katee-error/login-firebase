import React from 'react'
import Form from './Form'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slice/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()// посмотреть посему не срабатывает хук на переадресацию

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
         .then(({user}) => {
            console.log(user)
            dispatch(setUser({
                email: user.email, // email используется из инпута 
                id: user.uid, // уникальный идентификатор
                token: user.accessToken // уникальный безопасный токен 
            }));
            navigate('/login')
         })
         .catch(console.error)
    }
    
  return (
      <Form
        title="sign in"
        handleClick={handleLogin}
      />
  )
}

export default Login

// поменять промис в логине!!!!