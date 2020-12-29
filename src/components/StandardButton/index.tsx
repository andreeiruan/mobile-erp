import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';

import {styles } from './styles'; // eslint-disable-line

import LoadButton from '../../animations/loadButton.json';
import { colors } from '../../styles.global';

export interface Props{
  label: string
  onPress(): void
  load: boolean
}

const StandardButton: React.FC<Props> = ({ onPress, label, load }: Props) => (
  <TouchableOpacity
    style={styles.button}
    activeOpacity={0.7}
    onPress={onPress}
    disabled={load}
  >
    <LinearGradient
      colors={colors.primaryColorLinear}
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
      ) : <Text style={styles.label}>{label}</Text> }

    </LinearGradient>
  </TouchableOpacity>
);

export default StandardButton;
