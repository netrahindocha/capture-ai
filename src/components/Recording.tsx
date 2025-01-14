import React from "react";

const Recording = () => {
  return (
    <div>
      {/* Code */}

      {/* Second code */}

      <section
        id="summaryOptions"
        className="bg-neutral-800 py-24 relative overflow-hidden"
      >
        {/* First code audio control section */}

        <div className="flex flex-col items-center space-y-4">
          {/* Recording Status */}
          <div className="flex items-center space-x-2">
            <div className="animate-pulse w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-gray-300 font-medium">Recording Status</span>
          </div>

          {/* Recording Time */}
          <div className="flex items-center space-x-4 bg-gray-800 px-6 py-2 rounded-lg shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="font-mono text-xl text-blue-400">00:00:00</span>
          </div>
          {/* Audio Level Indicator */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse"></div>
          </div>
        </div>

        {/* Second code section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Audio Controls */}
          <div className="mb-8 flex justify-center space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3l14 9-14 9V3z"
                ></path>
              </svg>
              Start Recording
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              Stop
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v7h7M4 11l7-7m8 4v7h-7m7-7l-7 7"
                ></path>
              </svg>
              Reset
            </button>
          </div>

          {/* Transcript Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-neutral-700/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-600">
              <h3 className="text-xl font-bold text-white mb-4">
                Live Transcript
              </h3>
              <textarea
                className="w-full h-64 bg-neutral-800 text-white rounded-lg p-4 resize-none"
                placeholder="Live transcript will appear here..."
                readonly=""
              ></textarea>
            </div>
            <div className="bg-neutral-700/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-600">
              <h3 className="text-xl font-bold text-white mb-4">Summary</h3>
              <textarea
                className="w-full h-64 bg-neutral-800 text-white rounded-lg p-4 resize-none"
                placeholder="Summary will appear here..."
                readonly=""
              ></textarea>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-16">
            <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              Copy
            </button>
            <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              Export
            </button>
            <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                ></path>
              </svg>
              Save
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Format Options */}
            <div className="bg-neutral-700/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-600 animate__animated animate__fadeInLeft">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  ></path>
                </svg>
                Format Selection
              </h3>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-neutral-800/50 rounded-xl hover:bg-neutral-700/70 transition-all cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    id="bullet"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <label for="bullet" className="ml-4 text-white">
                    <span className="font-semibold block">Bullet Points</span>
                    <span className="text-gray-400 text-sm">
                      Clear, concise key points
                    </span>
                  </label>
                </div>

                <div className="flex items-center p-4 bg-neutral-800/50 rounded-xl hover:bg-neutral-700/70 transition-all cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    id="paragraph"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <label for="paragraph" className="ml-4 text-white">
                    <span className="font-semibold block">
                      Paragraph Format
                    </span>
                    <span className="text-gray-400 text-sm">
                      Flowing, narrative style
                    </span>
                  </label>
                </div>

                <div className="flex items-center p-4 bg-neutral-800/50 rounded-xl hover:bg-neutral-700/70 transition-all cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    id="chapters"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <label for="chapters" className="ml-4 text-white">
                    <span className="font-semibold block">Chapter Style</span>
                    <span className="text-gray-400 text-sm">
                      Organized by topics
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Length Options */}
            <div className="bg-neutral-700/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-600 animate__animated animate__fadeInRight">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Length Preference
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-neutral-800/50 rounded-xl">
                  <label className="block text-white mb-2">
                    Summary Length
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    className="w-full accent-purple-600"
                  />
                  <div className="flex justify-between text-gray-400 text-sm mt-2">
                    <span>Short</span>
                    <span>Medium</span>
                    <span>Long</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Recording;
