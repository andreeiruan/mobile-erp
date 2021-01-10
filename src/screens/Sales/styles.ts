import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxInfoSales: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '25%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: colors.menuColor,
    shadowOpacity: 20,
    shadowOffset: { width: 3, height: 5 },
  },
  boxSelectMonth: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
    justifyContent: 'space-between',
  },
  boxInfo: {
    width: '70%',
  },
  scrollInfoValues: {
    position: 'absolute',
    height: '24%',
    top: '13%',
    padding: 15,
  },
  boxInfoValue: {
    padding: 15,
    width: 250,
    borderRadius: 5,
    height: '80%',
    margin: 15,
    backgroundColor: colors.menuColor,
    shadowColor: '#111',
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 1 },
  },
  titleInfo: {
    fontSize: 22,
    alignSelf: 'center',
    color: colors.highlightedFontColor,
    fontWeight: '700',
  },
  textInfo: {
    fontSize: 18,
    marginTop: 5,
    color: colors.primaryFontColor,
    fontWeight: '700',
  },
  flatListSales: {
    marginTop: '13%',
  },
  boxSale: {
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
  textDateSale: {
    fontSize: 20,
    color: colors.titleFontColor,
    fontWeight: '900',
  },
  buttonSale: {
    height: 80,
    borderRadius: 5,
    marginTop: 10,
    shadowOffset: { width: 3, height: 1 },
    shadowColor: '#222',
    shadowOpacity: 0.3,
    elevation: 3,
  },
  sale: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    borderRadius: 5,
    padding: 5,

  },
  textSales: {
    fontSize: 18,
    color: colors.primaryFontColor,
    fontWeight: '700',
  },
  textNameClient: {
    fontSize: 18,
    color: colors.titleFontColor,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    color: colors.titleFontColor,
  },
  column: {},
  buttonSell: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: colors.primaryColorLinear[0],
    borderRadius: 10,
  },
  boxSad: {
    marginTop: '35%',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  textSad: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.primaryFontColor,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export { styles };
