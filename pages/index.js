import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
            <div className={styles.product_items_container}>
              <div className={styles.product_item}>
                <div className={styles.product_item_name_container}>
                  <img src="" />
                  <div className={styles.product_item_name}>
                    <p>Product Name</p>
                    <p>Brand Name</p>
                    <p>$29.99</p>
                  </div>
                </div>
                <div className={styles.product_item_details}>
                  <div className={styles.product_item_date}>
                    <p>location</p>
                    <p>Date:10/6/2022</p>
                  </div>
                  <p>Description of the product item</p> 
                </div>
              </div>

              <div className={styles.product_item}>
                <div className={styles.product_item_name_container}>
                  <img src="" />
                  <div className={styles.product_item_name}>
                    <p>Product Name</p>
                    <p>Brand Name</p>
                    <p>$29.99</p>
                  </div>
                </div>
                <div className={styles.product_item_details}>
                  <div className={styles.product_item_date}>
                    <p>location</p>
                    <p>Date:10/6/2022</p>
                  </div>
                  <p>Description of the product item</p> 
                </div>
              </div>

              <div className={styles.product_item}>
                <div className={styles.product_item_name_container}>
                  <img src="" />
                  <div className={styles.product_item_name}>
                    <p>Product Name</p>
                    <p>Brand Name</p>
                    <p>$29.99</p>
                  </div>
                </div>
                <div className={styles.product_item_details}>
                  <div className={styles.product_item_date}>
                    <p>location</p>
                    <p>Date:10/6/2022</p>
                  </div>
                  <p>Description of the product item</p> 
                </div>
              </div>

              <div className={styles.product_item}>
                <div className={styles.product_item_name_container}>
                  <img src="" />
                  <div className={styles.product_item_name}>
                    <p>Product Name</p>
                    <p>Brand Name</p>
                    <p>$29.99</p>
                  </div>
                </div>
                <div className={styles.product_item_details}>
                  <div className={styles.product_item_date}>
                    <p>location</p>
                    <p>Date:10/6/2022</p>
                  </div>
                  <p>Description of the product item</p> 
                </div>
              </div>

              <div className={styles.product_item}>
                <div className={styles.product_item_name_container}>
                  <img src="" />
                  <div className={styles.product_item_name}>
                    <p>Product Name</p>
                    <p>Brand Name</p>
                    <p>$29.99</p>
                  </div>
                </div>
                <div className={styles.product_item_details}>
                  <div className={styles.product_item_date}>
                    <p>location</p>
                    <p>Date:10/6/2022</p>
                  </div>
                  <p>Description of the product item</p> 
                </div>
              </div>

              <div className={styles.product_item}>
                <div className={styles.product_item_name_container}>
                  <img src="" />
                  <div className={styles.product_item_name}>
                    <p>Product Name</p>
                    <p>Brand Name</p>
                    <p>$29.99</p>
                  </div>
                </div>
                <div className={styles.product_item_details}>
                  <div className={styles.product_item_date}>
                    <p>location</p>
                    <p>Date:10/6/2022</p>
                  </div>
                  <p>Description of the product item</p> 
                </div>
              </div>

              {/* <div className={styles.product_item}>
                <div className={styles.product_item_name_container}>
                  <img src="" />
                  <div className={styles.product_item_name}>
                    <p>Product Name</p>
                    <p>Brand Name</p>
                    <p>$29.99</p>
                  </div>
                </div>
                <div className={styles.product_item_details}>
                  <div className={styles.product_item_date}>
                    <p>location</p>
                    <p>Date:10/6/2022</p>
                  </div>
                  <p>Description of the product item</p> 
                </div>
              </div> */}
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
