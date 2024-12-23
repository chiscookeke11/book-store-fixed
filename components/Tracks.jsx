import React from 'react'
import { FaClock, FaDownload, FaVideo } from 'react-icons/fa'

const Tracks = () => {

    const trackList = [
        {
            id: "1",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1734900598/little-girl-participating-online-classes_1_e3jrfu.png",
            heading: "UI/UX Design for Beginners",
            category: "UI/UX Design",
            fee: "98",
            duration: {
                hours: "3",
                minutes: "40"
            },
            courses: "34",
            sales: "250",
            courselink: "nedu"
        },
        {
            id: "2",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1734900597/image_7_l8vukc.png",
            heading: "UI/UX Design for Beginners",
            category: "UI/UX Design",
            fee: "98",
            duration: {
                hours: "3",
                minutes: "40"
            },
            courses: "34",
            sales: "250",
            courselink: "nedu"
        },
        {
            id: "3",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1734900596/image_6_o3y6rm.png",
            heading: "UI/UX Design for Beginners",
            category: "UI/UX Design",
            fee: "98",
            duration: {
                hours: "3",
                minutes: "40"
            },
            courses: "34",
            sales: "250",
            courselink: "nedu"
        },

    ]

  return (
    <div className='flex justify-center items-center flex-col w-full p-4 font-poppins text-center bg-[#fff]' >
        <h1 className='text-[#000000] font-[600] text-[2rem] font-jost ' >Our Tracks</h1>
        <p className='text-[#8A8A8A] text-[1rem] font-[500]' >Lorem Ipsum is simply dummy text of the printing.</p>

        <div className='my-4 w-full max-w-[1200px] p-4 mx-auto flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-between'  >
            {trackList.map((item, index) => (
                <div key={index} className='bg-[#fff] max-w-[440px] min-w-[320px] min-h-[300px] p-3 pb-5 flex flex-col items-start rounded-[14px] mx-3 my-[30px] shadow-custom '>
                    <img src={item.image} alt="" className='rounded-[14px]  w-full h-[200px] object-fill object-center mb-4 ' />
                    <div className='flex w-full justify-between items-center' > 
                        <h3 className='text-[#ACACAC] font-[500] text-[0.95rem] ' >{item.category} </h3>
                        <span>stars</span>

                    </div>
                    <h2 className='text-[#000000] font-[500] text-[1.2rem] ' >{item.heading} </h2>
                    <h2 className='text-[#FF7426] font-[500] text-[1.2rem] '>${item.fee} </h2>
                    <div class="border-t-2 border-dotted border-gray-300 w-full my-4"></div>

                    <div className='flex flex-row gap-4 my-1' >
                        <h3  className='text-[#ACACAC] font-[500] text-[0.95rem] flex flex-row items-center gap-2 '><FaClock className='text-[#000] font-[300] ' />{item.duration.hours} hr {item.duration.minutes} min </h3>




                        
                        <h3  className='text-[#ACACAC] font-[500] text-[0.95rem] flex flex-row items-center gap-2   '><FaVideo className='text-[#000] font-[300]' /> {item.courses} courses </h3>
                        <h3  className='text-[#ACACAC] font-[500] text-[0.95rem] flex flex-row items-center gap-2 '><FaDownload className='text-[#000] font-[300]'/> {item.sales} sales </h3>
                    </div>
                    <button className='text-[#fff] font-[500] text-[1.2rem] rounded-[96px] bg-[#FF7426] px-4 py-3 min-w-[200px] self-center mb-[-40px]  mt-[6%]' >Join Course</button>

                </div>
            ) )} 
        </div>

    </div>
  )
}

export default Tracks