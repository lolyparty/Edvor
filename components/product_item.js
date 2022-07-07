import Image from "next/image";
import styles from "../styles/Home.module.css";

const myLoader = ({ src }) => {
    return `${src}`
  }

const ProductItem = ({item})=>{
    return <div className={styles.product_item}>
                <div className={styles.product_item_name_container}>
                <div className={styles.prodyct_item_picture}>
                    <Image loader={myLoader} src={item.image} alt="Image" layout="fill" unoptimized />
                </div>
                <div className={styles.product_item_name}>
                    <p>{item.title.slice(0,13)}...</p> 
                    <p>Brand Name</p>
                    <p>$29.99</p>
                </div>
                </div>
                <div className={styles.product_item_details}>
                <div className={styles.product_item_date}>
                    <p>Location</p>
                    <p>Date:10/6/2022</p>
                </div>
                <p className={styles.product_details_text}>{item.description.slice(0,30)}...</p>  
                </div>
            </div>
}

export default ProductItem;