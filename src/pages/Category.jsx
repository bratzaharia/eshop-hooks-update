import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import Layout from './../layout/Layout';
import products from '../utils/products.json'


const Category = () => {
  const params = useParams();
  console.log(params)
  const curentCategory = (Object.values(params)).toString();

  const [categories, setCategories] = useState({});
  useEffect(() => {
    const categories = products[curentCategory];
    setCategories(categories)
  }, [])

  // this is like mathc from RRD
  console.log(curentCategory)
  // this in state
  console.log(categories)

  return (
    <Layout>
      {/* Pentru a nu a avea o dimensiune prea mare si a fi centrat, continutul
                paginii trebuie introdus intr-un div cu cele doua clase de mai jos. */}
      <div className="container-fluid container-min-max-width">
        {/* Din categoria curenta, afisam numele */}
        <h2>{curentCategory}</h2>


        {
          categories.items && categories.items.map((category, index) =>
            <div key={index}>{category.name}</div>
          )
        }

      </div>
    </Layout>
  );
}

export default Category;
