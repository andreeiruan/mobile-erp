import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

export const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    height: '85%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 85,
    backgroundColor: colors.backgroundBox,

  },
  buttonClose: {
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  boxForm: {
    width: '80%',
    borderRadius: 10,
    paddingBottom: 15,
    alignSelf: 'center',
  },
  boxInput: {
    alignSelf: 'center',
    width: '100%',
    marginTop: 15,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryFontColor,
  },
  input: {
    backgroundColor: colors.inputBackgroundColor,
    height: 45,
    borderRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#111',
    shadowOpacity: 0.3,
    elevation: 3,
    paddingLeft: 15,
    marginTop: 5,
    fontSize: 18,
  },
  buttonUpdate: {
    width: '80%',
    borderRadius: 5,
    marginTop: 35,
  },
  linearUpdateButton: {
    padding: 15,
    width: '100%',
    borderRadius: 5,
  },
  textUpdate: {
    color: colors.highlightedFontColor,
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
  },
  textError: {
    fontSize: 18,
    color: colors.errorFontColor,
    fontWeight: '700',
    marginTop: 10,
  },
});
