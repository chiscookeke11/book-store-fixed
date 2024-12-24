import React from 'react'
import "./heroStyle.css"
import 'animate.css';


const Hero = () => {
  return (
    <div className='pb-[100px]'>
    <section className='hero-section' >

        <div className="text animate__animated  animate__bounceInDown">
            <div className="top-text">
                <h1>The <span>Smart</span> <br/>  
                Choice For <span> Future</span></h1>
                <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
            </div>
            <div className="search-input"> 
              
              <input type="text" placeholder='Search for a location...'/>
              <button>Continue</button>
            </div>
           
        </div>
        <div className="right-image relative text animate__animated  animate__bounceInUp">
          <div  className=' max-h-[250px] max-w-[250px]  absolute lg:right-[-8%] sm:right-0 top-[-8%] z-[-1] min-w-[100px] min-h-[100px] ' >
          <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734869181/circle_isjpcn.svg" alt="" className='h-full w-full'/>
          </div>    
          <div className="students w-full h-full bg-transparent z-10">
          <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734697428/OBJECTS_lxz96w.svg" alt="" />
           

            </div>          
                          </div>

            <div className="extra-images ruler"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734697798/Group_r2kcje.svg" alt="" /></div>
            <div className="extra-images light-bulb"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698068/Group_4_yegkzz.svg" alt="" /></div>
            <div className="extra-images conical-flask"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698079/Group_5_qvgy0h.svg" alt="" /></div>
            <div className="extra-images set-square"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698071/Group_6_kuq2gk.svg" alt="" /></div>
            <div className="extra-images globe"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698069/Group_3_fvhsxr.svg" alt="" /></div>
            <div className="extra-images pencil"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698069/Group_2_frosv1.svg" alt="" /></div>
            <div className="extra-images atom"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698070/Group_1_ssx2rx.svg" alt="" /></div>
            <div className="extra-images monitor"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734746603/monitor_orssvm.png" alt="" /></div>
            <div className="extra-images gear"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734867949/gear_i1n3ra.svg" alt="" /></div>
            <div className="extra-images circle-holder ">
              <div className="wrapper w-full h-full relative ">
                <div className="big-circle h-[42.5px] w-[42.5px] rounded-full "></div>
                <div className="small-circle h-[17.5px] w-[17.5px] rounded-full "></div>
              </div>
            </div>
     
    </section>
    </div>
  )
}

export default Hero