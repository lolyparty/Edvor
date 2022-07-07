import styles from '../styles/Home.module.css';
import ProductItem from './product_item';

const Product =()=>{
    return <div className={styles.product_items_container}>
                <ProductItem />
            </div>
}

export default Product;