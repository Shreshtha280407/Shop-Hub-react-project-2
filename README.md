## ShopHub — React E-commerce Web App

A modern, responsive **frontend e-commerce application** built with React.
ShopHub allows users to browse products, search and filter items, manage cart and wishlist, and simulate a checkout experience.

---


## Features

* Browse products from API
* Search products with **debounce optimization**
* Filter by category
* Sort by price (Low → High / High → Low)
* Add / remove items from wishlist
* Add to cart with quantity management
* Sync between wishlist and cart
* Dynamic product details page
* Checkout page with total calculation
* Toast notifications for actions
* Fast and responsive UI

---

## Tech Stack

* React (Vite)
* Tailwind CSS
* Axios (API calls)
* React Router DOM
* React Toastify
* Framer Motion (animations)

---

## Project Structure

```
src/
│
├── components/     # Reusable UI components
├── pages/          # Main pages (Home, Cart, Wishlist, etc.)
├── context/        # Global state (CartContext)
├── hooks/          # Custom hooks (useProducts, useCart, etc.)
├── services/       # API handling (axios)
├── utils/          # Helper functions
│
├── App.jsx         # Routing
├── main.jsx        # Entry point
```

---

## Key Concepts Used

* React Hooks (`useState`, `useEffect`, `useContext`)
* Custom Hooks (`useProducts`, `useDebounce`, `useCart`)
* Context API for global state management
* API abstraction using Axios
* Performance optimization (debouncing)
* Dynamic routing

---

## Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/shophub.git

# Go to project folder
cd shophub

# Install dependencies
npm install

# Run project
npm run dev
```

---

## API Used

* https://fakestoreapi.com

---

## Future Improvements

* Authentication (Login / Signup)
* Payment integration
* Order history
* AI-based recommendations
* Dark mode

---


## If you like this project

Give it a ⭐ on GitHub!
