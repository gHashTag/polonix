import {
  GET_TICKERS_FAIL,
  GET_TICKERS_LOADING,
  GET_TICKERS_SUCCESS
} from './types'
import { URL } from '../../constants'

export const getTickers = () => dispatch => {
  dispatch(getTickersLoading())
  fetch(`${URL}/api/tickers`)
    .then(res => res.json())
    .then(tickers =>
      dispatch({
        type: GET_TICKERS_SUCCESS,
        payload: tickers 
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TICKERS_FAIL,
        payload: err
      })
    )
}

export const getTickersLoading = () => {
  return {
    type: GET_TICKERS_LOADING
  }
}
