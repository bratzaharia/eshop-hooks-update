import { signInWithGoogle, signOut } from './../../api/firebase'

function startLoading() {
  return {
    type: 'START_LOADING'
  }
}

function updateUserData(payload) {
  return {
    type: 'UPDATE_USER_DATA',
    payload
  }
}

function updateError(payload) {
  return {
    type: 'UPDATE_ERROR',
    payload
  }
}

export function loginUser() {
  return (dispatch) => {
    dispatch(startLoading())

    signInWithGoogle().then((response) => {
      const payload = response.user
      dispatch(updateUserData(payload))
    }).catch((error) => {
      dispatch(updateError(error))
    })
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(startLoading())
    signOut().then(() => {
      dispatch(updateUserData(null))
    }).catch((error) => {
      dispatch(updateError(error))
    })
  }
}