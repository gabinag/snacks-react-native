import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

export default function Tarefas({navigation}) {
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    const recuperarTarefa = async () => {
      const tarefaRecuperada = await AsyncStorage.getItem('tarefas');
      if (tarefaRecuperada) {
        setTarefas(JSON.parse(tarefaRecuperada));
      }
    };
    recuperarTarefa();
  }, []);

    const deletarTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
    AsyncStorage.setItem('tarefas', JSON.stringify(novasTarefas));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemTarefa}>
      <Text>{item.titulo}</Text>
      <TouchableOpacity onPress={() => deletarTarefa(index)}>
        <FontAwesome name="trash-o" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <FlatList
        data={tarefas}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CriaTarefas', { tarefas, setTarefas })}>
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
  itemTarefa: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
});