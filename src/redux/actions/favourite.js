export function addToFavourite(payload) {
  return {
      type: 'ADD_TO_FAVOURITE',
      payload
  }
}

export function removeFromFavorites(payload) {
  return {
    type: 'REMOVE_FROM_FAVOURITES',
    payload
  }
}