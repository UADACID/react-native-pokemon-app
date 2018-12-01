import axios from 'axios'

import { REQUEST_POKEMON_DETAIL, REQUEST_POKEMON_DETAIL_FAILED, REQUEST_POKEMON_DETAIL_SUCCESS } from '../constans'

const getDetailPokemon = targetUrl => (dispatch) => {
  dispatch({ type: REQUEST_POKEMON_DETAIL })
  axios
    .get(targetUrl)
    .then(async (response) => {
      const pokemonDetail = response.data
      const payload = {
        pokemonDetail,
        message: 'request get detail pokemon success',
      }
      dispatch({ type: REQUEST_POKEMON_DETAIL_SUCCESS, payload })
    })
    .catch(() => {
      const payload = {
        message: 'request get all pokemon failed',
      }
      dispatch({ type: REQUEST_POKEMON_DETAIL_FAILED, payload })
    })
}

export default getDetailPokemon
