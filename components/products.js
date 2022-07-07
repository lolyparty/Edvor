import styles from '../styles/Home.module.css';
import ProductItem from './product_item';

const Product =({products})=>{
    return <div className={styles.product_items_container}>
                {products.map((item, index)=> <ProductItem key={index} item={item}/>)}
            </div>
}

export default Product;