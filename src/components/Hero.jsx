

// with simple animation 

import { useState, useEffect } from "react";

function Hero() {
  // 1. Array of mouth-watering ice cream images
  const images = [
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=600&auto=format&fit=crop"
  ];

  // 2. State to track the active image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Effect hook to auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up the timer on unmount
  }, [images.length]);

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-73px)] bg-gradient-to-br from-pink-50 via-red-50 to-amber-50 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content (Stays constant) */}
        <div className="space-y-6 text-center md:text-left">
          <span className="bg-pink-100 text-pink-600 text-sm font-semibold px-3 py-1 rounded-full">
            New Summer Flavors Out Now!
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-800 leading-tight">
            Happiness is a scoop of <span className="text-pink-500">Pure Bliss</span>.
          </h1>
          <p className="text-gray-600 text-lg">
            Handcrafted with organic ingredients, love, and a sprinkle of magic. Discover the creamiest treats in town.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#products" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-1">
              Explore Flavors
            </a>
            <a href="#about" className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-xl shadow-sm border border-gray-200 transition-all">
              Our Story
            </a>
          </div>
        </div>

        {/* Right Image Container with Sliding/Fade Animation */}
        <div className="flex justify-center">
          <div className="relative rounded-3xl shadow-2xl h-[450px] w-full max-w-md overflow-hidden bg-gray-100">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Delicious ice cream slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                } transition-transform duration-1000`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;

// function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-[calc(100vh-73px)] bg-gradient-to-br from-pink-50 via-red-50 to-amber-50 flex items-center"
//     >
//       <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div className="space-y-6 text-center md:text-left">
//           <span className="bg-pink-100 text-pink-600 text-sm font-semibold px-3 py-1 rounded-full">
//             New Summer Flavors Out Now!
//           </span>
//           <h1 className="text-5xl md:text-6xl font-black text-gray-800 leading-tight">
//             Happiness is a scoop of <span className="text-pink-500">Pure Bliss</span>.
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Handcrafted with organic ingredients, love, and a sprinkle of magic. Discover the creamiest treats in town.
//           </p>
//           <div className="flex gap-4 justify-center md:justify-start">
//             <a href="#products" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-1">
//               Explore Flavors
//             </a>
//             <a href="#about" className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-xl shadow-sm border border-gray-200 transition-all">
//               Our Story
//             </a>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center">
//           <img 
//             src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600&auto=format&fit=crop" 
//             alt="Delicious ice cream cones" 
//             className="rounded-3xl shadow-2xl object-cover h-[450px] w-full max-w-md transform hover:rotate-1 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

// function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen border flex items-center justify-center"
//     >

//       <div>

//         <h1 className="text-5xl font-bold">

//           Hero Section

//         </h1>

//       </div>

//     </section>
//   );
// }

// export default Hero;