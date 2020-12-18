import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background: #F0F0F0;
  margin-bottom: 25%;
`;

export const Logo = styled.Image`
`;

export const TextTitle = styled.TextInput`
  font-size: 25px;
  text-align: center;
  margin-top: 5%;
`;

export const TextError = styled.TextInput`
  font-size: 16px;
  text-align: center;
  margin-top: 2%;
  color: red;
`;

export const BoxForm = styled.View`
  width: 100%;
  align-items: center;
  margin: 0;
  margin-bottom: 10%;
`;

export const BoxInput = styled.View`
  border-bottom-width: 1px;
  border-color: #2ab5d1;
  width: 80%;
  flex-direction: row;
  height: 45px;
  align-items: center;
  margin-top: 20px;
`;

export const IconInput = styled.Image`
  margin-top: 5px;
`;

export const Input = styled.TextInput`
  margin-top: 10px;
  margin-left: 15px;
  font-size: 18px;
  height: 100%;
  width: 100%;
  color: #207D78;
`;
