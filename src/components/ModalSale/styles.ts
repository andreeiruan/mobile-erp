import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  box: {
    height: '90%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  buttonClose: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  boxInfo: {
    width: '100%',
    borderRadius: 10,
    marginTop: 0,
    paddingBottom: 15,
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
    shadowColor: '#333',
    shadowOpacity: 2,
  },
  textNameClient: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primaryFontColor,
    marginLeft: 25,
    marginTop: 15,
  },
  boxInfoSale: {},
  textInfo: {
    fontSize: 18,
    color: colors.primaryFontColor,
    marginLeft: 25,
    fontWeight: '500',
  },
  textPayment: {
    fontSize: 18,
    color: colors.primaryFontColor,
    marginLeft: 25,
    fontWeight: '500',
  },
  boxPartial: {
    flexDirection: 'row',
    marginTop: 10,
  },
  boxDate: {
  },
  payment: {
    fontSize: 18,
    color: colors.primaryFontColor,
    marginLeft: 25,
    fontWeight: '500',
  },
  date: {
    fontSize: 18,
    color: colors.primaryFontColor,
    marginLeft: 25,
    fontWeight: '500',
  },
  footer: {
    width: '100%',
    padding: 10,
  },
  textSaleTotal: {
    fontWeight: '700',
    fontSize: 22,
    color: colors.highlightedFontColor,
  },
  textDiscount: {
    fontWeight: '500',
    fontSize: 18,
    color: colors.highlightedFontColor,
  },
});

export { styles };
