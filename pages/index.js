import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Product from '../components/products';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hurray!! First NextJs App</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.leftcontainer}>
          <div className={styles.leftcontainer_content}>
            <h3>Filters</h3>
            <hr className={styles.underline}></hr>
              <select className={styles.productfilters}>
                <option>Products</option>
                <option>Products</option>
                <option>Products</option>
                <option>Products</option>
              </select>
              <select className={styles.productfilters}>
                <option>State</option>
              </select>
              <select className={styles.productfilters}>
                <option>City</option>
              </select>
          </div>
        </div>
        <div className={styles.rightcontent}>
          <h1>Edvor</h1>
          <h2>Products</h2>
          <div className={styles.product}>
            <h3>Product Name</h3>
            <hr className={styles.underline}></hr>
            <Product />
        </div>
        </div>
      </div>
    </div>
  )
}
