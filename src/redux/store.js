import { createStore, applyMiddleware } from 'redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import RootNavigation from '../navigation'
import appReducer from './reducer'
import handleBackAndroid from '../utils/handleBackAndroid'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer'],
}

const navMidleware = createReactNavigationReduxMiddleware('root', state => state.nav)

const logger = __DEV__ ? createLogger() : () => null
const promiseMidleware = promise()

const App = reduxifyNavigator(RootNavigation, 'root')
const mapStateToProps = state => ({
  state: state.nav,
})
const AppWithNavigationState = connect(mapStateToProps)(handleBackAndroid(App))

let createStoreWithMiddleware = null
if (__DEV__) {
  createStoreWithMiddleware = applyMiddleware(navMidleware, promiseMidleware, thunk, logger)(
    createStore,
  )
} else {
  createStoreWithMiddleware = applyMiddleware(navMidleware, promiseMidleware, thunk)(createStore)
}

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = createStoreWithMiddleware(persistedReducer)

export default () => {
  const persistor = persistStore(store)
  return { store, persistor, AppWithNavigationState }
}
