// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${theme.colors.gray_800};
`

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  >button {
    margin-left: auto;
  }
`

export const Nav = styled.nav`
  margin-left: 5rem;
  height: 5rem;
`

interface LinkProps {
  isActive: boolean
}

export const Link = styled.a<LinkProps>`
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 5rem;
  line-height: 5rem;
  transition: color 0.2s;

  color: ${(props) => props.isActive
    ? theme.colors.white
    : theme.colors.gray_300
  };

  & + a {
    margin-left: 2rem;
  }

  &:hover {
    color: ${theme.colors.white};
  }

  /* ${(props) => props.isActive &&
    '::after { ' +
      'content: "";' +
      'height: 3px;' +
      'border-radius: 3px 3px 0 0;' +
      'width: 100%;' +
      'position: absolute;' +
      'bottom: 1px;' +
      'left: 0;' +
      'background: ${theme.colors.yellow_500};' +
    '}'
  } */

  ${(props) => props.isActive &&
    '::after { ' +
      'content: "";' +
      'height: 3px;' +
      'border-radius: 3px 3px 0 0;' +
      'width: 100%;' +
      'position: absolute;' +
      'bottom: 1px;' +
      'left: 0;' +
      'background: #EBA417;' +
    '}'
  }

  cursor: pointer;
`
