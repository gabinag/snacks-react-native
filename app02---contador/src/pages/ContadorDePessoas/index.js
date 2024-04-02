import{Text, View, Button} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';

function ContadorDePessoas() {
  const [numero, setNumero] = useState(0)

  function Adicionar() {
    setNumero(numero + 1)
  }

  function Remover() {
    if (numero > 0) 
      setNumero(numero - 1)
  }

  return (
    <View style={{gap: 10}}>
      <Text style={styles.titulo}>Contador de pessoas</Text>
      <Text style={styles.numero}>{numero}</Text>
      <Button title="+" onPress={Adicionar} color="green"/>
      <Button title="-" onPress={Remover} color="red"/>
    </View>
  )

}

export default ContadorDePessoas;




