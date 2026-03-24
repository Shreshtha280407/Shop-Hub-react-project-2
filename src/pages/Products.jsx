import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import SortBar from "../components/SortBar";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  // ✅ FILTER
  let filtered = products.filter((item) =>
    selectedCategory === "all"
      ? true
      : item.category === selectedCategory
  );

  // ✅ SEARCH
  filtered = filtered.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ SORT
  if (sortOption === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full mb-6 px-4 py-2 border rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LEFT SIDEBAR */}
        <SidebarFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3">

          {/* SORT BAR */}
          <SortBar setSortOption={setSortOption} />

          <p className="mb-4 text-gray-500">
            Showing {filtered.length} products
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Products;