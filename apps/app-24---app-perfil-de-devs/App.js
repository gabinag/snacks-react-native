import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import api from './src/services/api'

export default function App(){
  const [userName, setUserName] = useState();
  const [dados, setDados] = useState([]);
  const [exibeInfos, setExibeInfos] = useState(false);

  const exibePerfil = async (userName) => {
    const response = await api.get('/' + userName);
    setDados(response.data);
    setExibeInfos(true);
  }

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Perfil dos Devs - GitHub</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
          style={styles.input}
          value={userName}
          onChangeText={(texto) => setUserName(texto)}
          underlineColorAndroid="transparent"
          placeholder="Digite um usuário do github"
          />
          <TouchableOpacity style={styles.btn} onPress={() => exibePerfil(userName)}>
            <Text style={{color: '#fff'}}>Exibir</Text>
          </TouchableOpacity>
        </View>
        {exibeInfos && (
          <>
            <Image 
              source={{uri: dados.avatar_url}}
              style={styles.image}
            ></Image>
            <Text style={styles.text}>Id: {dados.id}</Text>
            <Text style={styles.text}>Nome: {dados.name}</Text>
            <Text style={styles.text}>Repositórios: {dados.public_repos}</Text>
            <Text style={styles.text}>Criado em: {dados.created_at}</Text>
            <Text style={styles.text}>Seguidores: {dados.followers}</Text>
            <Text style={styles.text}>Seguindo: {dados.following}</Text>
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
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 20
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 100
  },
  input:{
    width: '80%',
    height: 40,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    marginBottom: 10
  },
  btn: {
    height: 40,
    padding: 10,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'purple',
    marginBottom: 15,
    marginLeft: 10
  },
  text: {
    marginBottom: 5
  }

});
