import { connect } from 'react-redux'

import Splash from './PokemonDetail.screen'
import getDetailPokemon from '../../redux/action/PokemonDetail'

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps
  const { dataList } = state.PokemonDetail
  const item = navigation.getParam('item', null)
  const { name } = item
  const filterPokemonByName = dataList.filter(pokemon => pokemon.name === name)
  const pokemonDetail = filterPokemonByName.length ? filterPokemonByName[0] : null
  return {
    pokemonDetail,
  }
}

const mapDispatchToProps = dispatch => ({
  getDetailPokemon: targetUrl => dispatch(getDetailPokemon(targetUrl)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash)
