import React from "react"
function Filters({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex gap-4 flex-wrap mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-lg border transition
            ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Filters;