import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  label: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: '500',
    color: 'gray'
  },
  input:{
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 30
  },
  desc: {
    height: 150
  },
  btn: {
    backgroundColor: 'gray',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    width: 100,
    marginTop: 20,
    paddingVertical: 5
  },
  txtBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  } 
});

export {styles}