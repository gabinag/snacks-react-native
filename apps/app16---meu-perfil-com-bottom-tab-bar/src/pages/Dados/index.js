import{ScrollView, Text, TouchableOpacity, Linking, View} from 'react-native';
import {styles} from './styles';
import Imagem from '../../components/Image';
import { AntDesign } from '@expo/vector-icons';

function Dados() {
  const openGitHub = () => {
    Linking.openURL('https://github.com/gabinag') 
  };
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/gabriela-nagamuta/') 
  }
  return (
    <ScrollView style={styles.container}>
      <Imagem/>
      <Text style={styles.texto}>Olá, eu sou a Gabi! Estou me graduando em Sistemas para Internet na Fatec Rubens Lara. Atuo como Analista de Testes/QA e sou entusiasta de Front End, dedico meu tempo livre evoluindo meus estudos nessas áreas. Caso compartilhe dos mesmos interesses e/ou seja apaixonado por tech como eu, confira meus projetos pessoais e conecte-se comigo!</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
        <TouchableOpacity onPress={openGitHub} style={styles.button}>
          <AntDesign name="github" size={19} color="#fff" />
          <Text style={styles.txtButton}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openLinkedIn} style={styles.button}>
          <AntDesign name="linkedin-square" size={19} color="#fff" />
          <Text style={styles.txtButton}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Dados;