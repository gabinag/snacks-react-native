import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Picker, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {styles} from './styles';

export default function Conversor()  {
  const [data, setData] = useState({ USD: null, EUR: null, BTC: null });
  const [valor, setValor] = useState('');
  const [moeda1, setMoeda1] = useState('USD');
  const [moeda2, setMoeda2] = useState('BRL');
  const [valorConvertido, setValorConvertido] = useState(null);

  useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL')
      .then(response => {
        setData({
          USD: response.data.USDBRL.ask,
          EUR: response.data.EURBRL.ask,
          BTC: response.data.BTCBRL.ask,
        });
      })
  }, []);

  const converter = () => {
    const taxa = {
      USD: parseFloat(data.USD),
      EUR: parseFloat(data.EUR),
      BTC: parseFloat(data.BTC),
      BRL: 1
    };

    const daTaxa = taxa[moeda1];
    const paraTaxa = taxa[moeda2];

    const valorConvertido = (parseFloat(valor) * daTaxa) / paraTaxa;
    setValorConvertido(valorConvertido.toFixed(2));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View style={styles.wrap}>
        <Text style={styles.label}>Valor:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor"
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
        />
      </View>
      <View style={styles.wrap}>
        <Text style={styles.label}>De:</Text>
        <Picker
          selectedValue={moeda1}
          style={styles.input}
          onValueChange={(itemValue) => setMoeda1(itemValue)}
        >
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="BitCoin" value="BTC" />
          <Picker.Item label="Real" value="BRL" />
        </Picker>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.label}>Para:</Text>
        <Picker
          selectedValue={moeda2}
          style={styles.input}
          onValueChange={(itemValue) => setMoeda2(itemValue)}
        >
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="BitCoin" value="BTC" />
          <Picker.Item label="Real" value="BRL" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText} onPress={converter}>Converter</Text>
      </TouchableOpacity>
      {valorConvertido !== null && (
        <Text style={styles.text}>
          Valor Convertido: {valorConvertido} {moeda2}
        </Text>
      )}
    </View>
  );
}

