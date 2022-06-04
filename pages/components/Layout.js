import Head from 'next/head'
import React from 'react'
import Nav from './Nav'
import SectionDo from './SectionDo'
import About from './About'
import Agents from './Agents'
import Footer from './Footer'
import Intro from './Intro'
import Properties from './Properties'

const Layout = (props) => {
  return (
    
    <>
    
      <Nav/>
    
      <Intro/>
      <SectionDo/>
      <About/>
      <Agents/>
      <Properties/>
      <Footer/>
      
    </>
  )
}

export default Layout
//  {props.childern}