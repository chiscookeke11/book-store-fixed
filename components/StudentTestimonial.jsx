import React from 'react'
import TestimonialCard from './TestimonialCard'


const StudentTestimonial = () => {
    
    const testimonials = [
        {
            name: "Finlay Kirk",
            role: "Web Developper",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1734977983/Ellipse_34_h5nebs.png",
            text: "Complete account of the system and expound the actual contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
            name: "Dannette P. Cervantes",
            role: "Web Design",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1734977983/Ellipse_35_uhpcxa.png",
            text: "Complete account of the system and expound the actual contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
            name: "Clara R. Altman",
            role: "UI&UX Design",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1734977983/Ellipse_36_tu6b2i.png",
            text: "Complete account of the system and expound the actual contrary to popular belief, Lorem Ipsum is not simply random text.",
        }
    ]
  return (
    <div className='mt-[100px] w-full p-3 flex flex-col items-center justify-start relative min-h-[74vh]   overflow-hidden' >
        <h1 className='text-[#000000] font-[600] text-[2rem] font-jost text-center ' >What student’s say</h1>
        <p  className='text-[#8A8A8A] text-[1rem] font-[500] text-center'>Lorem Ipsum is simply dummy text of the printing.</p>



<div className="testimonial-wrapper w-full flex flex-col lg:flex-row md:flex-row sm:flex-col items-center justify-center my-8 gap-3">
    {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
    ) ) }
</div>










        <div className='blur-oval left-[-60%]' ></div>
        <div className='blur-oval right-[-60%] ' ></div>
        <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734976667/planet_kebmxn.svg"  alt="" 
        className='absolute top-[50%]  transform -translate-y-1/2 right-0 w-20 sm:w-20 md:w-24 lg:w-32 z-[-1]'
        />
          <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734976660/curly-down-arrow_f4o3m0.svg"  alt="" 
        className='absolute top-[50%]  transform -translate-y-1/2 left-0 w-20 sm:w-20 md:w-24 lg:w-32 z-[-1]'
        />
        </div>
        
  )
}

export default StudentTestimonial