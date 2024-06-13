import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CriaItem({navigation, route}) {
  const [compra, setCompra] = useState('');
  const [qtd, setQtd] = useState('');
  const { compras, setCompras } = route.params;

  const handleChangeText = (input) => {
    const numericValue = input.replace(/[^0-9]/g, '');
    setQtd(numericValue);
  }

  const enviaCompra = async () => {
    if (compra.trim().length === 0 || qtd.trim().length === 0) {
      alert('Por favor, insira uma mercadoria e a sua quantidade!');
      return;
    }
    const todasCompras = [...compras, { titulo: compra, quantidade: qtd }];
    setCompras(todasCompras);
    await AsyncStorage.setItem('compras', JSON.stringify(todasCompras));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Mercadoria</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={(texto) => setCompra(texto)}
        value={compra} 
      />
      <Text style={styles.label}>Quantidade</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={handleChangeText}
        value={qtd} 
        keyboardType="numeric"
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={enviaCompra}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20
  },
  label: {
    fontWeight: '500',
    fontSize: 16
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 30
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 45,
    backgroundColor: 'gray',
    borderRadius: 100
  },
  btnText: {
    fontWeight: '500',
    color: '#fff'
  }
});