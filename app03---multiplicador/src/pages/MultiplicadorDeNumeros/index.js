import { Text, View, TextInput, Button} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles'


export default function Multiplicador(){
  const [resultado, setResultado] = useState('')
  const [finput, setFinput] = useState('')
  const [sinput, setSinput] = useState('')

  function Calcular() {
    setResultado(finput * sinput)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicador de Números</Text>
      <TextInput style={styles.input} onChangeText={setFinput} placeholder='Digite um número'/>
      <TextInput style={styles.input} onChangeText={setSinput} placeholder='Digite um número'/>
      <Button title="Calcular" onPress={Calcular} color="purple"/>
      <Text>Resultado: {resultado}</Text>
    </View>
  )
}
