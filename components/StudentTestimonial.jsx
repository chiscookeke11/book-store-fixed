import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StudentTestimonial = () => {
  const testimonials = [
    {
      name: 'Finlay Kirk',
      role: 'Web Developer',
      image:
        'https://res.cloudinary.com/dwedz2laa/image/upload/v1734977983/Ellipse_34_h5nebs.png',
      text: 'Complete account of the system and expound the actual contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
    {
      name: 'Dannette P. Cervantes',
      role: 'Web Designer',
      image:
        'https://res.cloudinary.com/dwedz2laa/image/upload/v1734977983/Ellipse_35_uhpcxa.png',
      text: 'Complete account of the system and expound the actual contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
    {
      name: 'Clara R. Altman',
      role: 'UI&UX Designer',
      image:
        'https://res.cloudinary.com/dwedz2laa/image/upload/v1734977983/Ellipse_36_tu6b2i.png',
      text: 'Complete account of the system and expound the actual contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
    {
      name: 'Okeke Chinedu E.',
      role: 'Frontend Web Developer',
      image:
        'https://res.cloudinary.com/dwedz2laa/image/upload/v1734977983/Ellipse_36_tu6b2i.png',
      text: 'Complete account of the system and expound the actual contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
  ];

  return (
    <div className="mt-24 w-full p-3 flex flex-col items-center justify-start relative min-h-[74vh] overflow-hidden">
      <h1 className="text-black font-semibold text-2xl font-Jost text-center">
        What student’s say
      </h1>
      <p className="text-gray-500 text-base font-medium text-center font-Poppins ">
        Lorem Ipsum is simply dummy text of the printing.
      </p>

      <div className="testimonial-wrapper w-full flex flex-col items-center justify-center my-0  font-Roboto ">
        
        <Swiper
          className="max-w-[1100px] flex items-center justify-center"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
          onSlideChange={() => console.log('Slide changed')}
          onInit={(swiper) => {
            swiper.pagination.init();
            swiper.pagination.update();
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="px-5 py-9 flex items-center justify-center"
            >
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        
        <div className="custom-pagination mt-2 flex items-center justify-center"></div>
      </div>

     
      <div className="blur-oval left-[-60%]"></div>
      <div className="blur-oval right-[-60%]"></div>
      <img
        src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734976667/planet_kebmxn.svg"
        alt=""
        className="absolute top-[50%] transform -translate-y-1/2 right-0 w-20 sm:w-20 md:w-24 lg:w-32 z-[-1]"
      />
      <img
        src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734976660/curly-down-arrow_f4o3m0.svg"
        alt=""
        className="absolute top-[50%] transform -translate-y-1/2 left-0 w-20 sm:w-20 md:w-24 lg:w-32 z-[-1]"
      />
    </div>
  );
};

export default StudentTestimonial;
