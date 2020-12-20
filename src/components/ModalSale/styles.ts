import styled from 'styled-components/native';

export const ContainerModal = styled.Modal`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  background: #2AB5D1;
  height: 75%;
  width: 95%;
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
  justify-content: flex-start;
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
`;
