import React from 'react'
import { HomeComp } from '../components/homeComp/homeComp'
import { AllDataShow } from '../components/allDataShow/allDataShow'
import Footer from '../components/footer/footer'

export const Home = () => {
  return (
    <>
        <HomeComp/>
        <AllDataShow/>
        <Footer/>
    </>
  )
}
