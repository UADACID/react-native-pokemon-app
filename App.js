import React from 'react'
import { View, Platform } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// import RootNavigation from './src/navigations'
import getStore from './src/redux/store'

const { store, persistor, AppWithNavigationState } = getStore()

export default () => (
  <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 20 : 0 }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWithNavigationState />
      </PersistGate>
    </Provider>
  </View>
)
