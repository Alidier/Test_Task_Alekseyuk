import { useState } from 'react'
import Header from './components/Header'
import Hero from './HeroSection'
import FeatureCaption from './components/FeatureCaption'
import Feature from './components/FeatureSection/FeatureSection'
import Wraper from './components/Wraper'
import Feature_2 from './components/FeatureSection_2'
import News from './components/News'
import Brand from './components/BrandSection'
import Hero_2 from './components/HeroSection_2'
import Footer from './components/footer'
import styles from './index.scss'

function App() {

  return (
    <div className='wrap'>
      <Header/>
      <Wraper>
      <Hero/>
      </Wraper>
      <FeatureCaption/>
       <Wraper>
      <Feature/>
       <Feature_2/>
      </Wraper>
      <Wraper>
        <News/>
      </Wraper>
       <Brand/>
       <Wraper>
        <Hero_2/>
       </Wraper>
        <Footer/>
    </div>
  )
}

export default App
