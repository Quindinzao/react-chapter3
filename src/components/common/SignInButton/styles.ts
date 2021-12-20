// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.button`
  height: 3rem;
  background: ${theme.colors.gray_850};
  border: 0;
  border-radius: 3rem;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.white};
  font-weight: bold;

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  .close {
    margin-left: 1rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8)
  }
`

