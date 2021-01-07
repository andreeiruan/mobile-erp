import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListProduct: {
    marginTop: '5%',
    width: '100%',
    alignSelf: 'center',
  },
  boxProduct: {
    width: '90%',
    height: 80,
    alignSelf: 'center',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: colors.menuColor,
    shadowOffset: { width: 3, height: 1 },
    shadowColor: '#111',
    shadowOpacity: 0.3,
    elevation: 3,
  },
  column: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 15,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.titleFontColor,
  },
  textValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  textAmount: {
    fontSize: 14,
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
