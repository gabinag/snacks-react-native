import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: 140,
    maxHeight: 280,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 3
  },
  content: {
    padding: 10 
  },
  img: {
    alignSelf: 'center',
    width: '100%', 
    height: 150
  },
  titulo: {
    fontSize: 18,
    fontWeight: '500'
  },
  categoria: {
    color: '#FF6347',
    fontWeight: '500',
    marginBottom: 5
  }
});

export {styles}