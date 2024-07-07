import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { removeUser } from '../store/slice/userSlice'
import { Box, Container, Button, Center, Heading } from '@chakra-ui/react'


const Home = () => {

  const dispatch = useDispatch()
  const {isAuth, email} = useAuth()

  return isAuth ? (
    <Box p={'40px'}>
      <Container maxW={'container.lg'}>
        <Center>
        <Heading fontSize={"4xl"}>Welcome </Heading>
              <Button
                  onClick={() => dispatch(removeUser())}
                > Log out form {email}
              </Button>
        </Center>
      </Container>
      
    </Box>
  ) : (

 <Navigate to="/login"/>
  )
}

export default Home
