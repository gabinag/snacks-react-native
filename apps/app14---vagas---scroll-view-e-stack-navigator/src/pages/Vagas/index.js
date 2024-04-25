import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import Vaga from '../../components/Vaga'

export default function Vagas() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Vaga
        titulo='Desenvolvedor Backend' 
        salario='R$10000' 
        descricao='Fusce auctor lobortis ligula. Nulla eget eros ipsum. Etiam sit amet ante vitae ipsum maximus cursus eget in massa'
        contato='(13)99103-2345'
        />
        <Vaga
        titulo='Analista de testes/QA' 
        salario='R$7000' 
        descricao='Etiam suscipit augue a ornare pellentesque. Pellentesque placerat aliquet urna ac dictum.'
        contato='(13)99103-2345'
        />
        <Vaga
        titulo='Desenvolvedor Full Stack' 
        salario='R$15000' 
        descricao='Phasellus convallis augue facilisis metus venenatis convallis. Aliquam tincidunt tincidunt erat, vel dapibus erat. '
        contato='(13)99103-2345'
        />
        <Vaga
        titulo='Analista de Sistemas' 
        salario='R$10000' 
        descricao='Aenean volutpat elit augue, sed commodo dolor tempus vel. Aliquam commodo massa sem, sed ultrices massa.'
        contato='(13)99103-2345'
        />
        <Vaga
        titulo='Designer/UX/UI' 
        salario='R$7000' 
        descricao='Cras vitae sollicitudin dolor. Pellentesque eget elit at magna tincidunt ullamcorper.'
        contato='(13)99103-2345'
        />
        <Vaga
        titulo='Analista de Suporte de TI' 
        salario='R$6500' 
        descricao='Donec fermentum sapien id massa porta, bibendum dignissim nibh sagittis. Maecenas blandit accumsan mollis.'
        contato='(13)99103-2345'
        />
        <Vaga
        titulo='Desenvolvedor Backend Pleno' 
        salario='R$4500' 
        descricao='Donec fermentum sapien id massa porta, bibendum dignissim nibh sagittis. Maecenas blandit accumsan mollis.'
        contato='(13)99103-2345'
        />

      </ScrollView>
    </View>
  );
}