import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.highlightedFontColor,
    marginTop: '10%',
  },
  scroll: {
    marginTop: '5%',
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
    fontWeight: '500',
    color: colors.primaryFontColor,
  },
  label: {
    fontSize: 18,
    color: colors.titleFontColor,
    fontWeight: 'bold',
  },
  input: {
    padding: 5,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
    backgroundColor: colors.inputBackgroundColor,
    color: colors.secondaryFontColor,
    shadowColor: '#000',
    height: 45,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 1 },
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
    marginTop: '5%',
    padding: 10,
    borderRadius: 8,
  },
  textButtonSale: {
    color: colors.titleFontColor,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textError: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 25,
    marginTop: 10,
    color: colors.errorFontColor,
    height: 25,
  },
  inputSelect: {},
});

export { styles };
