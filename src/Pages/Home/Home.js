import React from 'react'
import { Helmet } from 'react-helmet'
import BuyNow from '../../components/BuyNow/BuyNow'
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Service/Service'
import Footer from '../../components/Shared/Footer/Footer'
import Navbar from '../../components/Shared/navbar/Navbar'

const Home = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home Services </title>
      </Helmet>
      <div>
      <Navbar />
        <Hero />
        <BuyNow />
        <Service />
        <Footer />
      </div>
    </div>
  )
}

export default Home