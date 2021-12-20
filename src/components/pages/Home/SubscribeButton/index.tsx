// External libraries
import React from 'react'

// Styled
import { Container } from './styles'

interface SubscribeButtonProps {
  priceId: string
}

const SuscribeButton: React.FC<SubscribeButtonProps> = ({ priceId }) => {
  const handleSubscribe = () => console.log(priceId)
  return (
    <Container onClick={handleSubscribe}>
      Subscribe now
    </Container>
  )
}

export default SuscribeButton
