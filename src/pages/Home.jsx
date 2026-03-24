





import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import useDebounce from "../hooks/useDebounce";
import { filterByCategory, searchProducts } from "../utils/helpers";

function Home() {

  // ✅ STATES
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ CUSTOM HOOK
  const { products, loading, error } = useProducts();

  // ✅ DEBOUNCE SEARCH
  const debouncedSearch = useDebounce(searchTerm, 500);

  // ✅ LOADING + ERROR
  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (error) return <p>Error loading products</p>;

  // ✅ CATEGORIES
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  // ✅ FILTER LOGIC
  const filteredProducts = searchProducts(
  filterByCategory(products, selectedCategory),
  debouncedSearch
);
 

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-20">
        <h1 className="text-4xl font-bold">
          Discover Amazing Products
        </h1>
        <p className="mt-4 text-lg">
          Shop the latest trends in electronics, fashion, jewelry, and more.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="px-10 py-10">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <button className="text-blue-600 hover:underline">
            View All →
          </button>
        </div>

        {/* 🔍 SEARCH */}
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />

        {/* 🎯 FILTER */}
        <Filters 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;