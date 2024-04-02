import {View, Text, ScrollView, FlatList} from 'react-native';
import {useState} from 'react'
import {styles} from './styles';
import Vaga from '../../components/Vaga'

export default function Vagas() {
   let registro_vagas = [
        {id: 1, titulo: 'Desenvolvedor Backend', salario: 'R$10000', descricao: 'Fusce auctor lobortis ligula. Nulla eget eros ipsum. Etiam sit amet ante vitae ipsum maximus cursus eget in massa', contato: '(13)99103-2345'},
        {id: 2, titulo: 'Analista de testes/QA', salario: 'R$10000', descricao: 'Fusce auctor lobortis ligula. Nulla eget eros ipsum. Etiam sit amet ante vitae ipsum maximus cursus eget in massa', contato: '(13)99103-2345'},
        {id: 3, titulo: 'Desenvolvedor Full Stack', salario: 'R$10000', descricao: 'Fusce auctor lobortis ligula. Nulla eget eros ipsum. Etiam sit amet ante vitae ipsum maximus cursus eget in massa', contato: '(13)99103-2345'},
        {id: 4, titulo: 'Analista de Sistemas', salario: 'R$10000', descricao: 'Fusce auctor lobortis ligula. Nulla eget eros ipsum. Etiam sit amet ante vitae ipsum maximus cursus eget in massa', contato: '(13)99103-2345'},
        {id: 5, titulo: 'Designer/UX/UI', salario: 'R$10000', descricao: 'Fusce auctor lobortis ligula. Nulla eget eros ipsum. Etiam sit amet ante vitae ipsum maximus cursus eget in massa', contato: '(13)99103-2345'},
        {id: 6, titulo: 'Analista de Suporte de TI', salario: 'R$10000', descricao: 'Fusce auctor lobortis ligula. Nulla eget eros ipsum. Etiam sit amet ante vitae ipsum maximus cursus eget in massa', contato: '(13)99103-2345'},
      ]

  const [vagas, setVagas] = useState(registro_vagas)

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      <FlatList
      data={vagas}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Vaga data={item}/>}
      />
    </View>
  );
}