#PROJECT 2

# ET712_Project_MotoMax 🏍️

## Project Overview

**MotoMax** is a front-end React web application built using **React.js** and **React Router DOM**.  

This project is an online motorcycle gear shopping website that allows users to browse motorcycle products, view detailed product information, and manage a shopping cart.

The application demonstrates the use of:

- React Components
- React Props
- React State Management
- React Router DOM
- Event Handling
- Reusable UI Components
- Responsive Web Design

---

# Features

## 🔗 Navigation

- React Router navigation
- Multiple page routes:
  - Home Page
  - Shop Page
  - Shopping Cart Page
- Category-based routing:
  - Helmets
  - Jackets
  - Gloves

---

# 🛒 Product Catalog

Users can browse motorcycle gear products with:

- Product images
- Product names
- Product prices
- Product descriptions
- Add to Cart functionality

### Reusable Product Cards

Product cards are created using React props to display dynamic product information.

---

# 🏍️ Product Categories

The application includes:

- 🪖 Helmets
- 🧥 Jackets
- 🧤 Gloves

Features:

- Category sidebar navigation
- Dynamic product filtering using React Router

---

# 🖼️ Modal Window

A reusable modal component allows users to view detailed product information.

When a product image is clicked, the modal displays:

- Larger product image
- Product name
- Product description
- Product price
- Add to Cart button
- Close button

---

# 🛍️ Shopping Cart

The shopping cart allows users to:

- Add products to cart
- Automatically increase quantity when adding duplicate products
- Remove products from cart

Cart displays:

- Product image
- Product name
- Quantity
- Product price
- Subtotal

### Price Calculation

The cart dynamically calculates:

- Subtotal
- New York Sales Tax (8.16%)
- Total Price

---

# 📱 Responsive Design

The application is designed for:

- Desktop
- Tablet
- Mobile devices

Implemented using:

- CSS Flexbox
- CSS Grid
- Responsive layouts
- Motorcycle-themed color design

---

# 📂 Project Structure

```
src/

│── App.js
│── App.css
│
├── components/
│   ├── Home.js
│   ├── Navbar.js
│   ├── Shop.js
│   ├── Cart.js
│   ├── Card.js
│   ├── ModalWindow.js
│   └── ProductData.js
│
└── img/
    ├── Helmet images
    ├── Jacket images
    ├── Glove images
    ├── Homepage images
    └── Logo images
```

---

# 📄 File Description

## App.js

Main application component responsible for:

- React Router configuration
- Page navigation
- Shopping cart state management

---

## Navbar.js

Navigation component containing:

- MotoMax logo
- Home link
- Shop link
- Cart link

---

## Home.js

Landing page containing:

- Hero banner
- Welcome message
- Featured products

---

## Shop.js

Displays the motorcycle product catalog.

Includes:

- Product categories
- Product cards
- Category filtering
- Add to Cart functionality
- Product modal window

---

## Card.js

Reusable product card component.

Uses React props to display:

- Product image
- Product name
- Price
- Product details

---

## ModalWindow.js

Reusable modal component displaying:

- Product image
- Product description
- Product price
- Add to Cart button

---

## Cart.js

Shopping cart page displaying:

- Selected products
- Product quantity
- Remove buttons
- Subtotal
- NY sales tax (8.16%)
- Total price

---

## ProductData.js

Stores all product information:

- Product name
- Price
- Category
- Description
- Image

---

## App.css

Main stylesheet responsible for:

- Website layout
- Navigation styling
- Product cards
- Modal styling
- Shopping cart design
- Footer
- Responsive design

---

# 🛠️ Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6)
- HTML5
- CSS3
- React Hooks (`useState`)
- React Props
- Event Handling
- CSS Flexbox
- CSS Grid

---

# ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project folder

```bash
cd ET712_Project_MotoMax
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install React Router DOM

```bash
npm install react-router-dom
```

### 5. Start the development server

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

# ✅ Project Requirements Completed

✔ React Router navigation  
✔ Multiple routes  
✔ Reusable React components  
✔ React Props  
✔ React State Management  
✔ Event Handling  
✔ Shopping cart functionality  
✔ Dynamic price calculations  
✔ New York Sales Tax calculation (8.16%)  
✔ Modal window component  
✔ Responsive web design  
✔ Motorcycle-themed user interface  

---

# 👨‍💻 Author

**Nihar Patel**

Course: **ET712 – Full Stack Web Development**  
Project: **MotoMax React E-Commerce Application**
