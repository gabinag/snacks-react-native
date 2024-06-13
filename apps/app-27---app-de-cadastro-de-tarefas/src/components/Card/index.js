import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {styles} from './styles';

function Card({data, funcCarregarTarefas}){
  const [id, setId] = useState(data?.id)
  const [title, setTitle] = useState(data?.title)
  const [description, setDescription] = useState(data?.description)

  const excluirTarefa = async () => {
    const response = await api.delete(`/tasks/${id}`);
    await funcCarregarTarefas();
  }

  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Add task', { id: id, title: title, description: description, atualizarLista: funcCarregarTarefas});
  }

  return(
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{title}</Text>
        <Text style={styles.descricao}>{description}</Text>
        <View style={styles.wrap}>
          <TouchableOpacity onPress={irFormulario}>
            <Feather name="edit-2" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={excluirTarefa}>
            <Feather name="trash-2" size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
 
export default Card;
