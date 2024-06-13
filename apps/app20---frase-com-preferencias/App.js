import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [dark, setDark] = useState(false);
  const [little, setLittle] = useState(false);

  useEffect(() => {
    const recuperarSwitches = async () => {
      const tema = await AsyncStorage.getItem('tema');
      setDark(tema === 'dark');

      const tamanho = await AsyncStorage.getItem('tamanho');
      setLittle(tamanho === 'little');
    };

    recuperarSwitches();
  }, []);

  const gravaTema = async () => {
    const novoTema = !dark ? 'dark' : 'light';
    setDark(!dark);
    await AsyncStorage.setItem('tema', novoTema);
  };

  const gravaTamanho = async () => {
    const novoTamanho = !little ? 'little' : 'normal';
    setLittle(!little);
    await AsyncStorage.setItem('tamanho', novoTamanho);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frases</Text>
      <View style={{flexDirection: 'row', gap: 40, marginBottom: 15}}>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
          <Switch style={{marginLeft: 5}}
            value={dark}
            onValueChange={gravaTema}
            thumbColor='gray'
        />
        </View>
          <View style={{flexDirection: 'row'}}>
          <Text>Pequeno</Text>
          <Switch style={{marginLeft: 5}}
            value={little}
            onValueChange={gravaTamanho}
            thumbColor='gray'
          />
        </View>
      </View>
      <View style={[styles.wrapContent, dark && styles.darkBackground]}>
        <Text style={little && styles.littleText}>"A vingança nunca é plena, mata a alma e envenena" (Seu Madruga)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#CCEBD7'
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 20,
    color: '#009688'
  },
  wrapContent: {
    padding: 10,
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#009688' 
  },
  darkBackground: {
    backgroundColor: '#ACADAE'
  },
  littleText: {
    fontSize: 10
  }
});

