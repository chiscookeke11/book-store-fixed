import React from 'react'

const LearningExperience = () => {
  return (
    <div className='w-full bg-[#FDF8EE] px-5  flex flex-row flex-wrap justify-center gap-[10%] items-center ' >
     <div className='w-[320px] h-[400px] block mb-[-80px] relative lg:overflow-x-visible md:overflow-x-visible overflow-x-hidden'>

        <div className=' absolute top-0 left-0 w-[70px] h-[70px]  ' >
            <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698068/Group_4_yegkzz.svg" alt="" className='w-full h-full' />
        </div>

        <div className=' absolute top-[30%] left-[-20%] w-[70px] h-[70px]  ' >
            <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734746603/monitor_orssvm.png" alt="" className='w-full h-full' />
        </div>

        <div className=' absolute bottom-[10%] left-[-20%] w-[70px] h-[70px]  ' >
            <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698069/Group_3_fvhsxr.svg" alt="" className='w-full h-full' />
        </div>

        <div className=' absolute top-0 right-0 w-[70px] h-[70px]  ' >
            <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698070/Group_1_ssx2rx.svg" alt="" className='w-full h-full' />
        </div>

        <div className=' absolute bottom-[30%] right-[-15%] w-[50px] h-[50px]  ' >
            <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698069/Group_2_frosv1.svg" alt="" className='w-full h-full' />
        </div>

        
        <div className=' absolute bottom-[0] right-[-10%] w-[50px] h-[50px]  ' >
            <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734867949/gear_i1n3ra.svg" alt="" className='w-full h-full' />
        </div>

        
    <img 
        src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734956475/OBJECTS_bcqnwh.png" 
        alt="" 
        className='w-full h-full object-cover object-fit' 
    />
</div>

        <div className='font-roboto w-auto max-w-[500px] min-w-[300px] mt-[80px]' >
            <h1 className='text-[#050C26] font-[700] text-[2.9rem] p-3 leading-tight ' >Premium <span className='text-[#FF7426]' > Learning</span> <br />
            Experience</h1>

            <div className='w-full p-1 mt-2' >  

            <div className='flex flex-row items-center gap-3 my-5' >
               <div className='min-w-[60px] min-h-[60px] bg-[#4D2C5E] rounded-[13px] flex items-center justify-center ' >
               <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734957940/hearts_1_wb1myc.png" alt="" className='w-[30px] ' />
               </div>
                <div>
                    <h3 className='text-[#050C26] font-[500] text-[1.2rem] m-0' >Easily Accessible</h3>
                    <p className='text-[#8A8A8A] font-[500] text-[0.9rem] '>Learning Will fell Very Comfortable With Courslab.</p>
                </div>
            </div>

            <div className='flex flex-row items-center gap-3 my-5 ' >
               <div className='min-w-[60px] min-h-[60px] bg-[#4D2C5E] rounded-[13px] flex items-center justify-center ' >
               <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734957940/jigsaw_1_e2zgzq.png" alt="" className='w-[30px] ' />
               </div>
                <div>
                    <h3 className='text-[#050C26] font-[500] text-[1.2rem] m-0'>Fun learning expe</h3>
                    <p className='text-[#8A8A8A] font-[500] text-[0.9rem] '>Learning Will fell Very Comfortable With Courslab.</p>
                </div>
            </div>

            </div>



        </div>
    </div>
  )
}

export default LearningExperience