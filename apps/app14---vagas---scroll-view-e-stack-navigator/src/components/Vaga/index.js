import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Vaga(props) {

  const navigation = useNavigation();

  function irDetalhes(){
      navigation.navigate('Detalhes', { titulo: props.titulo, salario: props.salario, descricao: props.descricao, contato: props.contato });
  }


  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.text}>Salário: {props.salario}</Text>
        <Text style={styles.text}>Descrição: {props.descricao}</Text>
        <Text style={styles.text}>Contato: {props.contato}</Text>
        <Button title="Saiba mais" color="#1B0D80" onPress={irDetalhes}/>
      </View>
    </View>
  );
}