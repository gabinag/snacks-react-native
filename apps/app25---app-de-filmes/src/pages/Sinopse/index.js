import { View, Text, StyleSheet } from 'react-native';

export default function Descricao({ route }){
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.nome}</Text>
      <Text style={styles.description}>{movie.sinopse}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    color:'white'
  },
  description: {
    fontSize: 16,
    color:'gray'
  },
});