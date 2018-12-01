import React from 'react'
import {
  View, ActivityIndicator, TouchableOpacity, Text, FlatList, RefreshControl,
} from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'native-base'

import styles from './PokemonList.style'
import Color from '../../utils/colors'
import getAllPokemonUrl from '../../utils/apiList'

export default class PokemonList extends React.Component {
  static navigationOptions = {
    title: 'List Name of Pokemon',
  }

  componentDidMount() {
    this.onRequest()
  }

  onRequest = () => {
    const { getAllPokemon } = this.props
    const firstUrl = getAllPokemonUrl
    getAllPokemon(firstUrl)
  }

  onEndReached = () => {
    const {
      next, count, dataList, paginationGetAllPokemon, request,
    } = this.props
    if (dataList.length < count && !request) {
      paginationGetAllPokemon(next)
    }
  }

  onPressItem = item => () => {
    const { navigation } = this.props
    navigation.navigate('PokemonDetailScreen', { item })
  }

  renderItem = ({ item }) => (
    <TouchableOpacity style={styles.containerItem} onPress={this.onPressItem(item)}>
      <Text style={styles.name}>{item.name}</Text>
      <Icon name="ios-arrow-forward-outline" />
    </TouchableOpacity>
  )

  renderFooter = () => {
    const { dataList, request } = this.props
    if (dataList.length > 0 && request) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator color={Color.BURNT_SIENNA} />
        </View>
      )
    }
    return null
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    const { dataList, request } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={dataList}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          onEndReachedThreshold={0.2}
          onEndReached={this.onEndReached}
          ListFooterComponent={this.renderFooter}
          refreshControl={<RefreshControl refreshing={dataList.length === 0 && request} onRefresh={this.onRequest} />}
        />
      </View>
    )
  }
}

PokemonList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  getAllPokemon: PropTypes.func.isRequired,
  paginationGetAllPokemon: PropTypes.func.isRequired,
  dataList: PropTypes.arrayOf(PropTypes.object).isRequired,
  request: PropTypes.bool.isRequired,
  next: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}
