import{View, Text} from 'react-native';
import {styles} from './styles';

function Dados() {
  let nome = 'Gabriela Nagamuta';
  let formacao = 'Sistemas para Internet';
  
  return (
    <View>
      <Text style={styles.texto}>Dados pessoais: {"\n"}{nome}</Text>
      <Text style={styles.texto}>Formação: {"\n"}{formacao}</Text>
    </View>
  )
}

export default Dados;