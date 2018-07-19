import {
  GET_TICKERS_FAIL,
  GET_TICKERS_LOADING,
  GET_TICKERS_SUCCESS
} from '../actions/types'

const initialState = {
  loading: false,
  tickers: {},
  error: false 
}

export default function (state = initialState, action) {
  //console.log('action', action)
  switch (action.type) {
  case GET_TICKERS_SUCCESS:
    return {
      ...state,
      loading: false,
      tickers: action.payload
    }
  case GET_TICKERS_LOADING:
    return {
      ...state,
      loading: true
    }
  case GET_TICKERS_FAIL:
    return {
      ...state,
      error: true,
      loading: false
    }
  default:
    return state
  }
}
