import React, { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom'

import Layout from './../layout/Layout';
import products from '../utils/products.json'


const Category = () => {
  const params = useParams();

  const [category, setCategory] = useState([]);
  useEffect(() => {
    const categories = Object.values(products);
    setCategory(categories)
  }, [])

  const curentCategory = (Object.values(params)).toString();
  // this is like mathc from RRD
  console.log(curentCategory)
  // this in state
  console.log(category)

  return (
    <Layout>
                {/* Pentru a nu a avea o dimensiune prea mare si a fi centrat, continutul
                paginii trebuie introdus intr-un div cu cele doua clase de mai jos. */}
                <div className="container-fluid container-min-max-width">
                    {/* Din categoria curenta, afisam numele */}
                    {/* <h2>{category.map(name => <div>{name}</div>)}</h2> */}
                    <h2>{ curentCategory }</h2>
                </div>
            </Layout>
  );
}

export default Category;
