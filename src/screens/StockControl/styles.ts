import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    width: '60%',
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.highlightedFontColor,
  },
  boxOptions: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  buttonOption: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 5,
    marginTop: 20,
  },
  textOption: {
    fontSize: 22,
    color: colors.highlightedFontColor,
    fontWeight: '700',
  },
});
