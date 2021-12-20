// External libraries
import React from 'react'
import { GetStaticProps } from 'next'

// Components
import Home from '../pages/Home'

// Services
import { stripe } from '../services/stripe'

interface MainProps {
  product: {
    priceId: string
    amount: number
  }
}

const Main: React.FC<MainProps> = ({ product }) => {
  return <Home product={{
    priceId: product.priceId,
    amount: product.amount
  }} />
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K8T4MCcN1aD0KeQHvN5vzl4', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default Main
