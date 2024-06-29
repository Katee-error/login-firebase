import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { removeUser } from '../store/slice/userSlice'


const Home = () => {

  const dispatch = useDispatch()
  const {isAuth, email} = useAuth()

  return isAuth ? (
    <div>
      <h1>Welcome </h1>
      <button
          onClick={() => dispatch(removeUser())}
        > Log out form {email}
        </button>
    </div>
  ) : (

 <Navigate to="/login"/>
  )
}

export default Home
