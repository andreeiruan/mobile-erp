import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';

import { Button, Label } from './styles'; // eslint-disable-line

import LoadButton from '../../animations/loadButton.json';

export interface Props{
  label: string
  onPress(): void
  load: boolean
}

const StandardButton: React.FC<Props> = ({ onPress, label, load }: Props) => (
  <Button activeOpacity={0.7} onPress={onPress} disabled={load}>
    <LinearGradient
      colors={['#2AB5D1', '#00C7C7']}
      style={{
        width: '85%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 0,
      }}
    >
      {load ? (
        <Lottie
          source={LoadButton}
          autoPlay
          resizeMode="contain"
          style={{ height: 150 }}
        />
      ) : <Label>{label}</Label> }

    </LinearGradient>
  </Button>
);

export default StandardButton;
