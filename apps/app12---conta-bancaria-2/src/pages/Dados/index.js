import { View, Text} from 'react-native';

export default function Dados( {route} ){

  return(
    <View style={{padding: 15}}>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Idade: {route.params?.idade}</Text>
      <Text>Sexo: {route.params?.sexo}</Text>
      <Text>Escolaridade: {route.params?.escolaridade}</Text>
      <Text>Limite: R${route.params?.limite.toFixed(2)}</Text>
      <Text>Brasileiro: {route.params?.brasileiro? 'Sim' : 'Não'}</Text>
  </View>
  )
}
