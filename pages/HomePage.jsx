import React from 'react'
import Hero from '../components/herosection/Hero'
import PointBanner from '../components/pointsbanner/PointBanner'
import Tracks from '../components/Tracks'


const HomePage = () => {
  return (
    <div style={{
      backgroundColor: "F5F5F5",
    }} >
        <Hero/>
        <PointBanner/>
        <Tracks/>
    </div>
  )
}

export default HomePage