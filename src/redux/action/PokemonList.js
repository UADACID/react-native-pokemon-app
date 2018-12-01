import axios from 'axios'

import {
  REQUEST_POKEMON,
  REQUEST_POKEMON_FAILED,
  REQUEST_POKEMON_SUCCESS,
  REQUEST_POKEMON_PAGINATION_FAILED,
  REQUEST_POKEMON_PAGINATION_SUCCESS,
} from '../constans'

const doRequestAllPokemon = ({
  onRequest, onSuccess, onFailed, params,
}) => {
  onRequest()
  axios
    .get(params)
    .then(async (response) => {
      const { results, next, count } = response.data
      const payload = {
        dataList: results,
        message: 'request get all pokemon success',
        next,
        count,
      }
      onSuccess(payload)
    })
    .catch(() => {
      const payload = {
        message: 'request get all pokemon failed',
      }
      onFailed(payload)
    })
}

export const getAllPokemon = targetUrl => (dispatch) => {
  doRequestAllPokemon({
    onRequest: () => dispatch({ type: REQUEST_POKEMON }),
    onSuccess: payload => dispatch({ type: REQUEST_POKEMON_SUCCESS, payload }),
    onFailed: payload => dispatch({ type: REQUEST_POKEMON_FAILED, payload }),
    params: targetUrl,
  })
}

export const paginationGetAllPokemon = targetUrl => (dispatch) => {
  doRequestAllPokemon({
    onRequest: () => dispatch({ type: REQUEST_POKEMON }),
    onSuccess: payload => dispatch({ type: REQUEST_POKEMON_PAGINATION_SUCCESS, payload }),
    onFailed: payload => dispatch({ type: REQUEST_POKEMON_PAGINATION_FAILED, payload }),
    params: targetUrl,
  })
}
