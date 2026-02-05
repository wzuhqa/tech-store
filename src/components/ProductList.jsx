import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling wireless headphones with 30-hour battery life.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Feature-packed smartwatch with health tracking and GPS navigation.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand with adjustable height and angle.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with Cherry MX switches and programmable keys.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500',
  },
  {
    id: 5,
    name: 'Portable Speaker',
    description: 'Waterproof portable Bluetooth speaker with 360-degree sound.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking and programmable buttons.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
  },
  {
    id: 7,
    name: 'USB-C Hub',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.',
    price: 49.99,
    image: '/usb-hub.svg',
  },
  {
    id: 8,
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
  },
];

const ProductList = () => {
  return (
    <section id="products" className="product-list-section">
      <div className="section-header">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Explore our handpicked selection of premium tech products designed to elevate your lifestyle
        </p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
