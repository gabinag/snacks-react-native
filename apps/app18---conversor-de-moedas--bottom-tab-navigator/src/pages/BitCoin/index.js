import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [valor, setValor] = useState(0)
  const [resultado, setResultado] = useState()

  function converter() {
    setResultado((valor * 0.0000033).toFixed(2))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas - Dólar, Euro e BitCoin</Text>
      <TextInput style={styles.input} placeholder="Digite um valor em R$" onChangeText={setValor}/>
    <Button title="Converter" onPress={converter} color='green'/>
    <Text style={styles.resultado}> Resultado: ₿ {resultado}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 15
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 8,
    paddingVertical: 10,
    marginBottom: 10
  },
  resultado: {
    fontSize: 16,
    marginTop: 10
  }
});