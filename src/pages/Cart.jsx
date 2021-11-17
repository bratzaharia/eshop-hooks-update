import React from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '../redux/actions/cart';
import { ReactComponent as Close } from '../assets/icons/close.svg';

import Layout from '../layout/Layout'

const Cart = (props) => {
  console.log(props.cartProducts)
  const { cartProducts, removeFromCart } = props;
  return (
    <Layout>
      <div className="container-fluid container-min-max-width">
        {/* Din categoria curenta, afisam numele */}
        {
          cartProducts.map((cartProduct) => {
            return (
              <div key={cartProduct.id}>
                <p>{cartProduct.name}</p>
                <p>{cartProduct.price} {cartProduct.currency}</p>
                <p> {cartProduct.quantity}</p>
                <p><img className="w-25" src={cartProduct.image} alt="" /></p>
                <div
                  onClick={() => removeFromCart({ id: cartProduct.id })}>
                  <Close />
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (payload) => dispatch(removeFromCart(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
