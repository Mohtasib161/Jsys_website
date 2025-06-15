import React from 'react';

export default function CTASection() {
  return (
    <section className="container mx-auto relative z-10 overflow-hidden bg-[#ff7858] py-14 px-12 mt-20 rounded-lg ">
      <div className="">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="text-center lg:text-left" data-aos="fade-left">
              <div className="mb-10 lg:mb-0">
                <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white">
                  Start building automated serverless forms
                </h1>
                <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                  {/* You can add additional text here if necessary */}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2" data-aos="fade-right">
            <div className="text-center lg:text-right" >
              <a
                className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVGs */}
      <span className="absolute top-0 right-0 -z-10">
        <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.05"
            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
            fill="url(#paint0_linear_971_6910)"
          />
          <defs>
            <linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse">
              <stop offset="0.520507" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute top-0 right-0 -z-10">
        <svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.05"
            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
            fill="url(#paint0_linear_971_6911)"
          />
          <defs>
            <linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse">
              <stop offset="0.520507" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute top-4 left-4 -z-10">
        <svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            {Array(6)
              .fill(0)
              .map((_, row) =>
                Array(4)
                  .fill(0)
                  .map((_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={(col + 1) * 13.166 + 1.49642}
                      cy={(row + 1) * 13.166 + 1.49626}
                      r="1.49626"
                      transform="rotate(90)"
                      fill="white"
                    />
                  ))
              )}
          </g>
        </svg>
      </span>
    </section>
  );
}