import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 10,
    elevation: 3,
    padding: 15,
    marginBottom: 10
  },
  titulo:{
    fontSize: 18,
    fontWeight: '500',
  },
  descricao:{
    fontSize: 16,
    marginVertical: 10
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15
  }
});

export {styles}