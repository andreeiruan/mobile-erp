import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: colors.borderColors,
    bottom: 0,
    marginTop: '50%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  boxInfo: {
    marginLeft: 25,
    marginTop: '5%',
  },
  textNameProduct: {
    fontSize: 25,
    color: '#fff',
  },
  valueProduct: {
    fontSize: 20,
    color: '#fff',
  },
  inputDiscount: {
    marginTop: '5%',
    marginLeft: 25,
    fontSize: 20,
    borderBottomWidth: 1,
    width: '60%',
    borderColor: '#fff',
    color: '#fff',
  },
  boxAmount: {
    marginLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',

  },
  textAmount: {
    fontSize: 25,
    marginHorizontal: 10,
    color: '#fff',
  },
  money: {
    fontSize: 18,
    alignSelf: 'flex-end',
    color: '#fff',
    marginRight: 5,
  },
  buttonAmount: {},
  boxAmountTotal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountTotal: {
    alignSelf: 'flex-end',
    marginRight: 50,
    fontSize: 28,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
});

export { styles };
