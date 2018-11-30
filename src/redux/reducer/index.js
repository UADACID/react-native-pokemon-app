import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

import RootNavigation from '../../navigation'

const navReducer = createNavigationReducer(RootNavigation)

const appReducer = combineReducers({
  nav: navReducer,
})

export default appReducer
