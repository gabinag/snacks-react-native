import { Text, View, TextInput, Switch, Button } from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';

export default function CriarConta() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('')
  const [escolaridade, setEscolaridade] = useState('')
  const [limite, setLimite] = useState(0)
  const [brasileiro, setBrasileiro] = useState(false)

  const exibir = () => {
    navigation.navigate('Dados', {nome, idade, sexo, escolaridade, limite, brasileiro})
  }

  return (
  <View style={styles.wrapContainer}>
    <Text style={styles.title}>Abertura de Contas</Text>
    <Text>Nome:
      <TextInput style={[styles.input, styles.inputNome]} placeholder="Digite seu nome completo" onChangeText={setNome}/>
    </Text>
    <Text>Idade:
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Digite sua idade" onChangeText={setIdade}/>
    </Text>
    <Text>Sexo:
      <Picker style={styles.select}
        selectedValue={sexo}
        onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
      >
        <Picker.Item key={0} value="" label="Selecione" />
        <Picker.Item key={1} value="Feminino" label="Feminino" />
        <Picker.Item key={2} value="Masculino" label="Masculino" />
      </Picker>
    </Text>
    <Text>Escolaridade:
      <Picker style={styles.select}
        selectedValue={escolaridade}
        onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}
      >
        <Picker.Item key={0} value="" label="Selecione" />
        <Picker.Item key={1} value="Ensino Fundamental" label="Ensino Fundamental" />
        <Picker.Item key={2} value="Ensino Médio" label="Ensino Médio" />
        <Picker.Item key={3} value="Ensino Superior" label="Ensino Superior" />
      </Picker>
    </Text>
    <Text>Limite:</Text>
    <Slider
      minimumValue={100}
      maximumValue={300000}
      onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
      value={limite}
    />
    <Text style={{textAlign: 'end', fontSize: 16}}>
        R$ {limite.toFixed(2)}
    </Text>
    <View style={styles.wrapSwitch}>
      <Text>Brasileiro:</Text>
        <Switch
          value={brasileiro}
          onValueChange={ (valorSwitch) => setBrasileiro(valorSwitch) }
          thumbColor= 'gray'
        />
    </View>
    <Button title="Confirmar" onPress={exibir} color='#009688'/>
  </View>
  )
}

