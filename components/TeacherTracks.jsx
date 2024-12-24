import React from 'react'

const TeacherTracks = () => {

    const teacherCards = [
        {
            name: "Matthew E. McNatt",
            position: "Professor @George Brown College",
            text: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1735034104/elegant-young-teacher-with-brunette-hair-stylish-light-shirt-black-striped-suit-glasses-holding-writings-pen-giving-lecture_1_ovpolz.png"
        },
        {
            name: "Tracy D. Wright",
            position: "Professor @George Brown College",
            text: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1735034104/portrait-female-teacher-white_1_gd3ojc.png"
        },
        {
            name: "Cynthia A. Nelson",
            position: "Professor @George Brown College",
            text: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1735034104/teacher_3_apjbjr.png"
        },
    ]

  return (
    <div className='w-full p-3 flex flex-col items-center justify-start font-poppins mb-3' >
         <h1 className="text-black font-semibold text-2xl font-jost text-center">
         Our Tracks
      </h1>
      <p className="text-gray-500 text-base font-medium text-center">
      Lorem Ipsum is simply dummy text of the printing.
      </p>

      <div className='flex flex-col lg:flex-row gap-3 items-center justify-center mt-5 w-full mx-auto '>
        {teacherCards.map((item, index) => (

             <div key={index} className="teacher-card max-w-[380px] bg-white  shadow-xl p-6  mx-2  rounded-14px min-w-[280px] ">
             <img src={item.image} alt="" 
             className='rounded-[14px] w-full h-[170px]  object-fill mb-3 '
             />
             <div className="content">
                 <h1 className='text-[#000000] font-[500] text-[1.2rem]' > {item.name}</h1>
                 <h5 className='text-[#868686]  text-sm font-[500] mb-3 ' >{item.position} </h5>
 
                 <p className='text-[#ACACAC] text-sm mb-2 ' > {item.text} </p>
 
                 <div className='flex flex-row items-center justify-between w-full mt-3  ' >
                     <h2 className='text-[#FF7426] font-[500] text-[1rem]' >Engineering physics</h2>
                      <span className='flex items-center gap-2' >
                         <a href="#"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735034349/instagram_cwxzy9.svg" alt="" />
                         </a>
                         <a href="#"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735034328/174857_1_ism6ak.svg" alt="" />
                         </a>
                         </span>
                 </div>
             </div>
 
         </div>
        ))}
       

      </div>
    </div>
  )
}

export default TeacherTracks

