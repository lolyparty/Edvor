import styles from '../styles/Home.module.css';
import ProductItem from './product_item';

const Product =({products, presentCategory})=>{
    return <div className={styles.product_items_container}>
                {presentCategory === 'Categories' || presentCategory === '' ? products.map((item, index)=> <ProductItem key={index} item={item} />) : products.map((item, index)=> item.category === presentCategory && <ProductItem key={index} item={item} />).filter((item)=> !!item)}
            </div>
}

export default Product;