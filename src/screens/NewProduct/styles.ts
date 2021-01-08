import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.highlightedFontColor,
    marginTop: 25,
  },
  boxForm: {
    marginTop: '10%',
    width: '100%',
  },
  boxInput: {
    width: '80%',
    marginTop: 20,
    alignSelf: 'center',
  },
  label: {
    fontSize: 22,
    color: colors.primaryFontColor,
    fontWeight: '500',
  },
  input: {
    height: 40,
    backgroundColor: colors.menuColor,
    borderRadius: 5,
    shadowColor: '#222',
    shadowOpacity: 0.3,
    elevation: 3,
    shadowOffset: { width: 2, height: 1 },
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: colors.primaryFontColor,
  },
  boxAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  textAmount: {
    fontSize: 25,
    marginHorizontal: 10,
    color: colors.primaryFontColor,
    width: 33,
    textAlign: 'center',
  },
  buttonAmount: {
    backgroundColor: colors.menuColor,
    borderRadius: 5,
    shadowColor: '#222',
    shadowOpacity: 0.3,
    elevation: 3,
    shadowOffset: { width: 2, height: 1 },
    marginHorizontal: 5,
  },
  buttonSave: {
    position: 'absolute',
    bottom: '7%',
    width: '90%',
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  textSave: {
    color: colors.highlightedFontColor,
    fontSize: 18,
    fontWeight: '500',
    width: '60%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textError: {
    fontSize: 16,
    color: colors.errorFontColor,
    position: 'absolute',
    bottom: '2%',
    alignSelf: 'center',
    fontWeight: '500',
  },
});
