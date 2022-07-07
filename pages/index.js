import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Product from '../components/products';




export default function Home({productsData, productItem}) {

  const [presentCategory, setCategory] = useState(''); 

  const changeCategory =(e)=>{
    setCategory(e.target.value)
  }

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
              <select className={styles.productfilters} onChange={changeCategory}>
                <option>Categories</option>
                {productsData.map((item, index) => <option key={index}>{item}</option>)}
              </select>
          </div>
        </div>
        <div className={styles.rightcontent}>
          <h1>Edvor</h1>
          <h2>Products</h2>
          <div className={styles.product}>
            <h3>Product Name</h3>
            <hr className={styles.underline}></hr>
            <Product products={productItem} presentCategory={presentCategory}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const data = await res.json();

  const response = await fetch('https://fakestoreapi.com/products');
  const productData = await response.json();
  return {
    props: {
      productsData: data,
      productItem: productData
    },
  };
}

