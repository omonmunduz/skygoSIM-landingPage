import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Features = () => {
    return(
        <>
            <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">A contactless solution</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yellow-500 sm:text-4xl">
            No tools required
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            No tools required, no physical SIM to manage When you're traveling, the last thing you need to worry about is where you left your SIM card.
Keep your carrier SIM in place, leave your tools at home, and roam freely with your Dual SIM device.
            </p>
          </div>
      
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">One world. One SIM. One operator</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                With SkyGo Global SIM, you can travel without roaming fees or changing SIM cards. This is What the future of mobile looks like. There is no contract required, just purchase the package plan you need and you are ready to go.
                </dd>
              </div>
      
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">No packaging or waste</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                eSIM aren't just easier -- they're greener too! Everything is electronic, so you can travel light and leave no trace.
                </dd>
              </div>
      
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">The future is digital!</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                No more long contracts, no more expensive roaming fees. 150+ countries included. Install the digital SkyGo e-SIM for only $1 to get started.
                </dd>
              </div>
              
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Customer service</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                No matter what is the issue we got you covered.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <StaticImage
      src="../images/desk.png"
      width={800}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
      </div>
        </>
    )
};
export default Features;