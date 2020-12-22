import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { colors } from '../../styles.global';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const BoxInfoSales = styled(LinearGradient)`
  margin-top: 7%;
  width: 95%;
  align-self: center;
  justify-content: center;
  padding: 25px;
  border-radius: 18px;
`;

export const TextTitleSales = styled.Text`
  font-size: 22px;
  align-self: center;
  color: ${colors.textPrimaryColors};
`;

export const TextAmountSales = styled.Text`
  font-size: 35px;
  align-self: center;
  color: ${colors.textPrimaryColors};
`;

export const BoxSelectMonth = styled.View`
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin: 5px 0;
`;

export const ButtonMonth = styled.TouchableOpacity``;

export const ButtonPN = styled.TouchableOpacity``;

export const TextButton = styled.Text`
  font-size: 20px;
  color: ${colors.textPrimaryColors};
`;

export const ScrollSale = styled.ScrollView`
  margin-top: 25px;
  background: #F0F0F0;
  margin: 0;
`;

export const BoxDaySale = styled.View`
  margin-top: 10px;
`;

export const TextDateSale = styled.Text`
  color: ${colors.primaryColor};
  font-size: 25px;
  margin-left: 5%;
`;

export const BoxSale = styled(LinearGradient)`
  height: 100%;
  width: 90%;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px 15px;
  border-radius: 5px;
`;

export const ButtonSale = styled.TouchableOpacity`
  height: 45px;
  margin-top: 10px;
`;

export const TextSale = styled.Text`
  color: ${colors.textPrimaryColors};
  font-size: 18px;
`;
