import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export default function Detalhes( {route} ) {

  const { img, descricao } = route.params; 

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: img }} 
        style={styles.img} 
      />
      <Text>{descricao}</Text>
    </View>
  );
}