import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/cart'
import { addToFavourite } from '../redux/actions/favourite'


import Layout from './../layout/Layout';
import productsJSON from '../utils/products.json'

// aceasta va deveni product list (dintr o categorie anume)
const ProductList = props => {

  const { addToCartProp, addToFavouriteProp } = props;
  console.log(addToCartProp)

  const params = useParams();
  console.log(params)
  const curentCategory = (Object.values(params)).toString();

  const [products, setProducts] = useState({});
  useEffect(() => {
    const products = productsJSON[curentCategory];
    setProducts(products)
  }, [])

  // this is like match from RRD5
  // console.log(curentCategory)
  // this in state
  console.log(products);

  return (
    <Layout>
      {/* Pentru a nu a avea o dimensiune prea mare si a fi centrat, continutul
                paginii trebuie introdus intr-un div cu cele doua clase de mai jos. */}
      <div className="container-fluid container-min-max-width">
        {/* Din categoria curenta, afisam numele */}
        <h2>{curentCategory}</h2>


        {
          products.items && products.items.map((product, index) =>
            <div key={index}>
              <Link to={`/products/${product.id}`}>
                {product.name} id {product.id}
                <img src={product.image} alt="" className="w-25" />
              </Link>

              <button className="btn btn-outline-dark"
                onClick={() => {
                  addToCartProp({
                    product: {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      currency: product.currency,
                      image: product.image,
                      quantity: product.quantity,
                    }
                  })
                }}
              >Add to cart</button>

              <button className="btn btn-outline-dark"
                onClick={() => {
                  addToFavouriteProp({
                    product: {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      currency: product.currency,
                      image: product.image,
                      quantity: product.quantity,
                    }
                  })
                }}
              >Add to favourite</button>
            </div>
          )
        }

      </div>
    </Layout>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartProp: (payload) => dispatch(addToCart(payload)),
    addToFavouriteProp: (payload) => dispatch(addToFavourite(payload)),
  }
}

export default connect(null, mapDispatchToProps)(ProductList);
