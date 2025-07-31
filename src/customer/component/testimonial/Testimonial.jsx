import React from 'react'
import TestimonialCard from './TestimonialCard.jsx'

const Testimonial = () => {
  return (
    <div>
      <div className='text-large text-white font-700'>TESTIMONIALS</div>
      <div className='flex justify-center'><TestimonialCard/><TestimonialCard/><TestimonialCard/><TestimonialCard/></div>
    </div>
  )
}

export default Testimonial
