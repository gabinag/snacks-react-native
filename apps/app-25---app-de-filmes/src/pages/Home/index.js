import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Filme from '../../components/Filme'
import api from '../../services/api'

export default function Home({navigation}){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get()
      .then(response => {
        setMovies(response.data); 
      })
  }, []);

  const renderItem = ({ item }) => (
    <Filme data={item} onPress={() => navigation.navigate('Sinopse', { movie: item })} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de Filmes</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#000'
  },
  title: {
    fontSize: 18,
    margin: 'auto',
    fontWeight: '600',
    marginVertical: 20,
    color: '#750E03'
  }
});
