// External libraries
import React from 'react'
import Head from 'next/head'

// Components
import Body from '../../components/pages/Home/Body'
import Header from '../../components/common/Header'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

const Home: React.FC<HomeProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <Header />
      <Body
        priceId={product.priceId}
        amount={product.amount}
      />
    </>
  )
}

export default Home
