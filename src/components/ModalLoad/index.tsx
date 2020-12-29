import React from 'react';
import {
  StyleSheet, Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';

import { colors } from '../../styles.global';

import Loading from '../../animations/loadPost.json';

interface Props {
  visible: boolean
}

const ModalLoad: React.FC<Props> = ({ visible }) => (
  <Modal
    animationType="fade"
    transparent
    visible={visible}
  >
    <LinearGradient
      style={styles.container}
      colors={colors.backgroundLinear}
    >
      <Lottie
        source={Loading}
        autoPlay
        resizeMode="center"
      />
    </LinearGradient>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default ModalLoad;
