import styled from 'styled-components/native';
import { colors } from '../../styles.global';

export const BoxProduct = styled.View`
  flex-direction: row;
`;
export const TextProduct = styled.Text`
  font-size: 16px;
  margin: 0 8px;
  max-width: 31%;
  color: ${colors.textPrimaryColors}
`;
