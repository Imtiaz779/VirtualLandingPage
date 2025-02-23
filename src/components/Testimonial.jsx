import React from 'react'
import {testimonials} from "../constant/index"

const Testimonial = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What people are saying</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial,index) => (
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                <div className='bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin w-80 h-100'>
                    <p>{testimonial.text}</p>
                    <div className='flex mt-8 items-start'>
                        <img className='w-12 h-12  mr-6 mt-5 rounded-full border border-neutral-800' src={testimonial.image} alt={testimonial.user} />
                    </div>
                    <div className='mt-2'>
                        <h6>{testimonial.user}</h6>
                        <span className='text-sm font-normal italic text-neutral-500'>{testimonial.company}</span>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
