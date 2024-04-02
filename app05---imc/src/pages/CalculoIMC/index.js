import {View, Text, Image, TextInput, Button} from 'react-native';
import {styles} from './styles';
import React, { useState } from 'react';

export default function AlcoolOuGasolina() {
  let img = 'https://saudesporte.com.br/wp-content/uploads/2013/12/imagem3-peso-ideal.png'
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState('')

  function Verificar() {
    const valor = peso/(altura*altura)
    setResultado(valor)
    if (valor < 18.5) {
      setResultado('Abaixo do peso')
    } else if (valor >= 18.5 && valor <= 24.9){
      setResultado('Peso normal')
    } else if (valor >= 25 && valor <= 29.9) {
      setResultado('Sobrepeso')
    } else if (valor >= 30 && valor <= 34.9) {
      setResultado('Obesidade grau I')
    } else if (valor >= 35 && valor <= 39.9) {
      setResultado('Obesidade grau II')
    } else {
      setResultado('Obesidade grau III ou Mórbida')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo do IMC</Text>
      <Image source={{uri: img}} style={styles.img}/>
      <TextInput style={styles.input} placeholder='Digite o seu peso' onChangeText={setPeso}/>
      <TextInput style={styles.input} placeholder='Digite a sua altura' onChangeText={setAltura}/>
      <Button title="Verificar" onPress={Verificar}></Button>
      <Text>{resultado}</Text>
    </View>
  );
}