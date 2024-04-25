import {StyleSheet} from 'react-native'

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
    borderColor: 'gray',
    backgroundColor: '#fff'
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

export {styles}