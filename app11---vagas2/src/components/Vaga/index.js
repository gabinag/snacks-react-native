import {View, Text} from 'react-native';
import {styles} from './styles';

export default function Vaga(props) {

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.titulo}>{props.data.titulo}</Text>
        <Text style={styles.text}>Salário: {props.data.salario}</Text>
        <Text style={styles.text}>Descrição: {props.data.descricao}</Text>
        <Text style={styles.text}>Contato: {props.data.contato}</Text>
      </View>
    </View>
  );
}