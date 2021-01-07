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
    marginTop: 15,
  },
  boxForm: {
    width: '100%',
    alignItems: 'center',
    margin: 0,
    marginBottom: '10%',
  },
  boxInput: {
    width: '80%',
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: colors.inputBackgroundColor,
    borderRadius: 5,
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
  textForgotPassword: {
    fontSize: 16,
    color: colors.primaryFontColor,
    textAlign: 'center',
    marginTop: 5,
  },
  textSignUp: {
    fontSize: 16,
    color: colors.primaryFontColor,
    textAlign: 'center',
    marginTop: '20%',
  },
  textError: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: '2%',
    color: colors.errorFontColor,
  }
  ,
});
