import {View} from 'react-native';
import Dados from './src/Dados'
import Experiencia from './src/Experiencia'
import Projetos from './src/Projetos'
import Imagem from './src/Image'

function App(){

  return(
     <View style={{padding: 30}}>
        <Imagem />
        <Dados />
        <Experiencia />
        <Projetos />
        
      </View>
  )
}

export default App;
