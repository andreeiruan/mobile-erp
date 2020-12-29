import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '25%',
  },
  boxInfoSales: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '15%',
    alignSelf: 'center',
    width: '95%',
    height: 170,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: colors.menuColor,
    shadowOpacity: 20,
    shadowOffset: { width: 3, height: 5 },
  },
  boxInfo: {
    marginTop: -20,
    width: '80%',
  },
  titleInfo: {
    fontSize: 22,
    alignSelf: 'center',
    color: colors.highlightedFontColor,
    fontWeight: '700',
  },
  textInfo: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5,
    color: colors.highlightedFontColor,
    fontWeight: '500',
  },
  flatListSales: {
    marginTop: '22%',
  },
  boxSale: {
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
  textDateSale: {
    fontSize: 22,
    color: colors.primaryFontColor,
    fontWeight: '700',
  },
  buttonSale: {
    height: 45,
    borderRadius: 5,
    marginTop: 10,
  },
  shadow: {
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
    shadowColor: '#222',
    shadowOpacity: 1,
  },
  sale: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  textSales: {
    fontSize: 18,
    color: colors.primaryFontColor,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginRight: 10,
    color: colors.highlightedFontColor,
  },
});

export { styles };
