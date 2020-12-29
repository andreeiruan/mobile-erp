import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    marginTop: '18%',
    width: '100%',
  },
  boxInput: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  buttonSelect: {
    width: '80%',
  },
  textSelect: {
    fontSize: 18,
    color: colors.primaryFontColor,
  },
  label: {
    fontSize: 22,
    color: colors.primaryFontColor,
    fontWeight: 'bold',
  },
  input: {
    padding: 5,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    backgroundColor: colors.inputBackgroundColor,
    color: colors.secondaryFontColor,
    shadowColor: '#000',
    shadowOpacity: 20,
    shadowOffset: { width: 3, height: 2 },
    elevation: 3,
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 20,
    shadowOffset: { width: 3, height: 2 },
    elevation: 3,
  },
  datePicker: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
    color: colors.secondaryFontColor,
    marginRight: 5,
    fontWeight: 'bold',
  },
  priceCart: {
    color: colors.secondaryFontColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSale: {
    width: '85%',
    alignSelf: 'center',
    marginTop: '10%',
    padding: 10,
    // backgroundColor: colors.primaryFontColor,
    borderRadius: 8,
  },
  textButtonSale: {
    color: colors.secondaryFontColor,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textError: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 5,
    color: colors.errorFontColor,
    height: 20,
  },
});

export { styles };
