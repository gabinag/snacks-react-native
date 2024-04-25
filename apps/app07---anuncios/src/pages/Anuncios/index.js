import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import Anuncio from '../../components/Anuncio'

export default function Anuncios() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Anuncio 
        imageUri='https://lh3.googleusercontent.com/p/AF1QipNIiDJLf1oqkU-tnE7LmK1ZyYl6WCt6KvIf0NAN=s680-w680-h510'
        titulo='Baraçaí' 
        categoria='Bar/Restaurante' 
        descricao='Bar animado com porções, drinques, açaí na tigela e poke havaiano, em espaço de decoração rústica com música.'
        />
        <Anuncio 
        imageUri='https://lh3.googleusercontent.com/p/AF1QipOjFOpvNAJkib9iNwHsYHUHIsI3701awci4Z2Ku=s680-w680-h510'
        titulo='Guadalupe' 
        categoria='Restaurante mexicano' 
        descricao='Espaço temático mexicano, com paredes coloridas, velas e sombreros, tem nachos, fajitas, mojitos e margaritas.'
        />
        <Anuncio 
        imageUri='https://lh3.googleusercontent.com/p/AF1QipMjF4n6t8TaQrJOfqLzphD-4fc1yLKPaAzqpL6E=s680-w680-h510'
        titulo='China In Box Santos' 
        categoria='Restaurante chinês' 
        descricao='Rede de fast-food de comida chinesa para delivery em caixas personalizadas.'
        />
        <Anuncio 
        imageUri='https://lh3.googleusercontent.com/p/AF1QipNhbaninRroUwyueRRSJSBQhVJKJCPrdBiD7gvQ=s680-w680-h510'
        titulo='Naus' 
        categoria='Restaurante' 
        descricao='Frutos do mar, carnes e pratos italianos, mais sanduíches e drinques, em espaço temático com atmosfera alegre.'
        />
        <Anuncio 
        imageUri='https://lh3.googleusercontent.com/p/AF1QipMlMxTxUTNZx6Pgz1NZBdf-4qg8kX72etkBNqzZ=s680-w680-h510'
        titulo='PIPA - Pizza e Pasta' 
        categoria='Restaurante italiano' 
        descricao='Serve pratos para happy hour · Serve ótimos coquetéis · Serve pratos vegetarianos'
        />

      </ScrollView>
    </View>
  );
}