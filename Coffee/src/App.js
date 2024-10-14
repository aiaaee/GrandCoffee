import React from 'react'

// Components
import Header from './Header/Header'
import WebCarousel from './Main/Carousel'
import Intro from './Main/Intro'
import About from './Main/About'
import Gallery from './Main/Gallery'
import Suggest from './Main/Suggest'
import Review from './Main/Reviews'
function App(){
    return(
        <>

            <Header />
            <WebCarousel />
            <Intro />
            <About />
            <Gallery />
            <Suggest />
            <Review />  
        </>
    )
} 

export default App