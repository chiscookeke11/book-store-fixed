import React from 'react'
import Hero from '../components/herosection/Hero'
import PointBanner from '../components/pointsbanner/PointBanner'
import Tracks from '../components/Tracks'
import LearningExperience from '../components/LearningExperience'
import StudentTestimonial from '../components/StudentTestimonial'
import TeacherTracks from '../components/TeacherTracks'
import Newsletter from  '../components/Newsletter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const HomePage = () => {
  return (
    <div style={{
      backgroundColor: "F5F5F5",
    }} >
      <Navbar/>
        <Hero/>
        <PointBanner/>
        <Tracks/>
        <LearningExperience/>
        <StudentTestimonial/>
        <TeacherTracks/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default HomePage