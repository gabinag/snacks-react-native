import {View, Text} from 'react-native';
import {styles} from './styles';

export default function Vaga(props) {

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.text}>Salário: {props.salario}</Text>
        <Text style={styles.text}>Descrição: {props.descricao}</Text>
        <Text style={styles.text}>Contato: {props.contato}</Text>
      </View>
    </View>
  );
}