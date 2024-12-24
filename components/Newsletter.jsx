import React from 'react'

const Newsletter = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset();
  }
  return (
    <div className='font-Poppins w-[74.58vw] min-w-[350px] bg-[#4D2C5E] min-h-[45vh] mx-auto mt-[10%] mb-[6%] rounded-[14px] relative  flex flex-col items-center justify-center  p-3 overflow-hidden ' >
        <h1 className=' text-3xl lg:text-4xl text-white font-[600]  mb-1 text-center ' >Subscribe to our newsletter</h1>
        <p className=' text-md text-white font-[500]  mb-7 text-center' >Lorem Ipsum is simply dummy text of the printing.</p>
        
        <form onSubmit={handleSubmit} action="" className='w-full max-w-md min-w-sm bg-white px-3 py-1 flex flex-row items-stretch justify-center rounded-[62px] text-md z-10 ' >
          <input type="email" id="email" placeholder='Email Address' className='w-full border-none outline-none px-3 py-1 bg-transparent  ' />
          <button type='submit' className='text-white bg-[#FF7426] px-3 py-3 min-w-[100px] rounded-[62px] font-normal font-Poppins  text-lg ' >Send</button>
        </form>




        <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735046366/Group_wesefb.svg" alt="" className='absolute bottom-0 left-[10%] w-[100px] z-[0] ' />
        <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734973426/bulb_s4viey.svg" alt="" className='absolute bottom-[6%] right-[10%] w-[100px] z-[0]' />
         
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-2 border-[#fff] rounded-full absolute top-[-10%] left-2"></div>
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-2 border-[#fff] rounded-full absolute top-[-2%] left-[-3%] "></div>

        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-2 border-[#fff] rounded-full absolute top-[-10%] right-2"></div>
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-2 border-[#fff] rounded-full absolute top-[-2%] right-[-3%] "></div>

    </div>
  )
}

export default Newsletter