


function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-800 mb-4">Say Hello!</h2>
          <p className="text-gray-500 max-w-md mx-auto">Have a catering request or just want to tell us your favorite flavor? Drop a line.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Quick Info Column */}
          <div className="space-y-8 bg-pink-50 p-8 rounded-2xl border border-pink-100/50">
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">📍 Visit the Parlor</h3>
              <p className="text-gray-600 font-medium">
                ScoopBliss Ice Cream Parlor,<br />
                Diwan Bahadur Road (D.B. Road),<br />
                R.S. Puram, Coimbatore - 641002
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">⏰ Parlor Hours</h3>
              <p className="text-gray-600">Monday - Sunday: 11:00 AM - 11:00 PM</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">📞 Direct Line</h3>
              <p className="text-gray-600">hello@scoopbliss.com<br />+91 98765 43210</p>
            </div>
          </div>

          {/* Contact Form Column */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="What's on your mind?..." 
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold p-3 rounded-xl transition-colors shadow-md shadow-pink-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
