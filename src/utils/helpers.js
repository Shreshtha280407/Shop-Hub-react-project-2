// 💰 FORMAT PRICE
export const formatPrice = (price) => {
  return `₹ ${price.toFixed(2)}`;
};

// 🧮 CALCULATE TOTAL CART VALUE
export const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

// 🔢 CALCULATE TOTAL ITEMS
export const totalItems = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

// 📊 FILTER PRODUCTS BY CATEGORY
export const filterByCategory = (products, category) => {
  if (category === "all") return products;
  return products.filter((item) => item.category === category);
};

// 🔍 SEARCH PRODUCTS
export const searchProducts = (products, searchTerm) => {
  return products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};