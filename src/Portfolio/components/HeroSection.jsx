import { useEffect, useState } from "react";
import { AnimatedBackground } from "animated-backgrounds";
import { profileData } from "../data/profileData";

export function HeroSection({ scrollToSection }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect window size
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind 'lg' breakpoint
    };
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div> */}
      {/* Contained Animated Background */}
      {/* <div className="absolute inset-0 z-0">
        <AnimatedBackground
          animationName="starryNight"
          blendMode="difference"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </div> */}

      {isDesktop ? (
        // 🌌 Desktop: Starry background
        <AnimatedBackground
          animationName="particleNetwork"
          blendMode="difference"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      ) : (
        // 📱 Mobile / tablet: Gradient with floating dots
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 opacity-25">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
          {profileData[0].name}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-8 font-light">
          {profileData[0].role}
        </p>
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          {profileData[0].bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div> */}
      </div>
    </section>
  );
}
