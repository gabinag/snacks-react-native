import {View, Text, Image, TextInput, Button} from 'react-native';
import {styles} from './styles';
import React, { useState } from 'react';

export default function AlcoolOuGasolina() {
  let img = 'https://media.istockphoto.com/id/1308986719/pt/foto/yellow-question-mark-on-a-background-of-black-signs-faq-concept.jpg?s=612x612&w=0&k=20&c=8yKGGnYD7TAkshJXTDLE_A_MulKfW7bV9lXtra6y52g='
  const [resultado, setResultado] = useState('')

  function Verificar() {
    setResultado(Math.floor(Math.random()*11))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo do Número Aleatório</Text>
      <Image source={{uri: img}} style={styles.img}/>
      <Text>Pense em um número de 0 a 10</Text>
      <Text style={styles.resultado}>{resultado}</Text>
      <Button title="Descobrir" onPress={Verificar}></Button>
    </View>
  );
}