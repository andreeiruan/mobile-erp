import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.highlightedFontColor,
    marginTop: '10%',
  },
  scroll: {
    marginTop: '5%',
    width: '100%',
  },
  boxInput: {
    marginTop: '10%',
    width: '90%',
    alignSelf: 'center',
  },
  buttonSelect: {
    width: '80%',
  },
  textSelect: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  label: {
    fontSize: 22,
    color: colors.titleFontColor,
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
    position: 'absolute',
    bottom: '10%',
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
    position: 'absolute',
    bottom: '2%',
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 5,
    color: colors.errorFontColor,
    height: 25,
    fontWeight: '700',

  },
  inputSelect: {},
});

export { styles };
