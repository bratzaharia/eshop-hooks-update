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

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* <h2>{curentCategory}</h2> */}

        {/* Din categoria curenta, afisam numele */}


        {
          products.items && products.items.map((product, index) =>


            <div key={index}>


              <div className="col">
                <div className="card">
                  <Link to={`/products/${product.id}`}>
                    <img src={product.image} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a lonittle bit longer.</p>
                    </div>
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
              </div>

            </div>
          )
        }

      </div>
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
