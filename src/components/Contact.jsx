function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        {/* Brand Logo */}
        <h1 className="font-extrabold text-2xl bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent tracking-wide">
          🍦 ScoopBliss
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-6 font-medium text-gray-600">
          <a href="#hero" className="hover:text-pink-500 transition-colors">Home</a>
          <a href="#products" className="hover:text-pink-500 transition-colors">Products</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;