import { createStackNavigator } from 'react-navigation'

// SCREEN
import PokemonList from '../screens/PokemonList/PokemonList.container'
import PokemonDetail from '../screens/PokemonDetail/PokemonDetail.container'

const RootNavigation = createStackNavigator({
  PokemonListScreen: PokemonList,
  PokemonDetailScreen: PokemonDetail,
})

export default RootNavigation
