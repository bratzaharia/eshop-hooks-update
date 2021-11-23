import React from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '../redux/actions/cart';
import { removeFromFavorites } from '../redux/actions/favourite';
import { ReactComponent as Close } from '../assets/icons/close.svg';

import Layout from '../layout/Layout'

const Favourites = (props) => {
  console.log(props.cartProducts)
  const { favourites, removeFromFavoritesProp } = props;
  console.log(favourites)
  return (
    <Layout>
      <div className="container-fluid container-min-max-width">
        {/* Din categoria curenta, afisam numele */}
        {
          favourites.map((favourite) => {
            return (
              <div key={favourite.id}>
                <p>{favourite.name}</p>
                <p>{favourite.price} {favourite.currency}</p>
                <p> {favourite.quantity}</p>
                <p><img className="w-25" src={favourite.image} alt="" /></p>
                <div
                  onClick={() => removeFromFavoritesProp({ id: favourite.id })}>
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
    favourites: state.favourite.favourites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromFavoritesProp: (payload) => dispatch(removeFromFavorites(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
