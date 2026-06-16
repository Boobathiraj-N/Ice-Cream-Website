function Products() {
  return (
    <section
      id="products"
      className="min-h-screen border p-10"
    >

      <h1 className="text-4xl font-bold mb-10">

        Products

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="border h-60"></div>

        <div className="border h-60"></div>

        <div className="border h-60"></div>

      </div>

    </section>
  );
}

export default Products;