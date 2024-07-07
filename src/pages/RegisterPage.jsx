import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'
import { Box, Container, Center, Heading, Text} from '@chakra-ui/react' 


const RegisterPage = () => {
  return (

    <Box py={'80px'}>
      <Container maxW={'container.md'}>
          <Center>
            <Heading>
            Register
            </Heading>
          </Center>
          <SignUp/>
          <Text 
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: '-3px', // Настройте это значение для изменения отступа
            width: '33%',
            height: '0.5px', // Толщина подчеркивания
            backgroundColor: 'white', // Цвет подчеркивания
          }}
          >
          Already have an account? <Link to="/login"> <Box as='span' fontWeight={800} color={'blue.400'}>Sign in</Box></Link>
          </Text>
      </Container>
    </Box>
  )
}

export default RegisterPage
