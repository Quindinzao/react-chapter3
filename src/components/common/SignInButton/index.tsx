// External libraries
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

// Styled
import { Container } from './styles'

const SignInButton: React.FC = () => {
  const isUserLogged = true

  return isUserLogged
  ? (
    <Container>
      <FaGithub color='#04D361' />
      João Victor Fernandes
      <FiX color='#737386' className='close' />
    </Container>
  )
  : (
    <Container>
      <FaGithub color='#EBA417' />
      Sign in with Github
    </Container>
  )
}

export default SignInButton
