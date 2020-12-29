import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.menuColor,
    bottom: 0,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: '40%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.primaryFontColor,
  },
  buttonClose: {
    marginRight: 20,
    marginTop: 10,
  },
  boxInput: {},
  labelInput: {
    fontWeight: 'bold',
    width: '100%',
    fontSize: 18,
    color: colors.primaryFontColor,
    marginLeft: '5%',
    marginTop: 10,
  },
  input: {
    marginLeft: '5%',
    marginTop: 10,
    fontSize: 18,
    width: '60%',
    color: colors.secondaryFontColor,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: colors.inputBackgroundColor,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 20,
    shadowOffset: { width: 3, height: 2 },
    elevation: 3,
  },
  boxInfo: {
    marginLeft: 25,
    marginTop: '5%',
  },
  textNameProduct: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  valueProduct: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  boxAmount: {
    marginLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  textAmount: {
    fontSize: 25,
    marginHorizontal: 10,
    color: colors.primaryFontColor,
  },
  money: {
    fontSize: 18,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: colors.primaryFontColor,
    marginRight: 5,
  },
  buttonAmount: {
    borderWidth: 0.3,
    borderRadius: 2,
    borderColor: colors.primaryFontColor,
  },
  boxAmountTotal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountTotal: {
    alignSelf: 'flex-end',
    marginRight: 50,
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.primaryFontColor,
  },

  boxDeliveried: {
    width: '100%',
    marginTop: 25,
  },
  boxButtonDeliveried: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonDeliveried: {
    marginLeft: '5%',
  },
  textButtonDeliveried: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  boxSchedule: {
    marginTop: 5,
    width: '100%',
  },
  datePicker: {
    marginLeft: '5%',
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
});

export { styles };
