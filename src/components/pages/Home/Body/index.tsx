// External libraries
import React from 'react'

// Components
import SuscribeButton from '../SubscribeButton'

// Assets
import Avatar from '../../../../assets/images/avatar.svg'

// Styled
import {
  Container,
  Paragraph,
  TextContent,
  Title
} from './styles'

interface BodyProps {
  priceId: string
  amount: number
}

const Body: React.FC<BodyProps> = ({ priceId, amount }) => {
  return (
    <Container>
      <TextContent>
        <span>🖖 Hey, welcome</span>
        <Title>News about <br /> the <span>React</span> world</Title>
        <Paragraph>
          Get access to all the publications <br />
          <span>for {amount} month</span>
        </Paragraph>
        <SuscribeButton priceId={priceId} />
      </TextContent>
      <Avatar />
    </Container>
  )
}

export default Body
