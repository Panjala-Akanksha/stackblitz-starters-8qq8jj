const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));
let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];
// Endpoint1 : to get products sorted by popularity (rating high to low)
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = products.sort((a, b) => b.rating - a.rating);
  res.json(sortedProducts);
});
// Endpoint2: to get products sorted by price (high to low)
app.get('/products/sort/price-high-to-low', (req, res) => {
  const sortedProducts = products.sort((a, b) => b.price - a.price);
  res.json(sortedProducts);
});
// Endpoint3: to get products sorted by price (low to high)
app.get('/products/sort/price-low-to-high', (req, res) => {
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  res.json(sortedProducts);
});
//Function to filter products based on the RAM option
function filterByRam(product, ram) {
  return product.ram === ram;
}

// Endpoint4: to filter products based on the RAM option
app.get('/products/filter/ram', (req, res) => {
  let ram = parseInt(req.query.ram);
  let filteredProducts = products.filter((product) =>
    filterByRam(product, ram)
  );
  res.json(filteredProducts);
});
// Function to filter products by ROM
function filterByRom(rom) {
  return products.filter((product) => product.rom === rom);
}

// End point 5:Filter the products based on the “ROM” option.
app.get('/products/filter/rom', (req, res) => {
  const rom = parseInt(req.query.rom); // Get the ROM from query params
  const filteredProducts = filterByRom(rom);
  res.json(filteredProducts);
});
// Function to filter products by Brand (case-insensitive)
function filterByBrand(brand) {
  return products.filter(
    (product) => product.brand.toLowerCase() === brand.toLowerCase()
  );
}

// End point 6:Filter the products based on the “Brand” option
app.get('/products/filter/brand', (req, res) => {
  const brand = req.query.brand; // Get Brand from query params
  const filteredProducts = filterByBrand(brand);
  res.json(filteredProducts);
});
// Function to filter products by OS (case-insensitive)
function filterByOs(os) {
  return products.filter(
    (product) => product.os.toLowerCase() === os.toLowerCase()
  );
}

// Endpoint 7: Filter the products based on the “OS” option.
app.get('/products/filter/os', (req, res) => {
  const os = req.query.os; // Get OS from query params
  const filteredProducts = filterByOs(os);
  res.json(filteredProducts);
});
// Function to filter products by price (<= specified price)
function filterByPrice(maxPrice) {
  return products.filter((product) => product.price <= maxPrice);
}

// Endpoint 8: Filter the products based on the “Price” option
app.get('/products/filter/price', (req, res) => {
  const price = parseInt(req.query.price); // Get price from query params and convert it to an integer
  const filteredProducts = filterByPrice(price);
  res.json(filteredProducts);
});
//End point 9: Send original array of products
app.get('/products', (req, res) => {
  res.json(products);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
