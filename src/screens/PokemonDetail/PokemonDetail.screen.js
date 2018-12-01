/* eslint-disable react/require-default-props */
import React from 'react'
import {
  View, ActivityIndicator, Text, Image, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import { Content } from 'native-base'

import styles from './PokemonDetail.style'
import Color from '../../utils/colors'

export default class PokemonDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('item', '....waiting')
    return {
      title: `Pokemon Detail ${title.name}`,
    }
  }

  componentDidMount() {
    const { navigation, getDetailPokemon } = this.props
    const item = navigation.getParam('item', null)
    if (item) {
      const { url } = item
      getDetailPokemon(url)
    }
  }

  renderContent = () => {
    const { pokemonDetail } = this.props
    const {
      name, sprites, abilities, height, moves, stats, weight, types,
    } = pokemonDetail
    return (
      <View style={styles.containerContent}>
        <Content>
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <View style={styles.wrapperImage}>
                <Image source={{ uri: sprites.front_default }} style={styles.image} resizeMode="cover" />
              </View>
            </View>
            <View style={styles.rightHeader}>
              <View style={styles.wrapperRightHeader}>
                <View>
                  <Text style={styles.title}>Name</Text>
                  <Text style={styles.subtitle}>{name}</Text>
                </View>
                <View>
                  <Text style={styles.title}>Height</Text>
                  <Text style={styles.subtitle}>{`${height}'`}</Text>
                </View>
                <View>
                  <Text style={styles.title}>Weight</Text>
                  <Text style={styles.subtitle}>{`${weight} lbs`}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerStatus}>
            <Text style={styles.label}>Stats</Text>
            <ScrollView>
              {stats.map(item => (
                <View style={styles.statusItem} key={item.stat.name}>
                  <View style={styles.leftStats}>
                    <Text style={styles.subtitle}>{item.stat.name}</Text>
                  </View>
                  <View style={styles.leftStats}>
                    <Text style={styles.valueStatusItem}>{item.base_stat}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.containerAbilties}>
            <Text style={styles.label}>Type</Text>
            <View style={styles.containerWrap}>
              {types.map(item => (
                <View key={item.type.name}>
                  <Text style={styles.textAbilty}>{item.type.name}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.containerAbilties}>
            <Text style={styles.label}>Ability</Text>
            <View style={styles.containerWrap}>
              {abilities.map(item => (
                <View key={item.ability.name}>
                  <Text style={styles.textAbilty}>{item.ability.name}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.containerAbilties}>
            <Text style={styles.label}>Moves</Text>
            <View style={styles.containerWrap}>
              {moves.map(item => (
                <View key={item.move.name}>
                  <Text style={styles.textAbilty}>{item.move.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </Content>
      </View>
    )
  }

  render() {
    const { pokemonDetail } = this.props
    return (
      <View style={styles.container}>
        {pokemonDetail ? (
          this.renderContent()
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator color={Color.BURNT_SIENNA} />
          </View>
        )}
      </View>
    )
  }
}

PokemonDetail.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
  getDetailPokemon: PropTypes.func.isRequired,
  pokemonDetail: PropTypes.shape({}),
}
