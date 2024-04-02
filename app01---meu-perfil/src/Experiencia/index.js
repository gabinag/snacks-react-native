import{View, Text} from 'react-native';
import {styles} from './styles';

function Experiencia() {

  let experiencia = 'QA/Analista de Testes (Estagiária)'
  
  return (
    <View>
      <Text style={styles.texto}>Experiência: {"\n"}{experiencia}</Text>
    </View>
  )
}

export default Experiencia