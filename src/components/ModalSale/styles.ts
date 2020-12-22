import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { colors } from '../../styles.global';

export const ContainerModal = styled.Modal`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Box = styled(LinearGradient)`
  background: ${colors.backgroundColor};
  height: 90%;
  width: 100%;
  box-shadow: 0px 2px 5px #000;
  border-radius: 8px;
  bottom: 0;
`;

export const ButtonClose = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: 5px;
  margin-right: 5px;
`;

export const TextTitle = styled.Text`
  font-size: 35px;
  margin-left: 25px;
`;

export const BoxInfo = styled.View`
  margin-top: 15px;
`;

export const ScrollProducts = styled.ScrollView`
  margin-top: 15px;
  max-height: 65%;
`;

export const BoxValueSale = styled.View`
  font-size:  16px;
  height: 10%;
  width: 100%;
  bottom: 0;
  position: absolute;
  border-top-width: 1px;
  background: ${colors.backgroundColor};
  box-shadow: 0 2px 5px ${colors.borderColors};
`;

export const TextDiscount = styled.Text`
  font-size: 16px;
  margin-left: 25px;
`;

export const TextValueSale = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  margin-left: 25px;
`;
export const TextInfo = styled.Text`
  font-size: 18px;
  margin: 5px 0 0 25px;
`;
