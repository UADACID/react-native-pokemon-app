import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

import RootNavigation from '../../navigation'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetail'

const navReducer = createNavigationReducer(RootNavigation)

const appReducer = combineReducers({
  nav: navReducer,
  PokemonList,
  PokemonDetail,
})

export default appReducer
