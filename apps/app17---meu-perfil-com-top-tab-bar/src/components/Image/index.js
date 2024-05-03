import {Image, View} from 'react-native';
import {styles} from './styles';
import fotoPerfil from '../../../assets/foto-perfil.png';

function Imagem() {
  return(
  <View>
    <Image
      source={fotoPerfil}
      style={styles.imagem}
    />
  </View>
  )
}

export default Imagem