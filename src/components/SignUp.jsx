import React from 'react'
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slice/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Box } from '@chakra-ui/react';

const SignUp = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
    const handleRegister = (email, password) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          console.log(user)
          dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken
          }));
          navigate('/')
       })
       .catch(console.error)
  }
    

  return (
    <Box p={'80px 0 60px'}>
      <Form
        title="Register"
        handleClick={handleRegister}
          />
    </Box>
    
  )
}

export default SignUp
