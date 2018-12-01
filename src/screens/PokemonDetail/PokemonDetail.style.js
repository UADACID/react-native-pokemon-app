import { StyleSheet, Dimensions } from 'react-native'

import Color from '../../utils/colors'

const { width } = Dimensions.get('window')

const WIDTH_HEADER_PARTITION = width / 2

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  containerContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  leftHeader: {
    height: WIDTH_HEADER_PARTITION,
    width: WIDTH_HEADER_PARTITION,
    padding: 5,
  },
  wrapperImage: {
    backgroundColor: Color.CONCRETE,
  },
  wrapperRightHeader: {
    backgroundColor: Color.SCOOTER,
    paddingLeft: 15,
    justifyContent: 'space-around',
    height: WIDTH_HEADER_PARTITION - 5,
  },
  rightHeader: {
    height: WIDTH_HEADER_PARTITION,
    width: WIDTH_HEADER_PARTITION,
    padding: 5,
  },
  image: {
    height: WIDTH_HEADER_PARTITION - 5,
    width: WIDTH_HEADER_PARTITION - 5,
  },
  title: {
    fontSize: 20,
    color: Color.WHITE,
  },
  subtitle: {
    fontSize: 18,
    color: Color.BLACK,
  },
  containerStatus: {
    marginVertical: 15,
    width,
  },
  leftStats: {
    width: WIDTH_HEADER_PARTITION - 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightStats: {
    width: WIDTH_HEADER_PARTITION - 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusItem: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  valueStatusItem: {
    fontSize: 18,
    color: Color.SCOOTER,
  },
  label: {
    fontSize: 20,
    color: Color.BURNT_SIENNA,
    margin: 10,
  },
  containerAbilties: {},
  abilityItem: {
    backgroundColor: Color.SCOOTER,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 100,
  },
  textAbilty: {
    backgroundColor: Color.SCOOTER,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    color: Color.WHITE,
  },
  containerWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
