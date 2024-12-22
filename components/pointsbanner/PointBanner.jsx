import React from 'react'

const PointBanner = () => {
    const points = [
        {
            id: "1",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1734896539/online-test_1_chm88e.svg",
            heading: "Learn The Latest Skills",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
        },
        {
            id: "2",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1734896539/exam_1_hfpd86.svg",
            heading: "Get Ready For a Career",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
        },
        {
            id: "3",
            image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1734896538/certification_1_tx9nyi.svg",
            heading: "Earn a Certificate",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
        },
    ]

  return (
    <div className="max-w-[75%] min-w-[350px] bg-[#4D2C5E] min-h-[180px] mx-auto mt-[-100px] mb-[100px] rounded-[14px] p-[10px] flex flex-col sm:flex-col md:flex-row lg:flex-row gap-1 justify-evenly flex-wrap"
>
       {points.map((item, index) => (
            <div className='w-1/3 min-w-[300px]  sm:w-[300px] flex items-start lg:flex-row  gap-3 mx-2 my-2' key={index} >
            <div className="flex items-center justify-center p-3 min-w-[90px] min-h-[90px] rounded-[23px] bg-[#ffffff] bg-opacity-10 ">
            <img src={item.image} alt="" className='w-3/5' />
            </div>
                <div className="text">
                    <h2 className='text-[#fff] text-[1.1rem] font-[500] mb-[5px] '  >{item.heading} </h2>
                    <p className='text-[#fff]  text-[0.85rem] font-[400] opacity-70 ' >{item.description} </p>
                </div>
            </div>
       )
     )}
    </div>
  )
}

export default PointBanner

