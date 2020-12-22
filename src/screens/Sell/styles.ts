import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputSearch: {
    fontSize: 20,
    borderBottomWidth: 1,
    width: '70%',
    marginLeft: '10%',
    marginTop: '10%',
  },
  scrollProducts: {
    marginTop: 30,
  },
  boxProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0.5,
    marginVertical: 5,
    borderRadius: 5,
  },
  textName: {
    fontSize: 16,
  },
  textValue: {
    fontSize: 15,
  },
  buttonAdd: {},
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    bottom: 0,
    width: '100%',
    borderTopWidth: 0.5,
    shadowColor: colors.borderColors,
    shadowOpacity: 20,
    shadowOffset: { width: 0, height: -1 },
    paddingVertical: 15,
  },
  buttonCart: {
    marginRight: 20,
    flexDirection: 'row',
  },
  boxPriceText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: '5%',
  },
  money: {
    fontSize: 16,
    color: '#fff',
    marginRight: 5,
  },
  priceCart: {
    color: '#fff',
    fontSize: 20,
  },
  iconCart: {
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 0 },
  },
  numberItemsCart: {
    color: '#fff',
    marginTop: -5,
    marginLeft: -5,
    fontSize: 10,
  },
});

export { styles };
