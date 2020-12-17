import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Label } from './styles'; // eslint-disable-line

export interface Props{
  label: string
  onPress(): void
}

const StandardButton: React.FC<Props> = ({ onPress, label }: Props) => (
  <Button activeOpacity={0.7} onPress={onPress}>
    <LinearGradient
      colors={['#2AB5D1', '#00C7C7']}
      style={{
        width: '85%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5,
      }}
    >
      <Label>{label}</Label>
    </LinearGradient>
  </Button>
);

export default StandardButton;
