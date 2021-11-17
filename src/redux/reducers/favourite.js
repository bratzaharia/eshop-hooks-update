const initialState = {
  favourites: []
}

function favoriteReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      let productInFavourite = false;
      const updatedProducts = state.favourites.map(favourite => {
        if (favourite.id === action.payload.product.id) {
          productInFavourite = true;

          return {
            ...favourite,
            quantity: favourite.quantity + 1
          }
        } else {
          return favourite;
        }
      })
      if (!productInFavourite) {
        return Object.assign({}, state, {
          favourites: [
            ...state.favourites,
            {
              ...action.payload.product,
              quantity: 1
            }
          ]
        })
      } else {
        return Object.assign({}, state, {
          favourites: updatedProducts
        });
      }


    default:
      return state;
  }

}

export default favoriteReducer;