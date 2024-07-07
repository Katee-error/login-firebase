import React from 'react'
import Form from './Form'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slice/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Box } from '@chakra-ui/react';


const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
         .then(({user}) => {
            console.log(user)
            dispatch(setUser({
                email: user.email, 
                id: user.uid, 
                token: user.accessToken 
            }));
            navigate('/login')
         })
         .catch(console.error)
    }
    
  return (
    <Box p={'80px 0 60px'}>
          <Form
        title="Sign In"
        handleClick={handleLogin}
      />    
    </Box>
      
  )
}

export default Login

