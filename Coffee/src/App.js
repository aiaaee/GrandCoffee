import React from 'react'

// Components
import Header from './Header/Header'
import WebCarousel from './Main/Carousel'
import Intro from './Main/Intro'
import About from './Main/About'
import Gallery from './Main/Gallery'

function App(){
    return(
        <>

            <Header />
            
            <WebCarousel />
            <Intro />
            <About />
            <Gallery />
        </>
    )
} 

export default App