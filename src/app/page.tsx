import { TextGenerateEffect } from "~/components/ui/text-generate-effect"
import { ShimmerButton } from "~/components/magicui/shimmer-button";
export default function HulyHomepage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative bg-black min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-top">
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Navigation */}
        <nav className="relative z-50 px-6 py-4 bg-transparent">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo and Navigation Links */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex items-center">
                <div className="text-white text-xl font-bold flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-sm"></div>
                  </div>
                  Subbiy
                </div>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pricing
                </a>
                <div className="relative group">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-sm">
                    Resources
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-sm">
                    Community
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Download
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ShimmerButton className="min-w-[100px]">Sign In</ShimmerButton>
              <ShimmerButton className="min-w-[100px]">Get Started</ShimmerButton>
            </div>
          </div>
        </nav>

        <div className="relative z-10 px-6 pt-20 pb-40">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h1 className="relative z-30 max-w-[616px] font-semibold lg:max-w-[528px] md:max-w-[441px] sm:max-w-64 text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-2">
                <span className="text-white">Everything App for&nbsp;</span>
                <span className="bg-gradient-to-br from-white via-[#d5d8f6] to-[#fdf7fe] bg-clip-text text-transparent">
                  your teams
                </span>
              </h1>

              <div className="relative z-30">
                <TextGenerateEffect
                  words={[
                    "Subbiy, an all-in-one platform, replaces your billing system,",
                    <br key="br-1" />,
                    " retention tools, and client engagement stack."
                  ]}
                  className="font-noto-serif font-light text-sm leading-snug tracking-tight"
                  duration={0.8}
                />
              </div>

              <div className="mt-16">
              <ShimmerButton className="min-w-[400px]">Get Started</ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
