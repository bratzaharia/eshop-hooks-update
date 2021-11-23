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


    case 'REMOVE_FROM_FAVOURITES':
      const filteredProducts = state.favourites.filter(favourite => {
        return favourite.id !== action.payload.id
      })

      //   return Object.assign({}, state, {
      //     products: filteredProducts
      // });


      const newState = {

        ...state,
        favourites: [...filteredProducts],

      };
      return newState;


    default:
      return state;
  }

}

export default favoriteReducer;