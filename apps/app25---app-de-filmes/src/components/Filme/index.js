import { View, Text, Image, StyleSheet} from 'react-native';

export default function Filme({ data, onPress }){
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.title}>{data.nome}</Text>
        <Text style={styles.link} onPress={onPress}>Veja mais</Text>
      </View>
      <Image source={{ uri: data.foto }} style={styles.image} resizeMode="contain"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    paddingBottom: 10
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  link: {
    marginRight: 15,
    color: 'gray',
    fontWeight: '600'
  },
  image: {
    width: 300,
    height: 150,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },
});


