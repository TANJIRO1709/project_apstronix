import React from 'react'

function Footer() {
  return (
    <div>
      <div className="w-full bg-gray-900 border-t border-gray-800 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
            {/* Technical and Sales Queries Column */}
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 flex items-center gap-2">
                {/* Phone Icon */}
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.5a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h4m-1 8h5a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                </svg>
                Technical & Sales Queries
              </h3>
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:text-blue-300 text-base sm:text-lg transition-colors duration-200"
              >
                7008717365 / 8847834048
              </a>
            </div>
            {/* Email Us Column shifted right and styled */}
            <div className="flex flex-col justify-center items-start sm:ml-12 border-l border-gray-700 pl-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 flex items-center gap-2">
                {/* Mail Icon */}
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12v2a4 4 0 01-4 4m0 0a4 4 0 01-4-4v-2a4 4 0 114 0zm0 6a6 6 0 100-12 6 6 0 000 12z" />
                </svg>
                Email Us
              </h3>
              <a
                href="mailto:purushotam.apstronics@gmail.com"
                className="text-blue-400 hover:text-blue-300 text-base sm:text-lg transition-colors duration-200"
              >
               purushotam.apstronics@gmail.com
              </a>
            </div>
          </div>
          {/* Footer Section */}
          <div className="border-t border-gray-700 pt-4 sm:pt-6 text-center">
            <p className="text-gray-300 text-base sm:text-lg">
              All Days: <span className="text-white font-medium">9:15 AM&nbsp;to&nbsp;6:15 PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
