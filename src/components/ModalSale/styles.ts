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
    marginTop: '5%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    height: '90%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 85,
    backgroundColor: colors.menuColor,
    shadowColor: '#222',
    shadowOffset: { width: -2, height: -3 },
    shadowOpacity: 0.3,

  },
  buttonClose: {
    marginRight: 10,
    marginTop: 10,
  },
  boxInfo: {
    width: '80%',
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 0,
    paddingBottom: 15,
  },
  textNameClient: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.titleFontColor,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 20,
  },
  boxInfoSale: {},
  textInfo: {
    fontSize: 18,
    color: colors.titleFontColor,
    marginLeft: 20,
    fontWeight: '700',
  },
  textPayment: {
    fontSize: 18,
    color: colors.highlightedFontColor,
    marginLeft: 25,
    fontWeight: '700',
  },
  boxPartial: {
    flexDirection: 'row',
    marginTop: 10,
  },
  boxDate: {
  },
  footer: {
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  textSaleTotal: {
    fontWeight: '700',
    fontSize: 22,
    color: colors.highlightedFontColor,
  },
  textDiscount: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.highlightedFontColor,
  },
});

export { styles };
