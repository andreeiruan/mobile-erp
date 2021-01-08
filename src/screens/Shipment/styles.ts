import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxInfoSales: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '25%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: colors.menuColor,
    shadowOpacity: 20,
    shadowOffset: { width: 3, height: 5 },
  },
  boxSelectMonth: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    justifyContent: 'space-between',
  },
  boxInfo: {
    width: '70%',
  },
  boxInfoValue: {
    padding: 15,
    width: 250,
    borderRadius: 5,
    height: '15%',
    position: 'absolute',
    top: '16%',
    zIndex: 99,
    margin: 15,
    backgroundColor: colors.menuColor,
    shadowColor: '#111',
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 1 },
  },
  titleInfo: {
    fontSize: 24,
    alignSelf: 'center',
    color: colors.highlightedFontColor,
    fontWeight: '700',
  },
  textInfo: {
    fontSize: 20,
    marginTop: 5,
    color: colors.primaryFontColor,
    fontWeight: '700',
  },
  flatListShipments: {
    marginTop: '19%',
  },
  boxShipments: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  textDateSale: {
    fontSize: 20,
    color: colors.titleFontColor,
    fontWeight: '900',
  },
  buttonShipments: {
    height: 80,
    borderRadius: 5,
    marginTop: 0,
    shadowOffset: { width: 3, height: 1 },
    shadowColor: '#222',
    shadowOpacity: 0.3,
    elevation: 3,
  },
  shipment: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    borderRadius: 5,
    padding: 5,

  },
  textShipments: {
    fontSize: 18,
    color: colors.primaryFontColor,
    fontWeight: '700',
  },
  textProvider: {
    fontSize: 18,
    color: colors.titleFontColor,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
    color: colors.titleFontColor,
  },
  column: {},
  buttonSell: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: colors.primaryColorLinear[0],
    borderRadius: 10,
  },
  boxSad: {
    marginTop: '35%',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  textSad: {
    fontSize: 25,
    fontWeight: '500',
    color: colors.primaryFontColor,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export { styles };
