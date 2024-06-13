import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Button} from 'react-native';
import api from '../services/api';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './styles';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  async function fetchData() {
    await carregarTarefas()
    setLoading(false)
  }
  fetchData();
  }, []); 

  const carregarTarefas = async () => {
    const response = await api.get('/tasks')
    setTarefas(response.data)
  }

  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Add task', {atualizarLista: carregarTarefas});
  }

  if(loading){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
        <ActivityIndicator color="#09A6FF" size={40}/>
      </View>
    )
  } else{
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <TouchableOpacity onPress={irFormulario} style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={20} color="gray" />
          <Text style={styles.textBtn}>add task</Text>
        </TouchableOpacity>

        <FlatList
        data={tarefas}
        keyExtractor={item => item.id.toString() }
        renderItem={ ({item}) => <Card data={item} funcCarregarTarefas={carregarTarefas} /> }
        />
      </View>
    );
  }
}


