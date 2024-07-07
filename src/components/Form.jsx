import { VStack, Container, FormControl, FormLabel, FormHelperText, Input, InputGroup, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Form = ({title, handleClick}) => { // не забывать передавать пропсы в фигурных скобках
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')

    // const [show, setShow] = useState(false)
     //const handleChange = () => setShow(!show)
  return (
    <>
      <Container maxW={'conatiner.sm'}>
        <VStack spacing={6}>
          <FormControl>
        <FormLabel>Email</FormLabel>
          <Input type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email'
          />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
          <FormControl>
        <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
            type='password'
            //type={show ? 'text' : 'password'}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder='Enter password'
            pr='4.5rem'
            />
            {/* <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onChange={handleChange}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement> */}
          </InputGroup>
        
            </FormControl>
            <Button
        onClick={() => handleClick(email, pass)}
            >
        {title}
        </Button>
        </VStack>
      </Container>
    </>
    
  )
}

export default Form

// прописать валидацию на форму 

// сделать иконки на инпуты 



// function errorMessageExample() {
//   const [input, setInput] = useState('')

//   const handleInputChange = (e) => setInput(e.target.value)

//   const isError = input === ''

//   return (
//     <FormControl isInvalid={isError}>
//       <FormLabel>Email</FormLabel>
//       <Input type='email' value={input} onChange={handleInputChange} />
//       {!isError ? (
//         <FormHelperText>
//           Enter the email you'd like to receive the newsletter on.
//         </FormHelperText>
//       ) : (
//         <FormErrorMessage>Email is required.</FormErrorMessage>
//       )}
//     </FormControl>
//   )
// }