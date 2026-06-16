
function Products() {
  const flavors = [
    {
      id: 1,
      name: "Strawberry Dream",
      price: "199",
      img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=400&auto=format&fit=crop",
      color: "bg-pink-50"
    },
    {
      id: 2,
      name: "Matcha Mint Crisp",
      price: "399",
      img: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=400&auto=format&fit=crop",
      color: "bg-green-50"
    },
    {
      id: 3,
      name: "Salted Caramel",
      price: "499",
      img: "https://images.unsplash.com/photo-1560008511-11c63416e52d?q=80&w=400&auto=format&fit=crop",
      color: "bg-amber-50"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-800 mb-4">Our Signature Flavors</h2>
          <p className="text-gray-500 max-w-md mx-auto">Churned fresh daily using local, standard premium ingredients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((flavor) => (
            <div key={flavor.id} className={`rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group`}>
              <div className="overflow-hidden h-64 bg-gray-100">
                <img 
                  src={flavor.img} 
                  alt={flavor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{flavor.name}</h3>
                <p className="text-gray-500 text-sm mb-4">A rich, velvety texture made for authentic flavor lovers.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-pink-500">{flavor.price}</span>
                  <button className="bg-gray-900 hover:bg-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;

// function Products() {
//   return (
//     <section
//       id="products"
//       className="min-h-screen border p-10"
//     >

//       <h1 className="text-4xl font-bold mb-10">

//         Products

//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         <div className="border h-60"></div>

//         <div className="border h-60"></div>

//         <div className="border h-60"></div>

//       </div>

//     </section>
//   );
// }

// export default Products;