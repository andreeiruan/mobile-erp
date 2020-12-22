import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputNameCliente: {
    marginTop: '5%',
    borderBottomWidth: 0.5,
    width: '60%',
    marginLeft: '10%',
    fontSize: 20,
    paddingLeft: 5,
  },
  boxDate: {
    marginLeft: '10%',
    marginTop: 15,
  },
  labelDate: {
    fontSize: 20,
  },
  datePicker: {
    marginTop: 10,
  },
  scrollProducts: {
    marginLeft: '10%',
    marginTop: '10%',
  },
  boxProduct: {
    borderWidth: 0.5,
    marginVertical: 5,
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameProduct: {
    fontSize: 18,
  },
  amount: {
    fontSize: 16,
  },
  discount: {
    fontSize: 16,
  },
  unitaryValue: {
    fontSize: 18,
  },
  amountValue: {
    fontSize: 18,
    alignSelf: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
  },
  boxPriceText: {
    flexDirection: 'row',
  },
  money: {
    fontSize: 16,
    alignSelf: 'flex-end',
    color: '#fff',
    marginRight: 5,
  },
  priceCart: {
    color: '#fff',
    fontSize: 18,
  },
  buttonSale: {
    width: '85%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
  },
  textButtonSale: {
    color: '#fff',
    fontSize: 18,
  },
  textError: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 5,
    color: 'red',
    height: 20,
  },
});

export { styles };
