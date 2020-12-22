import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { colors } from '../../styles.global';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.backgroundColor};
`;

export const BoxSearch = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 15%;
`;

export const TextSearch = styled.Text`
  font-size: 20px;
`;

export const InputSearch = styled.TextInput`
  border-bottom-width: 1px;
  margin-top: 10px;
  font-size: 22px;
  padding-left: 5px;
  width: 70%;
`;

export const ScrollProducts = styled.ScrollView`
  width: 95%;
  align-self: center;
  margin-top: 25px;
`;

export const BoxProduct = styled(LinearGradient)`
  margin: 5px 10px;
  padding: 10px 10px;
  border-radius: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.View``;

export const TextName = styled.Text`
  color: ${colors.textPrimaryColors};
  font-size: 22px;
  `;

export const TextBrand = styled.Text`
  color: ${colors.textPrimaryColors};
  font-size: 20px;
`;

export const TextValue = styled.Text`
  color: ${colors.textPrimaryColors};
  font-size: 18px;
  `;

export const TextAmount = styled.Text`
  align-self: flex-end;
  font-size: 18px;
  color: ${colors.textPrimaryColors};
`;
