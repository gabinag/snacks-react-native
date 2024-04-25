import {View, Text} from 'react-native';
import {styles} from './styles';

export default function Detalhes({route}) {

  const { titulo, salario, descricao, contato} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.desc}>Salário: {salario}</Text>
      <Text style={styles.desc}>{descricao}</Text>
      <Text style={styles.desc}>Contato: {contato}</Text>
    </View>
  );
}