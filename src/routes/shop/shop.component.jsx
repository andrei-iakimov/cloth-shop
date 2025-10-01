import SHOP_DATA from '../../shop-data.json';
import { useContext } from 'react';
//import CategoryPreview from '../../components/category-preview/category-preview.component';
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext);

  return (
    <div className='shop-container'>
      {
        products && products.map((product) => (
            console.log(product),
            <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  );
}
export default Shop;