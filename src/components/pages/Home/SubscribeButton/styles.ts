// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../styles/theme'

export const Container = styled.button`
  width: 260px;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: ${theme.colors.yellow_500};
  color: ${theme.colors.gray_900};
  font-size: 1.23rem;
  font-weight: bold;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
