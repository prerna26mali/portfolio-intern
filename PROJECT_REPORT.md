# Capstone Project Report — ShopSphere

## 1. Project Title
ShopSphere — Full-Stack E-commerce Product Catalog

## 2. Objective
To build and deploy a responsive web application that demonstrates modular frontend architecture, client-side routing, REST API integration, performance optimization and production deployment.

## 3. Technology Stack
- Frontend: HTML5, CSS3, JavaScript ES Modules
- Backend: Node.js, Express.js
- Data: JSON product catalog
- Browser storage: localStorage for cart state
- Deployment: Render-ready Node web service

## 4. Main Modules
1. Router module — changes views without full page reloads.
2. API module — communicates with REST endpoints using Fetch API and async/await.
3. Store module — manages cart state and persistence.
4. UI module — reusable product cards, formatting, notifications and error/loading states.
5. View modules — Home, Products, Product Detail, Cart and 404.
6. Express server — serves static files and REST API routes.

## 5. Performance Optimization
- Lightweight SVG assets instead of heavy raster images.
- Lazy loading for product images.
- Async image decoding.
- Minimal runtime dependency set.
- Modular files that can be maintained and optimized independently.
- Static asset delivery through Express.

## 6. Expected Result
A public web application where users can browse products, search/filter/sort the catalog, open product details, add items to a persistent cart and navigate between pages without full page reloads.

## 7. Future Scope
- Authentication and user accounts
- Database such as PostgreSQL/MongoDB
- Admin dashboard
- Real payment gateway
- Order management
- Product image CDN and automated compression
- Automated tests and CI/CD
