import React from 'react'
import { View, ActivityIndicator } from 'react-native'
// import PropTypes from 'prop-types'

import styles from './PokemonDetail.style'
import Color from '../../utils/colors'

export default class PokemonDetail extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={Color.BURNT_SIENNA} />
      </View>
    )
  }
}

PokemonDetail.propTypes = {}
