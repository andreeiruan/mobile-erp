import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  Modal, Text, TouchableOpacity, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';

import { colors } from '../../styles.global';
import api from '../../services/api';

interface IProduct{
  id: string
  name: string
  brand: string
  saleValue: number
  amount: number
  userId: string
  createdAt: string
  updatedAt: string
}

interface Props{
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  product: IProduct
}

const ModalEditProduct: React.FC<Props> = ({ visible, setVisible, product }: Props) => {
  const [name, setName] = useState<string>();
  const [saleValue, setSaleValue] = useState<number | string>();

  const createdAt = new Date(product?.createdAt).toLocaleDateString();
  const updatedAt = new Date(product?.updatedAt).toLocaleDateString();
  const [productCreated, setProductCreated] = useState<string>(createdAt);
  const [productUpdated, setProductUpdated] = useState<string>(updatedAt);

  const [error, setError] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    if (product?.createdAt) {
      setProductCreated(new Date(product.createdAt).toLocaleDateString());
    }

    if (product?.updatedAt) {
      setProductUpdated(new Date(product.updatedAt).toLocaleDateString());
    }

    setSaleValue(product.saleValue);
    setName(product.name);
    setError('');
  }, [product]);

  async function handleUpdate() {
    setLoad(true);
    if (!name) {
      setError('O produto precisa ter um nome');
      setLoad(false);
      return;
    }

    if (!saleValue) {
      setError('O produto precisa ter uma valor de venda');
      setLoad(false);
      return;
    }

    if (name === product.name && saleValue === product.saleValue) {
      setLoad(false);
      setVisible(false);
      return;
    }

    try {
      const { status } = await api.patch(`/products/${product.id}`, {
        name: name !== product.name ? name : undefined,
        saleValue: saleValue !== product.saleValue ? saleValue : undefined,
      });

      if (status !== 202) {
        setError('Houve um erro inexperado');
        setLoad(false);
        return;
      }

      setVisible(false);
      setLoad(false);
    } catch {
      setError('Houve um erro inexperado');
      setLoad(false);
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent
      style={styles.containerModal}
      visible={visible}
    >
      {product && (
        <View
          style={styles.box}
        >

          <View style={styles.container}>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setVisible(!visible)}
              style={styles.buttonClose}
            >
              <AntDesign
                name="closecircleo"
                size={45}
                color={colors.primaryColorLinear[0]}
              />
            </TouchableOpacity>

            <View
              style={styles.boxForm}
            >
              <View style={styles.boxInput}>
                <Text style={styles.label}>Nome do produto</Text>

                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                />
              </View>

              <View style={styles.boxInput}>
                <Text style={styles.label}>Valor de venda</Text>

                <TextInput
                  style={styles.input}
                  value={String(saleValue)}
                  onChangeText={setSaleValue}
                />
              </View>

              <View style={styles.boxInput}>
                <Text style={styles.label}>Data da criação</Text>

                <TextInput
                  style={styles.input}
                  value={productCreated}
                  editable={false}
                />
              </View>

              <View style={styles.boxInput}>
                <Text style={styles.label}>Última atualização</Text>

                <TextInput
                  style={styles.input}
                  value={productUpdated}
                  editable={false}
                />
              </View>

            </View>

            <TouchableOpacity
              style={styles.buttonUpdate}
              activeOpacity={0.7}
              onPress={handleUpdate}
              disabled={!!load}
            >
              <LinearGradient
                colors={colors.primaryColorLinear}
                style={styles.linearUpdateButton}
              >
                <Text style={styles.textUpdate}>Atualizar</Text>
              </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.textError}>{error}</Text>

          </View>

        </View>
      )}

    </Modal>
  );
};

export default ModalEditProduct;
