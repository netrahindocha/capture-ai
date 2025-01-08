import React from "react";

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
      <div>
        <h2>Stellar Features</h2>
        <p>
          Experience the future of audio transcription with our space-age
          technology
        </p>
        <div className="flex">
          <div>
            <p>Real-time Transcription</p>
            <p>
              Instant speech-to-text conversion with stellar accuracy and
              minimal delay
            </p>
          </div>
          <div>
            <p>Smart Summaries</p>
            <p>
              AI-powered summaries in multiple formats and lengths to suit your
              needs
            </p>
          </div>
          <div>
            <p>Multiple Formats</p>
            <p>
              Export in bullet points, paragraphs, or key highlights with custom
              formatting
            </p>
          </div>
          <div>
            <p>Cloud Storage</p>
            <p>
              Secure storage of all your transcripts and summaries in our
              orbital cloud
            </p>
            <p>
              End-to-end encryption and strict privacy policies to keep your
              data safe
            </p>
          </div>
          <div>
            <p>Advanced Security</p>
            <p>
              Enterprise-grade encryption and privacy protection for your data
            </p>
          </div>
          <div>
            <p>Auto Sync</p>
            <p>Seamless synchronization across all your devices in real-time</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <div>
            <p>Ready to Record</p>
            <p>00:00</p>
            <select name="length" id="length">
              <option value="Short">Short</option>
              <option value="Medium">Medium</option>
              <option value="Long">Long</option>
            </select>
            <select name="format" id="format">
              <option value="paragraph">Paragraph</option>
              <option value="bullets">Bullets</option>
            </select>
            <button>Save</button>
            <button>Export</button>
          </div>
          <div>
            <p>Audio Enhancement</p>
            <p>Noise Reduction</p>
            <p>Voice Enhancement</p>
            <p>Echo Cancellation</p>
          </div>
        </div>
        <div className="flex flex-col">
          <textarea
            name="live"
            id="live"
            placeholder="Start recording to see live transcription..."
          >
            <span>Live Transcription</span>
          </textarea>
          <div>
            <p>Summary Preview</p>
            <p>Your summary will appear here after processing...</p>
          </div>
        </div>
      </div>
      <div id="customizeyoursummary" className="">
        <h2>Customize Your Summary</h2>
        <p>Tailor your transcript summary exactly how you need it</p>
      </div>
      <div className="flex flex-col">
        <div>
          <h3>Format Selection</h3>
          <div>
            <p>Bullet Points</p>
            <p>Clear, concise key points</p>
          </div>
          <div>
            <p>Paragraph Format</p>
            <p>Flowing, narrative style</p>
          </div>
          <div>
            <p>Chapter Style</p>
            <p>Organized by topics</p>
          </div>
        </div>
        <div>
          <h3>Length Preference</h3>
          <div>
            <p>Summary Length</p>
            <p>Concise</p>
            <p>Detailed</p>
          </div>
          <div>
            <p>Word Count Target</p>
            <p>100-200 words</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Advanced Features</h3>
        <input type="checkbox" /> Key Phrases Highlight
        <input type="checkbox" /> Action Items Extract
        <input type="checkbox" /> Sentiment Analysis
      </div>
      {/* How it works */}
      <div>
        <h3>How It Works</h3>
        <p>
          Experience the future of audio transcription in three simple steps
        </p>
        <div className="flex">
          <div id="1">
            <p>Record Audio</p>
            <p>
              Start recording your audio with crystal-clear quality using our
              space-age recording technology
            </p>
          </div>
          <div>
            <p>AI Processing</p>
            <p>
              Our advanced AI processes your audio in real-time, converting
              speech to text with stellar accuracy
            </p>
          </div>
          <div>
            <p>Get Summary</p>
            <p>
              Receive your customized summary in your preferred format and
              length instantly
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <p>99%</p>
            <p>Accuracy Rate</p>
          </div>
          <div>
            <p>Real-time</p>
            <p>Processing Speed</p>
          </div>
          <div>
            <p>40+</p>
            <p>Languages Supported</p>
          </div>
        </div>
      </div>
      {/* Stellar Pricing Plans */}
      <div>
        <h3>Stellar Pricing Plans</h3>
        <p>Choose the perfect plan for your transcription needs</p>
        <div className="flex">
          {/* First Option */}
          <div>
            <p>Orbital Basic</p>
            <p>
              $9<span>/mo</span>
            </p>
            <div>
              <p>5 Hours Monthly Recording</p>
              <p>Basic Summaries</p>
              <p>2 Export Formats</p>
            </div>
            <button>Get Started</button>
          </div>
          {/* Second Option */}
          <div id="Most Popular">
            <p>Galactic Pro</p>
            <p>
              $29<span>/mo</span>
            </p>
            <div>
              <p>20 Hours Monthly Recording</p>
              <p>Advanced AI Summaries</p>
              <p>All Export Formats</p>
              <p>Priority Processing</p>
            </div>
            <button>Get Started</button>
          </div>
          {/* Third Option */}
          <div>
            <p>Enterprise</p>
            <p>Custom</p>
            <div>
              <p>Unlimited Recording</p>
              <p>Custom AI Models</p>
              <p>API Access</p>
              <p>24/7 Support</p>
            </div>
            <button>Contact Sales</button>
          </div>
        </div>
      </div>
      {/* Cosmic Reviews */}
      <div>
        <h3>Cosmic Reviews</h3>
        <p>See what our galactic users have to say</p>
        <div className="flex-col">
          <div>
            <p>John Doe</p>
            <p>Content Creator</p>
            <p>5 Stars Icons</p>
            <p>
              "This transcription service is out of this world! The AI summaries
              are incredibly accurate and save me hours of work."
            </p>
          </div>
          <div>
            <p>Sarah Johnson</p>
            <p>Researcher</p>
            <p>5 Stars Icons</p>
            <p>
              "The customizable summary options are fantastic. I can get the
              exact format I need for my research papers."
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer>
        <div className="flex">
          {/* First section */}
          <div>
            <p>CaptureAI</p>
            <p>
              Transforming audio into intelligent insights with space-age
              technology
            </p>
            <p>All ICONS images</p>
          </div>
          {/* Second section */}
          <div>
            <p>Quick Links</p>
            <p>Home</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Contact</p>
          </div>
          {/* Third section */}
          <div>
            <p>Features</p>
            <p>Live Transcription</p>
            <p>AI Summaries</p>
            <p>Export Options</p>
            <p>API Access</p>
          </div>
          {/* Fourth section */}
          <div>
            <p>Stay Updated</p>
            <p>Subscribe to our newsletter for the latest updates</p>
            <input
              type="email"
              name="subscribe"
              id="subscribe"
              placeholder="Enter your email"
            />
            <button>Subscribe</button>
          </div>
        </div>
        <div>
          <div>
            <p>&copy; 2025 CaptureAI. All rights reserved.</p>
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Support</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
