// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../styles/theme'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TextContent = styled.section`
  max-width: 600px;

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 4.5rem;
  font-weight: 900;
  margin-top: 2.5rem;

  span {
    color: ${theme.colors.cyan_500};
    font-size: 4.5rem;
  }
`

export const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-top: 1.5rem;

  span {
    color: ${theme.colors.cyan_500};
    font-weight: bold;
  }
`