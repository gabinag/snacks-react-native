import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export default function Anuncio(props) {

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image
          source={{uri: props.imageUri}}
          style={styles.img}
        />
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.categoria}>{props.categoria}</Text>
        <Text>{props.descricao}</Text>
      </View>
    </View>
  );
}