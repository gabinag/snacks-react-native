import {View, Text, Image, TextInput, Button} from 'react-native';
import {styles} from './styles';
import React, { useState } from 'react';

export default function AlcoolOuGasolina() {
  let img = 'https://leismunicipais.com.br/noticias/wp-content/uploads/2013/10/201310161-1.jpg'
  const [alcool, setAlcool] = useState(0)
  const [gasolina, setGasolina] = useState(0)
  const [resultado, setResultado] = useState('')

  function Verificar() {
    const valor = alcool/gasolina
    setResultado(valor)
    if (valor > 0.7) {
      setResultado('É melhor abastecer com gasolina')
    } else {
      setResultado('É melhor abastecer com álcool')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>
      <Image source={{uri: img}} style={styles.img}/>
      <TextInput style={styles.input} placeholder='Digite o preço do álcool' onChangeText={setAlcool}/>
      <TextInput style={styles.input} placeholder='Digite o preço da gasolina' onChangeText={setGasolina}/>
      <Button title="Verificar" onPress={Verificar}></Button>
      <Text>{resultado}</Text>
    </View>
  );
}