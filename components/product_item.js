import Image from "next/image";
import styles from "../styles/Home.module.css";

const myLoader = ({ src }) => {
    return `${src}`
  }

const ProductItem = ()=>{
    return <div className={styles.product_item}>
                <div className={styles.product_item_name_container}>
                <div className={styles.prodyct_item_picture}>
                    <Image loader={myLoader} src="https://i.postimg.cc/zBjVKPRJ/person1.jpg" alt="Image" layout="fill" />
                </div>
                <div className={styles.product_item_name}>
                    <p>Product Name</p>
                    <p>Brand Name</p>
                    <p>$29.99</p>
                </div>
                </div>
                <div className={styles.product_item_details}>
                <div className={styles.product_item_date}>
                    <p>Location</p>
                    <p>Date:10/6/2022</p>
                </div>
                <p className={styles.product_details_text}>Description of the product item</p> 
                </div>
            </div>
}

export default ProductItem;