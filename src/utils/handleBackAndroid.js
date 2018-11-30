import React, { Component } from 'react'
import { BackHandler, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

const handleBackAndroid = (StackComponent) => {
  class CustomHandleBackAndroid extends Component {
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }

    handlingUnAuthNavigation = (firstIndex: number) => {
      const { dispatch } = this.props
      if (firstIndex === 0) {
        return false
      }
      dispatch(NavigationActions.back())
      return true
    }

    handlingAuthNavigation = ({ firstIndex, firstRoute }) => {
      const { dispatch } = this.props
      const { index } = firstRoute[firstIndex]
      if (index === 0) {
        return false
      }
      dispatch(NavigationActions.back())
      return true
    }

    onBackPress = () => {
      const { state } = this.props
      const { index, routes } = state
      const firstRouteName = routes[index].routeName
      const firstIndex = routes[index].index
      const firstRoute = routes[index].routes
      switch (firstRouteName) {
        case 'UnAuthNavigation':
          return this.handlingUnAuthNavigation(firstIndex)
        case 'AuthNavigation':
          return this.handlingAuthNavigation({ firstIndex, firstRoute })
        default:
          return false
      }
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <StackComponent {...this.props} />
        </View>
      )
    }
  }

  return CustomHandleBackAndroid
}

export default handleBackAndroid
