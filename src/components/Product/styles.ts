import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  boxProduct: {
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
    shadowColor: '#333',
    shadowOpacity: 2,
    backgroundColor: colors.menuColor,
    borderRadius: 5,
  },
  nameProduct: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: colors.primaryFontColor,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primaryFontColor,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export { styles };
