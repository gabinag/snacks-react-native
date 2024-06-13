import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
import {styles} from './styles';
 
export default function Form({route}) {
  const [id, setId] = useState(route.params?.id)
  const [newTitle, setNewTitle] = useState(route.params?.title)
  const [newDescription, setNewDescription] = useState(route.params?.description)

  const navigation = useNavigation();

  const salvarTarefa = async () => {
    const body = JSON.stringify({title: newTitle, description: newDescription})

    if (id !== undefined){
      const response = await api.put(`/tasks/${id}`, body, {headers: {'Content-Type': 'application/json'}});
      await route.params?.atualizarLista()
    }
    else{
      const response = await api.post('/tasks', body, {headers: {'Content-Type': 'application/json'}});
      await route.params?.atualizarLista()
    }

    navigation.goBack()  
  }

 return (
   <View style={styles.container}>
     <Text style={styles.label}>Título:</Text>
     <TextInput
        style={styles.input}
        defaultValue={route.params?.title}
        onChangeText={(text)=> setNewTitle(text)}
      />
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={[styles.input, styles.desc]}
        defaultValue={route.params?.description}
        onChangeText={(text)=> setNewDescription(text)}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity onPress={salvarTarefa} style={styles.btn}>
        <Text style={styles.txtBtn}>Salvar</Text>
      </TouchableOpacity>
   </View>
  );
}


