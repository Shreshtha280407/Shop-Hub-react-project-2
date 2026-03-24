function SortBar({ setSortOption }) {
  return (
    <div className="flex justify-end mb-4">
      <select
        onChange={(e) => setSortOption(e.target.value)}
        className="border px-3 py-2 rounded-lg"
      >
        <option value="default">Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
}

export default SortBar;