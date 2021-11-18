import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Layout from './../layout/Layout';
import productsJSON from '../utils/products.json'
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { addToFavourite } from '../redux/actions/favourite'


const Product = props => {

  const [product, setProduct] = useState({});
  const { addToCartProp, addToFavouriteProp } = props;

  const params = useParams();
  // console.log(params)

  // Product id url
  const productIdUrl = (Object.values(params)).toString();
  // console.log(productIdUrl);

  useEffect(() => {
    const categoryValues = Object.values(productsJSON);
    console.log(categoryValues);

    let currentProduct;

    categoryValues.forEach((category) => {
      const findResult = category.items.find((item) => {
        console.log(productIdUrl, item.id)
        return Number(productIdUrl) === item.id;
      })
      if (findResult !== undefined) {
        currentProduct = findResult
      }
    });

    // console.log(currentProduct);

    setProduct(currentProduct)
  }, [])

  console.log(product)

  // this is like match from RRD5
  // console.log(curentCategory)
  // this in state

  return (
    <Layout>
      <div className="product-page content-min-height container-fluid container-min-max-width">
        {/* Adaugam markup-ul pentru pagina de produs */}
        <h1 className="my-5 h2">{product.name}</h1>
        {/* Am aduagat clase pentru stilizarea pe mobile */}
        <div className="product-info d-flex">
          <div className="image-wrapper d-flex mr-5">
            <img src={product.image} alt="Product presentation" className="w-25"/>
          </div>
          <div className="product-details">
            <p className="h3 text-danger">{product.price} {product.currency}</p>
            
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

            <p><span className="font-weight-bold">Mărime</span>: {product.size}</p>
            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
            <p className="font-weight-bold mb-1">Descriere:</p>
            <p>{product.description}</p>
          </div>
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

export default connect(null, mapDispatchToProps)(Product);
