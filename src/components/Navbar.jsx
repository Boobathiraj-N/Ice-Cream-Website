function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-white">

      <div className="max-w-6xl mx-auto p-4 flex justify-between">

        <h1 className="font-bold text-2xl">
          Ice Cream
        </h1>

        <div className="flex gap-6">

          <a href="#hero">
            Home
          </a>

          <a href="#products">
            Products
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;