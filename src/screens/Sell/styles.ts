import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelSearch: {
    marginTop: '22%',
    marginLeft: '8%',
    color: colors.primaryFontColor,
    fontWeight: '700',
    fontSize: 22,
  },
  inputSearch: {
    fontSize: 20,
    marginTop: 5,
    width: '85%',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.inputBackgroundColor,
    shadowColor: '#000',
    shadowOpacity: 20,
    shadowOffset: { width: 3, height: 2 },
    elevation: 3,
  },
  scrollProducts: {
    marginTop: 30,
  },
  boxProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.menuColor,
    shadowColor: '#000',
    shadowOpacity: 20,
    shadowOffset: { width: 3, height: 2 },
    elevation: 3,
  },
  boxTextProduct: {
    flexDirection: 'row',
  },
  textName: {
    fontSize: 16,
    color: colors.primaryFontColor,
    fontWeight: '700',
  },
  textValue: {
    color: colors.primaryFontColor,
    fontSize: 15,
    marginRight: 15,
    fontWeight: '700',
  },
  buttonAdd: {},
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primaryColorLinear[1],
    bottom: 0,
    width: '100%',
    borderTopWidth: 0.5,
    shadowOpacity: 20,
    shadowOffset: { width: 0, height: -1 },
    paddingVertical: 15,
  },
  buttonCart: {
    marginRight: 20,
    flexDirection: 'row',
  },
  boxPriceText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: '5%',
  },
  money: {
    fontSize: 16,
    color: colors.secondaryFontColor,
    fontWeight: 'bold',
    marginRight: 5,
  },
  priceCart: {
    color: colors.secondaryFontColor,
    fontWeight: 'bold',
    fontSize: 24,
  },
  iconCart: {
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 0 },
  },
  numberItemsCart: {
    color: colors.secondaryFontColor,
    fontWeight: 'bold',
    marginTop: -5,
    marginLeft: -5,
    fontSize: 10,
  },
});

export { styles };
