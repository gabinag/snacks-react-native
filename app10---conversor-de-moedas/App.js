import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [valor, setValor] = useState(0)
  const [moeda1, setMoeda1] = useState('')
  const [moeda2, setMoeda2] = useState('')
  const [resultado, setResultado] = useState()

  function converter() {
  let exibe;
  if (moeda1 === 'Real') {
    if (moeda2 === 'Dolar') {
      exibe = valor * 0.2
    } else if (moeda2 === 'Euro') {
      exibe = valor * 0.185
    } else {
      exibe = valor * 1
    }
  } else if (moeda1 === 'Dolar') {
    if (moeda2 === 'Real') {
      exibe = valor * 5
    } else if (moeda2 === 'Euro') {
      exibe = valor * 0.92
    } else {
      exibe = valor * 1  
    }
  } else if (moeda1 === 'Euro') {
    if (moeda2 === 'Real') {
      exibe = valor * 5.4  
    } else if (moeda2 === 'Dolar') {
      exibe = valor * 1.08  
    } else {
      exibe = valor * 1  
    }
  } else {
    exibe = valor * 1 
  }
  setResultado(exibe.toFixed(2))
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas - Dólar, Real e Euro</Text>
      <Text>Valor:
      <TextInput style={styles.input} placeholder="Digite um valor" onChangeText={setValor}/></Text>

    <Picker style={styles.picker}
      selectedValue={moeda1}
      onValueChange={(itemValue, itemIndex) => setMoeda1(itemValue)}
    >
      <Picker.Item key={0} value="" label="Selecione a moeda a ser convertida" />
      <Picker.Item key={1} value="Real" label="Real" />
      <Picker.Item key={2} value="Dolar" label="Dólar" />
      <Picker.Item key={3} value="Euro" label="Euro" />
    </Picker>

    <Picker style={styles.picker}
      selectedValue={moeda2}
      onValueChange={(itemValue, itemIndex) => setMoeda2(itemValue)}
    >
      <Picker.Item key={0} value="" label="Selecione a moeda final" />
      <Picker.Item key={1} value="Real" label="Real" />
      <Picker.Item key={2} value="Dolar" label="Dólar" />
      <Picker.Item key={3} value="Euro" label="Euro" />

    </Picker>
    <Button title="Converter" onPress={converter} color='green'/>
    <Text style={styles.resultado}>Resultado: {resultado}</Text>
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
    width: 110,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    marginLeft: 5,
    marginBottom: 10
  },
  picker: {
    marginBottom: 10,
    borderRadius: 30,
    padding: 2
  },
  resultado: {
    fontSize: 16,
    marginTop: 10
  }
});
