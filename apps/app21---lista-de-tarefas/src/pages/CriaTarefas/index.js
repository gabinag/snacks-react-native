import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CriaTarefas({navigation, route}) {
  const [tarefa, setTarefa] = useState('');
  const { tarefas, setTarefas } = route.params;

  const enviaTarefa = async () => {
    if (tarefa.trim().length === 0) {
      alert('Por favor, insira uma descrição na tarefa!');
      return;
    }
    const todasTarefas = [...tarefas, { titulo: tarefa }];
    setTarefas(todasTarefas);
    await AsyncStorage.setItem('tarefas', JSON.stringify(todasTarefas));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descreva a tarefa</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={(texto) => setTarefa(texto)}
        value={tarefa} 
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={enviaTarefa}>
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