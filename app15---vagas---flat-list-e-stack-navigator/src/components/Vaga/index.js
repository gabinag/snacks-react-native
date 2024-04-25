import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Vaga(props) {

  const navigation = useNavigation();

  function irDetalhes(){
      navigation.navigate('Detalhes', { titulo: props.data.titulo, salario: props.data.salario, descricao: props.data.descricao, contato: props.data.contato });
  }

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.titulo}>{props.data.titulo}</Text>
        <Text style={styles.text}>Salário: {props.data.salario}</Text>
        <Text style={styles.text}>Descrição: {props.data.descricao}</Text>
        <Text style={styles.text}>Contato: {props.data.contato}</Text>
        <Button title="Saiba mais" color="#1B0D80" onPress={irDetalhes}/>
      </View>
    </View>
  );
}