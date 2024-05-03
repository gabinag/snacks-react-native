import{View, Text} from 'react-native';
import {styles} from '../../styles/styles';

function Formacao() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Graduanda em Sistemas para Internet</Text>
      <Text style={styles.text}>Habilidades desenvolvidas:</Text>
      <Text>💜 Lógica de Programação</Text>
      <Text>💜 Desenvolvimento Web / Mobile</Text>
      <Text>💜 Design</Text>
      <Text>💜 Acessibilidade</Text>
      <Text>💜 Segurança</Text>
      <Text>💜 Técnicas de SEO</Text>
      <Text>💜 Banco de Dados</Text>
      <Text>💜 Marketing</Text>
      <Text>💜 Gestão Empresarial</Text>
    </View>
  )
}

export default Formacao;