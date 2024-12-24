import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#FDF8EE]' >
    <div className='w-full  p-5 flex flex-col lg:flex-row md:flex-row flex-wrap items-stretch justify-evenly font-Roboto ' >

        <div className='max-w-[318px] my-2 ' >
          <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734697716/Group_328_bsouo8.svg" alt="" className='w-[155px] mb-4' />
          <p className='text-[#606060] text-sm font-normal text-justify' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
        </div>


        <div className='max-w-[318px] my-2 ' >
            <h1 className='text-[#00052E] text-lg font-bold   ' >Company</h1>
          <ul>
            <li className='text-[#606060] text-md py-1 my-1' ><a href="#"> About Us </a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> How to work? </a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> Populer Course </a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> Service </a></li>
          </ul>
        </div>

        <div className='max-w-[318px] my-2 ' >
            <h1 className='text-[#00052E] text-lg font-bold   ' >Courses</h1>
          <ul>
            <li className='text-[#606060] text-md py-1 my-1' ><a href="#">Categories</a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> Offline Course </a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> Video Course </a></li>
          </ul>
        </div>

        <div className='max-w-[318px] my-2 ' >
            <h1 className='text-[#00052E] text-lg font-bold   ' >Support</h1>
          <ul>
            <li className='text-[#606060] text-md py-1 my-1' ><a href="#">FAQ</a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> Help Center </a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> Career </a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> Privacy </a></li>
          </ul>
        </div>

        <div className='max-w-[318px] my-2 ' >
            <h1 className='text-[#00052E] text-lg font-bold   ' >Contact Info</h1>
          <ul>
            <li className='text-[#606060] text-md py-1 my-1' ><a href="#">+0913-705-3875</a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> ElizabethJ@jourrapide.com </a></li>
            <li className='text-[#606060] text-md py-1 my-1'><a href="#"> 4808 Skinner Hollow Road Days Creek, OR 97429 </a></li>
        
          </ul>
        </div>

    </div>
    <small className=' w-full text-center text-[#606060] block py-4 border-t border-[#B7B7B7] ' >BookStore All Right Reserved, 2022</small>
    </div>
  )
}

export default Footer