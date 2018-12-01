import { connect } from 'react-redux'

import Splash from './PokemonList.screen'
import { getAllPokemon, paginationGetAllPokemon } from '../../redux/action/PokemonList'

const mapStateToProps = state => ({
  dataList: state.PokemonList.dataList,
  request: state.PokemonList.request,
  next: state.PokemonList.next,
  count: state.PokemonList.count,
})

const mapDispatchToProps = dispatch => ({
  getAllPokemon: targetUrl => dispatch(getAllPokemon(targetUrl)),
  paginationGetAllPokemon: targetUrl => dispatch(paginationGetAllPokemon(targetUrl)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash)
