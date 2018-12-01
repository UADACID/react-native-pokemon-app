import { StyleSheet } from 'react-native'

import Color from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  containerItem: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginHorizontal: 2,
    borderColor: Color.BLACK_HAZE,
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 30,
  },
  image: {
    height: 150,
    width: 150,
  },
  name: {
    fontSize: 18,
    color: Color.BLACK,
  },
  footer: {
    marginVertical: 30,
  },
})
