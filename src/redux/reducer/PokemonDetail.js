import uniqBy from 'lodash/uniqBy'

import { REQUEST_POKEMON_DETAIL, REQUEST_POKEMON_DETAIL_FAILED, REQUEST_POKEMON_DETAIL_SUCCESS } from '../constans'

const initialState = {
  dataList: [],
  message: '',
  request: false,
  requestFailed: false,
  requestSuccess: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POKEMON_DETAIL: {
      return {
        ...state,
        message: '',
        request: true,
      }
    }
    case REQUEST_POKEMON_DETAIL_SUCCESS: {
      const { pokemonDetail, message } = action.payload
      const dataList = state.dataList.concat([pokemonDetail])
      const uniqDataList = uniqBy(dataList, 'name')
      return {
        ...state,
        dataList: uniqDataList,
        message,
        request: false,
        requestFailed: false,
        requestSuccess: true,
      }
    }
    case REQUEST_POKEMON_DETAIL_FAILED: {
      const { message } = action.payload
      return {
        ...state,
        message,
        request: false,
        requestFailed: false,
        requestSuccess: true,
      }
    }
    default:
      return state
  }
}
