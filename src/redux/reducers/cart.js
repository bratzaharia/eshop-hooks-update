const initialState = {
  products: []
}

function cartReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_TO_CART':
      let productInCart = false;
      const updatedProducts = state.products.map(product => {
        if (product.id === action.payload.product.id) {
          productInCart = true;

          return {
            ...product,
            quantity: product.quantity + 1
          }
          // Daca produsul nu este in cart deja, il punem in updated products nemodificat.
        } else {
          return product;
        }
      })
      if (!productInCart) {
        return Object.assign({}, state, {
          products: [
            ...state.products,
            {
              ...action.payload.product,
              quantity: 1
            }
          ]
        })
      } else {
        return Object.assign({}, state, {
          products: updatedProducts
        });
      }

    //   const newState = {

    //     ...state,
    //     products: [...state.products, action.payload.product],

    //   };
    //   return newState;

    case 'REMOVE_FROM_CART':
      const filteredProducts = state.products.filter(product => {
        return product.id !== action.payload.id
      })

      //   return Object.assign({}, state, {
      //     products: filteredProducts
      // });


      const newState = {

        ...state,
        products: [...filteredProducts],

      };
      return newState;

    default:
      return state;
  }

}

export default cartReducer;