import React from "react";
import "animate.css";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-20 bg-gradient-to-r from-indigo-950 to-purple-950 h-screen">
        <h1 className="text-7xl font-semibold text-center text-white pt-20 pb-10">
          Transform Speech to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c084fc]">
            Smart Summaries
          </span>
        </h1>
        <p className="text-[#d1d5db] text-xl px-72 text-center pb-10">
          Get instant transcripts and intelligent summaries from your recordings
          with our AI-powered space-age technology
        </p>
        <div className="flex items-center pb-16">
          <button className="bg-gradient-to-r from-[#4f46e5] to-[#9333ea] text-white py-4 px-10 rounded-full text-lg font-semibold mr-10">
            Start Recording
          </button>
          <button className="border-2 py-4 px-10 border-[#818cf8] rounded-full text-white text-lg font-semibold">
            Upload Audio
          </button>
        </div>
        {/* Black box recording */}
        <div className="backdrop-blur-[24px] bg-[rgba(38,38,38,0.5)] border border-[rgb(64,64,64)] text-white w-2/3 flex items-center justify-between p-8 rounded-2xl">
          <div className="flex">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center rounded-full bg-[#4f46e5] w-12 h-12">
                <div className="flex items-center rounded-full bg-[#ef4444] w-4 h-4"></div>
              </div>
            </div>
            <div className="flex flex-col pl-4">
              <p className="text-base font-semibold">Ready to Record</p>
              <p className="text-[#9ca3af]">Click to start</p>
            </div>
          </div>
          <div>
            <select
              name="length"
              id="length"
              className="py-2 px-4 bg-[#404040] rounded-lg mr-4 border-r-8 border-transparent"
            >
              <option value="Short">Short Summary</option>
              <option value="Medium">Medium Summary</option>
              <option value="Long">Long Summary</option>
            </select>
            <select
              name="format"
              id="format"
              className="py-2 px-4 bg-[#404040] rounded-lg mr-4 border-r-8 border-transparent"
            >
              <option value="paragraph">Paragraph</option>
              <option value="bullets" selected>
                Bullets Points
              </option>
            </select>
          </div>
        </div>
      </div>
      {/* Section two */}
      <div className="bg-[#262626] text-white flex flex-col items-center pt-24 pb-7">
        <h2 className="text-4xl font-bold pb-3">Stellar Features</h2>
        <p className="text-[#9ca3af]">
          Experience the future of audio transcription with our space-age
          technology
        </p>
        <div className="flex flex-wrap mx-28 my-16 justify-between gap-10">
          <div className="border border-[#525252] p-7 rounded-2xl backdrop-blur-xl bg-[rgba(64,64,64,0.5)] w-[370px]">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                ></path>
              </svg>
            </div>
            <p className="text-xl font-semibold pb-2">
              Real-time Transcription
            </p>
            <p className="text-[#9ca3af] text-lg">
              Instant speech-to-text conversion with stellar accuracy and
              minimal delay
            </p>
          </div>
          <div className="border border-[#525252] p-7 rounded-2xl backdrop-blur-xl bg-[rgba(64,64,64,0.5)] w-[370px]">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <p className="text-xl font-semibold pb-2">Smart Summaries</p>
            <p className="text-[#9ca3af] text-base">
              AI-powered summaries in multiple formats and lengths to suit your
              needs
            </p>
          </div>
          <div className="border border-[#525252] p-7 rounded-2xl backdrop-blur-xl bg-[rgba(64,64,64,0.5)] w-[370px]">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <p className="text-xl font-semibold pb-2">Multiple Formats</p>
            <p className="text-[#9ca3af] text-base">
              Export in bullet points, paragraphs, or key highlights with custom
              formatting
            </p>
          </div>
          <div className="border border-[#525252] p-7 rounded-2xl backdrop-blur-xl bg-[rgba(64,64,64,0.5)] w-[370px]">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
            </div>
            <p className="text-xl font-semibold pb-2">Cloud Storage</p>
            <p className="text-[#9ca3af] text-base">
              Secure storage of all your transcripts and summaries in our
              orbital cloud
            </p>
            {/* <p className="text-[#9ca3af] text-base">
              End-to-end encryption and strict privacy policies to keep your
              data safe
            </p> */}
          </div>
          <div className="border border-[#525252] p-7 rounded-2xl backdrop-blur-xl bg-[rgba(64,64,64,0.5)] w-[370px]">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <p className="text-xl font-semibold pb-2">Advanced Security</p>
            <p className="text-[#9ca3af] text-base">
              Enterprise-grade encryption and privacy protection for your data
            </p>
          </div>
          <div className="border border-[#525252] p-7 rounded-2xl backdrop-blur-xl bg-[rgba(64,64,64,0.5)] w-[370px]">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
            </div>
            <p className="text-xl font-semibold pb-2">Auto Sync</p>
            <p className="text-[#9ca3af] text-base">
              Seamless synchronization across all your devices in real-time
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="bg-[#171717] p-28">
        <div className="bg-[rgba(38,38,38,0.5)] backdrop-blur-xl rounded-3xl border border-neutral-700 p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Recording Controls */}
            <div className="lg:w-1/3">
              <div className="bg-neutral-700/50 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      id="recordButton"
                      className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all"
                    >
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p
                        className="text-white font-semibold"
                        id="recordingStatus"
                      >
                        Ready to Record
                      </p>
                      <p className="text-gray-400 text-sm" id="recordingTime">
                        00:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <select className="w-full bg-neutral-600 text-white px-4 py-3 rounded-lg border border-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Short Summary (2-3 mins)</option>
                    <option>Medium Summary (5-7 mins)</option>
                    <option>Detailed Summary (10+ mins)</option>
                  </select>

                  <select className="w-full bg-neutral-600 text-white px-4 py-3 rounded-lg border border-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Bullet Points</option>
                    <option>Paragraph Format</option>
                    <option>Key Highlights</option>
                    <option>Executive Summary</option>
                  </select>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all">
                      Save
                    </button>
                    <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all">
                      Export
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-700/50 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Audio Enhancement
                </h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-between text-gray-300">
                    Noise Reduction
                    <input type="range" className="w-32 accent-indigo-600" />
                  </label>
                  <label className="flex items-center justify-between text-gray-300">
                    Voice Enhancement
                    <input type="range" className="w-32 accent-indigo-600" />
                  </label>
                  <label className="flex items-center justify-between text-gray-300">
                    Echo Cancellation
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-indigo-600"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Live Transcription */}
            <div className="lg:w-2/3 space-y-6">
              <div
                className="bg-neutral-700/50 rounded-2xl p-6 h-[400px] overflow-y-auto"
                id="liveTranscript"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-green-500 text-sm">Live Transcription</p>
                </div>
                <div id="transcriptContent" className="text-gray-300 space-y-4">
                  <p className="typing-animation">
                    Start recording to see live transcription...
                  </p>
                </div>
              </div>

              <div className="bg-neutral-700/50 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Summary Preview
                </h3>
                <div id="summaryContent" className="text-gray-300">
                  Your summary will appear here after processing...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}

      <section
        id="summaryOptions"
        className="bg-neutral-800 py-24 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
              Customize Your Summary
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto animate__animated animate__fadeInUp">
              Tailor your transcript summary exactly how you need it
            </p>
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
                    id="lengthSlider"
                  />
                  <div className="flex justify-between text-gray-400 text-sm mt-2">
                    <span>Concise</span>
                    <span>Detailed</span>
                  </div>
                </div>

                <div className="p-4 bg-neutral-800/50 rounded-xl">
                  <label className="block text-white mb-2">
                    Word Count Target
                  </label>
                  <select className="w-full bg-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>100-200 words</option>
                    <option>200-500 words</option>
                    <option>500-1000 words</option>
                    <option>1000+ words</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Advanced Options */}
            <div className="lg:col-span-2 bg-neutral-700/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-600 animate__animated animate__fadeInUp">
              <h3 className="text-2xl font-bold text-white mb-6">
                Advanced Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <label className="text-white">Key Phrases Highlight</label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <label className="text-white">Action Items Extract</label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <label className="text-white">Sentiment Analysis</label>
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

      {/* Rough */}

      <section
        id="howItWorks"
        className="bg-neutral-900 py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto animate__animated animate__fadeInUp">
              Experience the future of audio transcription in three simple steps
            </p>
          </div>

          <div className="relative">
            {/* Timeline Connection */}
            <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
              {/* Step 1 */}
              <div className="relative bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700 transform hover:scale-105 transition-all animate__animated animate__fadeInLeft">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-neutral-900">
                  <span className="text-white font-bold">1</span>
                </div>

                <div className="mt-8 text-center">
                  <div className="w-20 h-20 mx-auto bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Record Audio
                  </h3>
                  <p className="text-gray-400">
                    Start recording your audio with crystal-clear quality using
                    our space-age recording technology
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="relative bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700 transform hover:scale-105 transition-all animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center border-4 border-neutral-900">
                  <span className="text-white font-bold">2</span>
                </div>

                <div className="mt-8 text-center">
                  <div className="w-20 h-20 mx-auto bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    AI Processing
                  </h3>
                  <p className="text-gray-400">
                    Our advanced AI processes your audio in real-time,
                    converting speech to text with stellar accuracy
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="relative bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700 transform hover:scale-105 transition-all animate__animated animate__fadeInRight"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-neutral-900">
                  <span className="text-white font-bold">3</span>
                </div>

                <div className="mt-8 text-center">
                  <div className="w-20 h-20 mx-auto bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-indigo-400"
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
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Get Summary
                  </h3>
                  <p className="text-gray-400">
                    Receive your customized summary in your preferred format and
                    length instantly
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 bg-neutral-800/30 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700 animate__animated animate__fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">
                  99%
                </div>
                <p className="text-gray-400">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  Real-time
                </div>
                <p className="text-gray-400">Processing Speed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">
                  40+
                </div>
                <p className="text-gray-400">Languages Supported</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stellar Pricing Plans */}

      <section
        id="pricing"
        className="bg-neutral-800 py-24 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
              Stellar Pricing Plans
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto animate__animated animate__fadeInUp">
              Choose the perfect plan for your transcription needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-neutral-700/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-600 transform hover:scale-105 transition-all animate__animated animate__fadeInLeft">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Orbital Basic
                </h3>
                <div className="text-4xl font-bold text-white mb-4">
                  $9<span className="text-lg text-gray-400">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  5 Hours Monthly Recording
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Basic Summaries
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  2 Export Formats
                </li>
              </ul>

              <button className="w-full py-3 px-6 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-neutral-700/50 to-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500 transform hover:scale-105 transition-all animate__animated animate__fadeInUp relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Galactic Pro
                </h3>
                <div className="text-4xl font-bold text-white mb-4">
                  $29<span className="text-lg text-gray-400">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-purple-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  20 Hours Monthly Recording
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-purple-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Advanced AI Summaries
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-purple-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  All Export Formats
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-purple-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Priority Processing
                </li>
              </ul>

              <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-neutral-700/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-600 transform hover:scale-105 transition-all animate__animated animate__fadeInRight">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-white mb-4">Custom</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited Recording
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Custom AI Models
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  API Access
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 Support
                </li>
              </ul>

              <button className="w-full py-3 px-6 rounded-xl bg-neutral-600 text-white font-semibold hover:bg-neutral-700 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Cosmic Reviews */}

      <section
        id="testimonials"
        className="bg-neutral-900 py-24 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
              Cosmic Reviews
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto animate__animated animate__fadeInUp">
              See what our galactic users have to say
            </p>
          </div>

          <div className="testimonial-slider relative">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {/* Testimonial 1 */}
                <div className="swiper-slide">
                  <div className="bg-neutral-800/50 backdrop-blur-xl p-8 rounded-2xl border border-neutral-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">JD</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">John Doe</h4>
                        <p className="text-gray-400">Content Creator</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex gap-1">
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      "This transcription service is out of this world! The AI
                      summaries are incredibly accurate and save me hours of
                      work."
                    </p>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="swiper-slide">
                  <div className="bg-neutral-800/50 backdrop-blur-xl p-8 rounded-2xl border border-neutral-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">SJ</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          Sarah Johnson
                        </h4>
                        <p className="text-gray-400">Researcher</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex gap-1">
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      "The customizable summary options are fantastic. I can get
                      exactly the format I need for my research papers."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700 focus:outline-none"
              id="prev"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700 focus:outline-none"
              id="next"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-neutral-900 pt-24 pb-12 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="animate__animated animate__fadeInUp">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-white">CaptureAI</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Transforming audio into intelligent insights with space-age
                technology
              </p>
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Features
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Live Transcription
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI Summaries
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Export Options
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API Access
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Stay Updated
              </h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 CaptureAI. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
                <a href="/" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </a>
                <a href="/" className="text-gray-400 hover:text-white text-sm">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
      </footer>

      {/* Rough */}

      <section
        id="hero"
        class="bg-neutral-900 min-h-screen pt-16 relative overflow-hidden"
      >
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate__animated animate__fadeIn"></div>
          <div class="absolute h-56 w-56 top-20 left-20 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div class="absolute h-64 w-64 bottom-20 right-20 rounded-full bg-purple-600/20 blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="flex flex-col items-center justify-center pt-20 pb-16 text-center">
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 animate__animated animate__fadeInDown">
              Transform Speech to{" "}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Smart Summaries
              </span>
            </h1>

            <p class="text-xl text-gray-300 mb-12 max-w-2xl animate__animated animate__fadeInUp">
              Get instant transcripts and intelligent summaries from your
              recordings with our AI-powered space-age technology
            </p>

            <div class="flex flex-col sm:flex-row gap-6 mb-16 animate__animated animate__fadeInUp">
              <button class="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transform hover:scale-105 transition-all">
                Start Recording
              </button>
              <button class="px-8 py-4 rounded-full border-2 border-indigo-400 text-white font-semibold text-lg hover:bg-indigo-600/20 transform hover:scale-105 transition-all">
                Upload Audio
              </button>
            </div>

            <div class="w-full max-w-4xl p-8 bg-neutral-800/50 backdrop-blur-xl rounded-2xl border border-neutral-700 animate__animated animate__fadeInUp">
              <div class="flex flex-col sm:flex-row items-center gap-6 justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                    <div class="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <div class="text-left">
                    <p class="text-white font-semibold">Ready to Record</p>
                    <p class="text-gray-400 text-sm">Click to start</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <select class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                    <option>Short Summary</option>
                    <option>Detailed Summary</option>
                    <option>Full Transcript</option>
                  </select>
                  <select class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                    <option>Bullet Points</option>
                    <option>Paragraphs</option>
                    <option>Key Points</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements Animation */}
        <div class="absolute inset-0 pointer-events-none">
          <div class="stars-container">
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "93.9341%",
                top: "48.7537%",
                animation:
                  "3.35641s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "90.8252%",
                top: "70.0126%",
                animation:
                  "5.92542s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "44.1533%",
                top: "76.3846%",
                animation:
                  "3.70954s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "42.2989%",
                top: "90.0518%",
                animation:
                  "6.56555s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "88.225%",
                top: "79.1834%",
                animation:
                  "6.81164s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "25.99%",
                top: "91.2758%",
                animation:
                  "6.45174s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "87.816%",
                top: "19.6422%",
                animation:
                  "4.25833s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "18.9155%",
                top: "58.9202%",
                animation: "3.2541s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "72.652%",
                top: "28.0435%",
                animation:
                  "3.32106s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "12.7839%",
                top: "25.6389%",
                animation:
                  "6.90237s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "38.1424%",
                top: "70.164%",
                animation:
                  "4.51038s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "53.6499%",
                top: "69.2778%",
                animation:
                  "5.05652s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "39.3824%",
                top: "0.406801%",
                animation:
                  "4.25649s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "25.4841%",
                top: "28.9379%",
                animation:
                  "4.84014s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "73.8185%",
                top: "7.7358%",
                animation:
                  "3.19464s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "55.3024%",
                top: "93.5072%",
                animation:
                  "4.39408s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "60.1079%",
                top: "44.1574%",
                animation:
                  "5.27588s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "79.263%",
                top: "1.68041%",
                animation:
                  "4.39194s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "48.9801%",
                top: "69.6304%",
                animation:
                  "5.78759s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "14.0157%",
                top: "48.9844%",
                animation:
                  "5.75996s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "29.3168%",
                top: "91.5202%",
                animation:
                  "6.10092s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "69.8153%",
                top: "72.5369%",
                animation:
                  "4.36461s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "97.5096%",
                top: "3.03847%",
                animation:
                  "3.86313s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "31.9956%",
                top: "27.3451%",
                animation:
                  "4.17606s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "22.0056%",
                top: "99.3046%",
                animation:
                  "3.98385s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "7.86327%",
                top: "39.1622%",
                animation:
                  "4.14368s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "40.3558%",
                top: "88.0926%",
                animation:
                  "4.82755s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "80.7404%",
                top: "47.8123%",
                animation:
                  "3.29088s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "19.7992%",
                top: "40.8642%",
                animation:
                  "5.75749s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "95.4078%",
                top: "35.9304%",
                animation:
                  "6.56091s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "61.1719%",
                top: "74.6384%",
                animation:
                  "4.63355s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "40.8792%",
                top: "88.4301%",
                animation:
                  "5.29213s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "45.9383%",
                top: "66.1435%",
                animation:
                  "5.15644s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "29.042%",
                top: "47.8076%",
                animation:
                  "6.38167s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "30.9016%",
                top: "64.7915%",
                animation:
                  "3.83134s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "21.3774%",
                top: "6.52886%",
                animation: "6.0645s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "37.4911%",
                top: "66.6338%",
                animation:
                  "5.38014s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "9.00283%",
                top: "48.6819%",
                animation: "3.7795s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "31.262%",
                top: "15.6365%",
                animation:
                  "4.75817s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "65.6837%",
                top: "18.876%",
                animation:
                  "6.15359s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "99.7898%",
                top: "15.646%",
                animation:
                  "4.00529s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "56.736%",
                top: "51.2088%",
                animation:
                  "4.13536s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "58.1625%",
                top: "56.3349%",
                animation:
                  "3.11411s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "23.7347%",
                top: "83.2461%",
                animation:
                  "4.23462s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "65.966%",
                top: "48.9022%",
                animation:
                  "4.90033s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "82.7795%",
                top: "39.2983%",
                animation:
                  "6.84405s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "76.1516%",
                top: "19.3176%",
                animation:
                  "4.33326s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "96.068%",
                top: "93.2845%",
                animation:
                  "5.61286s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "64.364%",
                top: "87.6816%",
                animation:
                  "4.24624s ease 0s infinite normal none running float",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                left: "24.2689%",
                top: "5.69715%",
                animation: "5.0503s ease 0s infinite normal none running float",
              }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
