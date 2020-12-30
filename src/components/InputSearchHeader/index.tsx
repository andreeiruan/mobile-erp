import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { Dispatch, SetStateAction } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../styles.global';

interface Props{
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const InputSearchHeader: React.FC<Props> = ({ search, setSearch }) => (
  <LinearGradient
    colors={colors.primaryColorLinear}
    style={styles.header}
  >
    <View style={styles.boxSearch}>
      <Text style={styles.label}>Pesquisa</Text>
      <View style={styles.boxInput}>
        <FontAwesome
          name="search"
          style={styles.iconInput}
          size={24}
          color={colors.secondaryFontColor}
        />
        <TextInput
          placeholder="Pesquisa ..."
          value={search}
          onChangeText={setSearch}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          keyboardType="email-address"
          style={styles.inputSearch}
        />
      </View>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  header: {
    height: '25%',
  },
  boxSearch: {
    marginTop: '10%',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.highlightedFontColor,
    marginBottom: 10,
  },
  iconInput: {
    marginRight: 10,
  },
  boxInput: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackgroundColor,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#111',
    shadowOpacity: 0.3,
    elevation: 3,
  },
  inputSearch: {
    fontSize: 22,
  },
});

export default InputSearchHeader;
