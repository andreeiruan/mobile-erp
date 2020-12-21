import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { colors } from '../../styles.global';

export const ContainerModal = styled.Modal`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled(LinearGradient)`
  background: ${colors.primaryColor};
  height: 75%;
  width: 98%;
  box-shadow: 0px 2px 5px #000;
  border-radius: 8px;
`;

export const ButtonClose = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: 5px;
  margin-right: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  align-self: center;
`;

export const BoxInfo = styled.View`
  flex-direction: row;
  align-items: center
`;

export const TextInfo = styled.Text`
  color: #fff;
  font-size: 22px;
  margin: 0 10px;
`;

export const TableHeader = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;

export const TextTableHeader = styled.Text`
  font-size: 18px;
  margin: 0 8px;
  color: ${colors.textPrimaryColors}
`;

export const Hr = styled.View`
  width: 100%;
  border-bottom-width: 2px;
  border-color: #fff;
`;
