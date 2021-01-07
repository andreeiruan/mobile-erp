import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {},
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  boxForm: {
    width: '100%',
    alignItems: 'center',
    marginBottom: '10%',
  },
  boxInput: {
    backgroundColor: colors.inputBackgroundColor,
    width: '80%',
    borderRadius: 5,
    marginTop: 20,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#111',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 3 },
    elevation: 3,
  },
  iconInput: {
    marginTop: 5,
  },
  input: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 18,
    height: '100%',
    width: '100%',
    color: colors.secondaryFontColor,
  },
  textError: {
    fontSize: 18,
    color: colors.errorFontColor,
    fontWeight: '500',
    marginTop: 10,
  },
});
