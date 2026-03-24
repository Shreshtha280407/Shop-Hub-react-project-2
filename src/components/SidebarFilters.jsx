function SidebarFilters({ selectedCategory, setSelectedCategory }) {

  const categories = [
    "all",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing"
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow h-fit">

      <h2 className="font-semibold mb-4">Categories</h2>

      <div className="space-y-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`block w-full text-left px-3 py-2 rounded-lg
              ${selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
              }`}
          >
            {cat === "all" ? "All Products" : cat}
          </button>
        ))}
      </div>

      {/* PRICE SECTION (UI ONLY for now) */}
      <h2 className="font-semibold mt-6 mb-4">Price Range</h2>

      <div className="space-y-2 text-sm text-gray-600">
        <p>$0 - $100</p>
        <p>$100 - $500</p>
        <p>$500 - $1000</p>
        <p>$1000+</p>
      </div>

    </div>
  );
}

export default SidebarFilters;