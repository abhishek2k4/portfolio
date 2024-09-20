import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SocialLinks from './component/SocialLinks'
import About from './component/About'
import Projects from './component/Projects'
import Experience from './component/Experience'
import Form from './component/form'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Projects/>
      <Experience/>
      <Form/>
    </>
  )
}

export default App