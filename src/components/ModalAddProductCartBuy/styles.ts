import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.menuColor,
    bottom: 0,
    borderTopStartRadius: 80,
    marginTop: '30%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 1 },
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.titleFontColor,
  },
  buttonClose: {
    marginRight: 10,
    marginTop: 10,
  },
  boxInput: {
  },
  boxForm: {
    backgroundColor: colors.menuColor,
    height: '100%',
    marginTop: 20,
    paddingTop: 20,
  },
  labelInput: {
    fontWeight: 'bold',
    width: '100%',
    fontSize: 18,
    color: colors.primaryFontColor,
    marginLeft: '10%',
    marginTop: 10,
  },
  input: {
    marginLeft: '10%',
    marginTop: 10,
    fontSize: 16,
    height: 35,
    width: '80%',
    color: colors.secondaryFontColor,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: colors.inputBackgroundColor,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 1 },
    elevation: 3,
    marginBottom: 20,
  },
  boxInfo: {
    marginLeft: '10%',
    marginTop: '5%',
  },
  textNameProduct: {
    fontSize: 20,
    marginTop: '10%',
    fontWeight: 'bold',
    color: colors.titleFontColor,
  },
  valueProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.titleFontColor,
  },
  boxAmount: {
    marginLeft: '10%',
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
    marginLeft: '10%',
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
    marginLeft: '10%',
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
});

export { styles };
