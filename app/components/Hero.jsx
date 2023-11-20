import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-8 md:pb-14 md:flex-row flex-col items-center gap-6">
    <div class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-5xl text-3xl mb-4 font-semibold text-gray-900"><span className='text-yellow-500'>FREE LEGAL</span> ADVICE
        <br class="hidden lg:inline-block"/>JUST A <span className='text-yellow-500'>FEW CLICKS</span>
        <br class="hidden lg:inline-block"/>AWAY
      </h1>
      <p class="mb-8 text-base sm:text-2xl leading-relaxed">Call us now or drop your query on WhatsApp!</p>

      <div className='flex flex-col md:flex-row justify-center lg:justify-start md:items-start mt-6 md:mt-10 mb-12 gap-4 md:gap-0 text-gray-600 font-semibold'>
          <div className='flex flex-col md:w-[35%] justify-center items-center gap-4'>
            <img src="/call.svg" className='w-[15%] md:w-[20%]' alt="hey" />
            <p className='text-center'>30-mins Call with <br /> our Lawyers</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <img src="/hourglass.png" className='w-[15%] md:w-[20%]' alt="hey" />
            <p className='text-center'>Solution <br /> in 24hrs</p>
          </div>
          <div className='flex flex-col justify-center relative z-[1] items-center gap-4'>
            <img src="/eye.png" className='w-[15%] md:w-[20%]' alt="hey" />
            <p className='text-center'>100% <br /> Confidential</p>
          </div>
        </div>

      <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 justify-center md:justify-start w-full">
        <a target='_blank' href="https://wa.me/+919818365369" className="rounded-xl wa-btn flex gap-2 justify-around items-center text-white border-0 py-2 px-6 text-[0.8rem] sm:text-base">
          <img src="/WhatsApp.png" className='' height="40" width="40" alt="" />
          <button>Connect on WhatsApp!</button>
        </a>
        
        <a href="tel:+919818365369" class="sm:ml-4 rounded-xl tele-btn flex justify-around items-center text-white border-0 py-2 px-6 sm:text-base">
          <img src="/tele.svg" className='' height="40" width="40" alt="" />
          <button>Call Now!</button>
        </a>
        
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full">
      <img class="object-cover object-center rounded" alt="hero" src="/2.png"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
