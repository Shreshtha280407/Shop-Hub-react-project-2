# E-Commerce Product Explorer & Cart Management App => SHOP HUB

A modern **React-based E-Commerce Frontend Application** that allows users to explore products, filter/search, manage cart & wishlist, and complete a checkout flow — built with a scalable architecture.

---

##  Features

## Product Browsing

* Fetch products from API
* Responsive grid layout
* Product details page

###  Search & Filtering

* Search products by title
* Filter by category
* Real-time UI updates

###  Wishlist

* Add/remove products
* Prevent duplicates

###  Cart Management

* Add items to cart
* Increase/decrease quantity
* Remove items

###  Checkout System

* Subtotal calculation
* Tax (18% GST)
* Grand total
* Order summary page

###  Notifications

* Toast notifications using React Toastify

---

##  Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **React Router DOM**
* **Context API**
* **Axios**
* **React Toastify**

---

##  Project Structure

src/
│
├── components/              # Reusable UI components
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Filters.jsx
│   ├── SearchBar.jsx
│
├── pages/                  # Application pages (routes)
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Checkout.jsx
│
├── context/                # Global state management
│   └── CartContext.jsx
│
├── hooks/                  # Custom hooks
│   ├── useProducts.js
│   ├── useCart.js
│   ├── useDebounce.js
│
├── services/               # API handling
│   └── api.js
│
├── utils/                  # Helper functions
│   └── helpers.js
│
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles (Tailwind)
```

---

##  API Used

* Fake Store API
   https://fakestoreapi.com/products

---

##  Installation & Setup

### 1. Clone Repository

```bash id="g4z7ok"
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Navigate to Project

```bash id="0z0j0q"
cd your-repo-name
```

### 3. Install Dependencies

```bash id="pzz8pd"
npm install
```

### 4. Run Development Server

```bash id="3bcwpo"
npm run dev
```

---

##  Key Concepts Implemented

* Component-based architecture
* Context API for global state
* Custom hooks for reusable logic
* API integration with Axios
* Debounced search optimization
* Clean scalable folder structure

---

##  Future Improvements

* User authentication
* Payment gateway integration
* Order history tracking
* Dark mode support
* Backend integration

---

##  Author

Shreshtha

---

##  Support

If you like this project, give it a ⭐ on GitHub!
