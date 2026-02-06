import ProductCard from './ProductCard';
import products from '../data/products';
import './ProductList.css';

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
