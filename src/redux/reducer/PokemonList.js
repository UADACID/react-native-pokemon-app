import {
  REQUEST_POKEMON,
  REQUEST_POKEMON_FAILED,
  REQUEST_POKEMON_SUCCESS,
  REQUEST_POKEMON_PAGINATION_FAILED,
  REQUEST_POKEMON_PAGINATION_SUCCESS,
} from '../constans'

const initialState = {
  dataList: [],
  next: '',
  count: 0,
  message: '',
  request: false,
  requestFailed: false,
  requestSuccess: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POKEMON: {
      return {
        ...state,
        message: '',
        request: true,
      }
    }
    case REQUEST_POKEMON_SUCCESS: {
      const {
        dataList, message, next, count,
      } = action.payload
      return {
        ...state,
        dataList,
        message,
        next,
        count,
        request: false,
        requestFailed: false,
        requestSuccess: true,
      }
    }
    case REQUEST_POKEMON_FAILED: {
      const { message } = action.payload
      return {
        ...state,
        message,
        request: false,
        requestFailed: true,
        requestSuccess: false,
      }
    }
    case REQUEST_POKEMON_PAGINATION_SUCCESS: {
      const {
        dataList, message, next, count,
      } = action.payload
      return {
        ...state,
        dataList: state.dataList.concat(dataList),
        message,
        next,
        count,
        request: false,
        requestFailed: false,
        requestSuccess: true,
      }
    }
    case REQUEST_POKEMON_PAGINATION_FAILED: {
      const { message } = action.payload
      return {
        ...state,
        message,
        request: false,
        requestFailed: true,
        requestSuccess: false,
      }
    }
    default:
      return state
  }
}
