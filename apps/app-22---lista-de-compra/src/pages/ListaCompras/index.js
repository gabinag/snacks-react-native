import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

export default function ListaCompras({navigation}) {
  const [compras, setCompras] = useState([])

  useEffect(() => {
    const recuperarCompra = async () => {
      const compraRecuperada = await AsyncStorage.getItem('compras');
      if (compraRecuperada) {
        setCompras(JSON.parse(compraRecuperada));
      }
    };
    recuperarCompra();
  }, []);

    const deletarCompra = (index) => {
    const novasCompras = compras.filter((_, i) => i !== index);
    setCompras(novasCompras);
    AsyncStorage.setItem('compras', JSON.stringify(novasCompras));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemCompra}>
      <Text>{item.titulo} ({item.quantidade})</Text>
      <TouchableOpacity onPress={() => deletarCompra(index)}>
        <FontAwesome name="trash-o" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <FlatList
        data={compras}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CriaItem', { compras, setCompras })}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 100,
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  btnText: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#fff'
  },
  itemCompra: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
});