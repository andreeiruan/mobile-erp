import React from 'react';

import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import useAuth from '../../hooks/useAuth';

const Settings: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          width: '50%',
          backgroundColor: '#333',
          marginTop: '50%',
          padding: 15,
          borderRadius: 8,
        }}
        onPress={signOut}
      >
        <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
          Sair
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;
