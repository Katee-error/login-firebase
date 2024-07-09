import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import { Box, Container, Center, Heading, Text} from '@chakra-ui/react' 

const LoginPage = () => {
  return (
    <Box py={'80px'}>
      <Container maxW={'container.md'}>
          <Center>
            <Heading>
              Login
            </Heading>
          </Center>
          <Login/>
          <Text 
          position="relative"
          fontWeight={600} 
          color={'white'}
          _after={{
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: '-3px', 
            width: '11%',
            height: '0.5px', 
            backgroundColor: 'white', 
          }}
              >
            Or <Link to="/register">register</Link>
          </Text>
      </Container>
    </Box>
  )
}

export default LoginPage
