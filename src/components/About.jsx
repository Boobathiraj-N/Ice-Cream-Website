
function About() {
  return (
    <section id="about" className="py-20 bg-amber-50/50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop" 
            alt="Making ice cream" 
            className="rounded-3xl shadow-xl h-[400px] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg hidden lg:block max-w-[200px] border">
            <p className="text-3xl font-bold text-amber-500">100%</p>
            <p className="text-xs text-gray-500 font-medium mt-1">Natural & Organic Ingredients Used</p>
          </div>
        </div>

        {/* Right Side Copy */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-gray-800">Crafting Joy Since 2018</h2>
          <p className="text-gray-600 leading-relaxed">
            What started as a tiny kitchen experiment has blossomed into a neighborhood staple. We believe that ice cream isn't just a dessert—it's an experience that brings families, friends, and sweet tooths together.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every batch we freeze is closely monitored for taste and consistency. We partner exclusively with local dairy farms to ensure that you get nothing but pure, unadulterated goodness in every scoop.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;


// function About() {
//   return (
//     <section
//       id="about"
//       className="min-h-screen border p-10"
//     >

//       <h1 className="text-4xl font-bold mb-10">

//         About

//       </h1>

//       <div className="border h-96">

//       </div>

//     </section>
//   );
// }

// export default About;