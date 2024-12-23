import React from 'react'
import Hero from '../components/herosection/Hero'
import PointBanner from '../components/pointsbanner/PointBanner'
import Tracks from '../components/Tracks'
import LearningExperience from '../components/LearningExperience'


const HomePage = () => {
  return (
    <div style={{
      backgroundColor: "F5F5F5",
    }} >
        <Hero/>
        <PointBanner/>
        <Tracks/>
        <LearningExperience/>
    </div>
  )
}

export default HomePage