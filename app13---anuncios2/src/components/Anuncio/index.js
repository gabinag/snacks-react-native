import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Anuncio(props) {
  const navigation = useNavigation();


  function irDetalhes(){
      navigation.navigate('Detalhes', { img: props.imageUri, descricao: props.descricao });
  }

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image
          source={{uri: props.imageUri}}
          style={styles.img}
        />
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.categoria}>{props.categoria}</Text>
        <Text style={{display: 'none'}}>{props.descricao}</Text>
        <TouchableOpacity onPress={irDetalhes}>
          <Text style={{color: 'orange'}}>Ver detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}