import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 18,
    margin: 'auto',
    fontWeight: '600',
    marginVertical: 15
  },
  addButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 10,
    gap: 5
  },
  textBtn: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '500'
  }
});

export {styles}