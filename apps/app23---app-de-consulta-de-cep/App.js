import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import api from './src/services/api'

export default function App(){
  const [cep, setCep] = useState(null);
  const [endereco, setEndereco] = useState([]);
  const [exibeInfos, setExibeInfos] = useState(false);

  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setEndereco(response.data);
    setExibeInfos(true);
  }

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Consulta de CEP</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
          style={styles.input}
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
          />
          <TouchableOpacity style={styles.cep} onPress={() => consultaCep(cep)}>
            <Text style={{color: '#fff'}}>Consultar</Text>
          </TouchableOpacity>
        </View>
        {exibeInfos && (
          <>
            <Text style={styles.endereco}>Cep: {endereco.cep}</Text>
            <Text style={styles.endereco}>Logradouro: {endereco.logradouro}</Text>
            <Text style={styles.endereco}>Bairro: {endereco.bairro}</Text>
            <Text style={styles.endereco}>Cidade: {endereco.localidade}</Text>
            <Text style={styles.endereco}>Estado: {endereco.uf}</Text>
          </>
        )}
      </View>    
    )
  }


const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  title: {
    marginBottom: 20,
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center'
  },
  endereco:{
    marginTop: 5
  },
  input:{
    height: 35,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  cep:{
    width: 100,
    marginLeft: 15,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'purple'
  }
});
