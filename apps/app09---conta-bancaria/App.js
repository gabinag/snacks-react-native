import { Text, View, StyleSheet, TextInput, Switch, Button } from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('')
  const [escolaridade, setEscolaridade] = useState('')
  const [limite, setLimite] = useState(0)
  const [brasileiro, setBrasileiro] = useState(false)
  const [exibeInfos, setExibeInfos] = useState(null)

  const exibir = () => {
    setExibeInfos(
      <View style={{marginTop: 15}}>
        <Text style={{fontWeight: 500, marginBottom: 5}}>Dados Informados</Text>
        <Text>Nome: {nome}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Sexo: {sexo}</Text>
        <Text>Escolaridade: {escolaridade}</Text>
        <Text>Limite: R${limite.toFixed(2)}</Text>
        <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
      </View>
    )
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
    {exibeInfos}
  </View>
  )
}

const styles = StyleSheet.create({
  wrapContainer: {
    padding: 15
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 15
  },
  input: {
    width: 112,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    marginBottom: 10,
    marginLeft: 5,
    borderColor: 'gray'
  },
  inputNome: {
    width: '80%'
  },
  select: {
    borderRadius: 30,
    padding: 2,
    marginLeft: 5,
    marginBottom: 10
  },
  wrapSwitch: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 15
  }
});
