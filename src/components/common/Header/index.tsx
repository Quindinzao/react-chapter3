// Exrternal libraries
import React from 'react'

// Components
import SignInButton from '../SignInButton'

// Assets
import Logo from '../../../assets/images/logo.svg'

// Styled
import {
  Container,
  Content,
  Link,
  Nav
} from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Nav>
          <Link isActive={true}>Home</Link>
          <Link isActive={false}>Posts</Link>
        </Nav>
        <SignInButton />
      </Content>
    </Container>
  )
}

export default Header
