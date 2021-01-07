import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollProducts: {
    marginTop: 30,
    marginBottom: 70,
  },
  boxProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.menuColor,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 2 },
    elevation: 3,
  },
  column: {},
  boxTextProduct: {
    flexDirection: 'row',
  },
  textName: {
    fontSize: 16,
    color: colors.titleFontColor,
    fontWeight: '700',
  },
  textValue: {
    color: colors.primaryFontColor,
    fontSize: 15,
    marginRight: 15,
    fontWeight: '700',
  },
  buttonAdd: {},

});

export { styles };
