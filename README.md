# ShopSphere — Full-Stack Deployment & Project Architecture Capstone

ShopSphere is a production-style e-commerce product catalog built with a modular frontend and a Node.js/Express REST API.

## Features
- Modular ES-module frontend: router, API client, state/store, UI helpers and views
- Client-side routing with the History API
- REST endpoints for products, categories, product details and health checks
- Search, category filter and sorting
- Persistent shopping cart using localStorage
- Responsive layout for desktop/mobile
- Optimized lightweight local SVG product assets
- Lazy loading and async image decoding on catalog images
- SPA fallback for direct route refreshes
- Deployment-ready Render configuration

## Run locally
1. Install Node.js 18+.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm start`.
5. Open `http://localhost:3000`.

## API
- `GET /api/health`
- `GET /api/products`
- `GET /api/products?q=headphones&category=Electronics&sort=price-asc`
- `GET /api/products/:id`
- `GET /api/categories`

## Deploy on Render
1. Create a GitHub repository and upload this project.
2. In Render, create a **New Web Service** from that GitHub repository.
3. Render detects Node. Build command: `npm install`; start command: `npm start`.
4. Deploy. Render will provide a public `https://...onrender.com` URL.
5. Verify `/api/health`, `/products`, `/cart`, and a direct refresh of `/products/p1`.

`render.yaml` is included for Blueprint-based deployment.

## Architecture
```text
Browser
  │
  ├── History API Router
  │      ├── Home View
  │      ├── Products View ──┐
  │      ├── Product Detail  │
  │      └── Cart View       │
  │                           ▼
  │                     API Client (fetch)
  │                           │
  │                           ▼
  │                     Express REST API
  │                           │
  │                           ▼
  │                     products.json
  ```

## Performance notes
- Product images are tiny SVG files stored locally, avoiding large third-party image downloads.
- Catalog images use `loading="lazy"` and `decoding="async"`.
- CSS and JavaScript are split into focused modules instead of one large file.
- The app uses one small runtime dependency (Express).
- Static assets are served directly by Express.
