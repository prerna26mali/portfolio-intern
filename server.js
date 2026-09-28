const express = require('express');
const path = require('path');
const products = require('./data/products.json');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static(publicDir, { extensions: ['html'] }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'ShopSphere API', timestamp: new Date().toISOString() });
});

app.get('/api/products', (req, res) => {
  const q = String(req.query.q || '').trim().toLowerCase();
  const category = String(req.query.category || 'all').trim().toLowerCase();
  const sort = String(req.query.sort || 'featured').trim().toLowerCase();

  let result = products.filter((product) => {
    const matchesQuery = !q || `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(q);
    const matchesCategory = category === 'all' || product.category.toLowerCase() === category;
    return matchesQuery && matchesCategory;
  });

  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

  res.json({ count: result.length, products: result });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((item) => item.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.get('/api/categories', (req, res) => {
  const categories = [...new Set(products.map((product) => product.category))].sort();
  res.json(categories);
});

// SPA fallback: let the client-side router render /products, /cart, etc.
app.get('*splat', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ShopSphere running on http://localhost:${PORT}`);
});
