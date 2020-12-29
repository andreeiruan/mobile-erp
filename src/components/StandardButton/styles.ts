import { StyleSheet } from 'react-native';
import { colors } from '../../styles.global';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.highlightedFontColor,
    fontWeight: 'bold',
    fontSize: 25,
  },
});
