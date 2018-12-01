import { createStackNavigator } from 'react-navigation'

import Color from '../utils/colors'
// SCREEN
import PokemonList from '../screens/PokemonList/PokemonList.container'
import PokemonDetail from '../screens/PokemonDetail/PokemonDetail.container'

const RootNavigation = createStackNavigator(
  {
    PokemonListScreen: PokemonList,
    PokemonDetailScreen: PokemonDetail,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Color.BURNT_SIENNA,
      },
      headerTitleStyle: {
        color: Color.WHITE,
      },
    },
  },
)

export default RootNavigation
