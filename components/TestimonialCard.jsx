import React from 'react'

const TestimonialCard = ({name, text, image, role}) => {
  return (
    <div className='max-w-[300px] bg-white shadow-xl p-6 font-roboto mx-2 ' >
        <div>
            <p className='text-[#ACACAC] text-sm leading-relaxed mb-4 ' > "{text}" </p>
        </div>

        <div className='flex flex-row items-center gap-3 justify-start' >  
            <img src={image} alt="" className='h-[50px] w-[50px] rounded-[50%]' />
            <div className="person-details mb-4">
                <h3 className='text-[#353535] text-md font-bold ' >{name}</h3>
                <p className='text-[#8E8E8E] text-sm font-light' > {role}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard