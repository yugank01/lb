import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font bg-[#191829]">
        <div class="container px-5 pb-8 mx-auto">
          <div class="grid md:grid-cols-2 gap-6 md:gap-[6rem] md:text-left text-center mb-10 mx-4">
            <div>
              <img src="/law-logo.png" alt="" />
              <div>
                <p className='md:text-[1.4rem] text-white'>
                <span className='font-bold text-[1.15rem] md:text-[1.5rem]'>Disclaimer:</span> This website is informational in nature and is not a substitute for professional legal consultation. <span className='font-bold text-[1.15rem] md:text-[1.5rem]'>Lawbriefcase</span> takes no liability for any loss caused to you by the use of this website or the information provided on this website. Kindly, read the <a href='/terms' className='font-bold text-[1.15rem] md:text-[1.5rem]'>Terms and Conditions</a> and <a href='/privacy' className='font-bold text-[1.15rem] md:text-[1.5rem]'>Privacy Policy</a> of the website.
                </p>
              </div>
            </div>

            <div className='flex flex-col text-white pt-16'>
              <h2 className='text-lg md:text-3xl font-semibold mb-4'>Newsletter</h2>

              <p className='text-lg md:text-2xl mb-4'>Want to know your way around law without a lawyer?</p>

              <br />

              <p className='text-lg md:text-2xl mb-4'>Subscribe to our Lawbriefcase to know the secrets no other lawyer would ever tell you.</p>

              <div className='flex justify-center md:justify-start items-center w-full'>
              <div class="w-[85%] bg-gray-100 rounded-lg p-8 flex flex-col mt-4">
                <div class="relative mb-4">
                  <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <a class="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg text-center" href="https://docs.google.com/forms/d/e/1FAIpQLSerbleJ7p8JMMstMJU6YhHlXZJSbLYgAgOxBG7rjBMFt9xSLQ/viewform">Submit</a>
              </div>
              </div>
            </div>
          </div>
        </div>
  {/* <div class="border-t border-gray-200">
    <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Button</button>
        <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
          <br class="lg:block hidden"/>waistcoat green juice
        </p>
      </div>
      <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div> */}
  {/* <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
      </p>
      <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div> */}
      </footer>
    </div>
  )
}

export default Footer
