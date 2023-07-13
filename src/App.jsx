import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Heroes from './components/Heroes'
import About from './components/About'
import Features from './components/Features'
import Interface from './components/Interface'
import Download from './components/Download'
const App = () => {
  return (
    <>
    <Container>
        <Header />
        <Heroes />
        <About />
        <Features />
        <Interface />
        <Download />
    </Container>
    </>
  )
}

export default App