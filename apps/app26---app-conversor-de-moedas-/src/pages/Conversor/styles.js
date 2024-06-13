import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: '#CCEBD7'
  },
  title: {
    margin: 'auto',
    fontWeight: '500',
    marginVertical: 20,
    color: '#1A7A4F',
    fontSize: 16
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  label: {
    fontWeight: '500',
    color: '#1A7A4F'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginLeft: 5,
    width: 150,
    height: 30,
    fontSize: 14,
    border: 'none'
  },
  btn: {
    backgroundColor: '#1A7A4F',
    alignItems: 'center',
    borderRadius: 30,
    padding: 5
  },
  btnText: {
    color: '#fff',
    fontWeight: '500'
  },
  text: {
    marginTop: 15,
    margin: 'auto',
    fontWeight: '500',
    color: '#1A7A4F',
    fontSize: 16
  }
});

export {styles}