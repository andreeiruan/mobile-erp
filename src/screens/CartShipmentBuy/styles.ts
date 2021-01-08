import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.highlightedFontColor,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  listProducts: {
    marginTop: '5%',
  },
  boxProduct: {
    marginVertical: 5,
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
    backgroundColor: colors.menuColor,
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameProduct: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.titleFontColor,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  discount: {
    fontSize: 16,
    color: colors.errorFontColor,
    fontWeight: 'bold',
  },
  unitaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  amountValue: {
    fontSize: 18,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  footer: {
    flexDirection: 'row',
  },
  boxPriceText: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  money: {
    fontSize: 16,
    alignSelf: 'flex-end',
    color: colors.titleFontColor,
    marginRight: 5,
    fontWeight: 'bold',
  },
  priceCart: {
    color: colors.titleFontColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSale: {
    width: '95%',
    alignSelf: 'center',
    marginTop: '10%',
    padding: 10,
    marginBottom: 30,
    // backgroundColor: colors.primaryFontColor,
    borderRadius: 8,
  },
  textButtonSale: {
    color: colors.titleFontColor,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export { styles };
