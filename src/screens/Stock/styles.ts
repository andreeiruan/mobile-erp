import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSearch: {
    marginTop: '20%',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
    marginBottom: 10,
  },
  iconInput: {
    marginRight: 10,
  },
  boxInput: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackgroundColor,
  },
  inputSearch: {
    fontSize: 22,
  },
  flatListProduct: {
    marginTop: '5%',
    width: '100%',
    alignSelf: 'center',
  },
  boxProduct: {
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: colors.menuColor,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#111',
    shadowOpacity: 2,
    elevation: 3,

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  textValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  textAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  buttonRegister: {
    width: '80%',
    padding: 15,
    backgroundColor: colors.primaryColor,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 5,
  },
  textRegister: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors.highlightedFontColor,
  },
});
